
export const createButton = ({
  size = '',
  theme = '',
  label,
  isDark,
  disabled = false
}) => {
  const className = `mzp-c-button ${size} ${theme} ${isDark ? "mzp-t-dark" : ""}`;



  return `<button type='button' class='${className.trim()}' ${disabled ? 'disabled' : ''}>${label}</button>`;
};


