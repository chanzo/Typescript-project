var num:number=5;
var factorial:number=1;
while(num>=1)
{
	factorial=factorial*num;
	num--;
}
console.log(factorial);
document.getElementById("f").innerHTML="The Factorial of 5 is" + 
factorial;
}