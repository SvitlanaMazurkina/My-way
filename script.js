function startLesen() {
  document.getElementById("menu").classList.add("hidden");

  document.getElementById("lesen").classList.remove("hidden");

  loadTest();
}

function backMenu() {
  document.getElementById("lesen").classList.add("hidden");

  document.getElementById("menu").classList.remove("hidden");
}

function loadTest() {
  let html = "";

  let questionNumber = 1;

  lessons.forEach((lesson) => {
    html += `

<div class="text-box">

<h2>${lesson.title}</h2>

<p>${lesson.text}</p>

</div>

`;

    lesson.questions.forEach((question) => {
      html += `

<div class="question">

<h3>Frage ${questionNumber}</h3>

<p>${question.question}</p>

`;

      question.options.forEach((option, index) => {
        html += `

<div class="answer">

<label>

<input 
type="radio"
name="question${questionNumber}"
value="${index}">

${option}

</label>

</div>

`;
      });

      html += `

</div>

`;

      questionNumber++;
    });
  });

  document.getElementById("test-container").innerHTML = html;

  // після створення тексту запускаємо переклад
  addTranslations();
}

function addTranslations() {
  if (typeof vocabulary === "undefined") {
    return;
  }

  const container = document.getElementById("test-container");

  let html = container.innerHTML;

  vocabulary.forEach((item) => {
    const escapedWord = item.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`\\b${escapedWord}\\b`, "gi");

    html = html.replace(
      regex,
      `<span class="translate-word" data-translation="${item.translation}">
      $&
      </span>`,
    );
  });

  container.innerHTML = html;

  document.querySelectorAll(".translate-word").forEach((word) => {
    word.addEventListener("mouseenter", function () {
      const tooltip = document.createElement("div");

      tooltip.className = "translation-tooltip";

      tooltip.innerText = this.dataset.translation;

      document.body.appendChild(tooltip);

      const rect = this.getBoundingClientRect();

      tooltip.style.left = rect.left + window.scrollX + "px";

      tooltip.style.top = rect.bottom + window.scrollY + 5 + "px";

      this.tooltip = tooltip;
    });

    word.addEventListener("mouseleave", function () {
      if (this.tooltip) {
        this.tooltip.remove();

        this.tooltip = null;
      }
    });
  });
}

function checkAll() {
  let total = 0;

  let correct = 0;

  let number = 1;

  lessons.forEach((lesson) => {
    lesson.questions.forEach((question) => {
      total++;

      let answer = document.querySelector(
        `input[name="question${number}"]:checked`,
      );

      if (answer && Number(answer.value) === question.correct) {
        correct++;
      }

      number++;
    });
  });

  document.getElementById("result").innerHTML = `

<h3>Ergebnis:</h3>

<p>${correct} von ${total} richtig</p>

`;
}
