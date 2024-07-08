const obj = { name: false, lastname: false, middleName: false };
const arr = ['name', 'lastname'];

var newObj = arr.reduce((run, prop) => ({ ...run, [prop]: true }), {});
