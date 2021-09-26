const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//primeira maneira
//const a3 = a1.concat(a2, [7, 8, 9], 'Luiz');
//console.log(a3);

//2 maneira - spread operator ...spread(serve tbm para obj)

const a3 = [...a1, 'Cleuber',...a2, ...[7, 8, 9]];
console.log(a3);