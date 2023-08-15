const newArticle=document.querySelector('.writeButton')
const displayModal=document.querySelector('#storyArea')
const closeStoryArea=document.querySelector('#closeStoryArea')
const mainContainerResponse=document.querySelector('.mainContainer')
var input = document.getElementById ("storyTitle");


newArticle.addEventListener('click',(ev)=>{
    // console.log("popup modal here")
    displayModal.style.display='block';
    mainContainerResponse.style.display='none';
    input.focus ();
    
})

closeStoryArea.addEventListener('click',(ev)=>{
    displayModal.style.display='none';
    mainContainerResponse.style.display='block'
})

