describe('Convert', function() {
  beforeEach(function() {
    document.getElementById("number").value = '123sdsd12';
  })
  it('return 1 ', function() {
    expect(convert()).toBe(1);
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
