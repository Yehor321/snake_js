document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        var main = document.querySelector('main'); 

        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
            main.classList.add('done1'); 
        }
    }, 1000);
}
