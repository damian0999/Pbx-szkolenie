const sizeFilter = [
  {label: "90x50mm", amount: "122", isChecked: false},
  {label: "85x55mm", amount: "67", isChecked: false}
];

const favouriteFilter = [
  {label: "Only favorites", amount: '22', isChecked: false}
];

const industryFilter = [
  {label: "Automotive", amount: "112", isChecked: false},
  {label: "Fashion", amount: "83", isChecked: false},
  {label: "Law", amount: "230", isChecked: false},
  {label: "IT", amount: "18", isChecked: false},
  {label: "Sport", amount: "66", isChecked: false},
  {label: "Art", amount: "20", isChecked: false}
];

const customFilter = [
  {rate: '4', amount: '62'},
  {rate: '3', amount: '9'},
  {rate: '2', amount: '18'},
  {rate: '1', amount: '22'}
]

function filters(state = {sizeFilters: [], favouriteFilters: [], industryFilters: [],customFilters: [], selectedFilters: []}, action){
  switch(action.type){

    case 'FETCH_FILTERS':
      return Object.assign({}, state, {
        sizeFilters: sizeFilter,
        favouriteFilters: favouriteFilter,
        industryFilters: industryFilter,
        customFilters: customFilter
      });

    case 'CHOOSEN_FILTER':
      var newState = Object.assign({}, state);
      newState.selectedFilters.push(action.label);
      return newState;

    case 'DELETE_CHOOSEN_FILTER':
      var newState = Object.assign([], state);
      var index = newState.selectedFilters.indexOf(action.label);
      newState.selectedFilters.splice(index, 1);
      return newState;

    default:
      return state;
  }
}

export default filters;
