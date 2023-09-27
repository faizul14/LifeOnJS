const getUser = (isOffline) => new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = ['faezol', 'padli', 'renren', 'psikopat'];
            if (isOffline) {
                reject(new Error('Failed get data user'));
                return;
            }
            resolve(user);
        }, 3000);
    });

const runAsyncronusPromise = () => {
    getUser(true)
    .then((users) => console.log(users))
    .catch((err) => console.log(err.message));
};

module.exports = { runAsyncronusPromise };
