const newArticle = document.querySelector('.writeButton')
const displayModal = document.querySelector('#storyArea')
const closeStoryArea = document.querySelector('#closeStoryArea')
const mainContainerResponse = document.querySelector('.mainContainer')
var input = document.getElementById("storyTitle");



// adding new task
const newTask = document.querySelector('#newTask');
// const publishedArticleArea = document.querySelector('#publishedArticleArea')
const publishedArticleTitle = document.querySelector('.publishedArticleTitle')
const publishedArticleStory = document.querySelector('.publishedArticleStory')

// const btn=
const storyTitle = document.querySelector('#storyTitle')


const taskBtn = document.querySelector('#taskBtn')
taskBtn.addEventListener('click', (ev) => {
    // console.log("taskbtn press hua kaam kro aagie ka")
    const task = newTask.value;
    const taskT = storyTitle.value;


    // story title

    const liT = document.createElement('li')

    let strT = `
    <div id="publishedArticleArea" class="publishedArticleArea">
    <div id="publishedArticle" class="leftAlignedArea publishedArticle">
                <h4 class="publishedArticleTitle"> ${taskT}</h4>

            </div>
            </div>
    
    
    `

    liT.innerHTML = strT;

    publishedArticleTitle.appendChild(liT);


    // story here


    const li = document.createElement('li')
    let str = `
    <div id="publishedArticleArea" class="publishedArticleArea">
    <div id="publishedArticle" class="leftAlignedArea publishedArticle">
                <h6 class="publishedArticleStory">${task}</h6>

            </div>
            </div>

            `


    li.innerHTML = str;

    publishedArticleStory.appendChild(li);



    newTask.value = '';
    storyTitle.value = '';






    displayModal.style.display = 'none';
    mainContainerResponse.style.display = 'block'


})









// //////////////////////////////////making modal of write button


newArticle.addEventListener('click', (ev) => {
    // console.log("popup modal here")
    displayModal.style.display = 'block';
    mainContainerResponse.style.display = 'none';
    input.focus();

})

closeStoryArea.addEventListener('click', (ev) => {
    displayModal.style.display = 'none';
    mainContainerResponse.style.display = 'block'
})

