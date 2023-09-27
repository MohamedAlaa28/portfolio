export const validateNameFunction = (e) => {
  return e.target.value.trim() !== "" && !/\d/.test(e.target.value);
};

export const validateDateFunction = (e) => {
  const currentDate = new Date();
  const selectedDate = new Date(e);
  const isValid = selectedDate > currentDate;
  return isValid;
};

export const validateNumberFunction = (e) => {
  return e.target.value >= 1 && e.target.value <= 25;
};

export const validateEmailFunction = (e) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(e.target.value.toLowerCase());
};

export const validatePhoneNumberFunction = (e) => {
  return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
    e.target.value
  );
};
