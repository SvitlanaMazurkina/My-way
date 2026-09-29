// ============================================================
// B2 BERUF TRAINER
// script.js
// ============================================================

// ============================================================
// НАВІГАЦІЯ
// ============================================================

function hideAllSections() {
  const sections = ["menu", "lesen1", "lesen2", "lesen3", "lesen4", "hoeren1"];

  sections.forEach((id) => {
    const element = document.getElementById(id);

    if (element) {
      element.classList.add("hidden");
    }
  });
}

function backMenu() {
  hideAllSections();

  const menu = document.getElementById("menu");

  if (menu) {
    menu.classList.remove("hidden");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function startLesen1() {
  hideAllSections();

  const section = document.getElementById("lesen1");

  if (section) {
    section.classList.remove("hidden");
  }

  loadTest1();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function startLesen2() {
  hideAllSections();

  const section = document.getElementById("lesen2");

  if (section) {
    section.classList.remove("hidden");
  }

  loadTest2();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function startLesen3() {
  hideAllSections();

  const section = document.getElementById("lesen3");

  if (section) {
    section.classList.remove("hidden");
  }

  loadTest3();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function startLesen4() {
  hideAllSections();

  const section = document.getElementById("lesen4");

  if (section) {
    section.classList.remove("hidden");
  }

  loadTest4();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function startHoeren1() {
  hideAllSections();

  const section = document.getElementById("hoeren1");

  if (section) {
    section.classList.remove("hidden");
  }

  // Diese Funktion kommt aus hoeren.js
  if (typeof loadHoeren1 === "function") {
    loadHoeren1();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ============================================================
// ERGEBNIS
// ============================================================

function showResult(resultId, correct, total) {
  const result = document.getElementById(resultId);

  if (!result) {
    return;
  }

  if (total === 0) {
    result.innerHTML = `
      <div class="result-box">
        Keine Aufgaben gefunden.
      </div>
    `;

    return;
  }

  const percentage = Math.round((correct / total) * 100);

  result.innerHTML = `
    <div class="result-box">
      <h2>Ergebnis</h2>
      <p>
        <strong>${correct} von ${total}</strong> richtig
      </p>
      <p>
        <strong>${percentage}%</strong>
      </p>
    </div>
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

// ============================================================
// LESEN TEIL 1
// ============================================================

function loadTest1() {
  const container = document.getElementById("test-container-1");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (typeof lesenTeil1 === "undefined" || !Array.isArray(lesenTeil1)) {
    container.innerHTML = `
      <div class="error-message">
        Die Daten für Lesen Teil 1 konnten nicht geladen werden.
      </div>
    `;

    return;
  }

  lesenTeil1.forEach((test, testIndex) => {
    const testBox = document.createElement("div");
    testBox.className = "teil1-test";

    // ----------------------------------------------------------
    // TITEL
    // ----------------------------------------------------------

    const title = document.createElement("h2");
    title.textContent = test.title;

    testBox.appendChild(title);

    // ----------------------------------------------------------
    // TEXTE A-H
    // ----------------------------------------------------------

    if (test.texts && typeof test.texts === "object") {
      const textsTitle = document.createElement("h3");
      textsTitle.textContent = "Texte";

      testBox.appendChild(textsTitle);

      const textsBox = document.createElement("div");
      textsBox.className = "teil1-texts";

      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

      letters.forEach((letter) => {
        if (!test.texts[letter]) {
          return;
        }

        const textBox = document.createElement("div");
        textBox.className = "teil1-text";

        const textLetter = document.createElement("strong");
        textLetter.className = "teil1-text-letter";
        textLetter.textContent = letter;

        const textContent = document.createElement("div");
        textContent.className = "teil1-text-content";

        textContent.style.whiteSpace = "pre-line";

        textContent.textContent = String(test.texts[letter]).trim();

        textBox.appendChild(textLetter);
        textBox.appendChild(textContent);

        textsBox.appendChild(textBox);
      });

      testBox.appendChild(textsBox);
    }

    // ----------------------------------------------------------
    // SITUATIONEN
    // ----------------------------------------------------------

    if (Array.isArray(test.situations)) {
      const situationsTitle = document.createElement("h3");
      situationsTitle.textContent = "Situationen";

      testBox.appendChild(situationsTitle);

      const situationsBox = document.createElement("div");
      situationsBox.className = "teil1-questions";

      test.situations.forEach((situation, questionIndex) => {
        const questionBox = document.createElement("div");

        questionBox.className = "teil1-question";

        const questionText = document.createElement("p");

        const number = document.createElement("strong");

        number.textContent = situation.number + ". ";

        questionText.appendChild(number);

        questionText.appendChild(document.createTextNode(situation.text));

        questionBox.appendChild(questionText);

        const optionsBox = document.createElement("div");

        optionsBox.className = "teil1-options";

        const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

        letters.forEach((letter) => {
          const label = document.createElement("label");

          label.className = "teil1-option";

          const input = document.createElement("input");

          input.type = "radio";

          input.name = `lesen1-${testIndex}-${questionIndex}`;

          input.value = letter;

          const letterSpan = document.createElement("span");

          letterSpan.className = "option-letter";

          letterSpan.textContent = letter;

          label.appendChild(input);
          label.appendChild(letterSpan);

          input.addEventListener("change", function () {
            checkTeil1Answer(input, questionBox, situation.correct);
          });

          optionsBox.appendChild(label);
        });

        questionBox.appendChild(optionsBox);

        situationsBox.appendChild(questionBox);
      });

      testBox.appendChild(situationsBox);
    }

    container.appendChild(testBox);
  });
}

function checkTeil1Answer(input, questionBox, correctAnswer) {
  const options = questionBox.querySelectorAll(".teil1-option");

  options.forEach((option) => {
    option.classList.remove(
      "selected-correct",
      "selected-wrong",
      "correct-answer",
    );
  });

  const selectedLabel = input.closest(".teil1-option");

  if (!selectedLabel) {
    return;
  }

  const selected = input.value.toLowerCase();

  const correct = String(correctAnswer).toLowerCase();

  if (selected === correct) {
    selectedLabel.classList.add("selected-correct");
  } else {
    selectedLabel.classList.add("selected-wrong");

    options.forEach((option) => {
      const optionInput = option.querySelector("input");

      if (optionInput && optionInput.value.toLowerCase() === correct) {
        option.classList.add("correct-answer");
      }
    });
  }
}

function checkAll1() {
  let total = 0;
  let correct = 0;

  if (typeof lesenTeil1 === "undefined" || !Array.isArray(lesenTeil1)) {
    return;
  }

  lesenTeil1.forEach((test, testIndex) => {
    if (!Array.isArray(test.situations)) {
      return;
    }

    test.situations.forEach((situation, questionIndex) => {
      total++;

      const selected = document.querySelector(
        `input[name="lesen1-${testIndex}-${questionIndex}"]:checked`,
      );

      if (
        selected &&
        selected.value.toLowerCase() === String(situation.correct).toLowerCase()
      ) {
        correct++;
      }
    });
  });

  showResult("result1", correct, total);
}

// ============================================================
// LESEN TEIL 2
// ============================================================

function loadTest2() {
  const container = document.getElementById("test-container-2");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (typeof lessons === "undefined" || !Array.isArray(lessons)) {
    container.innerHTML = `
      <div class="error-message">
        Die Daten für Lesen Teil 2 konnten nicht geladen werden.
      </div>
    `;

    return;
  }

  lessons.forEach((lesson, lessonIndex) => {
    const lessonBox = document.createElement("div");

    lessonBox.className = "lesson";

    // --------------------------------------------------------
    // TITEL
    // --------------------------------------------------------

    const title = document.createElement("h2");

    title.textContent = lesson.title;

    lessonBox.appendChild(title);

    // --------------------------------------------------------
    // TEXT
    // --------------------------------------------------------

    if (lesson.text) {
      const textBox = document.createElement("div");

      textBox.className = "text-box";

      textBox.style.whiteSpace = "pre-line";

      textBox.textContent = String(lesson.text).trim();

      lessonBox.appendChild(textBox);
    }

    // --------------------------------------------------------
    // FRAGEN
    // --------------------------------------------------------

    if (Array.isArray(lesson.questions)) {
      lesson.questions.forEach((question, questionIndex) => {
        const questionBox = document.createElement("div");

        questionBox.className = "question";

        const questionText = document.createElement("p");

        questionText.className = "question-text";

        questionText.textContent = question.question;

        questionBox.appendChild(questionText);

        const optionsBox = document.createElement("div");

        optionsBox.className = "options";

        if (Array.isArray(question.options)) {
          question.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");

            label.className = "option";

            const input = document.createElement("input");

            input.type = "radio";

            input.name = `lesen2-${lessonIndex}-${questionIndex}`;

            input.value = optionIndex;

            const letter = document.createElement("span");

            letter.className = "option-letter";

            letter.textContent = String.fromCharCode(97 + optionIndex) + ")";

            const optionText = document.createElement("span");

            optionText.textContent = option;

            label.appendChild(input);
            label.appendChild(letter);
            label.appendChild(optionText);

            input.addEventListener("change", function () {
              checkTeil2Answer(input, questionBox, question.correct);
            });

            optionsBox.appendChild(label);
          });
        }

        questionBox.appendChild(optionsBox);

        lessonBox.appendChild(questionBox);
      });
    }

    container.appendChild(lessonBox);
  });
}

function checkTeil2Answer(input, questionBox, correctAnswer) {
  const options = questionBox.querySelectorAll(".option");

  options.forEach((option) => {
    option.classList.remove(
      "selected-correct",
      "selected-wrong",
      "correct-answer",
    );
  });

  const selectedLabel = input.closest(".option");

  if (!selectedLabel) {
    return;
  }

  const selectedAnswer = Number(input.value);

  const correct = Number(correctAnswer);

  if (selectedAnswer === correct) {
    selectedLabel.classList.add("selected-correct");
  } else {
    selectedLabel.classList.add("selected-wrong");

    options.forEach((option) => {
      const optionInput = option.querySelector("input");

      if (optionInput && Number(optionInput.value) === correct) {
        option.classList.add("correct-answer");
      }
    });
  }
}

function checkAll2() {
  let total = 0;
  let correct = 0;

  if (typeof lessons === "undefined" || !Array.isArray(lessons)) {
    return;
  }

  lessons.forEach((lesson, lessonIndex) => {
    if (!Array.isArray(lesson.questions)) {
      return;
    }

    lesson.questions.forEach((question, questionIndex) => {
      total++;

      const selected = document.querySelector(
        `input[name="lesen2-${lessonIndex}-${questionIndex}"]:checked`,
      );

      if (selected && Number(selected.value) === Number(question.correct)) {
        correct++;
      }
    });
  });

  showResult("result2", correct, total);
}

// ============================================================
// LESEN TEIL 3
// ============================================================

function loadTest3() {
  const container = document.getElementById("test-container-3");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (typeof lesenTeil3 === "undefined" || !Array.isArray(lesenTeil3)) {
    container.innerHTML = `
      <div class="error-message">
        Die Daten für Lesen Teil 3 konnten nicht geladen werden.
      </div>
    `;

    return;
  }

  lesenTeil3.forEach((test, testIndex) => {
    const testBox = document.createElement("div");

    testBox.className = "teil3-test";

    // --------------------------------------------------------
    // TITEL
    // --------------------------------------------------------

    const title = document.createElement("h2");

    title.textContent = test.title;

    testBox.appendChild(title);

    // --------------------------------------------------------
    // ANTWORTEN A-F
    // --------------------------------------------------------

    if (test.responses && typeof test.responses === "object") {
      const responsesTitle = document.createElement("h3");

      responsesTitle.textContent = "Antworten";

      testBox.appendChild(responsesTitle);

      const responsesBox = document.createElement("div");

      responsesBox.className = "teil3-responses";

      const letters = ["a", "b", "c", "d", "e", "f"];

      letters.forEach((letter) => {
        if (!test.responses[letter]) {
          return;
        }

        const responseBox = document.createElement("div");

        responseBox.className = "teil3-response";

        const responseLetter = document.createElement("strong");

        responseLetter.className = "teil3-response-letter";

        responseLetter.textContent = letter;

        const responseText = document.createElement("div");

        responseText.className = "teil3-response-text";

        responseText.style.whiteSpace = "pre-line";

        responseText.textContent = String(test.responses[letter]).trim();

        responseBox.appendChild(responseLetter);

        responseBox.appendChild(responseText);

        responsesBox.appendChild(responseBox);
      });

      testBox.appendChild(responsesBox);
    }

    // --------------------------------------------------------
    // FRAGEN
    // --------------------------------------------------------

    if (Array.isArray(test.questions)) {
      const questionsTitle = document.createElement("h3");

      questionsTitle.textContent = "Fragen";

      testBox.appendChild(questionsTitle);

      const questionsBox = document.createElement("div");

      questionsBox.className = "teil3-questions";

      test.questions.forEach((question, questionIndex) => {
        const questionBox = document.createElement("div");

        questionBox.className = "teil3-question";

        const questionText = document.createElement("p");

        const name = document.createElement("strong");

        name.textContent = `${question.number}. ${question.name}: `;

        questionText.appendChild(name);

        questionText.appendChild(document.createTextNode(question.text));

        questionBox.appendChild(questionText);

        const optionsBox = document.createElement("div");

        optionsBox.className = "teil3-options";

        const letters = ["a", "b", "c", "d", "e", "f", "X"];

        letters.forEach((letter) => {
          const label = document.createElement("label");

          label.className = "teil3-option";

          const input = document.createElement("input");

          input.type = "radio";

          input.name = `lesen3-${testIndex}-${questionIndex}`;

          input.value = letter;

          const letterSpan = document.createElement("span");

          letterSpan.className = "option-letter";

          letterSpan.textContent = letter;

          label.appendChild(input);

          label.appendChild(letterSpan);

          input.addEventListener("change", function () {
            checkTeil3Answer(input, questionBox, question.correct);
          });

          optionsBox.appendChild(label);
        });

        questionBox.appendChild(optionsBox);

        questionsBox.appendChild(questionBox);
      });

      testBox.appendChild(questionsBox);
    }

    container.appendChild(testBox);
  });
}

function checkTeil3Answer(input, questionBox, correctAnswer) {
  const options = questionBox.querySelectorAll(".teil3-option");

  options.forEach((option) => {
    option.classList.remove(
      "selected-correct",
      "selected-wrong",
      "correct-answer",
    );
  });

  const selectedLabel = input.closest(".teil3-option");

  if (!selectedLabel) {
    return;
  }

  const selected = input.value.toLowerCase();

  const correct = String(correctAnswer).toLowerCase();

  if (selected === correct) {
    selectedLabel.classList.add("selected-correct");
  } else {
    selectedLabel.classList.add("selected-wrong");

    options.forEach((option) => {
      const optionInput = option.querySelector("input");

      if (optionInput && optionInput.value.toLowerCase() === correct) {
        option.classList.add("correct-answer");
      }
    });
  }
}

function checkAll3() {
  let total = 0;
  let correct = 0;

  if (typeof lesenTeil3 === "undefined" || !Array.isArray(lesenTeil3)) {
    return;
  }

  lesenTeil3.forEach((test, testIndex) => {
    if (!Array.isArray(test.questions)) {
      return;
    }

    test.questions.forEach((question, questionIndex) => {
      total++;

      const selected = document.querySelector(
        `input[name="lesen3-${testIndex}-${questionIndex}"]:checked`,
      );

      if (
        selected &&
        selected.value.toLowerCase() === String(question.correct).toLowerCase()
      ) {
        correct++;
      }
    });
  });

  showResult("result3", correct, total);
}

// ============================================================
// LESEN TEIL 4
// ============================================================

function loadTest4() {
  const container = document.getElementById("test-container-4");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (typeof lesenTeil4 === "undefined" || !Array.isArray(lesenTeil4)) {
    container.innerHTML = `
      <div class="error-message">
        Die Daten für Lesen Teil 4 konnten nicht geladen werden.
      </div>
    `;

    return;
  }

  lesenTeil4.forEach((test, testIndex) => {
    const testBox = document.createElement("div");

    testBox.className = "teil4-test";

    // --------------------------------------------------------
    // TITEL
    // --------------------------------------------------------

    const title = document.createElement("h2");

    title.textContent = test.title;

    testBox.appendChild(title);

    // --------------------------------------------------------
    // PROTOKOLL
    // --------------------------------------------------------

    if (test.text) {
      const textBox = document.createElement("div");

      textBox.className = "text-box";

      textBox.style.whiteSpace = "pre-line";

      textBox.textContent = String(test.text).trim();

      testBox.appendChild(textBox);
    }

    // --------------------------------------------------------
    // FRAGEN
    // --------------------------------------------------------

    if (Array.isArray(test.questions)) {
      test.questions.forEach((question, questionIndex) => {
        const questionBox = document.createElement("div");

        questionBox.className = "question";

        const questionText = document.createElement("p");

        questionText.className = "question-text";

        questionText.textContent = question.question;

        questionBox.appendChild(questionText);

        const optionsBox = document.createElement("div");

        optionsBox.className = "options";

        if (Array.isArray(question.options)) {
          question.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");

            label.className = "option";

            const input = document.createElement("input");

            input.type = "radio";

            input.name = `lesen4-${testIndex}-${questionIndex}`;

            input.value = optionIndex;

            const letter = document.createElement("span");

            letter.className = "option-letter";

            letter.textContent = String.fromCharCode(97 + optionIndex) + ")";

            const optionText = document.createElement("span");

            optionText.textContent = option;

            label.appendChild(input);

            label.appendChild(letter);

            label.appendChild(optionText);

            input.addEventListener("change", function () {
              checkTeil4Answer(input, questionBox, question.correct);
            });

            optionsBox.appendChild(label);
          });
        }

        questionBox.appendChild(optionsBox);

        testBox.appendChild(questionBox);
      });
    }

    container.appendChild(testBox);
  });
}

function checkTeil4Answer(input, questionBox, correctAnswer) {
  const options = questionBox.querySelectorAll(".option");

  options.forEach((option) => {
    option.classList.remove(
      "selected-correct",
      "selected-wrong",
      "correct-answer",
    );
  });

  const selectedLabel = input.closest(".option");

  if (!selectedLabel) {
    return;
  }

  const selectedAnswer = Number(input.value);

  const correct = Number(correctAnswer);

  if (selectedAnswer === correct) {
    selectedLabel.classList.add("selected-correct");
  } else {
    selectedLabel.classList.add("selected-wrong");

    options.forEach((option) => {
      const optionInput = option.querySelector("input");

      if (optionInput && Number(optionInput.value) === correct) {
        option.classList.add("correct-answer");
      }
    });
  }
}

function checkAll4() {
  let total = 0;
  let correct = 0;

  if (typeof lesenTeil4 === "undefined" || !Array.isArray(lesenTeil4)) {
    return;
  }

  lesenTeil4.forEach((test, testIndex) => {
    if (!Array.isArray(test.questions)) {
      return;
    }

    test.questions.forEach((question, questionIndex) => {
      total++;

      const selected = document.querySelector(
        `input[name="lesen4-${testIndex}-${questionIndex}"]:checked`,
      );

      if (selected && Number(selected.value) === Number(question.correct)) {
        correct++;
      }
    });
  });

  showResult("result4", correct, total);
}

// ============================================================
// STARTSEITE
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  hideAllSections();

  const menu = document.getElementById("menu");

  if (menu) {
    menu.classList.remove("hidden");
  }
});
