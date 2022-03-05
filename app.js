const profileBtn = document.querySelector('.btn');

const removeHidden = document.querySelectorAll('.hidden');

const reposBtn = document.querySelector('button');

const reposCard = document.querySelector('.card-repos');

profileBtn.addEventListener('click', getUserProfile);

reposBtn.addEventListener('click', getRepos);

function getUserProfile(){
    removeHidden;
    for(i = 0; removeHidden.length; i++){
       removeHidden[i].classList.remove('hidden');
    }
}

function getRepos(){
   reposCard.style.display = 'flex';
}

