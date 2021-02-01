import { saveJournalEntry } from "./JournalDataProvider.js";
import { EntryListComponent } from "./JournalEntryList.js";

// document.querySelector("#saveEntryButton").addEventListener("click", () => {
//   showEntry();
// });

const textHTML = document.querySelector("#textEntry");

export const showEntry = () => {
  textHTML.innerHTML = `<form action=""> 
  <fieldset>
    <label for="journalDate">Date of Entry</label>
    <input type="date" name="journalDate" id="journalDate" />
  </fieldset>
  <fieldset>
    <label for="concepts">Concepts Covered:</label>
    <input type="text" name="concepts" id="concepts" />
  </fieldset>
  <fieldset>
    <label for="entry">Journal Entry: </label>
    <textarea id="entry" rows="10" cols="50"></textarea> <br />
  </fieldset>
  <fieldset>
    <label for = "mood">Mood for the day: </label>
    <select id= "mood">
        <option>Anxious</option>
        <option>Happy</option>
        <option>Sad</option>
        <option>Scared</option>
        <option>Angry</option>
        <option>Annoyed</option>
        <option>Frustrated</option>
        <option>Tired</option>
        <option>Confused</option>
        <option>Hopeful</option>
        <option>Meh</option>
        <option>Ok</option>
    </select> 
</fieldset>

<br>
<button type = "submit" id = "record" class= "button">Record Journal Entry</button>
</form>
`;
};

document.querySelector("main").addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "record") {
    let newDate = document.getElementById("journalDate")
    let newConcept = document.getElementById("concepts")
    let newEntry = document.getElementById("entry")
    let newMood = document.getElementById("mood")

    const newJournalEntry = {
      date: newDate.value,
      concept: newConcept.value,
      entry: newEntry.value,
      mood: newMood.value,
    };
    
    saveJournalEntry(newJournalEntry);
  }
});
