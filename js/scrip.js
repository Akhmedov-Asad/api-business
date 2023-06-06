const toggleThemeButton = document.getElementById('toggle-theme');

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.header.classList.toggle('dark-mode');
    toggleThemeButton.classList.toggle('dark-mode');
});

const apiKey = `88b3b1616dba4595a529e22bef95b15e`;

const urlApi = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

async function getNews() {
    const newsContainer = document.querySelector('.main')
    try {
        const response = await fetch(urlApi);
        const data = await response.json();

        if (data.status !== 'ok') {
            newsContainer.innerHTML = 'Sorry there was an error...'
        } else{
            data.articles.slice(1, 13).map(article => {
                console.log(data.articles);
            
                const newsCard = document.createElement('div');
                newsCard.classList.add('news-card')
            
                const imgBlock = document.createElement('div')
                imgBlock.classList.add('img-block')
                const newsImg = document.createElement('img');
                newsImg.classList.add('card-img');
                newsImg.src = article.urlToImage;
                imgBlock.appendChild(newsImg)

               const publishedData = document.createElement('p');
               publishedData.classList.add('publishedData-title')
               publishedData.textContent = article.publishedAt;

               const newsAuthor = document.createElement('h3');
               newsAuthor.classList.add('author-title')
               newsAuthor.textContent = article.author;

               const description = document.createElement('p');
               description.classList.add('description-title')
               description.textContent = article.description;;

               newsCard.appendChild(imgBlock)
               newsCard.appendChild(publishedData)
               newsCard.appendChild(newsAuthor)
               newsCard.appendChild(description)

               newsContainer.appendChild(newsCard)


            
                // newsCard.appendChild(newsImg);
                // newsContainer.appendChild(newsCard)
            })
        }

    } catch {
        console.error(error.message);
    }
}
getNews()

