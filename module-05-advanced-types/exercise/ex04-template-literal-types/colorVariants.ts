/*
    Given:
        type Color = "red" | "blue";
        type Shade = "light" | "dark"

    Make a type ColorShade that produces "red-light" | "red-dark" | "blue-light" | "blue-dark"
*/

type Color = "red" | "blue";
type Shade = "light" | "dark";

type ColorShade = `${Color}-${Shade}`;

const colorOne: Color = "red";
const shadeOne: Shade = "dark";

const colorCombo: ColorShade = `${colorOne}-${shadeOne}`;

console.log(colorCombo);
