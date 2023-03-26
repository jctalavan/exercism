function getValue(color: string) : number {
    let evaluatedColor : string = color || "";
    if(evaluatedColor === "")
        throw new Error('Color not indicated');
    
    switch(evaluatedColor.toLowerCase()){
      case "black": return 0;
      case "brown": return 1;
      case "red": return 2;      
      case "orange": return 3;
      case "yellow": return 4;
      case "green": return 5;
      case "blue": return 6;
      case "violet": return 7;      
      case "grey": return 8;      
      case "white": return 9;  
      default: 
        throw new Error(`Color ${evaluatedColor} is not supported`);
    }
  }
  
export function decodedValue(colors: string[]) {
  if(colors.length < 2)
    throw new Error('You should indicate at least two colors.');
  
  let [firstColor, secondColor] = colors;

  let firstColorValue : string = getValue(firstColor).toString();
  let secondColorValue : string = getValue(secondColor).toString();

  let resistorValue : string = firstColorValue.concat(secondColorValue);

  return parseInt(resistorValue);
}