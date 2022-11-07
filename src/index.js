const axios = require('axios').default;
import PicturesApiService from './on-search';
import Notiflix from 'notiflix';


// const MY_URL = `https://pixabay.com/api/?key=31092155-fdd6914219543248b658a821f&q=${onText}&image_type=photo`
refs = { 
    findImg: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    submitBtn: document.querySelector('button[type=submit]'),
    loadMore: document.querySelector('.load-more')

}

const picturesApiService = new PicturesApiService();

refs.findImg.addEventListener('submit', onSubmit)
refs.loadMore.addEventListener('click', onLoadMore)


function onSubmit(event) {

    event.preventDefault();

    // const form = event.currentTarget;
    picturesApiService.searchQuery = event.currentTarget.elements.searchQuery.value.trim();

     if (!picturesApiService.searchQuery) {
         refs.gallery.innerHTML = '';
         Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
    return;  
    }
    picturesApiService.resetPage()
    
    picturesApiService.onSearchByName()
        .then(hits => {
            clearPage();
            renderPictures(hits)
        })
        .catch(error => {
        console.log(error);
        
})

}


function renderPictures(pictures) {
   
     
     const markup = pictures
      .map(({webformatURL, tags, likes, views, comments, downloads}) => {
         
     return `<div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" width="360" height="240" loading="lazy" />
            <div class="info">
            <p class="info-item"> likes:
            <b> ${likes}</b>
            </p>
            <p class="info-item"> views: 
             <b>${views}</b>
            </p>
            <p class="info-item"> comments:
              <b> ${comments}</b>
            </p>
            <p class="info-item"> downloads:
           <b> ${downloads}</b>
            </p>
            </div>
        </div>`;
       
    })
        .join("");
    
   
  refs.gallery.insertAdjacentHTML('beforeend' , markup)
    
    
}


function onLoadMore() {
    picturesApiService.onSearchByName()
        .then(renderPictures)
        
    
}

function clearPage() {
   refs.gallery.innerHTML = ''
}

//  }



// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log(getUser);
