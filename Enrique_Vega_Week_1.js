//1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".


function divByThree() {
	for(var i = 0; i<=15; i++)
		if(i%3===0) {
    console.log(i + " is divisible by three");
	} else {
		console.log(i + " is not divisble by three");
	}
}

divByThree();


//2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.


function properties (myEyeColor, myHobby, myProfession) {
	return {
		eyeColor: myEyeColor,
		hobby: myHobby,
		profession: myProfession
	}
}

var Enrique = properties('Brown', 'Music', 'Student')
console.log(Enrique);

//3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

method 1
	var array = ['I', 'love', 'this', 'class'];
    var value1 = array[3];
	  var value2 = array[2];
	  console.log(value1);
	  console.log(value2);

//method 2
function accessArray(array){
	for(i=0; i<array.length - 2; i++) {
		console.log(array[i]);
	}
}

accessArray(array)

//4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.


Input:"hooplah"
Output:"ahhloop"

var word = "hooplah"

function AlphabetSoup(str) {
    // your code goes here
		var str = ['h', 'o', 'o', 'p', 'l', 'a', 'h']
		var newString = str.sort().join('');
		console.log(newString);

	return str;
};

// keep this function call here

AlphabetSoup(word);

//5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"
var newArr = []

function numberNoun(arr1, arr2) {
	for(var i=0; i < arr1.length; i++)
	console.log(arr1[i] + " " + arr2[i]);
};

numberNoun(nums, nouns);


//How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"
var newArr = []

function numberNoun(arr1, arr2) {
	for(var i=0; i < arr1.length || i < arr2.length; i++) {
	console.log(arr1[i] + " " + arr2[i]);
  }
};

numberNoun(nums, nouns);
