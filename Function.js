function thisFuntion (){
  console.log("THis is a function")
}

thisFuntion();

const function2 = () => console.log("This is a function2");

function2()

const number = [2,3,4,5,6,7,8,9];

const bigNumber = (number) => {
  let bum = 0
  number.map(num => {
    if(num > bum){
      bum = num
    }
  })
  console.log(bum)
}

bigNumber(number);

const sum = number.reduce((prev,crent) => prev + crent , 0);
console.log(sum)