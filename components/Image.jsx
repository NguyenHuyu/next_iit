import React from "react";

const Image = (props) => {
  return (
    <img
      src={`assets/${props.image}`}
      className={props.className}
      alt="altttt"
    />
  );
};

export default Image;
