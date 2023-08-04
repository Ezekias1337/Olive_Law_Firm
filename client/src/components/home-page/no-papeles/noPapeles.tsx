// Library Imports
import { FC } from "react";
// CSS
import "./no-papeles.scss";

interface NoPapelesProps {
  language: string;
}

export const NoPapeles: FC<NoPapelesProps> = ({ language }) => {
  if (language === "Spanish") {
    return (
      <section className="no-papeles padding-left-and-right z-index-1">
        <h1>¿No Papeles? ¡No Problema!</h1>
        <span className="no-papeles-quote">
          Su estado migratorio, o el hecho de ser indocumentado NO AFECTA sus
          derechos como trabajador lesionado en el sitio de trabajo. Usted puede
          tener derecho a recibir compensación en UN MONTO ECONOMICO.
        </span>
      </section>
    );
  } else {
    return <></>;
  }
};
