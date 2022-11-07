const axios = require('axios').default;


// const MY_URL = `https://pixabay.com/api/?key=31092155-fdd6914219543248b658a821f&q=${onText}&image_type=photo`
refs = { 
    findImg: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    submitBtn: document.querySelector('button[type=submit]'),

}

refs.findImg.addEventListener('submit', onSubmit)

function onSubmit(event) {

    event.preventDefault();

    const form = event.currentTarget;
    const query = form.elements.searchQuery.value;

     if (!query) {
        refs.gallery.innerHTML = '';
    return;  
    }
  
    onSearchByName(query)
    .then(renderPictures)
    .catch(error => {
    console.log(error);
})

}


function onSearchByName(searchByName) {

   return fetch(`https://pixabay.com/api/?key=31092155-fdd6914219543248b658a821f&q=${searchByName}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(res => {
            return res.json();
    })

}

function renderPictures(pictures) {
    // refs.findImg.value = '';
     
           const picture = Object.values(pictures.hits)
    console.log(picture);
  
     const markup = picture
      .map(({webformatURL, tags, likes, views, comments, downloads}) => {
         
     return `<div class="photo-card">
            <img src="${webformatURL}" alt="${tags}" width="360" height="240" loding="lazy" />
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
    
    // console.log(markup);
  refs.gallery.innerHTML = markup;
    
    
}



//  }

// console.log(onSearchByName('cat'));

// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log(getUser);
