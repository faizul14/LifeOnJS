const getUser = (isOffline) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const user = ['faezol', 'padli', 'renren', 'psikopat'];
            if (isOffline){
                reject(new Error('Failed get data user'));
                return;
            }
            resolve(user);
        }, 3000);
    });
};

getUser(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));