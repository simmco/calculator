var curNum = "";
var takeNum = 0;
var result = 0;
var inCalc = false;
var operator = "";
var operatorActive = true;
var dotActive = false;
var array = [];

function calc(val) {
  if (val === "+") {
    result = parseFloat(takeNum) + parseFloat(curNum);
  } else if (val === "-") {
    result = parseFloat(takeNum) - parseFloat(curNum);
  } else if (val === "*") {
    result = parseFloat(takeNum) * parseFloat(curNum);
  } else if (val === "/") {
    result = parseFloat(takeNum) / parseFloat(curNum);
  }
}

function reply_click(clicked_id) {

  var finalArray = array.join(" ");

  if (!isNaN(clicked_id) || clicked_id === ".") {

    if(!isNaN(clicked_id)){
      curNum += clicked_id;
    if(curNum.length > 15) {
      curNum = "Error";
    }
    document.getElementById("live").innerHTML = curNum;
    operatorActive = false;
    }

    else if(clicked_id === ".") {
      if(curNum !== "") {
      if(dotActive !== true) {
    curNum += clicked_id;
    if(curNum.length > 15) {
      curNum = "Error";
    }
    document.getElementById("live").innerHTML = curNum;
    operatorActive = false;
    dotActive = true;
      }
    }
    }
  }

else if (clicked_id === "+" || clicked_id === "-" || clicked_id === "*" || clicked_id === "/") {
    if (operatorActive === false) {
      if (inCalc === true) {

        calc(operator);
        takeNum = result;
        array.push(curNum, clicked_id);
        curNum = "";
        operator = clicked_id;
        operatorActive = true;

      } else {
        takeNum = curNum;
        array.push(curNum, clicked_id);
        curNum = "";
        operator = clicked_id;
        inCalc = true;
        operatorActive = true;
      }

    } else {

      operator = clicked_id;
      array[array.length - 1] = clicked_id;

    }
    takeNum = Math.round(takeNum * 10000) / 10000;
    dotActive = false;
    document.getElementById("summary").innerHTML = array.join(" ");
    document.getElementById("live").innerHTML = takeNum;
  } else if (clicked_id === "=") {
    if (operatorActive === false) {
      calc(operator);
      array.push(curNum + " " + clicked_id);
      result = Math.round(result * 10000) / 10000;
      document.getElementById("live").innerHTML = result;
      curNum = "";
      takeNum = 0;
      result = 0;
      inCalc = false;
      operator = "";
      dotActive = false;

      document.getElementById("summary").innerHTML = array.join(" ");

      array = [];
      operatorActive = false;
    }

  } else if (clicked_id === "AC") {
    curNum = "";
    takeNum = 0;
    result = 0;
    inCalc = false;
    operator = "";
    array = [];
    operatorActive = false;
    dotActive = false;
    document.getElementById("summary").innerHTML = "";
    document.getElementById("live").innerHTML = result;
  } else if (clicked_id === "CE") {
    curNum = "";
    operatorActive = false;
    dotActive = false;
    document.getElementById("live").innerHTML = "0";
  }

}
