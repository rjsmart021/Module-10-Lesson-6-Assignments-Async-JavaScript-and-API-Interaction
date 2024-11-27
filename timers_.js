let timerInterval;
  
function startTimer() {
    console.log('Start Timer');
  
    const durationInput = document.getElementById('Duration');
    let duration = parseInt(durationInput.value, 10);
    const timerDisplay = document.getElementById('Timer');
  
    console.log('Parsed Duration:', duration);
  
    if (isNaN(duration) || duration <= 0) {
        alert('Error, Please Enter Positive Number');
        return;
    }
  
    clearInterval(timerInterval);
  
    timerInterval = setInterval(() => {
        console.log('Interval Tick, Duration:', duration);
  
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
    if (duration <= 0) {
        console.log('Timer expired');
        clearInterval(timerInterval);
        timerDisplay.textContent = '00:00';
        showNotification('Timer Expired!');
        return;
    }
  
    duration--;
    }, 1000);
}
  
function showNotification(message) {
    console.log('Showing Notification:', message);
    const notification = document.createElement('div');
    notification.textContent = message;
    document.getElementById('notifications').appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 5000);
}
  
