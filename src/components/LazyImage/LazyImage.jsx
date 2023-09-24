import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

export function LazyImage({ src, placeholderImg, errorImg, ...props }) {
  const [imgSrc, setSrc] = useState(placeholderImg || src);

  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);

  const onError = useCallback(() => {
    setSrc(errorImg || placeholderImg);
  }, [errorImg, placeholderImg]);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [src, onLoad, onError]);

  return <img {...props} alt={imgSrc} src={imgSrc} />;
}

LazyImage.propTypes = {
  src: PropTypes.string,
  placeholderImg: PropTypes.string,
  errorImg: PropTypes.string,
};

LazyImage.defaultProps = {
  src: "",
  placeholderImg: "",
  errorImg: "",
};
