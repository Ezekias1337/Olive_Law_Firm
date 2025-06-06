import JuanImage from "../../assets/images/staff/juan-sanchez.png";
import WhitneyImage from "../../assets/images/staff/whitney-brooks.png";
//import ValerieImage from "../../assets/images/staff/valerie-kilgore.png";

export type AttorneyInfo = {
  name: string;
  image: string;
  quote: {
    english: string[];
    spanish: string[];
  };
  biography: {
    english: string[];
    spanish: string[];
  };
  education: {
    english: string[];
    spanish: string[];
  };
  languages: {
    english: string[];
    spanish: string[];
  };
  barAssociation: {
    english: string[];
    spanish: string[];
  };
  honorsAndAwards: {
    english: string[];
    spanish: string[];
  };
};

interface AttorneyInfoStrings {
  biography: {
    english: string;
    spanish: string;
  };
  education: {
    english: string;
    spanish: string;
  };
  languages: {
    english: string;
    spanish: string;
  };
  barAssociation: {
    english: string;
    spanish: string;
  };
  honorsAndAwards: {
    english: string;
    spanish: string;
  };

  juanSanchez: AttorneyInfo;
  whitneyBrooks: AttorneyInfo;
  //valerieKilgore: AttorneyInfo;

  disclaimer: {
    english: string;
    spanish: string;
  };
}

export const attorneyInfoStrings: AttorneyInfoStrings = {
  biography: {
    english: "Biography",
    spanish: "Biografía",
  },
  education: {
    english: "Education",
    spanish: "Educación",
  },
  languages: {
    english: "Languages",
    spanish: "Idiomas",
  },
  barAssociation: {
    english: "Bar Association Membership",
    spanish: "Membresía del Colegio de Abogados",
  },
  honorsAndAwards: {
    english: "Honors & Awards*",
    spanish: "Honores y Reconocimientos*",
  },

  juanSanchez: {
    name: "Juan Sanchez",
    image: JuanImage,
    quote: {
      english: [
        "“Where you see wrong or inequality or injustice, speak out, because this is your country. This is your democracy. Make it. Protect it. Pass it on.”",
        "- Thurgood Marshall",
      ],
      spanish: [
        "“Donde vean mal, desigualdad o injusticia, hablen, porque este es su país. Ésta es su democracia. Hazlo. Protegerlo. Pásalo.”",
        "- Thurgood Marshall",
      ],
    },
    biography: {
      english: [
        "Attorney Juan Sanchez has been practicing law since 1995 and is licensed in both Florida and North Carolina.  After law school, Mr. Sanchez served as an Assistant State Attorney for Florida in Fort Myers for 2 years before moving back to Miami.   In Miami, Mr. Sanchez served as in-house counsel for a national insurance company as an insurance defense attorney.   He held that same position when he transferred to a private firm in Fort Lauderdale.   While there, attending a mediation in 2002, Mr. Sanchez came to realize that he was on the wrong side of the table.  Shortly thereafter he opened his own law firm to serve the injured, and he has never looked back since.",
        "Mr. Sanchez has successfully handled thousands of workers’ compensation claims and is a Board-Certified Specialist in that field.  He also has extensive experience in personal injury matters.",
      ],
      spanish: [
        "El abogado Juan Sánchez ha ejercido la abogacía desde 1995 y tiene licencia tanto en Florida como en Carolina del Norte. Después de estudiar derecho, el Sr. Sánchez trabajó como fiscal estatal adjunto de Florida en Fort Myers durante 2 años antes de regresar a Miami. En Miami, el Sr. Sánchez trabajó como abogado interno de una compañía nacional de seguros como abogado defensor de seguros. Ocupó ese mismo puesto cuando se transfirió a una empresa privada en Fort Lauderdale. Mientras estaba allí, asistiendo a una mediación en 2002, Sánchez se dio cuenta de que estaba en el lado equivocado de la mesa. Poco después abrió su propio bufete de abogados para atender a los heridos y desde entonces no ha vuelto a mirar atrás.",
        "El Sr. Sánchez ha manejado con éxito miles de reclamos de compensación laboral y es un especialista certificado en ese campo. También tiene una amplia experiencia en asuntos de lesiones personales.",
      ],
    },
    education: {
      english: [
        "Juris Doctorate, Florida State University, College of Law, 1994",
        "B.A. in English, Florida International University, 1991",
      ],
      spanish: [
        "Doctorado en Jurisprudencia, Universidad Estatal de Florida, Facultad de Derecho, 1994",
        "LICENCIADO EN LETRAS. en inglés, Universidad Internacional de Florida, 1991",
      ],
    },
    languages: {
      english: ["English", "Spanish"],
      spanish: ["Español", "Inglés"],
    },
    barAssociation: {
      english: [
        "North Carolina State Bar",
        "Florida State Bar",
        "Board Certified Specialist",
      ],
      spanish: [
        "Colegio de Abogados del Estado de Carolina del Norte",
        "Colegio de Abogados del Estado de Florida",
        "Especialista certificado por la junta",
      ],
    },
    honorsAndAwards: {
      english: [
        "Who’s Who Latino American 2013",
        "Distinguished Special Achievement, State Attorney Office, 1995",
        "Honorable Discharge, 1997",
      ],
      spanish: [
        "Quien es quien latinoamericano 2013",
        "Logro Especial Distinguido, Oficina del Fiscal del Estado, 1995",
        "Descarga honorable, 1997",
      ],
    },
  },

  whitneyBrooks: {
    name: "Whitney Brooks",
    image: WhitneyImage,
    quote: {
      english: [
        "“Fight for the things you care about, but do it in a way that will lead others to join you.”",
        "- Ruth Bader Ginsberg",
      ],
      spanish: [
        "“Lucha por las cosas que te importan, pero hazlo de una manera que lleve a otros a unirse a ti.”",
        "- Ruth Bader Ginsberg",
      ],
    },
    biography: {
      english: [
        "Attorney Whitney Brooks went to the University of South Carolina where she graduated magna cum laude.  After graduating, she decided to pursue her legal studies and enrolled at the Charlotte School of Law, where she was the senior editor of the Charlotte Law Review and a pro bono student ambassador.  Ms. Brooks graduated cum laude from Charlotte School of Law in 2011 and was admitted to practice in North Carolina the same year. Practicing law for more than a decade, she is an active member of many legal associations, including the North Carolina State Bar, the Mecklenburg County Bar, and the North Carolina Advocates for Justice.*",
        "Admired for her high professionalism and legal skills by her peers and clients, Ms. Brooks has been bestowed with many honors. She has been selected by NC Super Lawyers Magazine as a Rising Star in the field of personal injury for four consecutive years.  In 2023, she became a member of the “Lawyers of Distinction” which recognizes excellence in personal injury law and is limited to no more than 10% of attorneys in the state.   In 2018, she was recognized by Attorney and Practice Magazine as a “Top 10 Personal Injury Attorney” and from 2016 to 2018 she was selected by the American Institute of Personal Injury Attorneys for their “10 Best Attorneys” in the field of personal injury for client satisfaction in North Carolina.*",
      ],
      spanish: [
        "La abogada Whitney Brooks fue a la Universidad de Carolina del Sur, donde se graduó magna cum laude. Después de graduarse, decidió continuar sus estudios jurídicos y se matriculó en la Facultad de Derecho de Charlotte, donde fue editora principal de Charlotte Law Review y embajadora estudiantil pro bono. La Sra. Brooks se graduó cum laude de la Facultad de Derecho de Charlotte en 2011 y fue admitida para ejercer en Carolina del Norte el mismo año. Ha ejercido la abogacía durante más de una década y es miembro activo de muchas asociaciones jurídicas, incluido el Colegio de Abogados del Estado de Carolina del Norte, el Colegio de Abogados del Condado de Mecklenburg y los Defensores de la Justicia de Carolina del Norte.",
        "Admirada por sus pares y clientes por su alto profesionalismo y habilidades legales, la Sra. Brooks ha recibido muchos honores. Ha sido seleccionada por la revista NC Super Lawyers como estrella en ascenso en el campo de lesiones personales durante cuatro años consecutivos. En 2023, se convirtió en miembro de “Abogados de Distinción”, que reconoce la excelencia en la ley de lesiones personales y está limitado a no más del 10% de los abogados del estado. En 2018, fue reconocida por la revista Attorney and Practice como “Los 10 mejores abogados de lesiones personales” y de 2016 a 2018 fue seleccionada por el Instituto Americano de Abogados de Lesiones Personales por sus “10 mejores abogados” en el campo de lesiones personales para satisfacción del cliente en Carolina del Norte.",
      ],
    },
    education: {
      english: [
        "Juris Doctor, Charlotte School of Law, 2011, cum laude",
        "B.A. in Business Administration, University of South Caorlina, 2008, magna cum laude",
      ],
      spanish: [
        "Juris Doctor, Facultad de Derecho de Charlotte, 2011, cum laude",
        "LICENCIADO EN LETRAS. en Administración de Empresas, Universidad del Sur de Caorlina, 2008, magna cum laude",
      ],
    },
    languages: {
      english: ["English"],
      spanish: ["Inglés"],
    },
    barAssociation: {
      english: [
        "North Carolina State Bar",
        "Mecklenburg County Bar",
        "North Carolina Advocates for Justice",
      ],
      spanish: [
        "Colegio de Abogados del Estado de Carolina del Norte",
        "Colegio de Abogados del Condado de Mecklenburg",
        "Defensores de la justicia de Carolina del Norte",
      ],
    },
    honorsAndAwards: {
      english: [
        "NC Super Lawyers Magazine- Rising Star in the Field of Personal Injury (2020-2024)",
        "Lawyers of Distinction Member (2023)",
        "Attorney and Practice Magazine – Top 10 Personal Injury Attorney (2018)",
        "American Institute of Personal Injury Attorneys- 10 Best Attorneys – Client Satisfaction - North Carolina (2016-2018)",
        "National Academy of Personal Injury Attorneys – Nationally Ranked Top 10 Under 40 – Personal Injury (2016)",
      ],
      spanish: [
        "Revista NC Super Lawyers: estrella en ascenso en el campo de las lesiones personales (2020-2024)",
        "Abogados de Distinción Miembro (2023)",
        "Revista Attorney and Practice: los 10 mejores abogados de lesiones personales (2018)",
        "Instituto Americano de Abogados de Lesiones Personales - 10 mejores abogados - Satisfacción del cliente - Carolina del Norte (2016-2018)",
        "Academia Nacional de Abogados de Lesiones Personales - Clasificado entre los 10 mejores a nivel nacional menores de 40 años - Lesiones personales (2016)",
      ],
    },
  },

  /* valerieKilgore: {
    name: "Valerie Kilgore",
    image: ValerieImage,
    quote: {
      english: [
        "“The liberties of none are safe unless the liberties of all are protected.”",
        "- William O. Douglas",
      ],
      spanish: [
        "“Las libertades de nadie están seguras a menos que se protejan las libertades de todos.”",
        "- William O. Douglas",
      ],
    },
    biography: {
      english: [
        "Attorney Valerie Kilgore was acclaimed both academically and in athletics while attending undergraduate school at St. Lawrence University in Canton, New York, receiving Presidential Scholarships and recognition as an outstanding student leader.",
        "Following graduation from St. Lawrence University, Ms. Kilgore attended Cumberland School of Law of Samford University in Birmingham, Alabama. Ms. Kilgore was on the Dean’s List, was a member of the Environmental Law Society, Treasurer of the Women in Law Society, and an annual attendee of the NAPIL (National Association of Public Interest Law) Conference.",
        "Ms. Kilgore practices primarily workers' compensation law.  In her spare time, she enjoys traveling and hiking with her husband and spending time with their cats and dogs.",
      ],
      spanish: [
        "La abogada Valerie Kilgore fue aclamada tanto académicamente como en el atletismo mientras asistía a la escuela de pregrado en la Universidad St. Lawrence en Canton, Nueva York, donde recibió becas presidenciales y reconocimiento como una destacada líder estudiantil.",
        "Después de graduarse de la Universidad St. Lawrence, la Sra. Kilgore asistió a la Facultad de Derecho Cumberland de la Universidad Samford en Birmingham, Alabama. La Sra. Kilgore estaba en la Lista del Decano, era miembro de la Sociedad de Derecho Ambiental, Tesorera de la Sociedad de Mujeres Jurídicas y asistente anual a la Conferencia NAPIL (Asociación Nacional de Derecho de Interés Público).",
        "La Sra. Kilgore practica principalmente la ley de compensación laboral. En su tiempo libre, le gusta viajar y hacer caminatas con su esposo y pasar tiempo con sus perros y gatos.",
      ],
    },
    education: {
      english: [
        "Juris Doctorate, Cumberland School of Law of Samford University, 1999",
        "B.A. in Government and Religious Studies, St. Lawrence University, 1996",
      ],
      spanish: [
        "Doctorado en Jurisprudencia, Facultad de Derecho Cumberland de la Universidad de Samford, 1999",
        "LICENCIADO EN LETRAS. en Gobierno y Estudios Religiosos, Universidad de St. Lawrence, 1996",
      ],
    },
    languages: {
      english: ["English"],
      spanish: ["Inglés"],
    },
    barAssociation: {
      english: [
        "North Carolina State Bar",
        "Mecklenburg County Bar",
        "American Bar Association",
        "North Carolina Advocates for Justice",
        "North Carolina Bar Association",
      ],
      spanish: [
        "Colegio de Abogados del Estado de Carolina del Norte",
        "Colegio de Abogados del Condado de Mecklenburg",
        "Asociación de Abogados de Estados Unidos",
        "Defensores de la justicia de Carolina del Norte",
        "Asociación de Abogados de Carolina del Norte",
      ],
    },
    honorsAndAwards: {
      english: ["Dean's List", "Treasurer of the Women in Law Society"],
      spanish: [
        "La lista de Dean",
        "Tesorera de la Sociedad de Mujeres Jurídicas",
      ],
    },
  }, */

  disclaimer: {
    english:
      "*For standards of inclusion for The American Institute of Personal Injury Attorneys “10 Best Attorneys,” visit https://www.aiopia.org/2017-10-best-state/. For standards of inclusion for “Super Lawyers” and “Rising Stars,” visit superlawyers.com. For standards of inclusion for “Lawyers of Distinction,” visit https://www.lawyersofdistinction.com/. For standards of inclusion for Attorney and Practice Magazine “Top 10 Personal Injury Attorney,” visit https://www.attorneyandpractice.com/aps-top-attorneys/.  For standards of inclusion for National Academy of Person Injury Attorneys “Top 10 Under 40,” visit https://www.naopia.com/. For standards of inclusion for the Million Dollar Advocates Forum and Multi Million Dollar Advocates Forum, visit milliondollaradvocates.com.",
    spanish:
      '*Para conocer los estándares de inclusión de los “10 mejores abogados” del Instituto Americano de Abogados de Lesiones Personales, visite https://www.aiopia.org/2017-10-best-state/. Para conocer los estándares de inclusión de "Super Lawyers" y "Rising Stars", visite superlawyers.com. Para conocer los estándares de inclusión de "Abogados distinguidos", visite https://www.lawyersofdistinction.com/. Para conocer los estándares de inclusión de la revista Attorney and Practice “Los 10 mejores abogados de lesiones personales”, visite https://www.attorneyandpractice.com/aps-top-attorneys/. Para conocer los estándares de inclusión de la Academia Nacional de Abogados de Lesiones Personales "Top 10 menores de 40", visite https://www.naopia.com/. Para conocer los estándares de inclusión para el Million Dollar Advocates Forum y el Multi Million Dollar Advocates Forum, visite Milliondollaradvocates.com.',
  },
};
