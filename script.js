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

    const currentDate = new Date();
    const twelveWeeksAgo = new Date(currentDate);
    twelveWeeksAgo.setDate(twelveWeeksAgo.getDate() - (12 * 7));

    const additionalInfo = `Today's date is ${formatDate(currentDate)}, all Response Submissions dated ${formatDate(twelveWeeksAgo)} or earlier will result in a decision term of six weeks.`;

    const additionalInfoElement = document.createElement('p');
    additionalInfoElement.textContent = additionalInfo;

    resultElement.appendChild(additionalInfoElement);
  });

  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
});