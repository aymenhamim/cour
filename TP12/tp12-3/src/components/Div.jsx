import React, { useEffect, useRef, useState } from "react";
function Div() {
  const Field = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    Field.current.addEventListener("mousemove", handleMouseMove);
    Field.current.addEventListener("onmouseleave", () =>
      console.log("klfgshgf")
    );
    return () => {
      Field.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(event) {
    const rect = Field.current.getBoundingClientRect();
    setX(Math.round(event.clientX - rect.left));
    setY(Math.round(event.clientY - rect.top));
  }

  return (
    <div className="container" ref={Field}>
      <h2 className="title">Récupération des coordonnées de la souris</h2>
      <p>
        coordonnes x:{x} - coordonnes y: {y}
      </p>
    </div>
  );
}

export default Div;
