import { createButton } from './Button';
import "/assets/sass/protocol/components/_button.scss"

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Button',
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qtKx5nk0d9PjLZYlTuFg5v/Mozilla-Core---Protocol-Component-Library?type=design&node-id=1056%3A169258&mode=design&t=nofsSyURHWnPYZQh-1",
    },
  },
  render: ({ label, ...args }, context) => {

    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args, isDark: context.globals.theme === 'dark'});
  },
  argTypes: {
    label: {
      control: 'text',
      description: "Label to be used for in the button or link",
      title: "Label"
    },
    theme: {
      control: { type: 'select' },
      options: {
        Primary: '',
        Secondary: 'mzp-t-secondary',
        Product: 'mzp-t-product',
        Neutral: 'mzp-t-neutral'
      },
      description: "Theme used to style the button element",
    },
    size: {
      control: { type: 'select' },
      options: {
        Small: 'mzp-t-sm',
        Medium: 'mzp-t-md',
        Large: 'mzp-t-lg',
        'X-large': 'mzp-t-xl'
      },
      description: "Size of the button element",
      title: "Size"
    },
    disabled: {
      control: "boolean",
      description: "The `disabled` property is added on submit to prevent people from submitting their information twice while submitting a form."
    }
  },
  args: {
    theme: '',
    size: 'mzp-t-lg',
    disabled: false
  }
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    label: "Primary Button",
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    theme: "mzp-t-secondary"
  },
};

export const Product = {
  args: {
    label: "Product Button",
    theme: "mzp-t-product",
  },
};

export const Neutral = {
  args: {
    label: "Neutral Button",
    theme: "mzp-t-neutral",
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};