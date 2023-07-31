
function sumArr(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  
  const numArr = [1, 2, 3, 4, 5];
  const result = sumArr(numArr);
  console.log('Sum:', result);//print result to the console


  //for this file to execute
  //node Task2.js