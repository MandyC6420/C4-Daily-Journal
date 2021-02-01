/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

import { EntryListComponent } from "./JournalEntryList.js";

// This is the original data.
// let journal = [
//   {
//     id: 1,
//     date: "01/04/2021",
//     concept: "First Class",
//     entry: "We finished up installs and discussed HTML and CSS.",
//     mood: "Ok",
//   },
//   {
//     id: 2,
//     date: "01/06/2021",
//     concept: "HTML & CSS",
//     entry: "We learned about flexbox and layout",
//     mood: "frustrated",
//   },
//   {
//     id: 3,
//     date: "01/12/2021",
//     concept: "HTML & CSS",
//     entry: "We started working on Daily Journal and Martin's Aquarium",
//     mood: "Ok",
//   },
//   {
//     id: 4,
//     date: "01/19/2021",
//     concept: "Printing to the DOM",
//     entry: "Worked on a movie array to print directly to the DOM",
//     mood: "Great",
//   },
// ];

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
let journal = [];

export const getEntries = () => {
  return fetch("http://localhost:3000/entries") // Fetch from the API
    .then((response) => response.json()) // Parse as JSON
    .then((entries) => {
      // What should happen when we finally have the array?
      journal = entries;
    });
};

export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate;
};

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"));
};

export const saveJournalEntry = (newJournalEntry) => {
    // Use `fetch` with the POST method to add your entry to your API
    fetch("http://localhost:3000/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJournalEntry),
    })
      .then(EntryListComponent()) // <-- Get all journal entries
      
}