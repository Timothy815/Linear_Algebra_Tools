let a = [
	[4,-2,1],
	[0,3,0],
	[-6,1,-2]
];


let b = [[-2],[1],[3]];

const multiplyMatrices = (matrixA, matrixB) =>{
	
	let aRows = matrixA.length, aCols = matrixA[0].length,
		bRows = matrixB.length, bCols = matrixB[0].length;
	if(aCols!==bRows) return "Undefined - Matrices are not compatible."
	let product = [];
	for(let rows = 0; rows < aRows;rows++){
		product[rows] = [];
		for(let cols = 0; cols<bCols; cols++){
			product[rows][cols] = 0;
			for(let i = 0; i< aCols;i++){
				product[rows][cols] += matrixA[rows][i]*matrixB[i][cols];
				
			}
		}
	}
	
	return product;
}

console.log(multiplyMatrices(a,b))

