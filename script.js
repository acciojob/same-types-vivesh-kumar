function isSameType(value1, value2) {
  //your js code here
	const isValue1NaN = typeof value1 === "string" && value1 === "NaN";
  const isValue2NaN = typeof value2 === "string" && value2 === "NaN";

		const parsedvalue1 = isNaN(value1)?value1:Number(value1);
	    const parsedvalue2 = isNaN(value2)? value2:Number(value2);
	
	if (Number.isNaN(parsedvalue1)&& Number.isNaN(parsedvalue2)){
		return true;
	}
		return typeof(parsedvalue1) === typeof(parsedvalue2);
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
