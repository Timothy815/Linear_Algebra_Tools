//Couchy-schwarz inequality

let vecA = [6,5];
let vecB = [4,0];



const vectorLength = (vector) =>{
	let squared = vector.map(x => x*x);
	return Math.sqrt(squared.reduce((a,b)=> a+b));
}

const dottedVector = (vectorA, vectorB) =>{
	let product = vectorA.map((x,y) => x* vectorB[y]);
	return Math.abs(product.reduce((a,b)=> a+b));
}


const areLinearlyIndependent = (vectorA, vectorB)=>{
	let prodLengths = (vectorLength(vectorA)*vectorLength(vectorB)).toFixed(5);
	let absDotProd = Math.abs(dottedVector(vectorA, vectorB)).toFixed(5);
	console.log(absDotProd);
	console.log(prodLengths);
	if(absDotProd < prodLengths){
		return true;
	}
	return false;
}


console.log(areLinearlyIndependent(vecA, vecB));