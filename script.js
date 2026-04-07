function checkConnection() {
    const statusDisplay = document.getElementById('online-status');
    const log = document.getElementById('log-window');
    const timeDisplay = document.getElementById('time-stamp');
    
    // Get current time
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    
    // Check if browser is online
    const isOnline = navigator.onLine;
    
    // Update UI
    statusDisplay.innerText = isOnline ? "ONLINE" : "OFFLINE";
    statusDisplay.style.color = isOnline ? "#00ff41" : "#ff3e3e";
    timeDisplay.innerText = timeStr;

    // Create a log entry
    const newEntry = document.createElement('p');
    newEntry.innerText = `[${timeStr}] Pinging gateway... Result: ${isOnline ? 'Success' : 'Failed'}`;
    log.appendChild(newEntry);
}

function clearLogs() {
    document.getElementById('log-window').innerHTML = '<p class="system-msg">[SYSTEM] Logs cleared.</p>';
}