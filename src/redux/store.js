import contactsReducer from "./contacts/contactsSlice";
import filterReducer from "./contacts/filterSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
	}
})