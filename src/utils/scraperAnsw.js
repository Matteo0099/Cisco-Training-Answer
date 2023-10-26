// scraper 4routing.net
const toRem = document.querySelector('.entry-content.clearfix div.wp-caption.alignnone div.wp-caption');
toRem.remove();

const avoidSpan = document.querySelector('.entry-content.clearfix p');
if(avoidSpan.textContent == '&nbsp;') {
  avoidSpan.forEach(spanElement => spanElement.remove());
}

// Check if the question contains an SVG image and remove it (in this case there isn't)
const svgImage = document.querySelector('.entry-content.clearfix p img[src^="data:image/svg+xml"]');
if (svgImage) {
  svgImage.forEach(svgElement => svgElement.remove());
} 

const descrImage = document.querySelector('.entry-content.clearfix p span')
if(descrImage.style.color == '#0000ff') {
  descrImage.forEach(descr => descr.remove());
}

// Parse questions and options into an object
const obj = {
  "examData": {
    "holder": "Cisco Netacad",
    "examName": "IT Essentials",
    "abbreviation": "ITE",
    "modules": "",
    "versionName": "ccna1-v7",
    "versions": 6.0,
    "years": 2020
  }, "questions": []
};

const questionArr = [];
const regex = /<span style="color: #0000ff;">/;  // right question.

// Update the code to capture questions and answers correctly, only up to question 28
const questions = document.querySelectorAll('.entry-content.clearfix h3');
const options = document.querySelectorAll('.entry-content.clearfix p');

let index = 0;
while (index < 28) {
  const question = questions[index];
  const optionsArr = [];
  const answerArr = [];
  const images = [];

  if (options) {
    Array.from(options).forEach(option => {
      optionsArr.push(option.textContent);
      if (regex.test(option.innerHTML)) 
        answerArr.push(option.textContent);
    });
  }

  const imgDiv = document.querySelectorAll('.entry-content.clearfix .wp-caption img')
  if(imgDiv) {
    images.push(imgDiv.src);
  } 

  const toPush = {
    "question": question.textContent,
    "options": optionsArr,
    "answer": (answerArr.length === 1) ? answerArr[0] : answerArr,
    "img": images
  };

  questionArr.push(toPush);
  index++;
}

obj.questions = questionArr
const data = JSON.stringify(obj).replace(/\\n/g, '').replace(/ "|" /g, '"')
console.log(data)
