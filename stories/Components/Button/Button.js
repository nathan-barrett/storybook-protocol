
export const createButton = ({
  size = '',
  theme = '',
  label,
  isDark,
  disabled = false
}) => {
  const className = `mzp-c-button ${size || 'mzp-t-lg'} ${theme} ${
    isDark ? "mzp-t-dark" : ""
  } ${disabled ? "disabled" : ""}`;


  return `<button type='button' class='${className.trim()}'>${label}</button>`;
};


