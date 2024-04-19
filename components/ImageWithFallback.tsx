import Image, { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";

export const ImageWithFallback = (props: ImageProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [props.src]);

  return (
    <Image
      {...props}
      onError={() => setError(true)}
      alt={props.alt}
      src={error ? "https://coincap.io/static/logo_mark.png" : props.src}
    />
  );
};
