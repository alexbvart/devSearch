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


let placeTheLogoHere = document.getElementById('placeTheLogoHere');

function logoSizeForThePage() {
    let widthScree = window.screen.width;
    if (widthScree>600) {
        console.log("mas a 600");
        placeTheLogoHere.innerHTML=`<img src="./assets/svg/biglogo.svg" alt="Logo GITHUB SEARCH">`
    }else{
        placeTheLogoHere.innerHTML=`<img src="./assets/svg/minilogo.svg" alt="Logo GITHUB SEARCH">`
        console.log("menos a 600");
    } 
}

logoSizeForThePage();

window.onresize = function () {
    logoSizeForThePage()
}

