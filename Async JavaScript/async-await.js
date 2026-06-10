// example of async/await:
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 3000);
    });
}

async function getData() {
    console.log("Fetching data...");
    let result = await fetchData();
    console.log(result);
}

getData();


// handling errors with try/catch
async function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Failed to fetch data!");
        }, 3000);
    });
}

async function getDataWithErrorHandling() {
    try {
        let result = await fetchWithError();
        console.log(result);
    } catch (error) {
        console.log("Error: " + error);
    }
}

getDataWithErrorHandling();


// comparing promise vs async/await:

// Using Promises:
function fetchDataWithPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched with Promise!");
        }, 2000);
    });
}

fetchDataWithPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });


// Using Async/Await:
async function fetchDataWithAsyncAwait() {
    try {
        let result = await fetchDataWithPromise();
        console.log(result);
    } catch (error) {
        console.log("Error: " + error);
    }
}

fetchDataWithAsyncAwait();