//Task 2: Delayed Notification
//Implement a function that displays a notification after a specified delay (in milliseconds) using setTimeout.
function showNotification(message, delay) {
    setTimeout(() => {
        alert(message);
    }, delay);
}

// Example usage:
showNotification('This is your notification!', 3000); // Displays the notification after 3 seconds

//Task 3: Repeat Notification
//Develop a function that repeatedly displays a notification at fixed intervals until the user dismisses it. Use setInterval to schedule the notifications.
function startNotifications() {
    // Function to display the notification
    function showNotification() {
        if (Notification.permission === "granted") {
            new Notification("This is your notification!");
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("This is your notification!");
                }
            });
        }
    }

    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
    } else {
        // Request permission to show notifications
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                // Set an interval to show the notification every 5 seconds
                const notificationInterval = setInterval(showNotification, 5000);

                // Function to stop the notifications
                function stopNotifications() {
                    clearInterval(notificationInterval);
                    alert("Notifications stopped.");
                }

                // Add an event listener to stop notifications when the user clicks a button
                document.getElementById("stopButton").addEventListener("click", stopNotifications);
            }
        });
    }
}

// Call the function to start notifications
startNotifications();



