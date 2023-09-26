const {users} = require("./users");
const {promisify} = require('util');

const getUser = (isOffline, callback) => {
    setTimeout(() => {
        const user = [...users];
        if (isOffline){
            callback(new Error('Failed get data users'), null);
            return
        }
        callback(null, user);
    }, 3000);
};

const getUserPromisify = promisify(getUser);

getUserPromisify(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));

getUserPromisify(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));