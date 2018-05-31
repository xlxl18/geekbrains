function convertNumberSystem (num, ns, newns) {
	
	function parseToNS(integer, numberSystem) {
	if (numberSystem != 1) return parseInt(integer, numberSystem);
	return integer.length-1;
	}

	function intToString (integer, newNumberSystem) {
	if (newNumberSystem != 1) return integer.toString(newNumberSystem);
	let result = '';
	for (let i = 0; i <= integer; i++) result += '0';
	return result;
	}

if (ns == newns) return num+'';
if (newns == 10) return parseToNS(num, ns)+'';
let num10 = parseToNS(num, ns);
return intToString(num10, newns);
}

let i = process.argv[1];
let a = process.argv[2];
let b = process.argv[3];

let result = convertNumberSystem(i, a, b);

process.stdout.write(result);
