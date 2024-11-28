// Sequential Execution
function executeSequentially() {
    console.log("Sequential Execution Started");
    const task = (taskName) =>
        new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${taskName} completed`);
                resolve();
            }, 2000);
        });

    console.time("Sequential"); // Start timing for sequential execution
    task("Task 1")
        .then(() => task("Task 2"))
        .then(() => task("Task 3"))
        .then(() => {
            console.log("Sequential Execution Ended");
            console.timeEnd("Sequential"); // End timing here after all tasks are complete
        });
}

// Parallel Execution
function executeInParallel() {
    console.log("Parallel Execution Started");
    const task = (taskName) =>
        new Promise((resolve) => {
            setTimeout(() => {
                console.log(`${taskName} completed`);
                resolve();
            }, 2000);
        });

    console.time("Parallel"); // Start timing for parallel execution
    Promise.all([task("Task A"), task("Task B"), task("Task C")]).then(() => {
        console.log("All Tasks Completed in Parallel");
        console.timeEnd("Parallel"); // End timing here after all tasks are complete
    });
}

// Execute Sequentially and then Parallel with some delay
executeSequentially();
setTimeout(() => executeInParallel(), 7000); // Delay ensures sequential completes first




