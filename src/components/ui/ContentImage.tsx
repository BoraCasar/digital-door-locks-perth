import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * Swappable content image wrapper — update `src` paths when licensed photography is ready
 * without changing section layout markup.
 */
export function ContentImage({
  src,
  alt,
  width,
  height,
  priority,
  className = "",
  sizes = "(min-width: 900px) 50vw, 100vw",
}: ContentImageProps) {
  const classes = ["content-image", className].filter(Boolean).join(" ");

  return (
    <Image
      className={classes}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
    />
  );
}
