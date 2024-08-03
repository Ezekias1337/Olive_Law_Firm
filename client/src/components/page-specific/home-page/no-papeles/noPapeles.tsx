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
        <h2 className="page-title">¿No Tiene Papeles? ¡No Hay Problema!</h2>
        <span className="no-papeles-quote">
          Su estado migratorio, o el hecho de ser indocumentado NO AFECTA sus
          derechos como trabajador lesionado en el sitio de trabajo. Usted puede
          tener derecho a recibir algún tipo de compensación.
        </span>
      </section>
    );
  } else {
    return <></>;
  }
};
