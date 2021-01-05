class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }
    showProfile(user){
        this.profile.innerHTML= 
        `
        <figure class="profileUser ">

            <img src="assets/svg/circulos.svg" alt="circulos que decoran el background de la foto de perfil" class="profileUser--img-back">

            <figcaption class="d-flex-y ">
                <div class="profileImage ">
                    <img src="${user.avatar_url}"
                        alt="foto de perfil de github" class="img-cicle-56">
                </div>

                <a href="${user.html_url}" class="profileData ml-36" target="_blank">
                    <h1 class="userNameH1">${user.name}</h1>
                    <span>${user.login} </span>
                </a>
            </figcaption>
        </figure>
        <div class="scoreData-wraper ">

            <div class="scoreData ">
                <h3 class="repos center">
                    ${user.public_repos}
                    <span>repositories</span>
                </h3>
                <h3 class="followers center">
                    ${user.followers}
                    <span>followers</span>
                </h3>
                <h3 class="stars center">
                    ${user.public_gists}
                    <span>gists</span>  
                </h3>
            </div>
            
        </div>
        `;
        this.clearMessage();

    }

    showMessage(message,cssclass){
        this.clearMessage();

        const div = document.createElement('div');
        div.className=cssclass;
        div.appendChild(document.createTextNode(message));
        const content = document.getElementById('mainRequest');
        const fetchContent = document.querySelector('.fetch');

        content.insertBefore(div, fetchContent);
    }
    clearMessage(){
        document.querySelectorAll('.alert').forEach( alert =>{
            alert.remove();
        })
    }

}
module.exports= UI;