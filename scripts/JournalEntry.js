/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class = "entry__text">
            <p>${entry.date}</p>
            <p>${entry.entry}</p>
            <p>Mood: ${entry.mood}</p>

            </div>
        </section>
    `
}