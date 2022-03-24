import { useEffect, useState } from "react";
import { LegalHeader, LegalHeaderProps } from "./LegalHeader";

export const StickyLegalHeader = ({
  text,
  hlStart,
  hlEnd,
  ...rest
}: LegalHeaderProps) => {
  const [scrollOffset, setScrollOffset] = useState(
    document.documentElement.scrollTop ?? 0
  );
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const minNavHeight = 82;
  const maxNavHeight = Math.max(120, windowHeight / 2);
  const clipInset = Math.min(maxNavHeight - minNavHeight, scrollOffset);

  useEffect(() => {
    const onScroll = () => {
      setScrollOffset(document.documentElement.scrollTop ?? 0);
    };
    const onResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <LegalHeader
      style={{ clipPath: `inset(0 0 ${clipInset}px 0)` }}
      text={text}
      hlStart={hlStart}
      hlEnd={hlEnd}
      {...rest}
    />
  );
};
