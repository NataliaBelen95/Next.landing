import magicImage from "@/assets/constructora/magic.jpg";
import Image from "next/image";
import style from "../styles/AboutSection.module.css";
export default function AboutSection() {
  return (
    <section className={`${style.about} `}>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className={style.text}>
            <h2 className={style.h1t}>Sobre Nosotros</h2>
            <p className={`${style.p}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod magna mi, vel iaculis orci vestibulum et. Integer
              scelerisque augue at nibh dapibus consequat. Duis auctor mi velit,
              ac elementum ipsum maximus sed. Nullam tristique justo ut elit
              dignissim, a congue nulla auctor.
            </p>
            <p className={`${style.p}`}>
              Fusce venenatis felis nec risus dictum, eget dignissim ex
              eleifend. Donec congue, turpis ut lacinia feugiat, urna ipsum
            </p>
            <p className={`${style.p} `}>
              Nullam facilisis massa sit amet feugiat posuere. Sed et dui dui.
              Suspendisse potenti. Nunc tristique aliquet metus. Morbi quis
            </p>
          </div>
        </div>

        <div className={style.Aboutoverlay}></div>
      </div>
    </section>
  );
}
