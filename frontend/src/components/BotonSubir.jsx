
import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

import styles from "./style/BotonSubir.module.css";

function BotonSubir() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      setVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", controlarScroll);

    controlarScroll();

    return () => {
      window.removeEventListener("scroll", controlarScroll);
    };
  }, []);

  const subirInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.botonSubir} ${
        visible ? styles.visible : ""
      }`}
      onClick={subirInicio}
      aria-label="Volver al inicio de la página"
      title="Volver arriba"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={23} weight="bold" />
    </button>
  );
}

export default BotonSubir;
