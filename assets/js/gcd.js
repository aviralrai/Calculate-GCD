var string;
$("button").on("click",function(){
	string=$("input[type='text']").val();
	var str=string.split(" ");
	for(var i=0;i<str.length;i++)
	{
		str[i]=Number(str[i]);
	}
	var answer=findGCD(str);
	$("span").text(answer);
});

function gcd(num1,num2)
{
	if(num1===0)
	{
		return num2;
	}
	else{
		return gcd(num2%num1,num1);
	}
}


function findGCD(num)
{
	var result=num[0];
	for(var i=1;i<num.length;i++)
	{
		result=gcd(num[i],result);
	}

	return result;
}


//var n=string.length;

