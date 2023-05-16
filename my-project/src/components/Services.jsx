import Image from 'next/image'
import { useSpring, animated } from 'react-spring'
import { useEffect, useRef, useState } from "react";
import { useIntersection } from 'react-use'; // Importamos useIntersection
import image1 from '../assets/constructora/servicios/1.png'
import image2 from '../assets/constructora/servicios/2.png'
import image3 from '../assets/constructora/servicios/3.png'
import image4 from '../assets/constructora/servicios/4.png'

export default function Services() {
  const [showEffect, setShowEffect] = useState(false); // Estado para saber si se ha mostrado el efecto

  const ref = useRef(null); // Creamos una referencia para la sección

  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Definimos un umbral personalizado
  });

  useEffect(() => {
    if (intersection && intersection.intersectionRatio >= 0.3 && !showEffect) {
      setShowEffect(true); // Cuando se ve la sección por primera vez, muestra el efecto
    }
  }, [intersection, showEffect]);

  const props = useSpring({
    opacity: showEffect ? 1 : 0, // Usamos el estado para decidir si se muestra o no la animación
    y: showEffect ? 0 : 80,
    from: { opacity: 1, y: 80 },
    reset: false,
  });

  const services = [
    {
      title: "Obras Civiles",
      description: "viviendas, edificios publicos y privados",
      image: image1
    },
    {
      title: "Servicios Industriales",
      description: "cloacas, pluviales, instalaciones de gas, instalaciones electricas y tendido de cañerias",
      image: image2
    },
    {
      title: "Obras Viales y Demoliciones",
      description: "movimiento de suelo, pavimentos de hormigon",
      image: image3
    },
    {
      title: "Pisos y Piletas industriales",
      description: "superficies de concreto para soportar cargas",
      image: image4
    }
  ];

  return (
    <section ref={ref} className="max-w-7xl mx-auto py-5 flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl font-bold mb-8">Presupuesto, construcción y mantenimiento de:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <animated.div
            key={index}
            className={`bg-gray-100 shadow-xl rounded-2xl p-2 m-2 md:max-w-[350px] md:h-130 sm:w-150 sm:h-300 lg:w-150 lg:h-250 flex flex-col justify-center items-center sm:my-4 card`}
            style={showEffect ? props : { opacity: 0 }} // Utilizamos showEffect para aplicar o no la animación
          >
            <Image width={130} height={130} src={service.image} alt="service" />
            <h3 className="text-lg mt-2 font-semibold">{service.title}</h3>
            <p className="text-center text-gray-600">{service.description}</p>
          </animated.div>
        ))}
      </div>
    </section>
  );
}