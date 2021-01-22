import {ADD_TRANSACTIONS, DELETE_TRANSACTIONS} from '../actions/types';
const initialstate = {
  transactions: [],
};

export default (state = initialstate, {type, payload}) => {
  switch (type) {
    case ADD_TRANSACTIONS:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };

    case DELETE_TRANSACTIONS:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload,
        ),
      };
    default:
      return state;
  }
};
