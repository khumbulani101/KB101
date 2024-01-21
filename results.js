document.addEventListener('DOMContentLoaded', function() {
    // Get the zodiac sign from the query parameter
    var urlParams = new URLSearchParams(window.location.search);
    var zodiacSign = urlParams.get('sign');

    if (zodiacSign) {
        document.getElementById('result').innerHTML = 'Your zodiac sign is ' + zodiacSign + '.';
    } else {
        document.getElementById('result').innerHTML = 'Invalid zodiac sign.';
    }
});
