import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { themeReducer } from "./themeReducer";
import { pageReducer } from "./pageReducer";

// Define persist config for the `theme` reducer
const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: [], // Persist the entire theme state
};

// Combine reducers with individual persist configs
const rootReducer = combineReducers({
  theme: persistReducer(themePersistConfig, themeReducer), // Persisted
  page: pageReducer, // Non-persisted
});

// Create a persisted reducer
const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);

export default persistedReducer;
