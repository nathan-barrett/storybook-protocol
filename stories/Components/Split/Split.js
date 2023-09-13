import { createButton } from "../Button/Button.js"

export const createSplit = ({
  blockClass = "",
  backgroundClass = "",
  bodyClass = "",
  mediaClass = "",
  image = "",
}) => {
  return `<section class="mzp-c-split ${ blockClass }">
  ${backgroundClass ? `<div class="mzp-c-split-bg ${backgroundClass}">` : "".trim()}
  <div class="mzp-c-split-container">
    <div class="mzp-c-split-body ${bodyClass}">
      <h1 class="mzp-u-title-md">Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet, amet dolores tincidunt te sea.
      His aliquid epicuri detraxit in, cum tantas populo periculis te. Ei vix idque noster.</p>
      <p>${ createButton({ label: "Lorem Ipsum" }) }</p>
    </div>
    <div class="mzp-c-split-media ${mediaClass}">
    ${
      image
        ? ` <img class="mzp-c-split-media-asset" src=${image || "/image-16-9.jpg"} alt="">`
        : `<img class="mzp-c-split-media-asset" src=${image || "/image-16-9.jpg"} alt="">`
    }
    </div>
  </div>
  ${backgroundClass ? "</div>" : ""}
</section>`;
};
