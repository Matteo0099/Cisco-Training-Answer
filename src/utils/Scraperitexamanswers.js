/**
 * scraper by Matteo0099
 * works well
 * delete the sentence under image before use (not question)
**/

// Remove specific div elements
const divElementsToRemove = document.querySelectorAll('div[data-aaad="true"][data-aa-adunit="/339474670/ITExamAnswers/InContent"]');
divElementsToRemove.forEach(divElement => divElement.remove());

// Remove elements with the class 'w3eden'
const shittyElements = document.querySelectorAll('.w3eden');
shittyElements.forEach(shit => shit.remove());

// remove the first announcement box
const elRemoveInf = document.querySelectorAll('.thecontent.clearfix strong .message_box.note');
if (elRemoveInf) {
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
  shit2.remove();
}

const infoBox = document.querySelector('.thecontent.clearfix .message_box.announce');
if (infoBox) {
  infoBox.remove();
}

const avoidTitles = document.querySelector('.thecontent.clearfix h2');
if (avoidTitles) {
  avoidTitles.remove();
}

// Remove specific elements with class 'message_box.success'
const successMessages = document.querySelectorAll('.thecontent.clearfix .message_box.success');
successMessages.forEach(successMessage => successMessage.remove());

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
const questions = document.querySelectorAll('.thecontent.clearfix p strong');

questions.forEach((question, index) => {
  if (index < 28) { // Process only the first 28 questions

    // Exclude specific unwanted content
    const pText = question.parentElement.textContent;
    if (pText.includes('Place the options in the following order') && pText.includes('–> podcast') && pText.includes('–> social media') && pText.includes('–> wiki') && pText.includes('–> instant messaging')) {
      return; // Skip unwanted content
    }

    const optionsContainer = question.parentElement.nextElementSibling;

    if (optionsContainer) {
      const options = optionsContainer.querySelectorAll('li');
      const optionsArr = [];
      const answerArr = [];
      let images = [];

      options.forEach((option, optionIndex) => {
        const optionText = option.textContent.trim();
        optionsArr.push(optionText);
        if (option.querySelector('span[style="color: #ff0000;"]') || option.querySelector('strong[style="color: #ff0000;"]')) {
          answerArr.push(optionText);
        }
      });

      // Check if the question contains images in <p> elements
      const imagesInQuestion = question.parentElement.querySelectorAll('img.size-full');

      if (imagesInQuestion.length > 0) {
        // Select the second image if it exists, or the first image if there is no second image
        images.push(imagesInQuestion.length > 1 ? imagesInQuestion[1].src : imagesInQuestion[0].src);
      }

      // Remove numbering from the question text
      const questionText = question.textContent.replace(/^\d+\.\s/, '').trim();

      const toPush = {
        "question": questionText,
        "options": optionsArr,
        "answer": answerArr
      };

      if (images.length > 0) {
        toPush.images = images;
      }

      questionArr.push(toPush);
    }
  }
});

obj.questions = questionArr;
const jsonData = JSON.stringify(obj, null, 2); // The 'null, 2' argument formats the JSON with indentation for readability
console.log(jsonData);
