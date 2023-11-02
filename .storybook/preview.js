import { SyntaxHighlighter } from "@storybook/components";
import React from 'react';
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import "../stories/styles/global.scss";
import { useTheme } from "./useTheme";
import MzpBase from "../assets/js/protocol/base";
import { DocsContainer } from "@storybook/addon-docs/blocks";

SyntaxHighlighter.registerLanguage("scss", scss);
console.log(MzpBase);

const preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { disable: true },
    backgrounds: { disable: true },
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
      container: ({children, context}) => {
        return (
          <DocsContainer context={context}>
            <div className="js">{children}</div>
          </DocsContainer>
        )
      }
    },
    options: {
      storySort: {
        order: ["Documentation", ["Introduction", "Fundamentals"], "Components"],
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
            key: "light",
            value: "light",
            icon: "sun",
            title: "Light",
          },
          {
            key: "dark",
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
