/* ============================================================
   ALL SECTIONS
============================================================ */

function hideAllSections() {
  const sections = ["menu", "lesen1", "lesen2", "lesen3", "lesen4"];

  sections.forEach((id) => {
    const element = document.getElementById(id);

    if (element) {
      element.classList.add("hidden");
    }
  });
}

/* ============================================================
   MENU
============================================================ */

function startLesen1() {
  hideAllSections();

  document.getElementById("lesen1").classList.remove("hidden");

  loadTest1();
}

function startLesen2() {
  hideAllSections();

  document.getElementById("lesen2").classList.remove("hidden");

  loadTest2();
}

function startLesen3() {
  hideAllSections();

  document.getElementById("lesen3").classList.remove("hidden");

  loadTest3();
}

function startLesen4() {
  hideAllSections();

  document.getElementById("lesen4").classList.remove("hidden");

  if (typeof loadTest4 === "function") {
    loadTest4();
  }
}

function backMenu() {
  hideAllSections();

  document.getElementById("menu").classList.remove("hidden");
}

/* ============================================================
   LESEN TEIL 1
============================================================ */

function loadTest1() {
  const container = document.getElementById("test-container-1");

  if (!container) return;

  container.innerHTML = "";

  if (typeof lesenTeil1 === "undefined" || !Array.isArray(lesenTeil1)) {
    container.innerHTML = `
      <div class="error-message">
        Lesen Teil 1 konnte nicht geladen werden.
      </div>
    `;

    return;
  }

  lesenTeil1.forEach((test, testIndex) => {
    const testBox = document.createElement("div");

    testBox.className = "teil1-test";

    /* ---------- TITEL ---------- */

    const title = document.createElement("h2");

    title.textContent = test.title;

    testBox.appendChild(title);

    /* ---------- TEXTE ---------- */

    const textsBox = document.createElement("div");

    textsBox.className = "teil1-texts";

    const textsTitle = document.createElement("h3");

    textsTitle.textContent = "Texte";

    textsBox.appendChild(textsTitle);

    Object.entries(test.texts).forEach(([letter, text]) => {
      const textItem = document.createElement("div");

      textItem.className = "teil1-text";

      const letterElement = document.createElement("strong");

      letterElement.className = "teil1-text-letter";

      letterElement.textContent = letter;

      const textElement = document.createElement("div");

      textElement.className = "teil1-text-content";

      textElement.innerHTML = text.replace(/\n/g, "<br>");

      textItem.appendChild(letterElement);

      textItem.appendChild(textElement);

      textsBox.appendChild(textItem);
    });

    testBox.appendChild(textsBox);

    /* ---------- SITUATIONS ---------- */

    const questionsBox = document.createElement("div");

    questionsBox.className = "teil1-questions";

    const questionsTitle = document.createElement("h3");

    questionsTitle.textContent = "Welche Antwort passt?";

    questionsBox.appendChild(questionsTitle);

    test.situations.forEach((question, questionIndex) => {
      const questionBox = document.createElement("div");

      questionBox.className = "teil1-question";

      questionBox.id = `teil1-question-${testIndex}-${questionIndex}`;

      const questionText = document.createElement("p");

      questionText.innerHTML = `<strong>${question.number}.</strong> ${question.text}`;

      questionBox.appendChild(questionText);

      const optionsBox = document.createElement("div");

      optionsBox.className = "teil1-options";

      Object.keys(test.texts).forEach((letter) => {
        const label = document.createElement("label");

        label.className = "teil1-option";

        const radio = document.createElement("input");

        radio.type = "radio";

        radio.name = `teil1-${testIndex}-${questionIndex}`;

        radio.value = letter;

        radio.onchange = function () {
          checkTeil1Answer(testIndex, questionIndex, letter);
        };

        const letterSpan = document.createElement("span");

        letterSpan.className = "option-letter";

        letterSpan.textContent = letter;

        label.appendChild(radio);

        label.appendChild(letterSpan);

        optionsBox.appendChild(label);
      });

      questionBox.appendChild(optionsBox);

      const feedback = document.createElement("div");

      feedback.className = "feedback";

      feedback.id = `feedback1-${testIndex}-${questionIndex}`;

      questionBox.appendChild(feedback);

      questionsBox.appendChild(questionBox);
    });

    testBox.appendChild(questionsBox);

    container.appendChild(testBox);
  });

  const result = document.getElementById("result1");

  if (result) {
    result.innerHTML = "";
  }

  if (typeof addTranslations === "function") {
    addTranslations();
  }
}

/* ============================================================
   TEIL 1 - SOFORTIGE KONTROLLE
============================================================ */

function checkTeil1Answer(testIndex, questionIndex, selectedAnswer) {
  const test = lesenTeil1[testIndex];

  const question = test.situations[questionIndex];

  const questionBox = document.getElementById(
    `teil1-question-${testIndex}-${questionIndex}`,
  );

  if (!questionBox) return;

  const options = questionBox.querySelectorAll(".teil1-option");

  options.forEach((option) => {
    option.classList.remove(
      "selected-correct",
      "selected-wrong",
      "correct-answer",
    );
  });

  const selectedOption = Array.from(options).find((option) => {
    const input = option.querySelector("input");

    return input && input.value === selectedAnswer;
  });

  const correctOption = Array.from(options).find((option) => {
    const input = option.querySelector("input");

    return input && input.value === question.correct;
  });

  const feedback = document.getElementById(
    `feedback1-${testIndex}-${questionIndex}`,
  );

  if (selectedAnswer === question.correct) {
    if (selectedOption) {
      selectedOption.classList.add("selected-correct");
    }

    if (feedback) {
      feedback.innerHTML = "✓ Richtig!";

      feedback.className = "feedback feedback-correct";
    }
  } else {
    if (selectedOption) {
      selectedOption.classList.add("selected-wrong");
    }

    if (correctOption) {
      correctOption.classList.add("correct-answer");
    }

    if (feedback) {
      feedback.innerHTML = `✗ Falsch. Die richtige Antwort ist <strong>${question.correct}</strong>.`;

      feedback.className = "feedback feedback-wrong";
    }
  }
}

/* ============================================================
   TEIL 1 - GESAMTERGEBNIS
============================================================ */

function checkAll1() {
  let total = 0;

  let correct = 0;

  if (typeof lesenTeil1 === "undefined" || !Array.isArray(lesenTeil1)) {
    return;
  }

  lesenTeil1.forEach((test, testIndex) => {
    test.situations.forEach((question, questionIndex) => {
      total++;

      const selected = document.querySelector(
        `input[name="teil1-${testIndex}-${questionIndex}"]:checked`,
      );

      if (selected && selected.value === question.correct) {
        correct++;
      }
    });
  });

  const result = document.getElementById("result1");

  if (!result) return;

  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  result.innerHTML = `
    <div class="final-result">
      <h3>Ergebnis Lesen Teil 1</h3>

      <p>
        <strong>${correct} von ${total}</strong>
        Antworten richtig
      </p>

      <p>
        ${percent} %
      </p>
    </div>
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

/* ============================================================
   LESEN TEIL 2
============================================================ */

function loadTest2() {
  const container = document.getElementById("test-container-2");

  if (!container) return;

  container.innerHTML = "";

  if (typeof lessons === "undefined" || !Array.isArray(lessons)) {
    container.innerHTML = `
      <div class="error-message">
        Lesen Teil 2 konnte nicht geladen werden.
      </div>
    `;

    return;
  }

  lessons.forEach((lesson, lessonIndex) => {
    const lessonBox = document.createElement("div");

    lessonBox.className = "lesson";

    const title = document.createElement("h2");

    title.textContent = lesson.title || `Test ${lessonIndex + 1}`;

    lessonBox.appendChild(title);

    const textBox = document.createElement("div");

    textBox.className = "text-box";

    textBox.innerHTML = lesson.text.replace(/\n/g, "<br>");

    lessonBox.appendChild(textBox);

    lesson.questions.forEach((question, questionIndex) => {
      const questionBox = document.createElement("div");

      questionBox.className = "question teil2-question";

      questionBox.id = `teil2-question-${lessonIndex}-${questionIndex}`;

      const questionTitle = document.createElement("p");

      questionTitle.innerHTML = `<strong>${questionIndex + 1}.</strong> ${question.question}`;

      questionBox.appendChild(questionTitle);

      const optionsBox = document.createElement("div");

      optionsBox.className = "teil2-options";

      question.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");

        label.className = "teil2-option";

        const radio = document.createElement("input");

        radio.type = "radio";

        radio.name = `lesson-${lessonIndex}-question-${questionIndex}`;

        radio.value = optionIndex;

        radio.onchange = function () {
          checkTeil2Answer(lessonIndex, questionIndex, optionIndex);
        };

        const letter = document.createElement("span");

        letter.className = "option-letter";

        letter.textContent = String.fromCharCode(97 + optionIndex);

        const text = document.createElement("span");

        text.textContent = option;

        label.appendChild(radio);

        label.appendChild(letter);

        label.appendChild(text);

        optionsBox.appendChild(label);
      });

      questionBox.appendChild(optionsBox);

      const feedback = document.createElement("div");

      feedback.className = "feedback";

      feedback.id = `feedback2-${lessonIndex}-${questionIndex}`;

      questionBox.appendChild(feedback);

      lessonBox.appendChild(questionBox);
    });

    container.appendChild(lessonBox);
  });

  const result = document.getElementById("result2");

  if (result) {
    result.innerHTML = "";
  }

  if (typeof addTranslations === "function") {
    addTranslations();
  }
}

/* ============================================================
   TEIL 2 - SOFORTIGE KONTROLLE
============================================================ */

function checkTeil2Answer(lessonIndex, questionIndex, selectedIndex) {
  const question = lessons[lessonIndex].questions[questionIndex];

  const questionBox = document.getElementById(
    `teil2-question-${lessonIndex}-${questionIndex}`,
  );

  if (!questionBox) return;

  const options = questionBox.querySelectorAll(".teil2-option");

  options.forEach((option) => {
    option.classList.remove(
      "selected-correct",
      "selected-wrong",
      "correct-answer",
    );
  });

  const selectedOption = options[selectedIndex];

  const correctOption = options[question.correct];

  const feedback = document.getElementById(
    `feedback2-${lessonIndex}-${questionIndex}`,
  );

  if (selectedIndex === question.correct) {
    if (selectedOption) {
      selectedOption.classList.add("selected-correct");
    }

    if (feedback) {
      feedback.innerHTML = "✓ Richtig!";

      feedback.className = "feedback feedback-correct";
    }
  } else {
    if (selectedOption) {
      selectedOption.classList.add("selected-wrong");
    }

    if (correctOption) {
      correctOption.classList.add("correct-answer");
    }

    if (feedback) {
      feedback.innerHTML = `✗ Falsch. Die richtige Antwort ist <strong>${String.fromCharCode(97 + question.correct)}</strong>.`;

      feedback.className = "feedback feedback-wrong";
    }
  }
}

/* ============================================================
   TEIL 2 - GESAMTERGEBNIS
============================================================ */

function checkAll2() {
  let total = 0;

  let correct = 0;

  if (typeof lessons === "undefined" || !Array.isArray(lessons)) {
    return;
  }

  lessons.forEach((lesson, lessonIndex) => {
    lesson.questions.forEach((question, questionIndex) => {
      total++;

      const selected = document.querySelector(
        `input[name="lesson-${lessonIndex}-question-${questionIndex}"]:checked`,
      );

      if (selected && Number(selected.value) === question.correct) {
        correct++;
      }
    });
  });

  const result = document.getElementById("result2");

  if (!result) return;

  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  result.innerHTML = `
    <div class="final-result">

      <h3>Ergebnis Lesen Teil 2</h3>

      <p>
        <strong>${correct} von ${total}</strong>
        Antworten richtig
      </p>

      <p>${percent} %</p>

    </div>
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

/* ============================================================
   LESEN TEIL 3
============================================================ */

function loadTest3() {
  const container = document.getElementById("test-container-3");

  if (!container) return;

  container.innerHTML = "";

  if (typeof lesenTeil3 === "undefined" || !Array.isArray(lesenTeil3)) {
    container.innerHTML = `
      <div class="error-message">
        Lesen Teil 3 konnte nicht geladen werden.
      </div>
    `;

    return;
  }

  lesenTeil3.forEach((test, testIndex) => {
    const testBox = document.createElement("div");

    testBox.className = "teil3-test";

    const header = document.createElement("div");

    header.className = "test-header";

    const title = document.createElement("h2");

    title.textContent = test.title || `Test ${testIndex + 1}`;

    header.appendChild(title);

    testBox.appendChild(header);

    const responses = document.createElement("div");

    responses.className = "forum-responses";

    const responseTitle = document.createElement("h3");

    responseTitle.textContent = "Antworten";

    responses.appendChild(responseTitle);

    Object.entries(test.responses).forEach(([letter, text]) => {
      const response = document.createElement("div");

      response.className = "forum-answer";

      response.innerHTML = `
            <strong>${letter})</strong>
            <span>${text}</span>
          `;

      responses.appendChild(response);
    });

    testBox.appendChild(responses);

    const questions = document.createElement("div");

    questions.className = "questions-part";

    test.questions.forEach((question, questionIndex) => {
      const questionBox = document.createElement("div");

      questionBox.className = "teil3-question";

      questionBox.id = `teil3-question-${testIndex}-${questionIndex}`;

      const questionText = document.createElement("p");

      questionText.innerHTML = `
            <strong>${question.number}.</strong>
            ${question.text}
          `;

      questionBox.appendChild(questionText);

      const options = document.createElement("div");

      options.className = "teil3-options";

      const answerOptions = ["a", "b", "c", "d", "e", "f", "X"];

      answerOptions.forEach((letter) => {
        const label = document.createElement("label");

        label.className = "teil3-option";

        const input = document.createElement("input");

        input.type = "radio";

        input.name = `teil3-${testIndex}-${questionIndex}`;

        input.value = letter;

        input.onchange = function () {
          checkTeil3Answer(testIndex, questionIndex, letter);
        };

        const letterSpan = document.createElement("span");

        letterSpan.className = "option-letter";

        letterSpan.textContent = letter;

        label.appendChild(input);

        label.appendChild(letterSpan);

        options.appendChild(label);
      });

      questionBox.appendChild(options);

      const feedback = document.createElement("div");

      feedback.className = "feedback";

      feedback.id = `feedback3-${testIndex}-${questionIndex}`;

      questionBox.appendChild(feedback);

      questions.appendChild(questionBox);
    });

    testBox.appendChild(questions);

    container.appendChild(testBox);
  });

  const result = document.getElementById("result3");

  if (result) {
    result.innerHTML = "";
  }
}

/* ============================================================
   TEIL 3 - SOFORTIGE KONTROLLE
============================================================ */

function checkTeil3Answer(testIndex, questionIndex, selectedAnswer) {
  const question = lesenTeil3[testIndex].questions[questionIndex];

  const questionBox = document.getElementById(
    `teil3-question-${testIndex}-${questionIndex}`,
  );

  if (!questionBox) return;

  const options = questionBox.querySelectorAll(".teil3-option");

  options.forEach((option) => {
    option.classList.remove(
      "selected-correct",
      "selected-wrong",
      "correct-answer",
    );
  });

  let selectedOption = null;

  let correctOption = null;

  options.forEach((option) => {
    const input = option.querySelector("input");

    if (!input) return;

    if (input.value === selectedAnswer) {
      selectedOption = option;
    }

    if (input.value === question.correct) {
      correctOption = option;
    }
  });

  const feedback = document.getElementById(
    `feedback3-${testIndex}-${questionIndex}`,
  );

  if (selectedAnswer === question.correct) {
    if (selectedOption) {
      selectedOption.classList.add("selected-correct");
    }

    if (feedback) {
      feedback.innerHTML = "✓ Richtig!";

      feedback.className = "feedback feedback-correct";
    }
  } else {
    if (selectedOption) {
      selectedOption.classList.add("selected-wrong");
    }

    if (correctOption) {
      correctOption.classList.add("correct-answer");
    }

    if (feedback) {
      feedback.innerHTML = `✗ Falsch. Die richtige Antwort ist <strong>${question.correct}</strong>.`;

      feedback.className = "feedback feedback-wrong";
    }
  }
}

/* ============================================================
   TEIL 3 - GESAMTERGEBNIS
============================================================ */

function checkAll3() {
  let total = 0;

  let correct = 0;

  if (typeof lesenTeil3 === "undefined" || !Array.isArray(lesenTeil3)) {
    return;
  }

  lesenTeil3.forEach((test, testIndex) => {
    test.questions.forEach((question, questionIndex) => {
      total++;

      const selected = document.querySelector(
        `input[name="teil3-${testIndex}-${questionIndex}"]:checked`,
      );

      if (selected && selected.value === question.correct) {
        correct++;
      }
    });
  });

  const result = document.getElementById("result3");

  if (!result) return;

  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  result.innerHTML = `
    <div class="final-result">

      <h3>Ergebnis Lesen Teil 3</h3>

      <p>
        <strong>${correct} von ${total}</strong>
        Antworten richtig
      </p>

      <p>${percent} %</p>

    </div>
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

/* ============================================================
   LESEN TEIL 4
   Цей блок працює з questions4.js
============================================================ */

function loadTest4() {
  const container = document.getElementById("test-container-4");

  if (!container) return;

  container.innerHTML = "";

  if (typeof lesenTeil4 === "undefined" || !Array.isArray(lesenTeil4)) {
    container.innerHTML = `
      <div class="error-message">
        Lesen Teil 4 konnte nicht geladen werden.
      </div>
    `;

    return;
  }

  lesenTeil4.forEach((test, testIndex) => {
    const testBox = document.createElement("div");

    testBox.className = "teil4-test";

    const title = document.createElement("h2");

    title.textContent = test.title || `Test ${testIndex + 1}`;

    testBox.appendChild(title);

    if (test.text) {
      const textBox = document.createElement("div");

      textBox.className = "text-box";

      textBox.innerHTML = test.text.replace(/\n/g, "<br>");

      testBox.appendChild(textBox);
    }

    test.questions.forEach((question, questionIndex) => {
      const questionBox = document.createElement("div");

      questionBox.className = "teil4-question";

      questionBox.id = `teil4-question-${testIndex}-${questionIndex}`;

      /* =====================================================
         ВИПРАВЛЕНО:
         questions4.js не має question.number.
         Номер беремо автоматично з індексу.
      ===================================================== */

      questionBox.innerHTML = `
        <p>
          <strong>${questionIndex + 1}.</strong>
          ${question.question}
        </p>
      `;

      const options = document.createElement("div");

      options.className = "teil4-options";

      question.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");

        label.className = "teil4-option";

        const input = document.createElement("input");

        input.type = "radio";

        input.name = `teil4-${testIndex}-${questionIndex}`;

        input.value = optionIndex;

        input.onchange = function () {
          checkTeil4Answer(testIndex, questionIndex, optionIndex);
        };

        const letter = document.createElement("span");

        letter.className = "option-letter";

        letter.textContent = String.fromCharCode(97 + optionIndex);

        const text = document.createElement("span");

        text.textContent = option;

        label.appendChild(input);

        label.appendChild(letter);

        label.appendChild(text);

        options.appendChild(label);
      });

      questionBox.appendChild(options);

      const feedback = document.createElement("div");

      feedback.className = "feedback";

      feedback.id = `feedback4-${testIndex}-${questionIndex}`;

      questionBox.appendChild(feedback);

      testBox.appendChild(questionBox);
    });

    container.appendChild(testBox);
  });

  const result = document.getElementById("result4");

  if (result) {
    result.innerHTML = "";
  }
}

/* ============================================================
   TEIL 4 - SOFORTIGE KONTROLLE
============================================================ */

function checkTeil4Answer(testIndex, questionIndex, selectedIndex) {
  const question = lesenTeil4[testIndex].questions[questionIndex];

  const questionBox = document.getElementById(
    `teil4-question-${testIndex}-${questionIndex}`,
  );

  if (!questionBox) return;

  const options = questionBox.querySelectorAll(".teil4-option");

  options.forEach((option) => {
    option.classList.remove(
      "selected-correct",
      "selected-wrong",
      "correct-answer",
    );
  });

  const selectedOption = options[selectedIndex];

  const correctOption = options[question.correct];

  const feedback = document.getElementById(
    `feedback4-${testIndex}-${questionIndex}`,
  );

  if (selectedIndex === question.correct) {
    if (selectedOption) {
      selectedOption.classList.add("selected-correct");
    }

    if (feedback) {
      feedback.innerHTML = "✓ Richtig!";

      feedback.className = "feedback feedback-correct";
    }
  } else {
    if (selectedOption) {
      selectedOption.classList.add("selected-wrong");
    }

    if (correctOption) {
      correctOption.classList.add("correct-answer");
    }

    if (feedback) {
      feedback.innerHTML = `✗ Falsch. Die richtige Antwort ist <strong>${String.fromCharCode(97 + question.correct)}</strong>.`;

      feedback.className = "feedback feedback-wrong";
    }
  }
}

/* ============================================================
   TEIL 4 - GESAMTERGEBNIS
============================================================ */

function checkAll4() {
  if (typeof lesenTeil4 === "undefined" || !Array.isArray(lesenTeil4)) {
    return;
  }

  let total = 0;

  let correct = 0;

  lesenTeil4.forEach((test, testIndex) => {
    test.questions.forEach((question, questionIndex) => {
      total++;

      const selected = document.querySelector(
        `input[name="teil4-${testIndex}-${questionIndex}"]:checked`,
      );

      if (selected && Number(selected.value) === question.correct) {
        correct++;
      }
    });
  });

  const result = document.getElementById("result4");

  if (!result) return;

  const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

  result.innerHTML = `
    <div class="final-result">

      <h3>Ergebnis Lesen Teil 4</h3>

      <p>
        <strong>${correct} von ${total}</strong>
        Antworten richtig
      </p>

      <p>${percent} %</p>

    </div>
  `;

  result.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
