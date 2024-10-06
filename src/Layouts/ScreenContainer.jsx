import React from "react";


export default function ScreenContainer({ classToAdd , children }) {
  return (
    <div
      className = {`relative w-full h-screen flex justify-center ${classToAdd}` }
    >
      {children}
    </div>
  );
}
