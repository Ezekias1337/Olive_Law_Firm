// Library Imports
import { FC, useState } from "react";
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

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="client-testimonial-container">
      {isLoading && <Loader variant="neutral" />}

      <iframe
        width="590"
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
