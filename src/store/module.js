import Api from 'lib/api';
import data from './dealers';

// ------------------------------------
// Constants
// ------------------------------------
const UPDATE_RESULTS = 'UPDATE_RESULTS';
const UPDATE_SELECTIONS = 'UPDATE_SELECTIONS';
const SET_DEALER = 'SET_DEALER';

// ------------------------------------
// Actions
// ------------------------------------
const updateResults = results => ({
  type: UPDATE_RESULTS,
  results
});

const updateSelections = selections => ({
  type: UPDATE_SELECTIONS,
  selections
});

const setDealer = dealer => ({
  type: SET_DEALER,
  dealer
});

// ------------------------------------
// Action Helpers
// ------------------------------------

// TODO: Fetch results on search or page load vs import above
const fetchResults = (dispatch, getState) => {
  const { postalCode } = getState();
  Api.asyncFetch(postalCode).then((results) => {
    dispatch(updateResults(results));
  });
};

const toggleSelection = field => (dispatch, getState) => {
  const { selections } = getState();
  const newSelections = selections.map((selection) => {
    if (selection.field === field) {
      return { field, isChecked: !selection.isChecked };
    }
    return { ...selection };
  });
  dispatch(updateSelections(newSelections));
};

const updateDealer = dealer => (dispatch) => {
  dispatch(setDealer(dealer));
  document.querySelector('dialog').showModal();
};

// ------------------------------------
// Action Handlers
// ------------------------------------
export const actions = {
  fetchResults,
  toggleSelection,
  updateDealer
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  dealer: 401929,
  results: data.dealers,
  selections: [
    { field: 'Service', isChecked: false },
    { field: 'Installation', isChecked: false },
    { field: 'Residential', isChecked: false },
    { field: 'Commercial', isChecked: false }
  ],
  // Todo: implement zip search
  postalCode: 28205
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESULTS:
      return {
        ...state,
        results: action.results
      };

    case UPDATE_SELECTIONS:
      return {
        ...state,
        selections: action.selections
      };

    case SET_DEALER:
      return {
        ...state,
        dealer: action.dealer
      };

    default:
      return state;
  }
};
