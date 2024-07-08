function checkCredentials(uname, password) {
    return new Promise((resolve, reject) => {
        if (uname === 'Joe' && password === '123') resolve('Jose Francisco');
        else reject('Invalid Credentials');
    });
}

function getUserType(user) {
    return new Promise((resolve, reject) => {
        resolve('Administrator');
    });
}

checkCredentials('Joe', '123')
    .then(user => {
        console.log(`Hi ${user}`);
        return getUserType(user);
    })
    .then(type => {
        console.log(`You're an ${type}`);
    })
    .catch(err => console.log(err));
