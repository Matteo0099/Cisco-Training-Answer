// Scraper for 4routing.net
const content = document.querySelector('.thecontent.clearfix');

// Remove all div.wp-caption elements within content
content.querySelectorAll('div.wp-caption').forEach((element) => element.remove());

// remove some shit 1
content.querySelectorAll('.message_box.success').forEach((element) => element.remove());

// remove some shit 2
content.querySelectorAll('.message_box.announce').forEach((element) => element.remove());

content.querySelectorAll('.w3eden').forEach((element) => element.remove());

// avoid useless paragraphs
content.querySelectorAll('strong .message_box.note').forEach((element) => element.remove());

// Remove empty paragraphs within content
content.querySelectorAll('p').forEach((paragraph) => {
  if (paragraph.textContent === ' ') {
    paragraph.remove();
  }
});

// Remove the specific paragraph
content.querySelectorAll('p > strong').forEach((element) => {
  if (element.innerText === "Place the options in the following order:") {
    if (element) {
      element.remove();
    }
  }
});

// Remove paragraphs with the specific structure
content.querySelectorAll('p').forEach((paragraph) => {
  const spanElements = paragraph.querySelectorAll('span[style="color: #ff0000;"]');

  // Check if the paragraph has either four or three <span> elements
  if (spanElements.length === 4 || spanElements.length === 3) {
    paragraph.remove();
  }
});

// Remove elements matching the specified pattern
content.querySelectorAll('div[data-aaad="true"]').forEach((element) => {
  element.remove();
});

// Check if the question contains an SVG image and remove it (in this case there isn't)
content.querySelectorAll('p img[src^="data:image/svg+xml"]').forEach((svgImage) => {
  svgImage.remove();
});

if (content) {
  // Select all <p> elements inside the content
  const paragraphs = content.querySelectorAll('p');

  // Iterate through the <p> elements
  paragraphs.forEach((paragraph) => {
    // Check if the <p> element contains an <img>
    const imgElement = paragraph.querySelector('img');

    if (imgElement) {
      // If an <img> element is found, remove the entire <p> element
      paragraph.remove();
    }
  });
}

// Parse questions and options into an object
const obj = {
  examData: {
    holder: 'Cisco Netacad',
    examName: 'IT Essentials',
    abbreviation: 'ITE',
    modules: '',
    versionName: 'ccna1-v7',
    versions: 6.0,
    years: 2020,
  }
}

const questions = content.querySelectorAll('p strong');
const questionArr = [];

questions.forEach((question) => {
  const optionsArr = [];
  const answerArr = [];

  const options = question.parentElement.querySelector('ul');
  if (options) {
    Array.from(options.querySelectorAll('li')).forEach(option => {
      optionsArr.push(option.textContent);
      if(options.querySelectorAll('li span')) {
        if (regex.test(option.childNodes.innerHTML)) {
          answerArr.push(option.textContent);
        }
      }
    });
  }

  const toPush = {
    "question": question.textContent,
    "options": optionsArr,
    "answer": (answerArr.length === 1) ? answerArr[0] : answerArr
  };

  questionArr.push(toPush);
});

obj.questions = questionArr
const data = JSON.stringify(obj)
console.log(data);
