document.addEventListener('DOMContentLoaded', function () {
  const currentDateElement = document.getElementById('current-date');
  const twelveWeeksAgoElement = document.getElementById('twelve-weeks-ago');

  const currentDate = new Date();
  const twelveWeeksAgo = new Date(currentDate);
  twelveWeeksAgo.setDate(twelveWeeksAgo.getDate() - (12 * 7));

  currentDateElement.textContent = formatDate(currentDate);
  twelveWeeksAgoElement.textContent = formatDate(twelveWeeksAgo);

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

  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
});
