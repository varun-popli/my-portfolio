"use client"

import React, { useEffect } from "react";

const CursorFollow = () => {
  const eleRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const style = `background: radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%);`

    eleRef.current?.setAttribute("style", style);
  }

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={eleRef}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300" />
  )
};

export default CursorFollow;