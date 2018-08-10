window.onscroll = function() {
    console.log(window.pageYOffset);
    var fixedbar = document.getElementById('mintsearchbar');
    if ( window.pageYOffset > 100 ) {
        fixedbar.classList.add("mint-searchbar-bg-white");
    } else {
        fixedbar.classList.remove("mint-searchbar-bg-white");
    }
}