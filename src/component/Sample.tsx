/*import React from "react";
const Sample=()=>{



    return(<></>)
}

export default Sample;*/

const user={
    firstName:"Angel",
    lastName:'Dilass',
    role:"Entertainer"
    
}
//console.log(user.name)
function greet(person:string,date:Date){
console.log(`Hello ${person},today date is${date}`)
}
greet("Prashant",new Date());



const simplePromise= new Promise<{message:string}>((resolve)=>{
resolve({message:'success'});
});
(async()=>{
    const result=await simplePromise;
    console.log(result.message)
})();




async function someName():Promise<string> {
return "Hello World"
}
const result=someName()
console.log(result);

async function getFavoriteNumber(): Promise<number> {
    return 26;
  }
  console.log(getFavoriteNumber());


  function printCord(pt:{x:string;y:string}){
    console.log(pt.x+ "the cordinate of X")
    console.log(pt.y+ "the cordinate of y")

}
printCord({x:"hey X",y:"hey Y"})


function printName(obj:{first:string;last?:string}){
  //  console.log(obj.last.toUppercase());

    if(obj.last!==undefined){
        console.log(obj.last.toUpperCase())

    }
    console.log(obj.last?.toUpperCase())
}
 
function printId(id:number|string){
    console.log(id);
    if(typeof id==="string"){
        console.log(id.toUpperCase())
    }else{
        console.log(id)
    }
}
printId(354);
printId("Hello id");
printId('123');
//printId({myId:999})


interface Point{
    x:number;
    y:number;
}
function printCordin(pt:Point){
    console.log(pt.x )
     console.log( pt.y)

}
printCordin({x:10,y:20})


interface Animal{
    name:string;
}
interface Bear extends Animal{
    honey:boolean;
}
/*const bear= getBear();
bear.name;
bear.honey;*/
