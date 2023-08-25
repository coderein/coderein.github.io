'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculate-btn');
  const resultElement = document.getElementById('result');

  calculateBtn.addEventListener('click', function () {
    const judgmentDate = new Date(document.getElementById('judgment-date').value);
    const responseDate = new Date(document.getElementById('response-date').value);

    const termInWeeks = calculateTermInWeeks(judgmentDate, responseDate);

    let resultText;
    if (termInWeeks >= 12) {
      resultText = "Term expired, Respondent should decide within 6 weeks.";
    } else {
      const remainingWeeks = Math.ceil(12 - termInWeeks); // Round up to nearest whole week
      resultText = `Term ongoing, Respondent should decide within ${remainingWeeks} weeks.`;
    }

    const currentDate = new Date();
    const twelveWeeksAgo = new Date(currentDate.getTime() - (12 * 7 * 24 * 60 * 60 * 1000));
    const additionalLine = `Today's date is ${formatDate(currentDate)}, all Response Submissions dated ${formatDate(twelveWeeksAgo)} or earlier will result in a decision term of six weeks.`;

    resultElement.textContent = resultText + "\n" + additionalLine;
  });

  function calculateTermInWeeks(startDate, endDate) {
    const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
    const timeDifference = Math.abs(endDate - startDate);
    return Math.floor(timeDifference / millisecondsPerWeek);
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
});
