// console.log('document by id>>>', document.getElementById('page-banner'));

// console.log('document by tag name>>>>', document.getElementsByTagName('li'));


// let titles = document.getElementsByClassName('title');

// console.log('titles>>>>', titles);

// console.log(Array.isArray(titles));

// let titleArr = Array.from(titles);

// console.log(Array.isArray(titleArr));


// titleArr.forEach(function (title, idx) {
//   console.log(`title at index ${idx} is ${title}`);
// });

// // "this is my name" + idx + ""


// let wmf = document.querySelector('#book-list li:nth-child(2) .name');

// console.log('wmf1111>>>>>', wmf);

// console.log('wmf>>>>', wmf.outerHTML);

// let books = document.querySelectorAll('#book-list li .name'); // nodelIst

// console.log('books>>>', books);
// let a ;
// const banner = document.querySelector('#page-banner');

// console.log('bannner>>>>>>>', banner);

// console.log('node type>>>', banner.nodeType);

// console.log('node name >>>>', banner.nodeName);

// console.log('does node have child', banner.hasChildNodes());

// console.log('cloned node with deep copy', banner.cloneNode(true));

// // TRAVERSAL //

// const bookList = document.querySelector('#book-list')

// console.log('parent node>>>>', bookList.parentNode);

// console.log('parent element>>>>', bookList.parentElement);

// console.log('child node>>>>', bookList.childNodes);

// console.log('only element children node>>>>', bookList.children);

// console.log('next sibling is >>>', bookList.nextSibling);

// console.log('next element sibling is >>> ', bookList.nextElementSibling);

// console.log('previous sibling is >>>', bookList.previousSibling);

// console.log('previous element sibling is >>> ', bookList.previousElementSibling);

// console.log('traversing through the sibling child node...', bookList.previousElementSibling.querySelector('p').innerHTML);


// // EVENT Listeners

const bookListH2 = document.querySelector('#book-list h2');

bookListH2.addEventListener('click', function (e) {
  console.log('target>>>>>', e.target);
  // console.log('e .....', e);
});


const deleteButton = document.querySelectorAll('#book-list .delete');

console.log('deleteButton>>>', deleteButton);

deleteButton.forEach((btn) => {
  console.log('btn>>>', btn);
  btn.addEventListener('click', function (e) {
    console.log('clicked target>>>> ', e.target)
    let li = e.target.parentElement;
    li.parentElement.removeChild(li)
  });
});

// // PREVENT Default 

// const link = document.querySelector('#page-banner a')


// link.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(`Prevented the navigation to ${e.target.textContent} `);
// })


// // event bubbling 

// //BOM

// function onWindowResize() {
//   console.clear()
//   console.log('inner height>>>', window.innerHeight);
//   console.log('outer height>>>', window.outerHeight);
//   console.log('inner width>>>', window.innerWidth);
//   console.log('outer width>>>', window.outerWidth);
// }
// let mywindow
// function openWindow() {
//   mywindow = window.open('https://www.w3schools.com/js/js_htmldom.asp', '', "height=500px,width=200px,left=200px,top=100px");
// }

// function closeWindow() {
//   mywindow.close()

// }