

function turnScalarToMatrix(scalar)
{
	let matrix = [];
	matrix.push([scalar]);
	return matrix;
}

function turnMatrixToScalar(matrix)
{
	return matrix[0][0];
}

function turnVectorToMatrix(vector)
{
	let matrix = [];
	for(let i = 0; i < vector.length; i ++)
		matrix.push( [vector[i]] );
	return matrix;
}

function turnMatrixToVector(matrix)
{
	let vector = [];
	for(let i = 0; i < matrix.length; i ++)
		vector.push(matrix[i][0]);
	return vector;
}




function typeOfValue(matrix)
{
	let wholeRows = matrix.length;
	if(wholeRows == undefined)
		return 0;
	let wholeColumns = matrix[0].length;
	if(wholeColumns == undefined)
		return 1;

	for(let row = 0; row < wholeRows; row ++)
	{
		if(matrix[row].length != wholeColumns)
			return 2;
	}
	if(wholeColumns != wholeRows)
		return 3;
	else
		return 4;
}

function typeOfMatrix(matrix)
{
	if(matrix.length == 1 && matrix[0].length == 1)
		return 0;
	for(let i = 0; i < matrix.length; i ++)
	{
		if(matrix[i].length != 1)
			return 2;
	}
	return 1;
}

function generalToMatrix(general)
{
	if(typeOfValue(general) == 0)
		return turnScalarToMatrix(general);
	else if(typeOfValue(general) == 1)
		return turnVectorToMatrix(general);
	else
		return general;
}

function matrixToGeneral(matrix)
{
	if(typeOfMatrix(matrix) == 0)
		return turnMatrixToScalar(matrix);
	else if(typeOfMatrix(matrix) == 1)
		return turnMatrixToVector(matrix);
	else
		return matrix;
}

function fDeterminant(matrix){
	
	if(typeOfValue(matrix) != 4)
		return false;
	else if(typeOfValue(matrix) == 0)
		return matrix;

	let determinant = 0;
	for(let i = 0; i < matrix[0].length; i ++)
	{
		if(matrix[0].length > 1)
		{
			let minor = fMinor(matrix, 0, i);
			determinant += matrix[0][i] * (-1)**( (0 + 1) + (i + 1)) * fDeterminant(minor);
		}
		else
		{
			determinant += matrix[0][i];
		}
		
	}
	return determinant;
}

function fMinor(matrix, r, c)
{
	let minor = copyMatrix(matrix);
	minor.splice(r, 1);
	for(let i = 0; i < minor.length; i ++)
		minor[i].splice(c, 1);
	return minor;
}

function transposeOfAMatrix(matrix)
{
	if(typeOfValue(matrix) == 2)
		return false;

	let copy = generalToMatrix(matrix);
	
	let transpose = [];
	for(let i = 0; i < copy.length; i ++)
	{
		for(let j = 0; j < copy[i].length; j ++)
		{
			if(i == 0)
				transpose[j] = [];
			transpose[j][i] = copy[i][j];
		}
	}
	return matrixToGeneral(transpose);
}

function fInverseMatrix(matrix)
{
	let determinant = fDeterminant(matrix);
	if(determinant == 0)
		return false;

	let inverseMatrix = [];
	for(let i = 0; i < matrix.length; i ++)
	{
		inverseMatrix[i] = [];
		for(let j = 0; j < matrix[i].length; j ++)
		{
			inverseMatrix[i][j] = (-1)**(i + 1 + j + 1) * fDeterminant(fMinor(matrix, i, j));
			inverseMatrix[i][j] /= determinant;
		}
	}

	inverseMatrix = transposeOfAMatrix(inverseMatrix);

	return inverseMatrix;
}


function mul(a, b)
{
	if(typeOfValue(a) == 2 || typeOfValue(b) == 2)
		return false;

	let m = generalToMatrix(a);
	let n = generalToMatrix(b);

	if(m[0].length != n.length)
		return false;
	
	let product = [];
	for(let i = 0; i < m.length; i ++)
	{
		product[i] = [];
		for(let j = 0; j < n[0].length; j++)
		{
			product[i][j] = 0;
			for(let k = 0; k < m[0].length; k ++)
				product[i][j] += m[i][k] * n[k][j];
		}
	}

	return matrixToGeneral(product);
}

function identityMatrix(num)
{
	let identity = [
		[num, 0, 0],
		[0, num, 0],
		[0, 0, num]
	];
	return identity;
}

function crossProduct(u, v)
{
	const w = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
	return w;
}

function distanceBetweenVectors(u, v = [0, 0, 0])
{
	return Math.sqrt((u[0]-v[0])**2 + (u[1]-v[1])**2 + (u[2]-v[2])**2);
}

function printMatrix(matrix)
{
	console.log("MATRIX_________________________________");
	const epsilon = 10**(-6);
	
	for(let i = 0; i < matrix.length; i ++)
	{
		let row = []
		for(let j = 0; j < matrix[i].length; j ++)
		{
			let value = matrix[i][j];
			if(Math.abs(value - Math.round(value)) < epsilon)
				value = Math.round(value);

			value = (Math.round(100 * value)) / 100;
			row.push(value);
		}

		console.log(row);
	}
	
	return matrix;
}

function copyArray(array)
{
	let copy = [];
	for(let i = 0; i < array.length; i ++)
	{
		if(typeof(array[i]) == "object")
			copy[i] = copyArray(array[i]);
		else
			copy.push(array[i]);
	}
	return copy;
}

function sliceFuncionaMal(matrix){
	console.log("matrix1", matrix);
	let cualquiercosa = matrix.slice();

	cualquiercosa[0][0] = 199;
	console.log("cualquiercosa", cualquiercosa);
	console.log("matrix2", matrix);
}

function add(matrixOne, matrixTwo)
{
	
	let matOne = [];
	let matTwo = [];
	if(typeOfValue(matrixOne) == 0)
		matOne = turnScalarToMatrix(matrixOne);
	else
		matOne = copyArray(matrixOne);
	if(typeOfValue(matrixOne) == 0)
		matTwo = turnScalarToMatrix(matrixTwo);
	else
		matTwo = copyArray(matrixTwo);

	let result = [];
	for(let i = 0; i < matOne.length; i ++)
	{
		if(typeof(matOne[i]) == "object")
			result[i] = addMatrices(matOne[i], matTwo[i])
		else
			result[i] = matOne[i] + matTwo[i];
	}
	return matrixToGeneral(result);;
}

function valueInArray(value, array)
{
	for(let i = 0; i < array.length; i ++)
	{
		if(array[i] == value)
			return true;
	}
	return false;
}