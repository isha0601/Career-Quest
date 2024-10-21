import { careerData } from "./careerData.js";
const questions = {
  arts: [
    {
      question:
        "Do you prefer visual arts (painting, design, photography) over performing arts (music, dance, theater)?",
      yes: 1,
      no: 2,
    },
    {
      question:
        "Are you more interested in creating original artwork than using digital tools to create designs?",
      yes: 3,
      no: 4,
    },
    {
      question:
        "Do you prefer performing music over acting in theater or films?",
      yes: 5,
      no: 6,
    },
    {
      question: "Do you prefer painting or sculpting?",
      yes: 7,
      no: 8,
    },
    {
      question: "Do you prefer graphic design over photography?",
      yes: 9,
      no: 10,
    },
    {
      question:
        "Do you prefer composing your own music over performing existing pieces?",
      yes: 11,
      no: 12,
    },
    {
      question: "Do you prefer stage acting over acting in films or TV?",
      yes: 13,
      no: 14,
    },
    {
      question: "Do you prefer working with abstract art or realism?",
      yes: "Abstract Painter",
      no: "Realist Painter",
    },
    {
      question:
        "Do you enjoy creating large sculptures or small intricate pieces?",
      yes: "Sculptor (Large-Scale)",
      no: "Miniature Sculptor",
    },
    {
      question: "10) Do you enjoy web design more than print design?",
      yes: " Web Designer",
      no: "Graphic Designer (Print Media)",
    },
    {
      question: " Do you prefer nature photography or portrait photography?",
      yes: "Nature Photographer",
      no: " Portrait Photographer",
    },
    {
      question: "Do you enjoy writing lyrics or composing instrumental music?",
      yes: "Songwriter",
      no: "Composer",
    },
    {
      question: "Do you prefer playing classical music or contemporary music?",
      yes: "Classical Musician",
      no: "Contemporary Musician",
    },
    {
      question: "Do you enjoy directing stage plays or acting in them?",
      yes: " Theater Director",
      no: "Stage Actor",
    },
    {
      question: "Do you prefer working on film direction over screenwriting?",
      yes: "Film Director",
      no: "Screenwriter",
    },
  ],
  science: [
    {
      question:
        "Do you prefer working with living organisms (biology) over non-living systems (physics/chemistry)?",
      yes: 1,
      no: 2,
    },
    {
      question: "Are you interested in the health and medical field?",
      yes: 3,
      no: 4,
    },
    {
      question:
        "Do you prefer working with physical systems (physics) over chemical systems (chemistry)?",
      yes: 5,
      no: 6,
    },
    {
      question: "Do you like direct patient care or research work?",
      yes: 7,
      no: 8,
    },
    {
      question: "Do you enjoy studying large ecosystems or microorganisms?",
      yes: 9,
      no: 10,
    },
    {
      question: "Are you interested in space and astrophysics?",
      yes: 11,
      no: 12,
    },
    {
      question:
        "Do you prefer designing chemical processes or environmental solutions?",
      yes: 13,
      no: 14,
    },
    {
      question: "Are you more inclined toward surgery over general medicine",
      yes: "Surgery Surgeon",
      no: "General medicine General Physician",
    },
    {
      question: "Do you prefer genetic research over pharmaceutical research?",
      yes: "Genetic research Creneticist",
      no: "Pharmaceutical research Pharmacologist",
    },
    {
      question: "Do you prefer studing plants over animals in ecosystems?",
      yes: "Plants Botanist",
      no: "Animals zoologist",
    },
    {
      question: "Do you want to study harmful over beneficial microorganisms?",
      yes: "Harmful Virologist",
      no: "Beneficial Microbiologist.",
    },
    {
      question:
        "Are you interested in theoretical physics over space engineering?",
      yes: "Theoretical physics Astrophysicist",
      no: "Space engineering- Aerospace Engineering",
    },
    {
      question:
        "Do you prefer studying quantum physics over classical physics?",
      yes: "Quantum physics guantum Physicist",
      no: "Classical physics Physicist",
    },
    {
      question: "Do you enjoy working in industrial over labenvironments?",
      yes: "Industrial Chemical Engineer",
      no: "Lab environments Industrial Chemist",
    },
    {
      question:
        " Do you want to work on pollution control over urban planning?",
      yes: "Pollution control Environmental Engineer",
      no: "Urban planning- civil engineer",
    },
  ],
  commerce: [
    {
      question:
        "Do you prefer working with numbers (accounting, finance) over business management?",
      yes: 1,
      no: 2,
    },
    {
      question:
        "Are you more interested in analyzing financial data than auditing?",
      yes: 3,
      no: 4,
    },
    {
      question:
        "Do you prefer managing businesses or marketing and advertising?",
      yes: 5,
      no: 6,
    },
    {
      question: "Do you prefer corporate finance over personal finance?",
      yes: 7,
      no: 8,
    },
    {
      question: "Do you enjoy forensic accounting over tax accounting?",
      yes: 9,
      no: 10,
    },
    {
      question:
        "Do you prefer managing large enterprises or small businesses/entrepreneurship?",
      yes: 11,
      no: 12,
    },
    {
      question: "Do you prefer digital marketing over traditional marketing?",
      yes: 13,
      no: 14,
    },
    {
      question:
        "Do you enjoy investment banking more than corporate risk management?",
      yes: "Investment Banker",
      no: "Risk Manager",
    },
    {
      question:
        "Do you prefer personal financial planning or wealth management?",
      yes: "Financial Planner",
      no: " Wealth Manager",
    },
    {
      question:
        "Are you more interested in fraud detection or compliance auditing?",
      yes: "Forensic Accountant",
      no: "Internal Auditor",
    },
    {
      question: "Do you prefer corporate taxation or personal taxation?",
      yes: "Corporate Tax Consultant",
      no: "Tax Consultant",
    },
    {
      question: "Do you prefer strategic planning or operations management?",
      yes: "Business Strategist",
      no: "Operations Manager",
    },
    {
      question:
        "Do you enjoy starting new ventures or managing small business growth?",
      yes: "Entrepreneur",
      no: " Small Business Consultant",
    },
    {
      question:
        "Do you prefer social media marketing over search engine optimization (SEO)?",
      yes: " Social Media Manager",
      no: "SEO Specialist",
    },
    {
      question: "Do you prefer traditional advertising or brand management?",
      yes: "Advertising Executive",
      no: "Brand Manager",
    },
  ],
};
let currentStream = "";
let currentQuestionIndex = 0;

function displayQuestion() {
  const currentQuestion = questions[currentStream][currentQuestionIndex];

  if (typeof currentQuestion === "string") {
    document.getElementById(
      "question"
    ).innerText = `Career Recommendation: ${currentQuestion}`;
    document.getElementById("yes-btn").style.display = "none";
    document.getElementById("no-btn").style.display = "none";
  } else {
    document.getElementById("question").innerText = currentQuestion.question;
  }
}
document.getElementById("yes-btn").addEventListener("click", () => {
  const currentQuestion = questions[currentStream][currentQuestionIndex];
  if (typeof currentQuestion.yes === "number") {
    currentQuestionIndex = currentQuestion.yes;
    displayQuestion();
  } else {
    displayResult(currentQuestion.yes);
  }
});

document.getElementById("no-btn").addEventListener("click", () => {
  const currentQuestion = questions[currentStream][currentQuestionIndex];
  if (typeof currentQuestion.no === "number") {
    currentQuestionIndex = currentQuestion.no;
    displayQuestion();
  } else {
    displayResult(currentQuestion.no);
  }
});
function startQuiz(stream) {
  currentStream = stream;
  currentQuestionIndex = 0;
  document.getElementById("yes-btn").style.display = "inline-block";
  document.getElementById("no-btn").style.display = "inline-block";
  displayQuestion();
}
function displayResult(result) {
  console.log(careerData[result + ""]);
  document.getElementById(
    "question"
  ).innerText = `Career Recommendation: ${result}

   ${careerData[result + ""]}`;
  document.getElementById("yes-btn").style.display = "none";
  document.getElementById("no-btn").style.display = "none";
}
document
  .getElementById("arts-btn")
  .addEventListener("click", () => startQuiz("arts"));
document
  .getElementById("science-btn")
  .addEventListener("click", () => startQuiz("science"));
document
  .getElementById("commerce-btn")
  .addEventListener("click", () => startQuiz("commerce"));
