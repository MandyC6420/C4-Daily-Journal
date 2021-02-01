console.log("welcome to the main module")

import {EntryListComponent} from "./JournalEntryList.js"
import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import {showEntry} from "./JournalForm.js"
// EntryListComponent()
getEntries()
useJournalEntries()
EntryListComponent()
showEntry()