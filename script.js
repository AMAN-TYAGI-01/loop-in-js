
let text="";
function even(){
    for(let i=1;i<=100;++i){
        
        
        if(i%2==0){
            text+=i+"<br>";
            document.getElementById("demo").innerHTML=text;
        }
        
    }
}

let text2="";
function odd(){
    for(let i=1;i<=200;++i){
        if(i%2!=0){
            text2+=i+"<br>";
            document.getElementById("demo1").innerHTML=text2;
        }
    }
}
odd();

// for in loop
let text1="";
const intro={
    name:"aman",
    age:21,
    city:"sehore"
}
for(let x in intro){
    text1+=intro[x]+"<br>"
    document.getElementById("demo2").innerHTML=text1;
}

const car=["audi","mersedes","bmw"];
text3="";
for(let y in car){
text3+=car[y]+"<br>";

}
document.getElementById("demo3").innerHTML=text3;

// for of loop
let loop="";
const person="amantyagi"
for(let z of person){
    loop+=z+"<br>";
}
document.getElementById("demo4").innerHTML=loop;

let loop1=" ";
let cricket=["rohit","sharma","32"];
for(let o of cricket){
    loop1+=o+"<br>";
}
document.getElementById("demo5").innerHTML=loop1;


let aman="";
var num=[20,30,43,23]
for(let b in num){
aman+=num[b]*10+"<br>";
document.getElementById("demo6").innerHTML=aman;
}
let tyagi=" ";
for(let c of num){
tyagi+=c*2+"<br>";
}
document.getElementById("demo7").innerHTML=tyagi;

let text9="";
var each=[50,43,30,22,32]
each.forEach(into);
function into(v){
    text9+=v*4+"<br>";
    document.getElementById("demo8").innerHTML=text9;
}