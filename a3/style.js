// var rHeight =5;
// var colorEven = "Maroon";
// var colorOdd = "Dark Blue";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rhombusHTML = "";
  
  rhombusHTML += createUpLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  rhombusHTML += createUpRight(pHeight, pColorEven, pColorOdd, pSymbol);
  rhombusHTML += createDownLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  rhombusHTML += createDownRight(pHeight, pColorEven, pColorOdd, pSymbol);

  document.getElementById("rhombus").innerHTML = rhombusHTML;
}

function createUpLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";
  for (let i = 0; i < pHeight; i++) {
      rLine += "<p>";
      for (let s = 0; s < pHeight - i; s++) {
          rLine += "<span style='visibility:hidden'>" + pSymbol + "</span>";
      }
      for (let j = 0; j <= i; j++) {
          let color = j % 2 === 0 ? pColorOdd : pColorEven;
          rLine += "<span style='color:" + color + ";'>" + pSymbol + "</span>";
      }
      rLine += "</p>";
  }
  return rLine;
}

function createUpRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";
  for (let i = 0; i < pHeight; i++) {
      rLine += "<p>";
      for (let j = 0; j <= i; j++) {
          let color = j % 2 === 0 ? pColorOdd : pColorEven;
          rLine += "<span style='color:" + color + ";'>" + pSymbol + "</span>";
      }
      rLine += "</p>";
  }
  return rLine;
}

function createDownLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";
  for (let i = pHeight - 1; i >= 0; i--) {
      rLine += "<p>";
      for (let s = 0; s < pHeight - i; s++) {
          rLine += "<span style='visibility:hidden'>" + pSymbol + "</span>";
      }
      for (let j = 0; j <= i; j++) {
          let color = j % 2 === 0 ? pColorOdd : pColorEven;
          rLine += "<span style='color:" + color + ";'>" + pSymbol + "</span>";
      }
      rLine += "</p>";
  }
  return rLine;
}

function createDownRight(pHeight, pColorEven, pColorOdd, pSymbol) {
  let rLine = "";
  for (let i = pHeight - 1; i >= 0; i--) {
      rLine += "<p>";
      for (let j = 0; j <= i; j++) {
          let color = j % 2 === 0 ? pColorOdd : pColorEven;
          rLine += "<span style='color:" + color + ";'>" + pSymbol + "</span>";
      }
      rLine += "</p>";
  }
  return rLine;
}
