const out = document.querySelector('.out');

const buttons = document.querySelectorAll('.red-container > .btn');

document.querySelector('.red-container').addEventListener('click',(e) => {

    if (e.target.tagName.toUpperCase()==='BUTTON') {

        out.innerText += e.target.innerText

    }

})

// buttons.forEach(btn => 
//     {btn.addEventListener('click',(e) => {

//         out.innerText += e.target.innerText;
//         console.log(`I am button ${e.target.innerText}`)

// })})

// document.querySelector('.red-container').addEventListener('click',(e) => {

//     console.log(`e.currentTarget = ${e.currentTarget.className}`)
//     console.log(`e.target = ${e.target.className}`)

// })

// document.querySelector('.container').addEventListener('click',(e) => {

//     console.log(`e.currentTarget = ${e.currentTarget.className}`)
//     console.log(`e.target = ${e.target.className}`)

// })

// document.body.addEventListener('click',(e) => {

//     console.log(`e.currentTarget = ${e.currentTarget.tagName}`)
//     console.log(`e.target = ${e.target.tagName}`)

// })

// window.addEventListener('click',(e) => {

//     console.log(`e.currentTarget = ${e.currentTarget}`)
//     console.log(`e.target = ${e.target.tagName}`)

// })


