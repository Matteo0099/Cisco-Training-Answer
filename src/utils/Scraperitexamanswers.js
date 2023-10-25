// Remove specific div elements
const divElementsToRemove = document.querySelectorAll('div[data-aaad="true"][data-aa-adunit="/339474670/ITExamAnswers/InContent"]');
divElementsToRemove.forEach(divElement => divElement.remove());

// Remove elements with the class 'w3eden'
const shittyElements = document.querySelectorAll('.w3eden');
shittyElements.forEach(shit => shit.remove());

// Parse questions and options into an object
const obj = {
  "examData": {
    "holder": "Cisco Netacad",
    "examName": "IT Essentials",
    "abbreviation": "ITE",
    "modules": "",
    "versionName": "ccna1-v7",
    "versions": [7.00, 7.02],
    "years": [2023, 2024]
  }
};

const questionArr = [];
const regex = /<span style="color: #ff0000;">/;

// Update the code to capture questions and answers correctly, only up to question 28
const questions = document.querySelectorAll('.thecontent.clearfix p strong');
questions.forEach((question, index) => {
  // Check if we've reached question 29 and beyond
  if (index >= 28 || document.querySelector('.thecontent.clearfix h3') == true) {
    return;
  }

  const optionsArr = [];
  const answerArr = [];
  const images = [];

  // Find the parent <ul> containing options
  const options = question.parentElement.nextElementSibling;
  if (options) {
    Array.from(options.querySelectorAll('li')).forEach(option => {
      optionsArr.push(option.textContent);
      if (regex.test(option.innerHTML)) {
        const match = option.innerHTML.match(regex);
        answerArr[index] = match[0].replace(/<[^>]+>/g, ''); // Extract content within <span>
      }
    });
  }

  // Check if the question contains an SVG image and remove it
  const svgImage = question.parentElement.querySelector('img[src^="data:image/svg+xml"]');
  if (svgImage) {
    return; // Remove the entire question if it contains an SVG image
  }

  // Get image
  const image = question.parentElement.querySelector('img.size-full');
  if (image) {
    // Check if the image src is valid (ends with .jpg or .png)
    if (image.src.endsWith('.jpg') || image.src.endsWith('.png')) {
      images.push(image.src);
    }
  }

  const toPush = {
    "question": question.textContent,
    "options": optionsArr,
    "answer": (answerArr[index]) ? answerArr[index] : '', // Use the captured answer
    "img": images
  };

  questionArr.push(toPush);
});

obj.questions = questionArr;

// Convert to JSON
const data = JSON.stringify(obj);
console.log(data);

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

const shit2 = document.querySelectorAll('.thecontent.clearfix strong .message_box.note');
if(shit2) {
  shit2.forEach(tag => tag.remove()); 
}

const infoBox = document.querySelectorAll('.thecontent.clearfix .message_box.announce');
if(infoBox) {
  infoBox.forEach(infotag => infotag.remove());
}

const avoidTitles = document.querySelectorAll('.thecontent.clearfix h2');
if(avoidTitles) {
  avoidTitles.forEach(title => title.remove());
}

// Remove specific elements with class 'message_box.success'
const successMessages = document.querySelectorAll('.thecontent.clearfix .message_box.success');
successMessages.forEach(successMessage => successMessage.remove());

// Remove specific paragraphs within .thecontent.clearfix with a <strong> and a <span>
const messageParagraphs = document.querySelectorAll('.thecontent.clearfix p strong + span');
messageParagraphs.forEach(messageParagraph => messageParagraph.parentElement.remove());
