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

async function Login() {
    try {
        let user = await checkCredentials('Joey', '123');
        console.log(`Hi ${user}`);
        let type = await getUserType(user);
        console.log(`You're an ${type}`);
    } catch (err) {
        console.log(err);
    }
}

Login();
