import tokens from "@mozilla-protocol/tokens/dist/index.json";

const colorMap = tokens.filter(({token}) => token.includes("color"));

const initialObj = {
    Green: [],
    Blue: [],
    Violet: [],
    Purple: [],
    Pink: [],
    Red: [],
    Orange: [],
    Yellow: [],
    'Light Gray': [],
    'Dark Gray': [],
    'Marketing Gray': [],
    Ink: [],
    Brand: [],
    Utility: []
}


const colors = colorMap.reduce((colorObject, color) => {
    // add tokens to child objects
    if (color.token.includes("moz")) {
        colorObject.Brand.push(color);
    } else if (color.token.includes("blue")) {
        colorObject.Blue.push(color);
    } else if (color.token.includes("violet")) {
        colorObject.Violet.push(color);
    } else if (color.token.includes("purple")) {
      colorObject.Purple.push(color);
    } else if (color.token.includes("pink")) {
      colorObject.Pink.push(color);
    } else if (color.token.includes("red")) {
      colorObject.Red.push(color);
    } else if (color.token.includes("orange")) {
      colorObject.Orange.push(color);
    } else if (color.token.includes("yellow")) {
      colorObject.Yellow.push(color);
    } else if (color.token.includes("light-gray")) {
      colorObject["Light Gray"].push(color);
    } else if (color.token.includes("dark-gray")) {
      colorObject["Dark Gray"].push(color);
    } else if (color.token.includes("marketing-gray")) {
      colorObject["Marketing Gray"].push(color);
    } else if (color.token.includes("color-ink")) {
      colorObject.Ink.push(color);
    } else if (color.token.includes("green")) {
      colorObject.Green.push(color);
    } else {
      colorObject.Utility.push(color);
    }
    return colorObject;
}, initialObj);



export { colors }


