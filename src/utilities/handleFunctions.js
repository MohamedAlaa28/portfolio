export const handleBlur =
  (setState, validateFunction, alertFunction) => (e) => {
    const isValid = validateFunction(e);
    const error = alertFunction();
    setState((prevState) => ({
      ...prevState,
      isTouched: true,
      isValid: isValid,
      error: error,
    }));
  };
