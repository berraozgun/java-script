// const secretNumber= Math.floor(Math.random() * 100);
// let userGuess=null
// let trial=0

// while (userGuess !== secretNumber){
//     userGuess=prompt("guess the number")
//     trial++;
//     alert("guess number: "+ trial)

//     if (userGuess<secretNumber){
//         alert("Go up!")
//     }

//     else if (userGuess>secretNumber){
//         alert("Go DOWN!")
//     }

//     else if(userGuess==secretNumber){
//         alert("congrats! you WON!")
//         break;
//     }
//     else {
//         alert("Stop playing around! Enter a valid number!!")

//     }

//     if(trial>4){
//         alert ("Game over. The number was " + secretNumber)
//         break;
//     }

// }

// function minMax (arr) {
//     let minNum=arr[0];
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]<minNum) {
//             minNum=arr[i]
//         }
//     }
   
//     let maxNum=arr[0];
//     for (let i=0; i<arr.length; i++){
//         if (arr[i]>maxNum) {
//             maxNum=arr[i]
//         }
//     }
//     let resultArray[];
//     resultArray[0]=minNum
//     resultArray[1]=maxNum
//     return (resultArray)
     
// }

//  minMax([9,5,23,1,-4,234,,5,76,-334234,5,7,8556,345,7])

 function addLot(begin, finish){
    let result = 0;
    for (let i = begin; i <= finish; i++){
        result=result + i;
    }
    return (result);
 }
 console.log(addLot(4,10));



 