import { createSplit } from "./Split";
import "/assets/sass/protocol/components/_split.scss";
import "/assets/sass/protocol/components/_button.scss";

export default {
  title: "Components / Split",
  render: ({ ...args }) => {
    return createSplit({ ...args });
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/qtKx5nk0d9PjLZYlTuFg5v/Mozilla-Core---Protocol-Component-Library?type=design&node-id=1071%3A263199&mode=design&t=nofsSyURHWnPYZQh-1"
    }
  },
  argTypes: {
    blockClass: {
      control: { type: "select",
      labels: {
        "": "Default",
        "mzp-l-split-reversed": "Reverse",
        "mzp-l-split-body-narrow": "Narrow",
        "mzp-l-split-body-wide": "Wide",
        "mzp-l-split-pop": "Media pop-out"
       }
      },
      options: [
        "", "mzp-l-split-reversed", "mzp-l-split-body-narrow", "mzp-l-split-body-wide", "mzp-l-split-pop"
      ],
      description: "class added to the block element",
      title: "Block Class",
    },
    backgroundClass: {
      control: { type: "select",
        labels: {
          "": "Default",
          "mzp-t-dark mzp-t-background-secondary": "Dark background"
        }
      },
      options: ["", "mzp-t-dark mzp-t-background-secondary"],
      description: "Changes the background color of the split component",
      name: "Background",
    },
    mediaClass: {
      control: { type: "select" },
      options: {
        Default: "",
        "Media Overflow": "mzp-l-split-media-overflow",
        "Constrain Media": "mzp-l-split-media-constrain-height",
      },
      description: "class added to the block element",
      name: "Media Class",
    },
    verticalAlignment: {
      control: { type: "select" },
      options: {
        Default: "",
        Start: "mzp-l-split-h-start",
        Centered: "mzp-l-split-h-center",
        End: "mzp-l-split-h-end",
      },
      description: "class added to the block element",
      name: "Vertical Alignment",
    },
    horizontalAlignment: {
      control: { type: "select" },
      options: {
        Default: "",
        Start: "mzp-l-split-h-start",
        Centered: "mzp-l-split-h-center",
        End: "mzp-l-split-h-end",
      },
      description: "Horizontal alignment for the Split body",
      name: "Horizontal Alignment",
    },
  },
  args: {
    blockClass: "",
    mediaClass: "",
    backgroundClass: "",
    verticalAlignment: "",
    horizontalAlignment: "",
  },
};

export const Default = {
    args: {}
}

export const Reverse = {
  args: { blockClass: "mzp-l-split-reversed" },
};

export const NarrowBody = {
  args: { blockClass: "mzp-l-split-body-narrow" },
};

export const WideBody = {
  args: { blockClass: "mzp-l-split-body-wide" },
};

export const Background = {
  args: { backgroundClass: "mzp-t-dark mzp-t-background-secondary" },
};

export const MediaOverflow = {
  args: { mediaClass: "mzp-l-split-media-overflow" },
};

export const ConstrainedMedia = {
  args: { mediaClass: "mzp-l-split-media-constrain-height" },
};

export const popOutMedia = {
  args: { blockClass: "mzp-l-split-pop" },
};