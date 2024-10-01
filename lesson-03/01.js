// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    const newColors = colors.filter(color => color === "черный" || color === 
        "красный" || color === "желтый"
    );
    return colorsString = newColors.join("-");
}

console.log(createColorString());