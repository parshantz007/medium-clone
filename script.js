const newArticle = document.querySelector('.writeButton')
const displayModal = document.querySelector('#storyArea')
const closeStoryArea = document.querySelector('#closeStoryArea')
const mainContainerResponse = document.querySelector('.mainContainer')
const input = document.getElementById("storyTitle");



// adding new task
// const newTask = document.querySelector('#newTask');
// const publishedArticleArea = document.querySelector('#publishedArticleArea')
// const publishedArticleTitle = document.querySelector('.publishedArticleTitle')
const publishedArticleSingle = document.querySelector('.publishedArticleSingle')
// const articleList = document.querySelector('.articleList')
// const articleTextBucket = document.querySelector('.articleTextBucket')

// const btn=
const storyTitle = document.querySelector('#storyTitle')

publishedArticleSingle.innerHTML = localStorage.getItem('publishedArticleSingle');


const taskBtn = document.querySelector('#taskBtn')
taskBtn.addEventListener('click', (ev) => {
    // console.log("taskbtn press hua kaam kro aagie ka")
    const task = newTask.value;
    const taskT = storyTitle.value;


    // story title

    // const liT = document.createElement('li')
    const li = document.createElement('li')

    let str = `
    <div class="publishedArticleSingle extraDot">
                    <div class="publishedArticleDetails">
                        <img class="articleIconImg"
                            src="images/desktop-wallpaper-dark-anime-boy-aesthetic-icons-dark-anime-icons.jpg" alt="">
                        <p class="articleUsername">The user name</p>
                        <p class="articleDateTime"> 01 01 0101</p>
                    </div>
                    <div id="publishedArticle" class="leftAlignedArea publishedArticle">
                        <ul class="articleList">
                            <div class="articleTextBucket">
                                <li class="articleHeading">${taskT}</li>
                                <li class="articleText ellipsis">${task}</li>
                                
                            </div>
                            <div class="articleImage">
                                <img src="images/desktop-wallpaper-dark-anime-boy-aesthetic-icons-dark-anime-icons.jpg"
                                    alt="">
                        </ul>
                        <!-- </div> -->

                        </div>
                        </div>
                        
                        
                        `

    // liT.innerHTML = strT;

    li.innerHTML = str;
    // publishedArticleTitle.appendChild(liT);
    // li.classList.add('articleList');
    publishedArticleSingle.appendChild(li);


    // story here


    // let str = `
    // <div id="publishedArticleArea" class="publishedArticleArea">
    // <div id="publishedArticle" class="leftAlignedArea publishedArticle">
    //             <h6 class="publishedArticleStory">${task}</h6>

    //         </div>
    //         </div>

    //         `






    newTask.value = '';
    storyTitle.value = '';




    localStorage.setItem('publishedArticleSingle', publishedArticleSingle.innerHTML);

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

