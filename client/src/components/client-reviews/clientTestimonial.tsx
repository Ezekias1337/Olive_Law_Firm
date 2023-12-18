// Library Imports
import { FC } from "react";

interface ClientTestimonialProps {
  title: string;
  src: string;
}

export const ClientTestimonial: FC<ClientTestimonialProps> = ({
  title,
  src,
}) => {
  return (
    <div className="client-testimonial-container">
      <iframe
        width="590"
        height="300"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
