/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./journalDataProvider.js";
import { JournalEntryComponent } from "./journalEntry.js";
getEntries()
const entryList = document.querySelector(".entryContainer")

export const EntryListComponent = () => {
    // let entryHTML = ""

    getEntries().then(() => {
    // Use the journal entry data from the data provider component
        const entries = useJournalEntries();
        console.log(entries)

        entries.forEach(entry => {
            entryList.innerHTML += JournalEntryComponent(entry)
        })
    })
    console.log(entryList.innerHTML)

}