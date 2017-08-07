document.getElementById("convert1").addEventListener('click', convert1);

function convert1() {
  var text = document.getElementById("number").value;
  var numberPattern = /\d+/g;
  var numArr = text.match(numberPattern);
  var numStrarr = [];

  for (var i = 0; i < numArr.length; i++) {
    numStrarr[i] = numTostring(numArr[i]);
  }

  for (i = 0; i < numArr.length; i++) {
    text = text.replace(numArr[i], numStrarr[i]);
  }

  document.getElementById("toString").innerHTML = text;
  return 1;
}



var numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var place = ['ones', 'tens', 'hundred'];
var hplace = ['thousand', 'million', 'billion'];

var oTens = ['ten', 'eleven', 'tweleve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eightteen', 'ninteen'];
var pTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


function numTostring(num) {
  var result = '';
  var count = num.toString().length;

  var digPos = 1;
  var i = count - 3;
  var hcount = 1;
  while (i > 0) {
    digPos *= 1000;
    i = i - 3;
    hcount += 1;
  }

  while (hcount > 0) {
    var uDig = Math.floor(num / digPos);

    result = result + numToutil1(uDig, hcount);
    num = num % digPos;
    digPos = digPos / 1000;
    hcount--;
  }
  return result;
}


function numToutil1(num, hcount) {
  var result = '';
  var count = num.toString().length;

  var digPos = 1;
  var i = count - 1;

  while (i > 0) {
    digPos *= 10;
    i--;
  }

  var flagOn = false;
  while (count > 0) {
    var uDig = Math.floor(num / digPos);

    switch (count) {
      case 1:
        if (flagOn === false)
          result += numbers[uDig];
        break;
      case 2:
        if (uDig === 1) {
          result += oTens[num - 10];
          flagOn = true;
        } else {
          if (uDig >= 2) {
            result += pTens[uDig - 2] + ' ';
          } else {
            result += '';
          }
        }
        break;
      case 3:
        result += numbers[uDig] + ' hundred ';
        break;
    }
    num = num % digPos;
    digPos = digPos / 10;
    count--;
  }

  var suffix = '';
  switch (hcount) {
    case 1:
      break;
    case 2:
      suffix = ' thousand ';
      break;
    case 3:
      suffix = ' million ';
      break;
    case 4:
      suffix = ' billion ';
    default:
      break;
  }
  if (result !== '')
    return result + suffix;
  else
    return result;
}
