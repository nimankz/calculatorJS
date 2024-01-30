const input = document.getElementById("input");
const numbers = document.querySelectorAll(".numbers div");
const operators = document.querySelectorAll("#operators div");
const equals = document.getElementById("result");
console.log(equals);

// Create functions to add numbers in input
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click",function (){
        const text=numbers[i].innerText;
        if (text=="C"){
            input.innerText=""
        }
        else if ((text=="." )&& ("+-&times&divide".includes(input.innerText[input.innerText.length-1])||(input.innerText.length==0) )){
            input.innerText += "0"+text
           }   //pass)){}
        else{
            input.innerText += text
            
        }

    });
}
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click",function (){
        if (("+-&times&divide".includes(input.innerText[input.innerText.length-1])||(input.innerText.length==0) )){ {
            //pass
        }}
        else{
            input.innerText+= operators[i].innerText
        }
        console.log(operators[i])
    })}
equals.addEventListener("click",function (){
    let number1 = "";
    let number2 = "";
    let operator="";
    let op=1;
    const innerT=input.innerText;
    for (let i = 0; i < innerT.length; i++) {
        if ("1234567890.".includes(innerT[i])&&op==1){
            number1+=innerT[i]
        }
        else if ("1234567890.".includes(innerT[i])&&op==2){
            number2+=innerT[i]
        }
        else{
            operator+=innerT[i]
            op=2
        }}
    
    console.log(number1,number2);
    number1= eval(number1);
    number2= eval(number2);
    console.log(number1,number2);
    if (operator=="+"){
        input.innerText=String(number1+number2)
    }
    else if(operator=="-"){
        input.innerText=String(number1-number2)
    }
    else if(operator=="×"){
        input.innerText=String(number1*number2)
    }
    else if(operator=="÷"){
        input.innerText=String(number1/number2)
    }
});

