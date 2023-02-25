const determinant = (a,c,b,d)=>{
	return (a*d)-(b*c);
}

const crossProduct = (v1, v2) => {
	let temp = [];
	let product = [];
	for(let i = 0;i < v1.length; i++){
		for(let j = 0;j<v1.length;j++){
			if(j!==i){
				temp.push(v1[j]);
				temp.push(v2[j]);
			}
		}
		if(i%2!==0){
			product.push(determinant(...temp)*-1);
		}else{
			product.push(determinant(...temp));
		}
		
		temp=[];
	}
	return product
	
}
console.log(crossProduct([1,-1,1],[-2,1,2]));
