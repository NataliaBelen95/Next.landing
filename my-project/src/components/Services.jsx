import Image from 'next/image'
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import image1 from '../assets/constructora/servicios/1.png'
import image2 from '../assets/constructora/servicios/2.png'
import image3 from '../assets/constructora/servicios/3.png'
import image4 from '../assets/constructora/servicios/4.png'

<<<<<<< Updated upstream
export default function Services(){
    const services = [ 
        { 
            titulo: "Obras Civiles",
            description: "viviendas, edificios publicos y privados",
            image: image1
        },{
            titulo: "Obras de Infraestructura",
            description: "cloacas, pluviales, instalaciones de gas, instalaciones electricas y tendido de cañerias",
            image: image2
        },{
            titulo: "Obras Viales",
            description: "movimiento de suelo, pavimentos de hormigon",
            image: image3
        },{
            titulo: "Pisos, Piletas industriales y Demoliciones",
            description: "superficies de concreto para soportar cargas",
            image: image4
=======
export default function Services() {
  const services = [
    {
      titulo: "Obras Civiles",
      description: "viviendas, edificios publicos y privados",
      image: image1
    },
    {
      titulo: "Servicios Industriales",
      description: "cloacas, pluviales, instalaciones de gas, instalaciones electricas y tendido de cañerias",
      image: image2
    },
    {
      titulo: "Obras Viales",
      description: "movimiento de suelo, pavimentos de hormigon",
      image: image3
    },
    {
      titulo: "Pisos, Piletas industriales y Demoliciones",
      description: "superficies de concreto para soportar cargas",
      image: image4
    }
  ];

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
>>>>>>> Stashed changes
        }
      });
    });

    document.querySelectorAll(".card").forEach(card => {
      observer.current.observe(card);
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-5 flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl font-bold mb-8">Presupuesto, construcción y mantenimiento de:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 shadow-xl rounded-2xl p-2 m-2 md:max-w-[350px] md:h-130 sm:w-150 sm:h-300 lg:w-150 lg:h-250 flex flex-col justify-center items-center sm:my-4 card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full flex justify-center">
              <Image width={130} height={130} src={service.image} alt="service" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-extrabold mb-2">{service.titulo}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
