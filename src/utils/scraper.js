/**
 *   console script to scraper answers (exam details below in obj schema)
 *   into a JavaScript object from domain (https://infraexam.com/*)'s payload
 *
 *   https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-[chapter]-exam-answers-ite-7-0-ite-7-02/
 *
 *   !!! WARNING !!!
 *
 *   ONLY MULTIPLE CHOICE QUESTIONS (MOST OF THEM) ARE SCRAPERED.
 *   !!! DRAG-AND-DROP EXERCISES ARE OMITTED !!!
 *
 *   by noyazz
 */

//avoid useless and dangerous queries
const shittyElements = document.querySelectorAll('table, ol > li:not(:has(li))')

shittyElements.forEach(shit => shit.remove())

const questions = document.querySelectorAll('ol > li h3')
const options = document.querySelectorAll('ol > li ul')

const obj = {
    "examData": {
        "holder": "Cisco Netacad",
        "examName": "IT Essentials",
        "abbreviation": "ITE",
        "cap": 1,
        "versionName": "v7",
        "versions": [
            7.00,
            7.20
        ],
        "years": [
            2022,
            2023
        ]
    }
}

const questionArr = []

const regex = /<span style="color: #ff0000;">/;

questions.forEach((question, index) => {
    const optionsArr = [], answerArr = []

    Array.from(options[index].querySelectorAll('li')).forEach(option => {
        optionsArr.push(option.textContent)
        if (regex.test(option.innerHTML))
            answerArr.push(option.textContent)
    })

    const toPush = {
        "question": question.textContent,
        "options": optionsArr,
        "answers": answerArr
    }

    if (question.parentElement.querySelector('img')) 
        toPush.photo = question.parentElement.querySelector('img').src
        
    questionArr.push(toPush)
})

obj.questions = questionArr

const data = JSON.stringify(obj).replace(/\\n/g, '').replace(/ "|" /g, '"')

console.log(data)
