// wp-caption

// avoid useless and dangerous queries
if(document.querySelectorAll('ol > li > ul > li > table')) {
  const shittyElements = document.querySelectorAll('ol > li > ul > li > table')
  shittyElements.forEach(shit => shit.remove())
}
if(document.querySelectorAll('h2')) {
  // useless h2
  const shittyH2 = document.querySelectorAll('h2')
  shittyH2.forEach(shit => shit.remove())
}
if(document.querySelectorAll('figure > figcaption')) {
  // new figcaption under the image (remove all into figure)
  const figures = document.querySelectorAll('figure > figcaption')
  figures.forEach(fig => fig.remove())
}
// table into ol > li 
if(document.querySelectorAll('ol > li > table')) {
  const table = document.querySelectorAll('ol > li > table')
  table.forEach(table => table.remove())
}
if(document.querySelectorAll('ol > li > p')) {
  // some paragraphs 
  const paragraphs = document.querySelectorAll('ol > li > p')
  paragraphs.forEach(paragraph => paragraph.remove())
}

// oggetto sample
const obj = {
  "examData": {
    "holder": "Cisco Netacad",
    "examName": "IT Essentials",
    "abbreviation": "ITE",
    "modules": "1-3",
    "versionName": "ccna1-v7",
    "versions": [
      7.00,
      7.02,
    ],
    "years": [
      2023,
      2024
    ]
  }
}

const questionArr = [];
const regex = /<span style="color: #ff0000;">/;

const questions = document.querySelectorAll('ol > li > h3')
const options = document.querySelectorAll('ol > li > ul')

questions.forEach((question, index) => {
  const optionsArr = []; 
  const answerArr = [];
  const images = [];

  // if there is a corresponding option for this question, then process it
  if(options[index]) {
    Array.from(options[index].querySelectorAll('li')).forEach(option => {
      optionsArr.push(option.textContent)
      if (regex.test(option.innerHTML))
        answerArr.push(option.textContent)
    })
  }

  const toPush = {
    "question": question.textContent,
    "options": optionsArr,
    "answer": (answerArr.length === 1) ? answerArr[0] : answerArr,
    "img": images
  }

  // in infraexam // let containImage = question.parentElement.querySelector('figure img');

  // in premiumexam.net
  let containImage = question.parentElement.querySelectorAll('ol > li > .wp-caption img');

  if (question.parentElement.querySelector('img'))
    toPush.photo = containImage.src
  
  questionArr.push(toPush)
})

obj.questions = questionArr

const data = JSON.stringify(obj).replace(/\\n/g, '').replace(/ "|" /g, '"')
console.log(data)

// MODIFY IN WHAT ELEMENTS ARE IN THE PAGE