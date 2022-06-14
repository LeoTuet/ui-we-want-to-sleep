import { HTMLAttributes, useMemo } from "react";

import { A } from "./Button";

interface Props extends Omit<HTMLAttributes<HTMLAnchorElement>, "href"> {
  download: string;
  contents: string;
  type: `${string}/${string}`;
}

export function DownloadFile({ children, contents, type, ...rest }: Props) {
  const href = useMemo(() => {
    const blob = new Blob([contents], { type });
    return URL.createObjectURL(blob);
  }, [contents, type]);

  return (
    <A href={href} {...rest}>
      {children}
    </A>
  );
}
