
import NavBar from "@/components/NavBar";

import React from "react";


const Obras = [
  {
    name: "Palacio Cabreal Hunter (embajada de Portugal)",

    decripcion: [
      "cambio de la cubierta del techo, arreglos e impermeabilizacion medianera sobre bodegas chandon s.a, pintura de las fachadas y patios internos; reparacion de aberturas, restauracion de los pisos de los salones rojo, blanco y amarillo, restauracion de la mesa del comedor principal",
    ],

    año: 2021,
    img: "/obra1/embajada.jpg",
  },
  {

    name: "Tren san miguel (trenes argentinos)",
    descripcion: "Demolicion y retiro de materiales de estructura",
    img: "",
  },
  {
    name: "tren belgrano",
    descripcion:
      "Limpieza, desmalezamiento y colocacion de cerco perimetral para estaciones del tren belgrano cargas, provincia de santa fe y chaco",
  },
  {
    descripcion: "Remodelacion de la planta depuradora sur en tandil",

  },
  {
    name: "Casa Rosada",
    descripcion:

      "Refaccion de las oficinas, pasillo y antesala de la casa rosada zona presidencia, demolicion y desmonte de la ex cocina y ex comedor",
  },

  {
    name: "boleteria longchamps",
    descripcion: "Longchamps remodelacion de boleteria longchamps",
  },
  {
    name: "Deposito nave 53 talleres remedios de escalada",

    descripcion:
      "Reconstruccion deposito nave 53 talleres remedios de escalada (remolicion, desmontaje retiro de material producido reemplazo de componenetes y puso, revetimnientos y revoques.)",
  },
];
const ObrasList = ({ obras }) => {
  return (

    <>
      <NavBar />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-40 p-4">
        {obras.map((obra) => (
          <article

            key={obra.name}

            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={obra.img}
              alt={obra.trabajo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{obra.name}</h2>
              <p className="text-gray-700 text-base">{obra.descripcion}</p>
              <p className="text-gray-600 text-sm mt-2">{obra.año}</p>
            </div>
          </article>
        ))}
      </div>
    </>

  );
};

const Index = () => {

  return (
    <>
      <NavBar />
      <ObrasList obras={Obras} />
    </>
  );

};

export default Index;
