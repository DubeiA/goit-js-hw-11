// const axios = require('axios').default;


// // const MY_URL = `https://pixabay.com/api/?key=31092155-fdd6914219543248b658a821f&q=${onText}&image_type=photo`

// const findImg = document.querySelector('input[type=text]');
// const submitBtn = document.querySelector('button[type=submit]')

// // console.log(submitBtn);

// // findImg.addEventListener('input', onSearchImg);

// submitBtn.addEventListener('submit', onSubmit)

// function onSubmit(event) {

//     event.preventDefault()

//     const onText = event.target.value;
//     // const searchQuery = form.elements.searchQuery.value
//     // console.log(searchQuery);
//     console.log(onText);

//     fetchImg(searchQuery).then(res => res.json())
//     .then(console.log)
// .catch(error => {
//     console.log(error);
// })


// }



// function fetchImg(text) {
//     fetch(`https://pixabay.com/api/?key=31092155-fdd6914219543248b658a821f&q=${text}&image_type=photo`)
//     .then(res => res.json())
//     .then(console.log)
// }

// console.log(findImg);



// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// console.log(getUser);
