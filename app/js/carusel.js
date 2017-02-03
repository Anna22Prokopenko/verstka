'use strict';
let leftArrow = document.getElementById('left_arrow');
let rightArrow = document.getElementById('right_arrow');
let rightArrow1 = document.getElementById('right_arrow1');
let sliderImage = Array.from(document.getElementById('slider_img').getElementsByTagName('img'));
let sliderTitle = Array.from(document.getElementById('slider_img').getElementsByTagName('figcaption'));
let startIndex = 0;
console.log(sliderImage);
let imgFolder = 'img/';
let imgCarousel = [
    {
        title: 'item 1',
        image: '4.png'
    },
    {
        title: 'item 2',
        image: '5.png'
    },
    {
        title: 'item 3',
        image: '6.png'
    },
    {
        title: 'item 4',
        image: '7.png'
    },
    {
        title: 'item 5',
        image: '8.png'
    },
    {
        title: 'item 6',
        image: '9.png'
    },
    {
        title: 'item 7',
        image: '10.png'
    },
    {
        title: 'item 8',
        image: '11.png'
    },
	 {
        title: 'item 9',
        image: '12.png'
    },
    {
        title: 'item 10',
        image: '13.png'
    },
    {
        title: 'item 11',
        image: '14.png'
    },
    {
        title: 'item 12',
        image: '15.png'
    },
    {
        title: 'item 13',
        image: '16.png'
    },
    {
        title: 'item 14',
        image: '17.png'
    },
    {
        title: 'item 15',
        image: '18.png'
    },
    {
        title: 'item 16',
        image: '19.png'
    }
    
];

function assignImg() {
	let source = imgCarousel.slice(startIndex, startIndex+4);
	sliderImage.forEach((element, index) => {
		element.src = imgFolder + source[index].image
	});
	sliderTitle.forEach((element, index) => {
		element.innerHTML = source[index].title
	});
};
function slide(direction) {
	if (direction === 'left' && startIndex > 0) {startIndex--}
	else if (direction === 'right' && startIndex < imgCarousel.length - 4) {startIndex++};
	assignImg();
};
leftArrow.addEventListener('click', () => {slide('left')});
rightArrow.addEventListener('click', () => {slide('right')});
rightArrow1.addEventListener('click', () => {slide('right')});
assignImg();





// for (let i=0; i<sliderImage.length; i++){
    // sliderImage[i].src = `${imgFolder}${imgCarousel[i].image}`;
    // sliderTitle[i].innerHTML = `${imgCarousel[i].title}`;
// }

// let counterR = 3;
// let counterL = 0;

// rightArrow.addEventListener('click', () =>{
    // counterR++;
    // counterL++;
    // if (counterR>imgCarousel.length-1) counterR = 0;
    // if (counterL>imgCarousel.length-1) counterL = 0;
    // paginationActive(counterL);
    // for (let i=0; i<sliderImage.length-1; i++){
        // sliderImage[i].src = sliderImage[i+1].src;
        // sliderTitle[i].innerHTML = sliderTitle[i+1].innerHTML
    // }
    // sliderImage[3].src = `${imgFolder}${imgCarousel[counterR].image}`;
    // sliderTitle[3].innerHTML = `${imgCarousel[counterR].title}`
    // console.log(`counterL: ${counterL} counterR: ${counterR}`);
// });

// leftArrow.addEventListener('click', () =>{
    // counterL--;
    // counterR--;
    // if (counterL<0) counterL = imgCarousel.length-1;
    // if (counterR<0) counterR = imgCarousel.length-1;
    // paginationActive(counterL);
    // for (let i=sliderImage.length-1; i>0; i--){
        // sliderImage[i].src = sliderImage[i-1].src;
        // sliderTitle[i].innerHTML = sliderTitle[i-1].innerHTML
    // }
    // sliderImage[0].src = `${imgFolder}${imgCarousel[counterL].image}`;
    // sliderTitle[0].innerHTML = `${imgCarousel[counterL].title}`
    // console.log(`counterL: ${counterL} counterR: ${counterR}`);
// });

// let paginationQuantity = Math.ceil(imgCarousel.length / 4);
// let pagination = document.getElementById("pagination");

// paginationGenerator();
// pagination.children[0].classList.add('active');

// function paginationActive(n){
    // for (let i=0; i<pagination.children.length; i++){
        // pagination.children[i].classList.remove('active');
    // }
    // let activePos = Math.floor(n/4);
    // pagination.children[activePos].classList.add('active');
// }

// function paginationGenerator () {
    // for (let i = 0; i<paginationQuantity; i++){
        // let item = document.createElement('span');
        // item.classList.add('item', 'pointer', `page${i}`);
        // pagination.appendChild(item);
    // }
// }

// pagination.addEventListener('click', (e) =>{
    // if (e.target.classList.contains('item')){
        // let arr = Array.from(pagination.children);
        // let page = arr.indexOf(e.target)+1;
        // counterL = 4*page - 4;
        // counterR = counterL + 3;
        // for (let i = counterL; i<sliderImage.length+counterL; i++){
            // sliderImage[i-counterL].src = `${imgFolder}${imgCarousel[i].image}`;
            // sliderTitle[i-counterL].innerHTML = `${imgCarousel[i].title}`
        // }
        // paginationActive(counterL);
    // }
// });
