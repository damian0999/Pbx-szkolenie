const sizeFilter = [
  {label: "90x50mm", amount: "122", isChecked: false},
  {label: "85x55mm", amount: "67", isChecked: false}
];

const favouriteFilter = {
  label: "Only favorites", amount: '22', isChecked: false
};

const industryFilter = [
  {label: "All", amount: "840", isChecked: false},
  {label: "Automotive", amount: "112", isChecked: false},
  {label: "Fashion", amount: "83", isChecked: false},
  {label: "Law", amount: "230", isChecked: false},
  {label: "IT", amount: "18", isChecked: false},
  {label: "Sport", amount: "66", isChecked: false},
  {label: "Art", amount: "20", isChecked: false}
];

function filters(state = {sizeFilters: [], favouriteFilters: [], industryFilters: [], selectedFilters: []}, action){
  switch(action.type){

    case 'FETCH_FILTERS':
      return Object.assign({}, state, {
        sizeFilters: sizeFilter,
        favouriteFilters: favouriteFilter,
        industryFilters: industryFilter,
      });

    case 'CHOOSEN_FILTERS':
      var state = Object.assign({}, state);
      var filter = { label: action.filter };
      state.selectedFilters.push(filter);
      return state;

    default:
      return state;
  }
}

export default filters;
