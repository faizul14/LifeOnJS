const runAsyncronus = () => {
    console.log('ini pertama akan di jalankan');

    setTimeout(() => {
        console.log('ini kedua yang akan di jalankan');
    }, 3000);

    console.log('ini ketiga yang akan di jalankan');
};

module.exports = { runAsyncronus };
