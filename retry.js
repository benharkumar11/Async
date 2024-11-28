function fetchDataWithRetry(url, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attemptFetch = (attempt) => {
            console.log(`Attempt ${attempt} to fetch data...`);
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP Error: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => {
                    if (attempt < retries) {
                        console.log(`Retrying in ${delay}ms...`);
                        setTimeout(() => attemptFetch(attempt + 1), delay); // Retry after delay
                    } else {
                        reject(`Failed after ${retries} attempts: ${error.message}`);
                    }
                });
        };
        attemptFetch(1);
    });
}

// Simulate API Fetch with Retry from randomuser.me
fetchDataWithRetry("https://ranuser.me/api/")
    .then(data => console.log("Fetched Data:", data.results[0])) // Print the first user result
    .catch(error => console.error("Fetch Error:", error));
