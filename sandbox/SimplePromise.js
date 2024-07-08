let makePromise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 2) resolve('Yey');
    else reject('Nope');
    console.log('Already returned');
});
const log = console.log;

makePromise.then(msg => log(msg)).catch(msg => log(msg));
