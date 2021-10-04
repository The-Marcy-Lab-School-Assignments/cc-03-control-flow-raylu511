//1
function countFromOne(num){
  for(let i=1; i<=num;i++){
      console.log(i);
  }
}

//2
function countEveryOdd(int){
    for(let i=1;i<=int;i++){
        if(i%2===1){
            console.log(i);
        }
    }
}

//3
function isNegative(num){
    if(num>0){
        return false;
    }
    return true;
  
}

//4
function betweenFiveAndTwenty(num){
  if(num>=5 && num<=20){
      return true;
  }
  return false;
}

//5 
function isAllLowerCase(word){
    if(word.toLowerCase()===word){
        return true; 
    }
    return false;
  
}

//6 
function countMultiplesOfFive(numArray){
    let multiplesOfFiveArray = numArray.filter(number => number%5===0);
    return multiplesOfFiveArray.length;
}

// countFromOne(5);                                                      //1-5
// countEveryOdd(9);                                                     //1 3 5 7 9
// console.log(isNegative(-5));                                          //true
// console.log(betweenFiveAndTwenty(12));                                //true
// console.log(betweenFiveAndTwenty(5));                                 //true
// console.log(betweenFiveAndTwenty(100));                               //false
// console.log(isAllLowerCase('hello'));                                 //true
// console.log(isAllLowerCase('seven eleven'));                          //true
// console.log(isAllLowerCase('Seven eleven has the best slushies'));    //false
// console.log(countMultiplesOfFive([1,2,3,4,5,6,7,8,9,10]));            //2
// console.log(countMultiplesOfFive([15,23,35,45,67]));                  //3
// console.log(countMultiplesOfFive([2,6,14]));                          //0