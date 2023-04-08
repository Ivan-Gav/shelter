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

const petsJsonArray = randomizeArray(petJsonInitialArray)

const sliderBody = document.querySelector('.slider-body')
const frameLeft = document.querySelector('.frame-left')
const frameRight = document.querySelector('.frame-right')
const frameCenter = document.querySelector('.frame-center')

let petsOnScreenJson = []
let nextPetsOnScreenJson = []
let numberOfCards
let petsBuffer

let lastClicked

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

// ----------------------------------------------------------------------------------------------------

const generateCards = (petJsonArray) => {
  const cards = []
  petJsonArray.forEach(pet => {
    let petCard = new Card(pet)
    cards.push(petCard.generateCard())
  })
  return cards
}

const emptyFrame = (frame) => {
  frame.innerHTML = ''
  return frame
}

const showCards = (array, frame) => {
  generateCards(array).forEach(card => {
    frame.append(card)
  })
}

const start = () => {
  emptyFrame(frameCenter)
  mediaQuery()
  petsOnScreenJson = petsJsonArray.slice(0, numberOfCards)
  petsBuffer = petsOnScreenJson.slice()
  showCards(petsOnScreenJson, frameCenter)
  nextPetsOnScreenJson = generateNextPetsJsonArray(petsOnScreenJson)
  generateNextFrame(nextPetsOnScreenJson)
}

// Media queries --------------------------------------------------------------------------------
// check these breakpoints when changing $laptop-width and $tablet-width settings in base.scss

window.matchMedia('(max-width: 1064px)').addEventListener('change', () => {
  emptyFrame(frameLeft)
  emptyFrame(frameRight)
  start()
  console.log('change 1064px')
})

window.matchMedia('(max-width: 767px)').addEventListener('change', () => {
  emptyFrame(frameLeft)
  emptyFrame(frameRight)
  start()
  console.log('change 768px')
})

const mediaQuery = () => {

  if (window.innerWidth <= 767) {
    numberOfCards = 1
  } else if (window.innerWidth <= 1064) {
    numberOfCards = 2
  } else {
    numberOfCards = 3
  }
}

//------------------------------------------------------------------------------------------------

const generateNextPetsJsonArray = (arrayJson) => {
  const result = randomizeArray(petsJsonArray)
  return result.filter(pet => !arrayJson.includes(pet)).slice(0, arrayJson.length)
}

const generateNextFrame = (arrayJson) => {
  showCards(arrayJson, frameLeft)
  showCards(arrayJson, frameRight)
}

start()


// ----------------------------------------------------------------------------------------------------

const sliderLeftButton = document.querySelector('.slider-nav-left').firstElementChild
const sliderRightButton = document.querySelector('.slider-nav-right').firstElementChild
const slider = document.querySelector('.slider-frames');



const slideLeft = () => {
  console.log('petsBuffer when clicked')
  console.log(petsBuffer)
  emptyFrame(frameLeft)
  emptyFrame(frameRight)
  if (lastClicked === 'r') {
    nextPetsOnScreenJson = petsBuffer.slice()

    generateNextFrame(nextPetsOnScreenJson)
  } else {
    nextPetsOnScreenJson = generateNextPetsJsonArray(petsOnScreenJson)
    generateNextFrame(nextPetsOnScreenJson)
  }
  petsBuffer = petsOnScreenJson.slice()
  lastClicked = 'l'
  slider.classList.add("slide-left")
  sliderLeftButton.removeEventListener("click", slideLeft)
  sliderRightButton.removeEventListener("click", slideRight)
}

const slideRight = () => {
  console.log('petsBuffer when clicked')
  console.log(petsBuffer)
  emptyFrame(frameLeft)
  emptyFrame(frameRight)
  if (lastClicked === 'l') {
    nextPetsOnScreenJson = petsBuffer.slice()
    generateNextFrame(nextPetsOnScreenJson)
  } else {
    nextPetsOnScreenJson = generateNextPetsJsonArray(petsOnScreenJson)
    generateNextFrame(nextPetsOnScreenJson)
  }
  petsBuffer = petsOnScreenJson.slice()
  lastClicked = 'r'
  slider.classList.add("slide-right")
  sliderLeftButton.removeEventListener("click", slideLeft)
  sliderRightButton.removeEventListener("click", slideRight)
}

sliderLeftButton.addEventListener("click", slideLeft)
sliderRightButton.addEventListener("click", slideRight)

slider.addEventListener("animationend", (animationEvent) => {

  if (animationEvent.animationName === "slide-left") {
    slider.classList.remove("slide-left")
    frameCenter.innerHTML = frameRight.innerHTML
  } else {
    slider.classList.remove("slide-right")
    frameCenter.innerHTML = frameLeft.innerHTML
  }

  petsOnScreenJson = nextPetsOnScreenJson.slice()

  sliderLeftButton.addEventListener("click", slideLeft)
  sliderRightButton.addEventListener("click", slideRight)
})