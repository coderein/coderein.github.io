document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculate-btn');
  const resultElement = document.getElementById('result');

  calculateBtn.addEventListener('click', function () {
    const judgmentDate = new Date(document.getElementById('judgment-date').value);
    const responseDate = new Date(document.getElementById('response-date').value);

    const weeksBetweenDates = Math.abs((judgmentDate - responseDate) / (1000 * 60 * 60 * 24 * 7));
    const weeksRemaining = 12 - weeksBetweenDates;

    let result = '';

    if (weeksRemaining <= 0) {
      result = "Term expired, Respondent should decide within 6 weeks.";
    } else {
      result = `Term ongoing, Respondent should decide within ${weeksRemaining} weeks.`;
    }

    resultElement.textContent = result;
  });
});