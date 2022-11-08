// export default class PicturesApiService { 
//     constructor () { 
//         this.searchQuery = '';
//         this.page = 1;
//     }

//     onSearchByName() {

//         console.log(this);
//     return fetch(`https://pixabay.com/api/?key=31092155-fdd6914219543248b658a821f&q=${this.searchQuery}
//    &image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`)
//         .then(res => res.json())
//         .then((data)=> { 
//             this.addPage();
//             console.log(data);
            
//             return data
//         })
//     }
    

//     addPage() { 
      
//         this.page += 1;
            
//     }

//     resetPage() { 
//         this.page = 1;
//     }
    
//     // get query() { 
//     //     return this.searchQuery;
//     // }

//     // set query(newQuery) { 
//     //     this.searchQuery = newQuery;
//     // }
// }




// // ========================================================================



// const axios = require('axios').default;
// // import PicturesApiService from './on-search';
// import Notiflix from 'notiflix';


// // const MY_URL = `https://pixabay.com/api/?key=31092155-fdd6914219543248b658a821f&q=${onText}&image_type=photo`
// refs = { 
//     findImg: document.querySelector('#search-form'),
//     gallery: document.querySelector('.gallery'),
//     submitBtn: document.querySelector('button[type=submit]'),
//     loadMore: document.querySelector('.load-more')

// }

// let page = 1;

// // const picturesApiService = new PicturesApiService();

// refs.findImg.addEventListener('submit', onSubmit)
// refs.loadMore.addEventListener('click', onLoadMore)


// function onSubmit(event) {

//     event.preventDefault();

//     // const form = event.currentTarget;
//     const searchQuery = event.currentTarget.elements.searchQuery.value;

//      if (!searchQuery) {
//          refs.gallery.innerHTML = '';
//          Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
//     return;  
//     }
  
//     onSearchByName(searchQuery)
//         .then(renderPictures)
//         .then(resetPage())
//         .catch(error => {
//         console.log(error);
        
//         })
    
// }


// function onSearchByName(searchQuery) {

   
//     return fetch(`https://pixabay.com/api/?key=31092155-fdd6914219543248b658a821f&q=${searchQuery}
//    &image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`)
//         .then(res => {
//            return res.json()
//         })
// }

// function onLoadMore() {
//     onSearchByName().then(renderPictures).then(addPage)
// }
    
// function renderPictures(pictures) {
     
//            const picture = Object.values(pictures.hits)
//     console.log(picture);

//     addPage()
  
//      const markup = picture
//       .map(({webformatURL, tags, likes, views, comments, downloads}) => {
         
//      return `<div class="photo-card">
//             <img src="${webformatURL}" alt="${tags}" width="360" height="240" loading="lazy" />
//             <div class="info">
//             <p class="info-item"> likes:
//             <b> ${likes}</b>
//             </p>
//             <p class="info-item"> views: 
//              <b>${views}</b>
//             </p>
//             <p class="info-item"> comments:
//               <b> ${comments}</b>
//             </p>
//             <p class="info-item"> downloads:
//            <b> ${downloads}</b>
//             </p>
//             </div>
//         </div>`;
       
//     })
//         .join("");
    
//     // console.log(markup);
//   refs.gallery.innerHTML = markup;
    
    
// }

//    function addPage() { 
      
//         page += 1;
            
//     }

//   function  resetPage() { 
//         page = 1;
//     }
    



// // async function getUser() {
// //   try {
// //     const response = await axios.get('/user?ID=12345');
// //     console.log(response);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // console.log(getUser);
