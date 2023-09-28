/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { runAsyncronusPromise, getUser } = require('../asyncronus/asyncronusPromise');

test('Unit test for getUser return reject', () => {
    const valueRejectExpectation = 'Failed get data user';
    return getUser(true).catch((user) => {
        expect(user.message).toBe(valueRejectExpectation);
    });
});

test('Unit test for getUser return resolve', () => {
    const userExpectation = ['faezol', 'padli', 'renren', 'psikopat'];
    return getUser(false).then((user) => {
        expect(user).toEqual(userExpectation);
    });
});

// test('Unit test runAsyncronusPromise resolve', async () => {
//     const user = ['faezol', 'padli', 'renren', 'psikopat'];
//     // const fun = await runAsyncronusPromise(false);
//     return runAsyncronusPromise(false).then((users) => {
//         expect(users).toEqual(user);
//     });
//     // expect(fun).toEqual('us');
// });

test('Unit test runAsyncronusPromise reject', () => {
    const err = new Error('Failed get data user');
    return runAsyncronusPromise(true).catch((error) => {
        expect(error.message).toEqual(err.message);
    });
});
