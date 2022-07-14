import { combineReducers, createStore } from 'redux';
console.clear();

/// create policy
const createPolicy = (name, amount) => {
  return {
    type: 'CREATE_POLICY',
    payload: {
      name,
      amount,
    },
  };
};

// deleting the policy
const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name,
    },
  };
};

const createClaim = (name, receivedMoney) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      receivedMoney,
    },
  };
};

// create Reducers

const claimHistory = (state = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...state, action.payload];
  }
  return state;
};

const accounting = (cashIn = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return cashIn - action.payload.receivedMoney;
  } else if (action.type === 'CREATE_POLICY') {
    return cashIn + action.payload.amount;
  }
  return cashIn;
};

const policies = (state = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...state, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return state.filter((name) => name !== action.payload.name);
  }
  return state;
};

// const { createStore, combineReducer } = Redux;
// console.log(combineReducer);

const ourDepartment = combineReducers({ claimHistory, accounting, policies });

const store = createStore(ourDepartment);

createPolicy('mohamed', 2000);
createClaim('mohamed', 1000);
deletePolicy('mohamed');
store.dispatch(createPolicy('mohamed', 2000));
store.dispatch(createPolicy('mohamed', 7000));
store.dispatch(createClaim('mohamed', 1000));
store.dispatch(createPolicy('shady', 3888));
store.dispatch(deletePolicy('shady'));

console.log(store.getState());
