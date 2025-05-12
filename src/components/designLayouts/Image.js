import React from "react";

const Image = ({ imgSrc, className }) => {
  return <img style={{ maxWidth: "100%", height: "auto" }} className={className} src={imgSrc} alt={imgSrc} />;
};

export default Image;
