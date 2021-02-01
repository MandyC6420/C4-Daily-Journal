eventHub.addEventListener("click", (eventObject) => {
    if (eventObject.target.id === "recordEntry") {
        console.log(eventObject.target.id)
        eventObject.preventDefault()
        // Make a new object representation of a note
        const newJournalEntry = {
            <p>Date: ${entry.date}</p>,
            <p>Entry: ${entry.entry}</p>,
            <p>Mood: ${entry.mood}</p>
        }
        console.log(newJournalEntry)

        // Change API state and application state
        saveNote(newNote)
        .then(NoteList) // Refresh your list of notes once you've saved your new one
    } 
})