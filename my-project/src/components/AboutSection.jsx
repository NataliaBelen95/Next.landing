import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const textProps = useSpring({
    from: { opacity: 0, x: -50 },
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : -50 },
    delay: 500,
  });

  const imageProps = useSpring({
    from: { opacity: 0, x: 50 },
    to: { opacity: inView ? 1 : 0, x: inView ? 0 : 50 },
    delay: 1000,
  });

  return (
    <section className="bg-white" id="about">
      <div
        ref={ref}
        className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
      >
        <animated.div style={textProps} className="text-black sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Sobre Nosotros
          </h2>
          <p className="mb-4">
            Fleitas S.R.L es una empresa de construcción con más de 15 años de
            experiencia en el diseño, construcción y mantenimiento de hogares,
            edificios y obras civiles para clientes privados y públicos en todo
            el país.
          </p>
          <p>
            Nos especializamos en soluciones personalizadas y eficientes para
            cada proyecto, trabajando en estrecha colaboración con nuestros
            clientes para entender sus necesidades y brindarles el mejor
            servicio.
          </p>
        </animated.div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <animated.img
            style={imageProps}
            className="w-full rounded-lg shadow-xl"
            src="/obra1/exterior1.jpg"
            alt="office content 1"
          />
          <img
            style={imageProps}
            className="mt-4 w-full lg:mt-10 rounded-lg shadow-xl"
            src="/obra1/exterior2.jpg"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
