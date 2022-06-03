// // Code your solutions in this file
function writeCards(names,eventName){
 let messages=[];
 for(let i=0;i<names.length;i++){
   messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
 }

   return messages;
}

console.log(writeCards(["Man","Moses"],"graduation"));


function countDown(integer){
    let i=integer;
    while (i>=0){
    console.log(i);
    i--;
    }
}



// for (let age=30;age<40;age++){
//     console.log(`I'm ${age} years old.Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

