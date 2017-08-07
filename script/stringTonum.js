document.getElementById("convert2").addEventListener('click', convert2);

function convert2() {
  var text = document.getElementById("numword").value;
  document.getElementById("toNumber").innerHTML = wordTonum(text);
  return 1;
}

var nums = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  'and': 0
};

var tens = {
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90
};

var position = {
  'hundred': 100,
  'thousand': 1000,
  'million': 1000000,
  'billion': 1000000000
};



function stringTonumArr(numWord) {
  var numArr = numWord.split(' ');
  return numArr;
}

/*
function wordTonum(numWord)
{
    var numArr=stringTonumArr(numWord);
    var result=0;
    var place=1;
    var dig=0;
    //nine million nine hundred nity nine thousand
    for(var i=0;i<numArr.length;){
        
        if(i< numArr.length && tens[numArr[i]] != null){
            dig=tens[numArr[i++]];
        }

        if(i< numArr.length && nums[numArr[i]] != null){
            dig+=nums[numArr[i++]];
        }
        


        if(i< numArr.length && numArr[i] == 'hundred')
        {
            dig=dig*100;
            i++;
            if(i< numArr.length && tens[numArr[i]] != null){
                dig=tens[numArr[i++]];
        }
        }
        if(i< numArr.length && position[numArr[i]] != null){
            place=position[numArr[i++]];
        }
        
        result+=dig*place;
        place=1;
        dig=0;
    }
    return result;
}*/


//nine million nine hundred nity nine thousand
function wordTonum(numWord) {
  var numArr = stringTonumArr(numWord);
  var result = 0;
  var temp = 0;
  for (var i = 0; i < numArr.length; i++) {
    if (nums[numArr[i]] != null) {
      temp += nums[numArr[i]];
    } else if (tens[numArr[i]] != null) {
      temp += tens[numArr[i]];
    } else if (position[numArr[i]] != null) {
      if (numArr[i] !== 'hundred') {
        result += temp * position[numArr[i]];
        temp = 0;
      } else {
        temp *= 100;
      }
    }
  }
  result += temp;
  return result;
}
