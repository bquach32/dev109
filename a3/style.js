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

function printDiamond(n) {
        var space = n - 1;
        for (var i = 0; i < n; i++) {
     
          for (var j = 0; j < space; j++) document.write("&nbsp;&nbsp;");

          // Print i+1 stars
          for (var j = 0; j <= i; j++) document.write("*" + "&nbsp;&nbsp;");

          document.write("<br>");
          space--;
        }

        space = 0;

        for (var i = n; i > 0; i--) 
        {
   
          for (var j = 0; j < space; j++) document.write("&nbsp;&nbsp;");

          for (var j = 0; j < i; j++) document.write("*" + "&nbsp;&nbsp;");

          document.write("<br>");
          space++;
        }
      }
