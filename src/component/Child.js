import React, { Fragment } from "react";
const ChildComponent = ({ text, count }) => {
  console.log(text, count);
  return (
    <Fragment>
      {text}
      {count}
    </Fragment>
  );
};

export default React.memo(ChildComponent);
