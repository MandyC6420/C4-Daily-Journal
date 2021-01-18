/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "01/04/2021",
        concept: "First Class",
        entry: "We finished up installs and discussed HTML and CSS.",
        mood: "Ok"
    },

    {
        id: 2,
        date: "01/06/2021",
        concept: "HTML & CSS",
        entry: "We learned about flexbox and layout",
        mood: "Ok"
    },

    {
        id: 3,
        date: "01/12/2021",
        concept: "HTML & CSS",
        entry: "We started working on Daily Journal and Martin's Aquarium",
        mood: "Ok"
    }
    
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}