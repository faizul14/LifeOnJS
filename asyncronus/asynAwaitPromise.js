const withDrawMoney = (saldo) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (saldo < 100) {
                reject(new Error('Tidak bisa melakukan penarikan'));
                return;
            }
            resolve(saldo);
        }, 1000);
    });

const buyTicketBioskop = (money) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 10) {
                reject(new Error('Tidak bisa membeli ticket, uang tidak cukup'));
                return;
            }
            resolve(true);
        }, 1000);
});

const goInsideCinema = (ticket) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ticket) {
                resolve('Enjoy teh watching');
                return;
            }
            reject(new Error('Tidak bisa membeli ticket, uang tidak cukup'));
        }, 1000);
});

const resultWatchOrNot = async () => {
    try {
        const getMoney = await withDrawMoney(101);
        const getBuyTicket = await buyTicketBioskop(getMoney);
        const getGInsdeCamera = await goInsideCinema(getBuyTicket);

        console.log(getGInsdeCamera);
    } catch (error) {
        console.log(error.message);
    }
};

const runAsynAwaitPromise = () => {
    resultWatchOrNot();
};

module.exports = { runAsynAwaitPromise };
