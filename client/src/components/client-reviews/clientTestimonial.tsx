// Library Imports
import { FC, useState } from "react";
// Functions, Helpers, Utils, and Hooks
import useWindowWidth from "../../hooks/useWindowWidth";
// Components
import { Loader } from "../general-page-layout/loader/Loader";

interface ClientTestimonialProps {
  title: string;
  src: string;
}

export const ClientTestimonial: FC<ClientTestimonialProps> = ({
  title,
  src,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const windowWidth = useWindowWidth();

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="client-testimonial-container">
      {isLoading && <Loader variant="neutral" />}

      <iframe
        width={windowWidth < 576 ? windowWidth - 60 : 400}
        height="300"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={handleVideoLoad}
      ></iframe>
    </div>
  );
};
