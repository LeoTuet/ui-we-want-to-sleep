import { PropsWithChildren, ReactNode } from "react";

export interface ExternalLinkArgs extends PropsWithChildren<any> {
  href: string;
  text?: ReactNode;
}

export const ExternalLink = ({
  href,
  text = href,
  ...rest
}: ExternalLinkArgs) => (
  <a href={href} target="_blank" rel="noreferrer" {...rest}>
    {text}
  </a>
);
