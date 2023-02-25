let vector = [-5,3,-3];
let normal_vector = [-4,-3,9];

const planeFormula = (vector, normal_vector) =>{
	let constants = vector.map((x,y)=>x* normal_vector[y]);
	let constSum = constants.reduce((a,b)=>a+b);
	let signA = normal_vector[1]>0 ? "+":"-";
	let signB = normal_vector[2]>0 ? "+":"-";
	return `${normal_vector[0]!=0 ? normal_vector[0]+"x":""} ${signA} ${normal_vector[1]!=0 ? Math.abs(normal_vector[1])+"y":""} ${signB} ${normal_vector[2]!=0 ? Math.abs(normal_vector[2])+"z":""} = ${constSum}`;
}

console.log(planeFormula(vector, normal_vector));