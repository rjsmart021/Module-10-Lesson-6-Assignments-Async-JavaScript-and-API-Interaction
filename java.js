//Task 2: Delayed Notification
//Implement a function that displays a notification after a specified delay (in milliseconds) using setTimeout.
function showNotification(message, delay) {
    setTimeout(() => {
        alert(message);
    }, delay);
}

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

    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications.");
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                const notificationInterval = setInterval(showNotification, 5000);

                function stopNotifications() {
                    clearInterval(notificationInterval);
                    alert("Notifications stopped.");
                }

                document.getElementById("stopButton").addEventListener("click", stopNotifications);
            }
        });
    }
}

startNotifications();



