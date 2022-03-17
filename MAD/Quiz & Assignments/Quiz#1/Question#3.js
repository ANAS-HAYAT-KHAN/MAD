// a)
console.log(1 + "2" + "2");

//  Result: 122
//  1 is a number and it will concatenate with strings that are 2.

// b) 
console.log(1 + +"2" + "2");

// Result: 32
// Here we have two plus operators, first is used in concatenation of 1 and 2 and after concatenation, second + operatio is performed on 1 and 2.


// c) 
console.log(1 + -"2" + "2");

// Result: -12
// Here we have one plus operator & one minus operator. First + is used in concatenation of 1 and -2 &  after concatenation minus operation is performed on 1 and 2

// d)
console.log("A" - "B" + "2");

// Result: NaN2
// Strings cannot be subtracted from one~another.

// e) 
console.log("A" - "B" + 2);

// Result: NaN
// Strings cannot be subtracted from one~another.
