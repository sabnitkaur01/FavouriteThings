// import your packages here
import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    // stub * just a place for non-component-specific stuff
    console.log('loaded');
    
    function popErrorBox(message) {
        alert("Something has gone horribly, horribly wrong");
    }

    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${data[user].img}`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].Title;
            // currentUserText[4].textContent = data[user].;

            // add this new user to the view
            userSection.appendChild(currentUser);
        }
    }

    function retrieveProjectInfo() {
        // test for an ID
        
        if (!event.target.id) { return }
        fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }

    function renderPortfolioThumbnails(thumbs) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        for (let user in thumbs) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].src = `images/${thumbs[user].img}`;
            currentUserText[1].id = thumbs[user].id;
            // add this new user to the view
            // currentUser.addEventListener("click", retrieveProjectInfo);
            userSection.appendChild(currentUser);
        }

        userSection.addEventListener("click, retrieveProjectInfo");
    }
        
    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));
})();