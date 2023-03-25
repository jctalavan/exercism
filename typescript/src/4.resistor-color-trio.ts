/**
 * This exercise is about translating the colors into a label= "... ohms"
 * So an input of "orange", "orange", "black" should return= "33 ohms"
 * When we get to larger resistors, a metric prefix is used to indicate a larger magnitude of ohms, such as "kiloohms"
 * For example, an input of "orange", "orange", "orange" should return= "33 kiloohms"
 * Black= 0
 * Brown= 1
 * Red= 2
 * Orange= 3
 * Yellow= 4
 * Green= 5
 * Blue= 6
 * Violet= 7
 * Grey= 8
 * White= 9
 */

enum Color {
    black = 0,
    brown= 1,
    red= 2,
    orange= 3,
    yellow= 4,
    green= 5,
    blue= 6,
    violet= 7,
    grey= 8,
    white= 9,
}

enum Unit {
    ohms = 1,
    kiloohms = 1/1_000,
    megaohms = 1/1_000_000,
    gigaohms = 1/1_000_000_000
}

function getUnit (resistorValue: number) : Unit {

    if(resistorValue * Unit.gigaohms >= 1)return Unit.gigaohms;
    else if(resistorValue * Unit.megaohms >= 1)return Unit.megaohms;
    else if(resistorValue * Unit.kiloohms >= 1)return Unit.kiloohms;
    else return Unit.ohms;
}

type colorStrings = keyof typeof Color;
export function decodedResistorValue(colors: colorStrings[]) : string{

    if(colors.length < 3)
        throw new Error('You have to indicate at least three colors.');

    let firstColor : Color = Color[colors[0]];
    let secondColor : Color = Color[colors[1]];
    let thirdColor : Color = Color[colors[2]];
    let resistorValue = (firstColor * 10 + secondColor) * Math.pow(10, thirdColor);

    let unit = getUnit(resistorValue);

    return `${resistorValue * unit} ${Unit[unit]}`;
}