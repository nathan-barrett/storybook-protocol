import { SyntaxHighlighter } from "@storybook/components";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import "../stories/styles/global.scss";
import { useTheme } from "./useTheme";

SyntaxHighlighter.registerLanguage("scss", scss);

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    options: {
      storySort: {
        order: ["Documentation", ["Design Principles", "Colors"], "Components"],
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "paintbrush",
        // Array of plain string values or MenuItem shape (see below)
        items: [
          {
            value: "light",
            icon: "sun",
            title: "Light",
          },
          {
            value: "dark",
            icon: "moon",
            title: "Dark",
          },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [useTheme],
};

export default preview;
