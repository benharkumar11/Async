// changing promises for Login Flow

function validateCredentials(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password === "password") {
                resolve({ userId: 1 });
            } else {
                reject("Invalid credentials");
            }
        }, 1000);
    });
}

function fetchUserDetails(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId, name: "Ben", email: "ben@gmail.com" });
        }, 1000);
    });
}

function fetchUserActivity(userDetails) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId: userDetails.userId, activities: ["Login", "Viewed Dashboard"] });
        }, 1000);
    });
}

// Simulate Login Flow
validateCredentials("user", "password")
    .then(user => {
        console.log("Login Successful", user);
        return fetchUserDetails(user.userId);
    })
    .then(userDetails => {
        console.log("User Details", userDetails);
        return fetchUserActivity(userDetails);
    })
    .then(activity => {
        console.log("User Activity", activity);
    })
    .catch(error => {
        console.error("Error:", error);
    });
