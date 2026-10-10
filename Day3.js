/* //callback function



let browser="chrome"

function checkBrowserVersion(callback){
    setTimeout(()=>{
        callback(browser)},2000)
}
function browserVersion(version){
    console.log(`Browser version using call back`,version);
    
}
checkBrowserVersion(browserVersion);

//sum of numbers
let number =[10,20,30,40,50,60,70,80,90]
sum=0
for (let index = 0; index < number.length; index++) {
    sum=sum+number[index]
      
}
console.log(`The sum of total number is`,sum); */

//String Anagram
//1.

function lengthCheck() {
    let input1 = "Hello World";
    let inputSplit = input1.split(" ");
    let lastWord = inputSplit[inputSplit.length - 1];
    console.log("length of", lastWord, "is", lastWord.length);
}
lengthCheck()

//2.
function trimCheck(){
    let input2 = "fly me to the moon"
    let trimlenght=input2.trim()
    let trimsplit=trimlenght.split(" ")
    console.log(trimsplit);
    let lastTrim=trimsplit[trimsplit.length-1]
    console.log("The lenght of", lastTrim,"is",lastTrim.length);  
    
}
trimCheck()

//3.
function example1(){
    let a1="listen"
    let a2="silent"
    a1.toUpperCase()
    a2.toUpperCase()
    let lenght1=a1.split("")
    let lenght2=a2.split("")
    let arrsort=lenght1.sort().join("")
    let arrsort1=lenght2.sort().join("")
    if (arrsort===arrsort1){
        console.log("True");
    }else{
        console.log("False");
        
    }
}
example1()

//palindrome
function reversestr(){
    let palindrome="MADAM"
    let palindromeSplit=palindrome.split("")
    let reverse=""
    for (let index = palindromeSplit.length-1; index >=0; index--) {
        reverse=reverse+palindrome[index]        
    }
    console.log(reverse);
    if(reverse===palindrome){
        console.log("True");
    }else{
        console.log("False");        
    }    
}
reversestr()