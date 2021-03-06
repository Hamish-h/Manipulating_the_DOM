document.addEventListener('DOMContentLoaded', () => {

  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {

  event.preventDefault();
  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();

}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');
  const title = buildElement('h2', form.title.value);
  readingListItem.appendChild(title);
  const owner = buildElement('h3', form.owner.value);
  readingListItem.appendChild(owner);
  const category = buildElement('p', form.category.value);
  readingListItem.appendChild(category);

  return readingListItem;
}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContent = value;
  return element;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}
