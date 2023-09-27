const withDrawMoney = (amount) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount < 100) {
                reject(new Error('Uang tidak bisa di ambil'));
                return;
            }
            resolve(amount);
        }, 1000);
    });

const buyTicketBioskop = (money) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 10) {
                reject(new Error('Uang tidak dapat membeli tiker'));
            }
            // if true have ticker
            resolve(true);
        }, 1000);
    });

const goInsideCinema = (ticket) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error('no ticket'));
            }
            resolve('enjoy the cinema');
        }, 1000);
    });

const watchingCinema = () => {
    withDrawMoney(200)
        .then((money) => buyTicketBioskop(money))
        .then((ticket) => goInsideCinema(ticket))
        .then((result) => console.log(result))
        .catch((err) => console.log(err.message));
};

const runAsynChainingPromise = () => {
    watchingCinema();
};

module.exports = { runAsynChainingPromise };
