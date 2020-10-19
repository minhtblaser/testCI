// bt1
//a
// function findOppositeNumber(n,inputNumber){
//     if(n<4||n%2!=0||parseInt(n)!= n||n>20){
//         return "n đang nhập không phải số nguyên dương chẵn nằm trong khoảng từ 4 đến 20"
//     }
//     else{
//         if(inputNumber>=n){
//             return "inputNumber không được lớn hơn hoặc bằng n "
//         }
//         else{
//             if(inputNumber>=n/2){
//                 console.log(1)
//                 return inputNumber-n/2
//             }
//             else{console.log (2)
//                 return n/2+inputNumber}
//         }
//     }
// }
// console.log(findOppositeNumber(12,2))

//b
// let string1 = prompt ("enter a string 1")
// let string2 = prompt ("enter a string2")
// let result = " ";
//     for (let i = 0; i < string1.length ||
//              i < string2.length; i++) {
//                  if (i < string1.length)
//                     result += string1[i];
//                  if (i < string2.length)
//                     result += string2[i]
//              }

// alert(result)

// bt2
// B
let result = document.getElementById("result1");
let random = Math.floor (Math.random() * 11);
let number = document.getElementById ("input1");
let count = 0;
let button= document.getElementById ("result");
    button.addEventListener('click', function (){
        let inputNumber = Number(number.value);
        console.log(inputNumber);
        console.log(random);
    if (inputNumber != random && inputNumber < 11 &&inputNumber > 0) {
        count ++
        result.innerHTML= `good luck next time, you still have two turns `
    }
    
    if (inputNumber == random && inputNumber < 11 && inputNumber > 0) {
        result.innerHTML= "you win, do you want to play again? "
        count=0;
        random = Math.floor (Math.random() * 11);
    }
    if (count == 2) {
        result.innerHTML= "you still have the last chance"
    }

    if (count == 3) {
        result.innerHTML= "you lose, see you next time or play again"
    }

    if (count > 3) {
        count = 0;
        random = Math.floor (Math.random() * 11);
        // console.log("re-render")
        // console.log(random)
    }
})


