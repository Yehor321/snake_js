document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        var main = document.querySelector('main'); // Select the main element

        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
            main.classList.add('done1'); // Add the done1 class to main
        }
    }, 1000);
}
