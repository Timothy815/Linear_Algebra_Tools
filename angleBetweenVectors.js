let vecA = [1,-3,1];
let vecB = [3,1,0];



const vectorLength = (vector) =>{
	let squared = vector.map(x => x*x);
	return Math.sqrt(squared.reduce((a,b)=> a+b));
}

const dottedVector = (vectorA, vectorB) =>{
	let product = vectorA.map((x,y) => x* vectorB[y]);
	return product.reduce((a,b)=> a+b);
}


const angleBetweenVectors = (vectorA, vectorB) =>{
	let pi = Math.PI;
	
	let product = dottedVector(vectorA, vectorB);
	let lengths = vectorLength(vectorA)*vectorLength(vectorB);
	let angle = (Math.acos(product/lengths))*(180/pi);
	
	
	return angle;
}



const isOrthogonal = (vectorA, vectorB)=>{
	if(dottedVector(vectorA, vectorB)=== 0){
		return true;
	}
	return false
}




const vectorAtAngle = (magnetude, angle) =>{
	let pi = Math.PI;
	let a = angle/(180/pi);
	let angVect = [Math.cos(a), Math.sin(a)];
	let result = angVect.map(x => x*magnetude);
	
	console.log(result);
	
}
vectorAtAngle(5,25);
console.log(angleBetweenVectors(vecA, vecB));
console.log(isOrthogonal(vecA, vecB));
