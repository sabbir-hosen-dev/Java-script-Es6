const students = [
  "sabbir", "sani", "aslam","nazim","tamim","toli","rohokamin"
]
const number = [4,5,9,10,33,45, 88, 27, 90,87,36,53,45]

// students.map(student => console.log(student))

// number.map(num => console.log(num > 20 ))

// console.log(818 + 16 + 13+ 25+ 6+ 39 + 47 + 12 + 8 + 88 + 7 + 58 + 17 + 29 +28 + 22 + 23 + 36 + 64 + 2 + 38 +  51 + 99 +5 + 30 + 69 + 29 + 29 + 170 + 98 + 53 + 200 + 65 + 74 + 1068 )


const sum = number.reduce((prev, curent) => prev + curent, 0);
console.log(sum)