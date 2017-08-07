describe('Convert', function() {
  beforeEach(function() {
    document.getElementById("number").value = '123sdsd12';
  })
  it('return 1 ', function() {
    expect(convert1()).toBe(1);
  })
})

describe('Convert', function() {
  it('return 1 ', function() {
    expect(convert2()).toBe(1);
  })
})

describe('Number to String', function() {
  beforeEach(function() {
    num = 1000000000;
  })
  it('changes to word', function() {
    expect(numTostring(num)).toBe('one billion ');
  })
})

describe('Convert numical word to array',function(){
  beforeEach(function(){
    numWord='one thousand';
  })
  it('to numerical word array',function(){
    expect(stringTonumArr(numWord)[1]).toBe('thousand');
  })
})

describe('Convert numical word to array',function(){
  beforeEach(function(){
    numWord='one hundred and two';
  })
  it('returns numerical valaue of word',function(){
    expect(wordTonum(numWord)).toBe(102);
    expect(wordTonum('one thousand')).toBe(1000);
    expect(wordTonum('one million')).toBe(1000000);
    expect(wordTonum('one billion')).toBe(1000000000);
    expect(wordTonum('one thousand four hundred fifty two')).toBe(1452);
    expect(wordTonum('nine million and nine hundred and ninety nine thousand ')).toBe(9999000);
  })
})


