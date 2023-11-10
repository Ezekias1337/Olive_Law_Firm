export const textOnlyPattern = "[A-Za-zs]*";
export const numberOnlyPattern = "^[0-9]+$";
export const textAndNumbersPattern = "[A-Za-z0-9s]*";
export const textAndNumbersNoSpacesPattern = "[A-Za-z0-9]*";
export const textAndNumbersAndSpecialCharsPattern =
  "[A-Za-z0-9`!@#$%^&*()-_=+[]{}|;:,<.>/?s]*";
export const textAndNumbersAndSpecialCharsNoSpacesPattern =
  "[A-Za-z0-9`!@#$%^&*()-_=+[]{}|;:,<.>/?]*";
export const creditCardNumberPattern = "[0-9s]{13,19}";
export const americanDatePattern =
  "^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])/d{4}$";
export const restOfWorldDatePattern =
  "^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/d{4}$";
export const emailPattern = "/^[^s@]+@[^s@]+.[^s@]+$/";
export const phoneNumberPattern = "/^(+d{1,3}s)?(d{3})sd{3}-d{4}$/";
