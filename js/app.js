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
  const author = buildElement('h3', form.author.value);
  readingListItem.appendChild(author);
  const category = buildElement('p', form.category.value);
  readingListItem.appendChild(category);

  return readingListItem;
}
