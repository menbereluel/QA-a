const{add,subtract,multiply,divide}=require('./math');

 test('add 2 +3 to equal 5' ,() => { expect (add(2,3)).toBe(5);

 });
 test('multiply  4 * 3 to equal 12' ,() => { expect (multiply(4,3)).toBe(12);

 });
 test('subtract  6 -2 to equal 4' ,() => { expect (subtract(6,2)).toBe(4);

 });
 test('divide  6 /3 to equal 2' ,() => { expect (divide(6,3)).toBe(2);

 });