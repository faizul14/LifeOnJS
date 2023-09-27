const { promisify } = require('util');
const { users } = require('./users');

const getUser = (isOffline, callback) => {
    setTimeout(() => {
        const user = [...users];
        if (isOffline) {
            callback(new Error('Failed get data users'), null);
            return;
        }
        callback(null, user);
    }, 3000);
};

const runAsyncronusPromisify = () => {
    const getUserPromisify = promisify(getUser);

    getUserPromisify(true)
    .then((usersValue) => console.log(usersValue))
    .catch((err) => console.log(err.message));

    getUserPromisify(false)
    .then((usersValue) => console.log(usersValue))
    .catch((err) => console.log(err.message));
};

module.exports = { runAsyncronusPromisify };
