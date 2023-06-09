import React from "react";
import "./Header.css";

export default function Header(props:any) {
  const { size = "small", children, backgroundColor } = props;
  return (
    <div className={`header ${size}`} style={{ color: backgroundColor }}>
      {children}
    </div>
  );
}
