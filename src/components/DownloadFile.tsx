import { HTMLAttributes, useMemo } from "react";

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
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
