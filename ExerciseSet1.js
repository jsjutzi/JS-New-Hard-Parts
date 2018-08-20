// Challenge 1

const sayHello = () => {
    console.log("sayHello")
}

// Uncomment the line below when ready
setTimeout(sayHello(), 1000); // should log "Hello" after 1000ms


// Challenge 2
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved!"); // Yay! Everything went well!
    }, 1000);
});

promise.then((response) => {
    console.log(response);
});

// Challenge 3

promise = new Promise((resolve, reject) => {
    reject("Rejected!")
})

promise.catch((response) => {
    console.log(response);
})


// Challenge 4

promise = new Promise(function (resolve, reject) {
    resolve("Promise has been resolved")
});

// Uncomment the lines below when ready
promise.then((response) => console.log(response));
console.log("I'm not the promise!");


// Challenge 5
const delay = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved')
        }, 1000)
    })
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise((resolve, reject) => {
    resolve('Second!')
})
var firstPromise = new Promise((resolve, reject) => {
    resolve(secondPromise)
})

firstPromise.then(response => {
    console.log(response)
})

// Challenge 7
const fakePeople = [
    { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
    { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
    { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
    const returnTime = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
        if (i >= 0 && i < fakePeople.length) {
            setTimeout(() => resolve(fakePeople[i]), returnTime);
        } else {
            reject({ message: "index out of range" });
        }
    });
};

const getAllData = () => {
    Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]).then((response) => {
        console.log(response)
    })
}
getAllData();