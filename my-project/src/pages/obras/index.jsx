
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import React from "react";


const Obras = [
  {
    name: "Palacio Cabreal Hunter",

    descripcion: "Cambio de la cubierta del techo, arreglos e impermeabilizacion medianera, pintura de las fachadas y patios, reparacion de aberturas, restauracion de pisos",

    img: "/obra1/embajada.jpg",
  },
  {

    name: "Tren san miguel (trenes argentinos)",
    descripcion: "Demolicion y retiro de materiales de estructura",
    img: "/obras/1.jpg",
  },
  {
    name: "Tren Belgrano",
    descripcion: "Limpieza, desmalezamiento y colocacion de cerco perimetral para estaciones del tren belgrano cargas, provincia de santa fe y chaco",
      img: "/obras/3.jpg"
    },
  {
    name: "Planta depuradora Tandil",
    descripcion: "Remodelacion de la planta depuradora sur",
    img: "/obras/4.jpg"

  },
  {
    name: "Casa Rosada",
    descripcion: "Refaccion de las oficinas, pasillo y antesala de la casa rosada zona presidencia, demolicion y desmonte de la ex cocina y ex comedor",
      img: "/obras/5.jpg"
  },

  {
    name: "Boleteria Longchamps",
    descripcion: "Remodelacion de boleteria longchamps",
    img: "/obras/6.jpg"
  },
  {
    name: "Deposito nave 53 remedios de escalada",

    descripcion: "Reconstruccion deposito nave 53 talleres remedios de escalada (remolicion, desmontaje retiro de material producido reemplazo de componenetes y puso, revetimnientos y revoques.)",

      img: "/obras/2.jpg"
  },
];
const ObrasList = ({ obras }) => {
  return (

    <>
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-40 mx-20 mb-6">
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
      <Footer/>
    </>
  );

};

export default Index;
