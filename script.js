const form = document.querySelector('#entry-form form');
const dateInput = document.querySelector('#date');
const entryInput = document.querySelector('#entry');
const entryList = document.querySelector('#entry-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const date = new Date(dateInput.value);
  const entry = entryInput.value;

  const entryElement = document.createElement('li');
  entryElement.innerHTML = `
    <div class="entry-header">
      <h3>${date.toLocaleDateString()}</h3>
      <span class="toggle-entry">&#9658;</span>
    </div>
    <div class="entry-body" style="display: none;">
      <p>${entry}</p>
    </div>
  `;

  entryElement.querySelector('.entry-header').addEventListener('click', function() {
    const entryBody = this.nextElementSibling;
    if (entryBody.style.display === 'none') {
      entryBody.style.display = 'block';
      this.querySelector('.toggle-entry').textContent = '\u25BC';
    } else {
      entryBody.style.display = 'none';
      this.querySelector('.toggle-entry').textContent = '\u25B6';
    }
  });

  entryList.appendChild(entryElement);

  dateInput.value = '';
  entryInput.value = '';
});
