//bubbling

let useCapture = true;

document.querySelector('#grandparent').addEventListener('click', () => {
    console.log('grand parent clicked...');
},useCapture)

document.querySelector('#parent').addEventListener('click', (e) => {
    console.log('parent clicked...');
    e.stopPropagation()
},useCapture)

document.querySelector('#child').addEventListener('click', () => {
    console.log('child clicked...');
}, useCapture)


// bubble - child -> parent ->  grandparent
// capture - gp -> parent -> child