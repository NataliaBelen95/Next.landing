import Image from "next/image";
import { useSpring, animated } from "react-spring";
import { useEffect, useRef } from "react";
import image1 from "../assets/constructora/servicios/1.png";
import image2 from "../assets/constructora/servicios/2.png";
import image3 from "../assets/constructora/servicios/3.png";
import image4 from "../assets/constructora/servicios/4.png";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const services = [
    {
      title: "Obras Civiles",
      description: "viviendas, edificios publicos y privados",
      image: image1,
    },
    {
      title: "Servicios Industriales",
      description:
        "cloacas, pluviales, instalaciones de gas, instalaciones electricas y tendido de cañerias",
      image: image2,
    },
    {
      title: "Obras Viales y Demoliciones",
      description: "movimiento de suelo, pavimentos de hormigon",
      image: image3,
    },
    {
      title: "Pisos y Piletas industriales",
      description: "superficies de concreto para soportar cargas",
      image: image4,
    },
  ];

  const [ref, inView] = useInView({ threshold: 0.1 });
  const props = useSpring({ opacity: inView ? 1 : 0, y: inView ? 0 : 50 });

  return (
    <section className="max-w-7xl mx-auto py-5 flex flex-col justify-center items-center ">
      <h1 className="text-center text-3xl font-bold mb-8 ">
        Presupuesto, construcción y mantenimiento de:
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gray-100 shadow-xl rounded-2xl p-2 m-2 md:max-w-[350px] md:h-130 sm:w-150 sm:h-300 lg:w-150 lg:h-250 flex flex-col justify-center items-center sm:my-4 card`}
            style={{ opacity: 1, transform: "translateY(0)" }}
          >
            <Image width={130} height={130} src={service.image} alt="service" />
            <h3 className="text-lg mt-2 font-semibold">{service.title}</h3>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
