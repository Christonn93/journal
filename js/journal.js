const entries = getFromLocalStorage('journal-entries')

function renderJournalEntry(entry) {
  return createHTML('something', entry.text)
}

const entriesHTML = entries.map(renderJournalEntry)
const entriesContainer = document.createElement('main')
entriesContainer.innerHTML = entriesHTML;

document.body.appendNode(entriesContainer)