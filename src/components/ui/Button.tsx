import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "large";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: ButtonProps) {
  const classes = [
    "btn",
    variant === "primary" ? "btn--primary" : "btn--secondary",
    size === "large" ? "btn--large" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
