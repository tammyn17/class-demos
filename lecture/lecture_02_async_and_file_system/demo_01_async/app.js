function resolveAfterNSeconds(n) {
    return new Promise(resolve => {
        setTimeout(() => {resolve("finished")}, 1000*n)
    })
}

async function testAwait1() {
    console.log("test1 about to wait");
    await resolveAfterNSeconds(5);
    console.log("test1, finished the 5 second wait");
}

async function testAwait2() {
    console.log("test2 about to wait");
    await resolveAfterNSeconds(3);
    console.log("test 2 finished the 3 second wait");
}

await testAwait1();
await testAwait2();