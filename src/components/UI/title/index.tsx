import React from "react";
import "./styles.css";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return <h2 className="main-title">{title}</h2>;
};
export default Title;
