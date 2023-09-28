/* eslint-disable no-undef */
const {
    runAsynAwaitPromise,
    resultWatchOrNot,
    withDrawMoney,
    buyTicketBioskop,
    goInsideCinema,
} = require('../asyncronus/asynAwaitPromise');

test('Unit test withDrawMoney return resolve', async () => {
    const wd = await withDrawMoney(200);
    expect(wd).toBe(200);
});

test('Unit test withDrawMoney return reject', async () => {
    const error = new Error('Tidak bisa melakukan penarikan');
    expect.assertions(1);
    try {
        await withDrawMoney(90);
    } catch (e) {
        expect(e.message).toEqual(error.message);
    }
});

test('Unit test buyTicketBioskop return resolve', async () => {
    const wd = await buyTicketBioskop(200);
    expect(wd).toEqual(true);
});

test('Unit test buyTicketBioskop return reject', async () => {
    const error = new Error('Tidak bisa membeli ticket, uang tidak cukup');
    expect.assertions(1);
    try {
        await buyTicketBioskop(9);
    } catch (e) {
        expect(e.message).toEqual(error.message);
    }
});

test('Unit test goInsideCinema return resolve', async () => {
    const wd = await goInsideCinema(true);
    expect(wd).toBe('Enjoy teh watching');
});

test('Unit test goInsideCinema return reject', async () => {
    const error = new Error('Tidak bisa membeli ticket, uang tidak cukup');
    expect.assertions(1);
    try {
        await goInsideCinema(false);
    } catch (e) {
        expect(e.message).toEqual(error.message);
    }
});

test('Unit test resultWatchOrNot', async () => {
    const result = 'Enjoy teh watching';
    const fun = await resultWatchOrNot(100);
    expect(fun).toEqual(result);
});

test('Unit test resultWatchOrNot failed', async () => {
    const error = new Error('Tidak bisa melakukan penarikan');
    try {
        await resultWatchOrNot(99);
    } catch (e) {
        expect(e.message).toEqual(error.message);
    }
});

test('Unit test runAsynAwaitPromise', async () => {
    const result = 'Enjoy teh watching';
    const fun = await runAsynAwaitPromise();
    expect(fun).toEqual(result);
});
