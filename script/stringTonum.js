document.getElementById("convert2").addEventListener('click', convert2);

function insertSpace(text) {
  var separators = ['+', "'", '-', '(', ')', '*', '/', ':', '?', '.', ',', '%', '@', '#', '$', '%', '^', '&', ';', '[', ']', '{', '}', '>', '<'];
  for (var i = 0; i < separators.length; i++) {
    var rg = new RegExp("\\" + separators[i], "g");
    text = text.replace(rg, " " + separators[i] + " ");
  }
  return text;
}

function convert2() {
  var text = document.getElementById("numword").value;
  text = insertSpace(text);
  text = convertWord(text);
  text = text.replace('first', '1st');
  text = text.replace('second', '2nd');
  text = text.replace('third', '3rd');
  text = text.replace('fifth', '5th');
  document.getElementById("toNumber").innerHTML = text;
  document.getElementById("numword").value = "";
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
        if (temp === 0)
          temp = 1;
        result += temp * position[numArr[i]];
        temp = 0;
      } else {
        if (temp === 0)
          temp = 1;

        temp *= 100;
      }
    }
  }
  result += temp;
  return result;
}


var realArr = [];

function convertWord(text) {
  var wordArr = towordArr(text);
  var numbers = [];
  var i = 0;
  for (i = 0; i < wordArr.length; i++) {
    numbers[i] = wordTonum(wordArr[i]);
  }

  for (i = 0; i < realArr.length; i++) {
    realArr[i] = realArr[i].trim();
  }

  for (i = 0; i < realArr.length; i++) {
    text = text.replace(realArr[i], numbers[i]);
  }

  text = insertSpace(text);
  text = ' ' + text + ' ';
  var ltext = text.toLowerCase();
  var words = ltext.split(' ');
  for (i = 0; i < words.length; i++) {
    for (var j in nums) {
      if (words[i].lastIndexOf(j, 0) === 0) {

        words[i] = words[i].replace(j, nums[j]);
      }
    }
    for (var j in tens) {
      if (words[i].lastIndexOf(j, 0) === 0) {
        words[i] = words[i].replace(j, tens[j]);
      }
    }
    for (var j in position) {
      if (words[i].lastIndexOf(j, 0) === 0) {
        words[i] = words[i].replace(j, position[j]);
      }
    }
  }
  var originWord = text.split(' ');
  for (i = 0; i < words.length; i++) {
    if (originWord[i].toLowerCase() !== words[i].toLowerCase()) {
      originWord[i] = words[i];
    }
  }

  text = originWord.join(' ');
  text = text.trim();
  return text;
}


function towordArr(text) {
  var ltext = text.toLowerCasetext = text.toLowerCase();
  var lstr = stringTonumArr(ltext);
  var rstr = stringTonumArr(text);
  var wordArr = [];

  var i = 0,
    j = 0;
  var last = '';
  while (i < lstr.length) {
    if (lstr[i] in nums) {
      if (last === 'nums' || last === 'n') {
        j++;
      }
      if (wordArr[j] != null) {
        wordArr[j] += (lstr[i] + ' ');
        realArr[j] += (rstr[i] + ' ');
      } else {
        wordArr[j] = (lstr[i] + ' ');
        realArr[j] = (rstr[i] + ' ');
      }
      last = 'nums';
    } else if (lstr[i] in tens) {
      if (last === 'nums' || last === 'tens' || last === 'n') {
        j++;
      }
      if (wordArr[j] != null) {
        wordArr[j] += (lstr[i] + ' ');
        realArr[j] += (rstr[i] + ' ');
      } else {
        wordArr[j] = (lstr[i] + ' ');
        realArr[j] = (rstr[i] + ' ');
      }
      last = 'tens';
    } else if (lstr[i] in position) {
      if (last === 'position' || last === 'n') {
        j++;
      }
      if (wordArr[j] != null) {
        wordArr[j] += (lstr[i] + ' ');
        realArr[j] += (rstr[i] + ' ');
      } else {
        wordArr[j] = (lstr[i] + ' ');
        realArr[j] = (rstr[i] + ' ');
      }
      last = 'position';
    } else {
      if (last === 'nums' || last === 'tens' || last === 'position') {
        last = 'n';
      }
    }
    i++;
  }
  return wordArr;
}
