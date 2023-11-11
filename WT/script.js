function openNewPageAndRedirect() {
    var newWindow = window.open('', '_blank');
    var seconds = 3;
    
    function startCountdown() {
        if (seconds > 0) {
            newWindow.document.body.innerHTML = '<center><h2>Redirecting to secure payment in ' + seconds + ' seconds...</h2></center>';
            seconds--;
            setTimeout(startCountdown, 1000);
        } 
        else {
            newWindow.location.href = 'paymentGate.html';
            newWindow.history.pushState(null, '', 'home.html');
        }
    }
    startCountdown();
}

document.getElementById('btn').addEventListener('click', openNewPageAndRedirect);

function bookingPage() {
    window.location.href = 'booking.html';
}