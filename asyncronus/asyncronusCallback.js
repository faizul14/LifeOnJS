function getUser (callback) {

    setTimeout( ()=> {
        const user = ['faezol', 'padli', 'muhammad'];
        callback(user)
    },3000 );

};

const userCall = (user) => {
    console.log(user);
};

// getUser(userCall);

function getUserWithError (isOffline, callback) {
    setTimeout( ()=> {
        const user = ['faezol', 'padli', 'muhammad'];
        if (isOffline) {
            callback(new Error('Conection timeout'), null);
            return;
        }
        callback(null, user);
    }, 3000);
};

const userCallWithError = (error, user) => {
    if (error) {
        console.log('Terjadi kesalahana saat meminta data:', error.message);
    }
    console.log(user);
}

getUserWithError(false, userCallWithError);
for(let i = 0; i < 10; i++){
    console.log('melakukan proses ke', i);
}