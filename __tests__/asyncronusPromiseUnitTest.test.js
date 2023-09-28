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

// test('Unit test for runAsyncronusPromise', async () => {
//     const userExpectation = ['faezol', 'padli', 'renren', 'psikopat'];
//     expect(runAsyncronusPromise()).toEqual(userExpectation);
    // return runAsyncronusPromise().then((user) => {
    //     expect(user).toEqual(userExpectation);
    // });
    // const result = await runAsyncronusPromise();
    // expect(result).toBe(userExpectation);
// });
