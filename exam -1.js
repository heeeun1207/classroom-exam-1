//! Question1 덧셈 로직 만들기
function examOne(first,second) {
  // 매개변수가 문자열일 경우 ,다음과 같은 문자열이 나타나도록 작성하시오.
  // "문자열 데이터를 입력하셨습니다."
  //*  (1)문자열 type 이 string //  일 경우 => 조건문 // 다음과 같은 문자열이 나타나도록 해라 => console.log
  //*  (2) 2 + 3 = 5 가 나오도록 덧셈 로직 만들기 . 
    //하나라도 문자열일경우
    if (typeof first === "string" || typeof second === "string") {
    // if (typeof first === "string" && typeof second === "string") {
    console.log("문자열 데이터를 입력하셨습니다.");
    return;
    }
    return first + second;
    };
    console.log(examOne(2,3)); //5 
    // examOne("흰" , "세상" ); 
    // console.log(examOne(7,"흰"));

// //! Question 2 곱셈 로직 만들기
    // 숫자여야만 실행되도록 타입을 확인하는 로직을 작성하시오
    // function examTwo(first, second, third) {
    //* 처음작성  
    // if (typeof first === "number" && typeof second ==="number" && typeof third ==="number"){
    //   return first * second * third }
    // } 
    // console.log(examTwo(2,3,4));  // 24 
    // console.log(examTwo(2,"힁",4));  // undefined 실행은 된다. 
    //* 두번째 
    // if (typeof first !== "number" || typeof second !=="number" || typeof third !=="number"){
    // console.log("숫자여야만 실행되게 하거라")
    // return };
    // return first * second * third }; 
    // console.log(examTwo(2,3,4)); //24
    // console.log(examTwo(2,"흰",4));// undefined 뜬다 . 
  //* 하나라도 숫자가 아닐경우에 함수가 실행되지 않고 메세지가 뜨게 만들기.
  //* 세번째 undefined 말고 error 뜨게 만들고 싶으면? gpt 물어봤어요.
  // throw new는 자바스크립트에서 예외를 발생시키는 메서드이다. 
  function examTwo(first, second, third) {
  if (typeof first !== "number" || typeof second !== "number" || typeof third !== "number") {
      throw new Error("error.");
  }
  return first * second * third;
  };
  console.log(examTwo(2, 3, 4)); //24 
  // console.log(examTwo(2, "흰", 4));  //error

//! Question 3 문자열 길이 구하기.
// 문자열만 실행되도록 타입을 확인하는 로직을 작성하시오.
//* length 프로퍼티를 사용하지 않고 길이값을 구하시오.
function examThree(str) {
  if (typeof str !== "string"){
    console.log("문자열만 나와라!")
    return;
  }
  //in 연산자는 객체에서 주어진 프로퍼티가 있는지 확인하는 데 사용된다.
  let count = 0;
  for (let i in str) {
    count++;
  }
  return count;
};
console.log(examThree("hello")); // 5
console.log(examThree("나는 반복문 연습이 더 필요해")); //16
console.log(examThree(123)); //undifined 

// !Question 4 최솟값 판별하기. => min 
// 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
// * 배열 확인하기 Array.isArray(obj)
// * 시도1 => if(array !== Array.isArray(array)){ => 배열이 아닌것을 판단하는 것 . 
// * array가 배열만을 받아야한다.
// 느낌표 기호는 논리 부정 연산자. 뒤에 따라오는 표현식의 결과를 반대로 만든다. 
function examFour(array) {
  if (!Array.isArray(array)) {
  console.log(" 배열만 입력 가능 ! ");
  return;
  }
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
  if (array[i] < min) {
  min = array[i];
  }
  }
  return min;
  };
  console.log("--min--");
  console.log(examFour([3,1,4,2])); //1
  console.log(examFour("흰세상")); // 배열만 입력 가능! 

//! 최댓값 
//   console.log("--max--");
// function examFour(array) {
//   if (!Array.isArray(array)) {   //여기 
//   console.log("배열만 입력 가능!");
//   return;
//   }
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {   
//   if (array[i] >= max) {    //여기 
//   max = array[i];
//   }
//   }
//   return max;
//   };
//   console.log(examFour([3,1,9,2])); // 9

// //! Question 5 배열값 누산(총합)하기.  = sum 
// 배열(array)만을 인자로 받아서 실행할 수 있도록 작성하시오.
function examFive(array) {
  if (!Array.isArray(array)) {   
  console.log("배열만 입력 가능!");
  return;
  }
  let sum= 0; 
  for (let i = 0; i < array.length; i++) {
  // sum =sum + array[i];
  sum += array[i];
  }
  return sum;
};
console.log(examFive([1,2,3]));  // 6
console.log(examFive("흰세상"));  //undefined





