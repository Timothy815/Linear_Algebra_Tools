let matrix = [
	[3,2,1,14],
	[1,2,3,10],
	[-2,3,1,1]
//	[3,-3,2,22],
//	[1,2,3,3],
//	[2,2,-2,-4]

];

const mult = (matrix, row, scalar) =>{
	let newRow = matrix[row].map(x=>x*scalar);
	matrix[row] = newRow
	return matrix;
}

const add = (matrix, row1, row2, repRow, scalar =1)=>{
	let sums = matrix[row1].map((r1, r2) => (r1*scalar) + matrix[row2][r2] );
	matrix[repRow]=sums;
	return matrix;
}

const swapRows = (matrix, row1, row2) =>{
	const temp = matrix[row1];
	matrix[row1] = matrix[row2];
	matrix[row2]= temp;
	return matrix;
}

const largestLeftmostToTop = (matrix, colIndex=0)=>{
	let max =0;
	let maxIndex = 0;
	
	for(let i=0;i<matrix.length;i++){
		if(Math.abs(matrix[i][colIndex])>max){
			max = Math.abs(matrix[i][colIndex]);
			maxIndex = i;
		}
	}
	return swapRows(matrix, 0, maxIndex);
}

const order = (matrix)=>{
	
	for(let i = 0; i < matrix.length;i++){
		for(let j = 0;j<matrix.length; j++){
			if(matrix[i][j]===1){
				swapRows(matrix, i, j);
			}
		}
	}
	return matrix;
}

const printMatrix = (matrix)=>{
	let str = "";
	for(let i of matrix){
		str+="|"
		for(let j of i){
			str+= j.toFixed(2) +"   ";	
		}
		str+="|\n\n"
		
		
	}
	console.log(str)
}

const gaussJordanElim = (matrix)=>{
	for(let c = 0; c<matrix.length;c++){
		largestLeftmostToTop(matrix, c);
		mult(matrix, 0, 1/matrix[0][c]);
		for(let r = 1; r < matrix.length; r++){
//			printMatrix(matrix);
			add(matrix, 0, r, r, -matrix[r][c]);
			
		}
		
	}
	
	order(matrix);
	//printMatrix(matrix);
	return matrix
}


printMatrix(matrix);
gaussJordanElim(matrix);
printMatrix(matrix);

//const gaussJordanElim = (matrix)=>{
//	largestLeftmostToTop(matrix, 0);
//	mult(matrix, 0, 1/matrix[0][0]);
//	add(matrix, 0, 1, 1, -matrix[1][0]);
//	add(matrix, 0, 2, 2, -matrix[2][0]);
//	
//	largestLeftmostToTop(matrix, 1);
//	mult(matrix, 0, 1/matrix[0][1]);
//	add(matrix, 0, 1, 1, -matrix[1][1]);
//	add(matrix, 0, 2,2, -matrix[2][1]);
//	
//	largestLeftmostToTop(matrix, 2);
//	mult(matrix, 0, 1/matrix[0][2]);
//	add(matrix, 0, 1, 1, -matrix[1][2]);
//	add(matrix, 0, 2, 2, -matrix[2][2]);
//	
//	largestLeftmostToTop(matrix, 2)
//	largestLeftmostToTop(matrix, 1)
//	largestLeftmostToTop(matrix, 0)
//	return matrix
//}



/*
1  Swap the rows so that all rows with all zero entries are on the bottom

2  Swap the rows so that the row with the largest, leftmost nonzero entry is on top.

3  Multiply the top row by a scalar so that top row's leading entry becomes 1.

////Should be a separate nested loop right?////

4  Add/subtract multiples of the top row to the other rows so that all other entries in the column containing the top row's leading entry are all zero.

5 Repeat steps 2-4 for the next leftmost nonzero entry until all the leading entries are 1.

6 Swap the rows so that the leading entry of each nonzero row is to the right of the leading entry of the row above it.
*/