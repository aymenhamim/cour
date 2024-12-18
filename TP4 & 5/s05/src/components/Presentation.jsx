import React from "react";
export default function Presentation({ nom, prenom }) {
  return (
    <div>
      <h2>
        Salut -{nom} {prenom}{" "}
      </h2>
    </div>
  );
}
