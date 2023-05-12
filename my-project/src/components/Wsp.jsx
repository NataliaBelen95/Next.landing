import React from "react";

function Wsp() {
  return (
    <div
      className="fixed bottom-0 right-0 flex flex-col items-end mr-2 mb-2 z-99999"
      style={{ display: "flex", alignItems: "center" }}
    >
      <img
        src="/png.constructora/flecha.png"
        class="w-6 h-6 cursor-pointer mb-2"
        style={{ cursor: "pointer", color: "rgba(10, 25, 233, 0.603)" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <a
        href="https://wa.me/5491160563796?text=Hola,%20quisiera%20hacer%20una%20consulta"
        target="_blank"
        style={{ marginLeft: "8px" }}
      >
        <img src="/png.constructora/wsp.png" className="w-12 h-12 z-1 mb-2" />
      </a>
    </div>
  );
}

export default Wsp;
