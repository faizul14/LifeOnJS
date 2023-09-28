/* eslint-disable no-unused-vars */
function getUser(callback) {
    setTimeout(() => {
        const user = ['faezol', 'padli', 'muhammad'];
        callback(user);
    }, 3000);
}

const userCall = (user) => {
    console.log(user);
};

// getUser(userCall);

function getUserWithError(isOffline, callback) {
    setTimeout(() => {
        const user = ['faezol', 'padli', 'muhammad1'];
        if (isOffline) {
            callback(new Error('Conection timeout'), null);
            return;
        }
        callback(null, user);
    }, 3000);
}

const userCallWithError = (error, user) => {
    if (error) {
        console.log('Terjadi kesalahana saat meminta data:', error.message);
    }
    console.log(user);
};

// getUserWithError(false, userCallWithError);
// eslint-disable-next-line no-plusplus
// for (let i = 0; i < 10; i++) {
//     console.log('melakukan proses ke', i);
// }

const runAsyncronusCallback = () => {
    getUserWithError(false, userCallWithError);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
        console.log('melakukan proses ke', i);
    }
};

module.exports = { runAsyncronusCallback };
