let matrixA = [
	[1,2],
	[3, 4]
];

let matrixB = [
	[5,6],
	[7,8]
];

const matrixAddition = (matrixA, matrixB)=>{
	let summedMatrix =[];
	for(let r =0;r<matrixA.length;r++){
		summedMatrix[r]=[];
		for(let c = 0;c<matrixA.length;c++){
			summedMatrix[r][c] = matrixA[r][c]+ matrixB[r][c];
		}
	}
	return summedMatrix;
}

const matrixSubtraction = (matrixA, matrixB)=>{
	let summedMatrix =[];
	for(let r =0;r<matrixA.length;r++){
		summedMatrix[r]=[];
		for(let c = 0;c<matrixA.length;c++){
			summedMatrix[r][c] = matrixA[r][c]- matrixB[r][c];
		}
	}
	return summedMatrix;
}

const matrixScalar = (matrix, scalar)=>{
	let scaledMatrix =[];
	for(let r =0;r<matrixA.length;r++){
		scaledMatrix[r]=[];
		for(let c = 0;c<matrixA.length;c++){
			scaledMatrix[r][c] = matrix[r][c]*scalar;
		}
	}
	return scaledMatrix;
}


