import React from "react";

const Error = props => {
  if (props.error) {
    return <div className="alert alert-danger mt-3">{props.message}</div>;
  }

  return <div />;
};

export default Error;
