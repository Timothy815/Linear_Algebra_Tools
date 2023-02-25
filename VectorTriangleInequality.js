//Triangle Vector Inequality using couchySchwarzInequality
// c <= a + b
// ||u + v|| <= ||u|| + ||v|| where u and v are vectors

let sideA = [1,1,2,2];
let sideB = [1,0,-3,1];

const add = (vectorA, vectorB)=>{
	return vectorA.map(((x,y)=> x + vectorB[y]));
}

const vectorLength = (vector) =>{
	let squared = vector.map(x => x*x);
	return Math.sqrt(squared.reduce((a,b)=> a+b));
}


const isTriangle = (sideA, sideB) =>{
	let aLength = vectorLength(sideA);
	let bLength = vectorLength(sideB);
	let cLength = vectorLength(add(sideA,sideB));
	if(cLength < (aLength+bLength)){
		return true;
	}
	return false;
}

console.log(isTriangle(sideA, sideB));