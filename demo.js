var promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(1);
    }, 1000)
})

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(2);
    }, 2000)
})

var promise3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(3);
    }, 3000)
})

const fn = async () => {
    const res = await Promise.all([promise1, promise2, promise3]).then((res) => {
        console.log(res);
        console.log(promise1);
        console.log(promise2);
        console.log(promise3);
    }, (err) => {
        console.log(err);
        console.log(promise1);
        console.log(promise2);
        console.log(promise3);
    })
    console.log(res);
}

fn()



