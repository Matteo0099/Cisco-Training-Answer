// Remove specific elements
const shittyElements = document.querySelectorAll('.entry-content ol > li > ul > li > table');
shittyElements.forEach(shit => shit.remove());

const shittyH2 = document.querySelectorAll('.entry-content h2');
shittyH2.forEach(shit => shit.remove());

const figures = document.querySelectorAll('figure > figcaption');
figures.forEach(fig => fig.remove());

const table = document.querySelectorAll('.entry-content ol > li > table');
table.forEach(table => table.remove());

const paragraphs = document.querySelectorAll('.entry-content ol > li > p');
paragraphs.forEach(paragraph => paragraph.remove());

const contentPrincipale = document.querySelector('.entry-content .post-modified-info');
if (contentPrincipale) {
  contentPrincipale.remove();
}

// Parse questions and options into an object
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
};

const questionArr = [];
const regex = /<span style="color: #ff0000;">/;

const questions = document.querySelectorAll('ol > li > h3');
questions.forEach((question) => {
  const optionsArr = [];
  const answerArr = [];
  const images = [];

  const options = question.parentElement.querySelector('ul');
  if (options) {
    Array.from(options.querySelectorAll('li')).forEach(option => {
      optionsArr.push(option.textContent);
      if (regex.test(option.innerHTML)) {
        answerArr.push(option.textContent);
      }
    });
  }

  // Check if the question contains an SVG image and remove it
  const svgImage = question.parentElement.querySelector('img[src^="data:image/svg+xml"]');
  if (svgImage) {
    // Remove the entire question if it contains an SVG image
    return;
  }

  // Get image
  const image = question.parentElement.querySelector('div.wp-caption img');
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
});

obj.questions = questionArr;

// Convert to JSON
const data = JSON.stringify(obj);
console.log(data);
