const formatPhoneNumber = (value) => {
  const numericValue = value.replace(/[^0-9]/g, "");
  const matches = numericValue.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (matches) {
    return `(${matches[1]}) ${matches[2]}-${matches[3]}`;
  }

  return numericValue;
};

export { formatPhoneNumber };
