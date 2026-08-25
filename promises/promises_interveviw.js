// qns 1  prints after 1 second 
Promise.resolve(10)
    .then(value => {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(value * 2);
            }, 1000);
        });

    })
    .then(value => {
        console.log(value);
    });


    // qns 2   first then skipped as rejected as its a rule it will run only when the promise is resolved 
    Promise.reject("Error!")
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });

    // qns 3