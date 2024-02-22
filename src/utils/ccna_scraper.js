/**
 *   console script to scraper answers (exam details below in obj schema)
 *   into a JavaScript object from domain (https://itexamanswers.net/*)'s payload
 *
 *   https://itexamanswers.net/ccna-1-v5-1-v6-0-chapter-[chap]-exam-answers-100-full.html
 *
 *   !!! WARNING !!!
 *
 *   ONLY MULTIPLE CHOICE QUESTIONS (MOST OF THEM) ARE SCRAPERED.
 *   !!! COMPLETION QUESTIONS AND DRAG-AND-DROP EXERCISES ARE OMITTED !!!
 *
 *   by noyazz
 */

const optionsLists = document
    .querySelector("div.thecontent.clearfix")
    .querySelectorAll("p ~ ul")
const secondOptionsList = document.querySelectorAll("div.thecontent.clearfix strong ~ ul")
const brs = document.querySelectorAll('br').forEach(shitty => shitty.remove());

const paragraphs = document.querySelectorAll('.thecontent.clearfix p');
paragraphs.forEach(pTag => {
    if (pTag.textContent.trim() === '' && pTag.children.length === 0) {
        pTag.remove();
    }
});

const obj = {
    examData: {
        holder: "Cisco Netacad",
        examName: "CCNAv7: Introduction to Networks",
        abbreviation: "ITN",
        cap: 3,
        versionName: null,
        versions: [5.1, 6.0],
        years: [2020],
    },
    questions: [],
}

first();
function first() {
    optionsLists.forEach((optionsList) => {
        const questionContainer = optionsList.previousElementSibling
        const options = [...optionsList.children]
    
        obj.questions.push({
            question: questionContainer.textContent.replace(/^\d+\.\s/, ""),
            if(question) {
                if (question.textContent.trim() === '' && question.children.length === 0) {
                    secondOption();
                }
            },
            options: options.map((option) => option.textContent),
            answers: options
                .filter((option) =>
                    /<span style="color: #ff0000;">/.test(option.innerHTML),
                )
                .map((option) => option.textContent),
            img: questionContainer.querySelector("img[src]")?.src,
        })
    })
}

function secondOption() {
    secondOptionsList.forEach((optionsList) => {
        const questionContainer = optionsList.previousElementSibling
        const options = [...optionsList.children]

        obj.questions.push({
            question: questionContainer.textContent.replace(/^\d+\.\s/, ""),
            options: options.map((option) => option.textContent),
            answers: options
                .filter((option) =>
                    /<span style="color: #ff0000;">/.test(option.innerHTML),
                )
                .map((option) => option.textContent),
            img: questionContainer.querySelector("img[src]")?.src,
        })
    })

}

console.log(JSON.stringify(obj).replace(/\\n/g, '').replace(/\u00A0|\u200B/g, ""))