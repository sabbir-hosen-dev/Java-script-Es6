# Es-6

use.addrwss atewwwt second   chain  bola

```jsx
//normal function 
 function info (){
	 return "Ki khobor "
	 }
	 
	 const result = info();
	 console.log(result)
	 
	 //arow function 
	 const info2 = () => {
		 return "Ki khobor 2"
		}
		
		// short cut 
		const info = () => "ki Khobor"
				
		const result2 = info2();
		console.log(result2)
		
		//duble 
		
		const duble = (x) => x * 2
		
		//duble short cut 
		condt duble = x => x * 2
		
		console.log(duble(4))
```

### Deafult parametr

```jsx
const deafult = (x = 2, y = 3) => x + y;

console.log(deafult())
```

### logical opator holo

- and &&
- or ||
- !

```jsx
const taka = "taka disa";
const car = "ok car a jabo"

//জদি একটা সটিক হই তাহলা কাজ করবে
if(taka || car) {
	console.log("aska ami boroloks")
}

//জদি দুই টা সটিক হই তাহলা কাজ করবে
if(taka  && car ) {
	console.log("ami to aska onak boro loks"
	}
```

### Tarnary opator

x === 5 ? True value  :  false value 

```jsx
const x = 5;
console.log(x === 5 ? "number is 5" : "not five";
```

### Spared opateter  On array

const array = [3,4,5,6,7]

[…array] copy kora fele

```jsx
const names = ["sabbir", "sani", "nazim", "aslam"]

const copyNames = [...names]
```

### Distacturinig Array

- Array

```jsx
const names = ["sabbir", "sani", "nazim", "aslam"]

const [_, y, z] = ["sabbir", "sani", "nazim", "aslam"]
const [, , z] = ["sabbir", "sani", "nazim", "aslam"]

```

### Spared opateter  On array

- Object

```jsx
const myInfo = {
	name : "Sabbir",
	age: 17,
	addres: "Tangail",
	sosurBari: "Mohammod pur",
	sosorName : "katappa"
	contact : {
		phone : 0123499488,
		email: "katappa@gmail.com"
		}
	};
	
	const obj2 = {...myInfo };
	
	obj2.married = false
	
	
	console.log(myInfo)
	console.log(obj2)
	
	
	
		
		
```

### Distacturinig Array

```jsx
const myInfo = {
	name : "Sabbir",
	addres: "Tangail",
	sosurBari: "Mohammod pur",
	sosorName : "katappa"
	contact : {
		phone : 0123499488,
		email: "katappa@gmail.com"
		}
	};
	
	const (name, age:myAge,contact) = myInfo;
	const {phone} = contact;
	
	// or object under objet value get one line
	
	const {contact: {email}} = myInfo;
	
	
	console.log(name , age , contact )
```

### optional caining

```jsx
const home = object?.name?.home
```

## Array method

- forEch
- map
- filter
- reduce

### ForEtch

foretch kono kiso return kora na 

```jsx
const arr = [10,20,30,40,50,60]
let sum = 0;
// (item , index , full array)
arr.forEach(num => sum + num)
console.log(sum)
```

### Map
map akta array return kora

```jsx
const arr = [10,20,30,40,50]
let sum =  0 
const result = arr.map( num => num += sum)

```

### FInd

find sodo akta value return kora;

sortr sate mil na hola undifind return kora

```jsx
const number = [10,203,40,56,6,7,43,345,35]

let find = null;
for ( let item of numbers) {
if(item > 50){
find = item 
}
}

const result = numbers.find(item => item >50 )

const result2 = numbers.find( item => item > 50 && item % 2 === 0);

console.log(result2)
```

### Filter

filter onak gola jodi ak hoi tahola sob holaki return kora

jodi sorter sate na mila tahoka emty array return kora 

```jsx
const numbers = [39,45,6,7,3,5,6,42,22]

const result = number.filter(num => num > 5 )

console.log(result)

```

### Reduce

arr.reduce((previusValue, currentValue) ⇒ previousValue + currentValue, initial value);

```jsx
const numbers = [1,2,3,4,5,6,7,8,9]

const sum = numbers.reduce((prev,curent) => prev + current, 0);

```

### node -watch  index.js