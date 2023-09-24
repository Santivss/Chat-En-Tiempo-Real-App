import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import me_icon from "../assets/me_icon.png";
import { motion } from "framer-motion";
import { fadeInFromTop } from "../utils/motion";
import Typed from "react-typed";

const Hero = () => {
  const fadeInVariant = fadeInFromTop(0.1, 1.25);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeInVariant}
      className="relative w-full mx-auto"
    >
      <div
        className={`inset-0 top-[120px] max-w-7x1 mx-auto flex flex-col sm:flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FF006F]" />
          <div className="w-1 sm:h-80 h-40 bg-[#FF006F]" />
        </div>
        <div className="flex items-center">
          <div className="text-center sm:text-left w-1/2">
            {/* Ajuste de alineación del texto */}
            <h1
              className={`${styles.heroHeadText} text-white whitespace-nowrap`}
            >
              Hola, soy Santiago
              <br />
              <span className="text-[#FF006F]">
                <Typed
                  strings={["Fullstack", "developer"]}
                  typeSpeed={50}
                  backSpeed={150}
                  loop
                ></Typed>
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              En esta web presento mis proyectos, experiencia, habilidades y un
              poco de información sobre mí.
            </p>
          </div>
          <div className="w-96 h-96 ml-5">
            {" "}
            {/* Ajusta el tamaño en píxeles */}
            <img src={me_icon} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper(Hero, "");
