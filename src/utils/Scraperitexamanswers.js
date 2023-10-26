// Remove specific div elements
const divElementsToRemove = document.querySelectorAll('div[data-aaad="true"][data-aa-adunit="/339474670/ITExamAnswers/InContent"]');
divElementsToRemove.forEach(divElement => divElement.remove());

// Remove elements with the class 'w3eden'
const shittyElements = document.querySelectorAll('.w3eden');
shittyElements.forEach(shit => shit.remove());

// remove the first announcement box
const elRemoveInf = document.querySelectorAll('.thecontent.clearfix strong .message_box.note');
if(elRemoveInf) {
  elRemoveInf.forEach(elTag => elTag.remove());
}

// Remove empty <p> tags but keep <p><strong>...</strong></p> tags
const paragraphs = document.querySelectorAll('.thecontent.clearfix p');
paragraphs.forEach(pTag => {
  if (pTag.textContent.trim() === '' && pTag.children.length === 0) {
    pTag.remove();
  }
});

// Remove <br> tags within .thecontent.clearfix
const brTags = document.querySelectorAll('.thecontent.clearfix br');
brTags.forEach(brTag => brTag.remove());

const shit2 = document.querySelector('.thecontent.clearfix strong + .message_box.note');
if (shit2) {
  shit2.forEach(shit => shit.remove());
}

const infoBox = document.querySelector('.thecontent.clearfix .message_box.announce');
if (infoBox) {
  infoBox.remove();
}

const avoidTitles = document.querySelector('.thecontent.clearfix h2');
if (avoidTitles) {
  avoidTitles.forEach(shit => shit.remove());
}

// Remove specific elements with class 'message_box.success'
const successMessages = document.querySelectorAll('.thecontent.clearfix .message_box.success');
successMessages.forEach(successMessage => successMessage.remove());

// Remove specific paragraphs within .thecontent.clearfix with a <strong> and a <span>
const messageParagraphs = document.querySelectorAll('.thecontent.clearfix p strong + span');
messageParagraphs.forEach(messageParagraph => messageParagraph.parentElement.remove());

// Remove the first image if empty
const emptyImage = document.querySelector('.thecontent.clearfix p img.size-full:nth-child(1)');
if (emptyImage) {
  emptyImage.forEach(shit => shit.remove());
}

// Parse questions and options into an object
const obj = {
  "examData": {
    "holder": "Cisco Netacad",
    "examName": "IT Essentials",
    "abbreviation": "CCNA",
    "modules": "",
    "versionName": "ccna1-v6.0",
    "versions": 6.0,
    "years": 2020
  },
  "questions": []
};

const questionArr = [];
const regex = /<span style="color: #ff0000;">/;  // right question.

// Update the code to capture questions and answers correctly, only up to question 28
const questions = document.querySelectorAll('.thecontent.clearfix p strong');

let index = 0;
while (index < 28) {
  const question = questions[index];
  const options = question.parentElement.querySelectorAll('li');
  const optionsArr = [];
  const answerArr = [];
  const images = [];

  if (options) {
    Array.from(options).forEach(option => {
      optionsArr.push(option.textContent);
      if (regex.test(option.innerHTML)) {
        answerArr.push(option.textContent);
      }
    });
  }

  // Check if the question contains an SVG image and remove it
  const svgImage = question.parentElement.querySelector('img[src^="data:image/svg+xml"]');
  if (svgImage) {
    // index++;
    continue; // Remove the entire question if it contains an SVG image
  }

  // Get image (the second is with the arrows)
  const image = question.parentElement.querySelector('img.size-full:nth-child(2)');
  if (image) {
    // Check if the image src is valid (ends with .jpg or .png)
    if (image.src.endsWith('.jpg') || image.src.endsWith('.png')) {
      images.push(image.src);
    }
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

obj.questions = questionArr;
const jsonData = JSON.stringify(obj);
console.log(jsonData);