/**
*   console script to scraper answers into a JavaScript object from domain (https://infraexam.com/*)'s payload
*   browser console will return a raw object supposed to be formatted online
*
*   by noyazz
*/

//avoid useless and dangerous queries
const shittyElements = document.querySelectorAll('table')
const shittyEl2 = document.querySelectorAll('figure > a')
const figureShit = document.querySelectorAll('li > figure')
const addShit = document.querySelectorAll('li > div > figure')
shittyElements.forEach(shit => shit.remove())
shittyEl2.forEach(shitty2 => shitty2.remove())
figureShit.forEach(shitty =>shitty.remove())
addShit.forEach(shittyAdd => shittyAdd.remove())

const questions = document.querySelectorAll('ol > li h3')
const options = document.querySelectorAll('ol > li ul')
const answers = document.querySelectorAll('ol > li ul li span')

const chapter = 1;

const obj = {
    "examData": {
        "holder": "Cisco Netacad",
        "examName": "IT Essentials",
        "abbreviation": "ITE",
        "cap": chapter,
        "versionName": "v7",
        "versions": [
            7.00,
            7.20
        ],
        "years": [
            2022,
            2023
        ]
    },
    "questions": [

    ]
}

const questionArr = []

const regex = /<span style="color: #ff0000;">/;

questions.forEach((question, index) => {
    const optionsArr = [], answerArr = []

    Array.from(options[index].children).forEach(option => {
        optionsArr.push(option.textContent)
        if (regex.test(option.innerHTML))
            answerArr.push(option.textContent)
    })

    questionArr.push(
        {
            "question": question.textContent,
            "options": optionsArr,
            "answer": (answerArr.length === 1) ? answerArr[0] : answerArr
        }
    )
})

obj.questions = questionArr

const data = JSON.stringify(obj).replace(/\\n/g, '').replace(/ "|" /g, '"')

console.log(data)