
export const useTheme = (Story, context) => {
  const { theme } = context.globals

    //document.body refers to body tag inside iframe#storybook-preview-iframe
    if (theme === 'dark') {
        document.body.classList.add("mzp-t-dark");
    } else {
        document.body.classList.remove("mzp-t-dark")
    }

  return Story();
};