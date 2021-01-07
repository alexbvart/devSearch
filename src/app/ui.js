class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }
    showProfile(user) {
        this.profile.innerHTML =
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

    showMessage(message, cssclass) {
        this.clearMessage();

        const div = document.createElement('div');
        div.className = cssclass;
        div.appendChild(document.createTextNode(message));
        const content = document.getElementById('mainRequest');
        const fetchContent = document.querySelector('.fetch');

        content.insertBefore(div, fetchContent);
    }
    clearMessage() {
        document.querySelectorAll('.alert').forEach(alert => {
            alert.remove();
        })
    }

    colorForLanguage(language) {
        var colorForLanguageExport="";
        switch (language) {
    
            case 'JavaScript':
                colorForLanguageExport = "#F8EFBE" ;
                console.log(`lenguaje: ${language}, color ${colorForLanguageExport}`);
                break;
            case 'PHP':
                colorForLanguageExport =  "#E0DAF1";
                break;
            case 'SCSS':
                colorForLanguageExport =  "#EEDAF1";
                break;
            case 'CSS':
                colorForLanguageExport =  "#EEDAF1";
                break;
            case 'Java':
                colorForLanguageExport =  "#F1DADA";
                break;
            case 'Clojure':
                colorForLanguageExport =  "#fae2d2";
                break;
            case 'Shell':
                colorForLanguageExport =  "#e2fad2";
                break;
            case 'Python':
                colorForLanguageExport =  "#DAF1EE";
                break;
            case 'Go':
                colorForLanguageExport =  "#BEF4F8";
                break;
        
            case 'HTML':
                colorForLanguageExport =  "#F8BEBE";
                break;
        
            case 'TypeScript':
                colorForLanguageExport =  "#BEEDF8";
                break;
        
            case 'C':
                colorForLanguageExport =  "#F8BED6";
                break;
            case 'C#':
                colorForLanguageExport =  "#F8BED6";
                break;
        
            default:
                colorForLanguageExport =  "#E7E7E7"
                break;
        }
        return colorForLanguageExport
    }

    showRepositories(repositories) {
        let template = "";

        repositories.forEach(repo=>{

            console.log(repo.language);
            let color = this.colorForLanguage(repo.language);
            template += `
            <li class="cardProyect">
                <h2>${repo.name} </h2>                        
                <div class="detailsOfProyect d-flex-y mt-20">
                    <span class="language " style="background-color:${color};"  >${repo.language} </span>
                    <div class="fork ml-36">
                        <img src="assets/svg/fork.svg" alt=""> ${repo.forks_count}
                    </div>
                </div>
            </li>
        `;
        })

        document.getElementById('repositories').innerHTML= template;
    }

}
module.exports = UI;