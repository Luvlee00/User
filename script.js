// Initialize AOS
AOS.init();

// Event listeners for buttons
document.getElementById('enrollNowBtn').addEventListener('click', function() {
    this.classList.toggle('hover');
});

document.getElementById('signUpBtn').addEventListener('click', function() {
    this.classList.toggle('hover');
});

// Pause and reset video on modal hide
$('#videoModal').on('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.pause();
    video.currentTime = 0;
});

// Show login modal on button click
document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        $('#loginModal').modal('show');
    });
});

// Redirect function for login options
function redirectToLogin(page) {
    window.location.href = page;
}

$(document).ready(function () {
    $('#aboutCarousel').carousel({
        interval: 2000
    });
});