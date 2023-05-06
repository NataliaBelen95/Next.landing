import magicImage from "@/assets/constructora/magic.jpg";
import Image from "next/image";
import style from "../styles/AboutSection.module.css";
export default function AboutSection() {
  return (
    <section className={style.about} id={"about"}>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className={style.text}>
            <h2 className={style.h1t}>Sobre Nosotros</h2>
            <p className={`${style.p} `}>
              Nos especializamos en la construcción, mantenimiento y presupuesto
              de obras civiles, incluyendo viviendas y edificios públicos y
              privados. También realizamos obras de infraestructura, como redes
              de agua potable, cloacas, pluviales, instalaciones de gas,
              instalaciones eléctricas y tendido de cañerías. En cuanto a obras
              viales, ofrecemos servicios de movimiento de suelo y pavimentos de
              hormigón. Asimismo, destacamos en la construcción de pisos y
              piletas industriales de alta tecnología.
            </p>
            <p className={`${style.p}`}>
              En Fleitas, nos comprometemos a trabajar en estrecha colaboración
              con nuestros clientes para entender sus necesidades y ofrecer
              soluciones personalizadas y eficientes para cada proyecto.
            </p>
            <p className={`${style.p}`}>
              Nos enfocamos en la atención al detalle y en cumplir con los
              plazos de entrega acordados, para que nuestros clientes puedan
              contar con un servicio confiable y de alta calidad.
            </p>
          </div>
        </div>

        <div className={style.Aboutoverlay}></div>
      </div>
    </section>
  );
}
