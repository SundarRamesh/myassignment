//IsOddOrEven
let number = 2
function isOddOrEven(number){
    if(number %2===0){
    console.log("Even");  
}
else{
    console.log("Odd");
    
}
}
isOddOrEven(number)

//NumberType

let number1=-10
function numberType(number1){
    if(number1>0){
    console.log(`Its positive number`);
    }
else if(number1<0){
    console.log(`Its negative number`);
}
else{
    console.log(`Its neutral number`);
}
}
numberType(number1)

//conditional statement
//a)

let browserName='webkit'

function launchBrowser(browserName){
    if(browserName==="Chrome"){
    console.log("Its chrome browser");
}
else if(browserName==="firefox"){
    console.log("Its firefox browser");
}
else{
    console.log("Its other browser");   
}
}
launchBrowser(browserName)

//b)
let testRun="Day1"
switch (testRun) {
    case "Day2":
        console.log(`Its regression testing`);
        break;
    case "Day3":
        console.log("Its pre-release testing");
        break;
    default:
        console.log("Its smoke tesing");
        break;
}


