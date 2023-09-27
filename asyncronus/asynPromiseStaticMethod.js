/* eslint-disable no-unused-vars */
const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 100);
    });
const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
const promise3 = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3);
        }, 3000);
    });

const runAsynPromiseStaticMethod = () => {
    const promiseAll = () => {
        Promise.all([promise1, promise2, promise3()])
        .then((values) => console.log(values))
        .catch((err) => console.log(err.message));
    };
    promiseAll();
};

module.exports = { runAsynPromiseStaticMethod };
