function isSameType(value1, value2) {
  //your js code here
	if (number.isNaN(value1)&& number.isNaN(value2)){
		return true;
	}
		return typeof(value1) === typeof(value2);
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
