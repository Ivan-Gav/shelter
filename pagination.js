const petJsonInitialArray = [
    {
        "id": 1,
        "name": "Jennifer",
        "img": "images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 2,
        "name": "Sophia",
        "img": "images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 3,
        "name": "Woody",
        "img": "images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": 4,
        "name": "Scarlett",
        "img": "images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 5,
        "name": "Katrine",
        "img": "images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 6,
        "name": "Timmy",
        "img": "images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": 7,
        "name": "Freddie",
        "img": "images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": 8,
        "name": "Charly",
        "img": "images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]

// ----------------------------------------------------------------------------------------------------

const randomizeArray = (array) => {
    const arr = array.slice()
    const randomizedArr = []
    const length = arr.length
    for (let index = 0; index < length; index++) {
        let randomIndex = Math.floor(Math.random() * arr.length)
        randomizedArr.push(arr[randomIndex])
        arr.splice(randomIndex, 1)
    }
    return randomizedArr
}

const checkArray = (array) => {
    const arraySet = new Set(array.map(e => e.id))
    return (arraySet.size === array.length)
}

const chopArray = (array, chopLength = 6) => {
    const arrOfChunks = []
    for (let i = 0; i < array.length; i += chopLength) {
        arrOfChunks.push([...array.slice(i, (i + chopLength))])
    }
    return arrOfChunks
}

const filterArray = (array) => {
    const result = randomizeArray(petJsonInitialArray)
    // console.log('result')
    // console.log(result)
    return result.filter(pet => !array.includes(pet))
}

const rotateArray = (array, steps = 1) => {
    let result = array.slice( - steps)
    return result.concat(array.slice(0, (array.length - steps)))
}

const createPetsArray = (array) => {
    let petsArray = randomizeArray(array)
    return petsArray.slice()
                    .concat(rotateArray(petsArray,7))
                    .concat(rotateArray(petsArray,6))
                    .concat(rotateArray(petsArray,5))
                    .concat(rotateArray(petsArray,3))
                    .concat(rotateArray(petsArray,2)) 
}

const emptyGallery = () => {
    gallery.innerHTML = ''
}

const renderPages = (cardsArray) => {
    mediaQuery()
    const arrOfChunks = chopArray(cardsArray, numberOfCards)
    const pages = []
    arrOfChunks.forEach((chunk, i) => {
        let page = document.createElement('div')
        page.className = 'gallery-page'
        page.classList.add('hidden')
        page.setAttribute('data-pagenumber', (i + 1))
        chunk.forEach(card => page.append(card))
        pages.push(page)
    })
    currentPage = 1
    numberOfPages = arrOfChunks.length
    pages.forEach(page => gallery.append(page))
    showFirstPage()
}

const generateCards = (petJsonArray) => {
    const cards = []
    petJsonArray.forEach(pet => {
        let petCard = new Card(pet)
        cards.push(petCard.generateCard())
    })
    return cards
}

const hideCurrentPage = () => {
    document.querySelector(`[data-pagenumber="${currentPage}"`).classList.add('hidden')
}

const showPage = (page) => {
    document.querySelector(`[data-pagenumber="${page}"`).classList.remove('hidden')
}

const showFirstPage = () => {
    hideCurrentPage()
    currentPage = 1
    showPage(currentPage)
    centralBtn.innerHTML = `${currentPage}`
    lastBtn.classList.remove('inactive')
    nextlBtn.classList.remove('inactive')
    previousBtn.classList.add('inactive')
    firstBtn.classList.add('inactive')
}

const showPreviousPage = () => {
    if (currentPage > 1) {
        hideCurrentPage()
        currentPage--
        showPage(currentPage)
        centralBtn.innerHTML = `${currentPage}`
        lastBtn.classList.remove('inactive')
        nextlBtn.classList.remove('inactive')
        if (currentPage === 1) {
            previousBtn.classList.add('inactive')
            firstBtn.classList.add('inactive')
        }
    }
}

const showNextPage = () => {
    if (currentPage < numberOfPages) {
        hideCurrentPage()
        currentPage++
        showPage(currentPage)
        centralBtn.innerHTML = `${currentPage}`
        previousBtn.classList.remove('inactive')
        firstBtn.classList.remove('inactive')
        if (currentPage === numberOfPages) {
            lastBtn.classList.add('inactive')
            nextlBtn.classList.add('inactive')
        }
    }
}

const showLastPage = () => {
    hideCurrentPage()
    currentPage = numberOfPages
    showPage(currentPage)
    centralBtn.innerHTML = `${currentPage}`
    lastBtn.classList.add('inactive')
    nextlBtn.classList.add('inactive')
    previousBtn.classList.remove('inactive')
    firstBtn.classList.remove('inactive')
}

const paginationConrols = () => {
    controls.addEventListener('click', (event) => {
        switch (event.target) {
            case firstBtn:
                showFirstPage()
                break
            case previousBtn:
                showPreviousPage()
                break
            case nextlBtn:
                showNextPage()
                break
            case lastBtn:
                showLastPage()
                break
            default:
                break
        }
    })


}


// ----------------------------------------------------------------------------------------------------

class Card {
    constructor({ id, name, img, type, breed, description, age, inoculations, diseases, parasites }) {
        this.id = id
        this.name = name
        this.img = img
    }

    generateCard() {
        let template = ''
        let card = document.createElement('div')
        card.className = 'card'
        card.setAttribute('data-id', this.id)

        // if (this.img) {
        template += `<div><img src=${this.img} alt="Look how cute I am"></div>`
        // }

        // if (this.name) {
        template += `<p>${this.name}</p>`
        template += `<button class="button-secondary">Learn more</button>`
        // }

        card.innerHTML = template

        return card
    }
}

// Media queries --------------------------------------------------------------------------------
// check these breakpoints when changing $laptop-width and $tablet-width settings in base.scss

window.matchMedia('(max-width: 1278px)').addEventListener('change', () => {
    emptyGallery()
    renderPages(cardsArray)
})

window.matchMedia('(max-width: 767px)').addEventListener('change', () => {
    emptyGallery()
    renderPages(cardsArray)
})

let numberOfCards
const mediaQuery = () => {

    if (window.innerWidth <= 767) {
        numberOfCards = 3
    } else if (window.innerWidth <= 1278) {
        numberOfCards = 6
    } else {
        numberOfCards = 8
    }
}

//------------------------------------------------------------------------------------------------

const gallery = document.querySelector('.gallery-body')
const page = document.querySelector('.gallery-page')
const centralBtn = document.querySelector('.pagination-button.current').firstElementChild
const firstBtn = document.querySelector('.pagination-button.first').firstElementChild
const previousBtn = document.querySelector('.pagination-button.previous').firstElementChild
const nextlBtn = document.querySelector('.pagination-button.next').firstElementChild
const lastBtn = document.querySelector('.pagination-button.last').firstElementChild
const controls = document.querySelector('.pagination-gallery-pets')

let currentPage = 1
let numberOfPages = 1

emptyGallery()
const petJsonArray = createPetsArray(petJsonInitialArray)
const cardsArray = generateCards(petJsonArray)
mediaQuery()
renderPages(cardsArray)
paginationConrols()
