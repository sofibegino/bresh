import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 10% auto;
  border-color: white;
`;

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <ClipLoader color={color} loading={loading} css={override} size={250}>Bresh </ClipLoader>
    </div>
  );
}

export default Loader;