import"../styles/base.scss";



import "./header";
import "./popup";



const UI = require('./ui');
const Github = require('./github');
const { client_id, client_secret } = require('./config.json');

const github = new Github(client_id,client_secret); 
/* console.log(github.fetchUser('alexbvart')); */
const ui = new UI();


function getTheInputData(textSearc) {
    if (textSearc!=='') {
        github.fetchUser(textSearc) //realizamos la peticion y se retornan los datos
            .then(data=>
                {
                    if (data.userData.message === 'Not Found') {
                        /* console.log("User not exisits"); */
                        ui.showMessage('User not found','alert' );
                        /* document.getElementById("homeSection").style.display = "block"; */

                    }else{
                        ui.showProfile(data.userData);
                        
                        document.getElementById("homeSection").style.display = "none";
                    }
                    
                }
            )
    }
}


/* conseguir la cadena de los form input */

const userFormHeader = document.getElementById('userFormHeader')
userFormHeader.addEventListener('submit',(e)=>{
    e.preventDefault;
    const textSearchHeader = document.getElementById('textSearchHeader').value;
    getTheInputData(textSearchHeader)
});


const userFormItem = document.getElementById('userFormItem')
userFormItem.addEventListener('submit',(e)=>{
    e.preventDefault;
    const textSearchItem = document.getElementById('textSearchItem').value;
    getTheInputData(textSearchItem)
});

const userFormPage = document.getElementById('userFormPage')
userFormPage.addEventListener('submit',(e)=>{
    e.preventDefault;
    const textSearchPage = document.getElementById('textSearchPage').value;
    getTheInputData(textSearchPage)
});






/* importando svg de la ui */
import"../assets/svg/biglogo.svg"
import"../assets/svg/bigSearch.svg"
import"../assets/svg/circulos.svg"
import"../assets/svg/circleList.svg"
import"../assets/svg/fork.svg"
import"../assets/svg/iconGetStarted.svg"
import"../assets/svg/minilogo_negativo.svg"
import"../assets/svg/minilogo.svg"
import"../assets/svg/miniSearchIcon.svg"
