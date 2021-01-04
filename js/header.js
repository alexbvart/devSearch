let ubicacionDelScroll = window.pageYOffset;

window.onscroll = function () {
    let desplazamientoActual = window.pageYOffset;

    if (ubicacionDelScroll>= desplazamientoActual) {
        document.getElementById('headerContent').style.top='0';
    }else{
        document.getElementById('headerContent').style.top='-88px';
    }
    ubicacionDelScroll = desplazamientoActual;
}

console.log(ubicacionDelScroll);
