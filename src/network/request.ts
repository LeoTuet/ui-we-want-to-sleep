import { Jwt } from "../models";
import { actions as toastActions } from "../stores/toasts";

export class FetchError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly cause?: Error
  ) {
    super(message);
  }

  public showToast(title?: string, timeout_ms?: number) {
    return toastActions.addToast({
      children: this.message,
      kind: "error",
      title: title ?? "Error",
      timeout_ms,
    });
  }
}

interface RequestOptions extends Omit<RequestInit, "body" | "headers"> {
  jwt?: Jwt;
  headers?: Readonly<Record<string, string>>;
  body?: unknown;
}

type OptionsWithoutMethod = Omit<RequestOptions, "method">;
type ApiUrl = `/api/${string}`;

/**
 * Do an API request using JSON for sending and receiving data. It sets the `Content-Type` and
 * `Accept` headers to `"application/json"` The `Authorization` header is set, if the `options`
 * object contains a JWT.
 *
 * This function assumes that the backend returns data wrapped in a `{ "data": ... }` object and
 * returns errors as a `{ "error": { "message": ... } }` object. Errors are converted to a
 * {@link FetchError}.
 *
 * ### Errors
 *
 * In addition to server errors, the following errors may be thrown:
 *
 * - `"Network error"`, if `fetch` throws; this usually means that the server could not be reached
 * - `"Server responded with unsupported content type"`, if the response body is not empty and the
 *   `Content-Type` header is not JSON
 *
 * @param url The requested url, starting with `/api/`
 * @param options The options passed to `fetch`
 * @returns a promise that resolves to the JSON data within the response
 * @throws a {@link FetchError}
 */
export async function request<T>(
  url: ApiUrl,
  options: RequestOptions = {}
): Promise<T> {
  const { jwt, headers = {}, body, ...remaining } = options;

  const newHeaders: Record<string, string> = {
    ...headers,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  if (jwt != null) {
    newHeaders["Authorization"] = jwt.encoded;
  }

  let response: Response;

  try {
    response = await fetch(url, {
      ...remaining,
      body: JSON.stringify(body),
      headers: newHeaders,
    });
  } catch (e) {
    throw new FetchError("Network error", 0, e as Error);
  }

  const text = await response.text();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let json: any;
  if (text !== "") {
    const contentType = response.headers.get("Content-Type")?.split(";")[0];

    if (contentType === "application/json") {
      try {
        json = JSON.parse(text);
      } catch (e) {
        throw new FetchError("Invalid response", 0, e as Error);
      }
    } else {
      throw new FetchError("Server responded with unsupported content type", 0);
    }
  }

  if (!response.ok) {
    const error = json.error.message;
    const message =
      typeof error !== "string"
        ? error.map((e: { message: string }) => e.message).join(";\n")
        : error;

    throw new FetchError(message, response.status);
  }

  return json?.data;
}

export function get<T>(
  url: ApiUrl,
  options: OptionsWithoutMethod = {}
): Promise<T> {
  return request(url, { ...options, method: "GET" });
}

export function post<T>(
  url: ApiUrl,
  options: OptionsWithoutMethod = {}
): Promise<T> {
  return request(url, { ...options, method: "POST" });
}

export function put<T>(
  url: ApiUrl,
  options: OptionsWithoutMethod = {}
): Promise<T> {
  return request(url, { ...options, method: "PUT" });
}

// delete is a reserved word :(
export function del<T>(
  url: `/api/${string}`,
  options: OptionsWithoutMethod = {}
): Promise<T> {
  return request(url, { ...options, method: "DELETE" });
}
