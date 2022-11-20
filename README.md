Login page, after login keep a token and pass in all future API's

It has a login screen with static username and password shown below,

**Username: eve.holt@reqres.in

Password: cityslicka**

Following steps are involved this application
---------------------------------------------
  Redux saga installation
  Redux saga configuration
  Making API call
  Creation action
  Creation Reducer
  Exceution of effects
  Dispatch action
  Accessing state and displaying the token value

How the application is developed
--------------------------------
Installed redux-saga
$ npm install redux-saga

Created the redux saga configuration in \src\store\configureStore.js
Created the actions files in \src\actions folder
Created the reducers in \src\reducers folder

Kept the login status value and token value as shown below in the intialstate
  login: {
    token: null,
    status: 'logged out',
  }

Following cases are excuted while login in the loginReducer and the state values will be updated
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      newState = {...state, status: LOGGED_IN};
      return newState;
    case actionTypes.SAVE_TOKEN:
      newState = {...state, token: action.token};
      newState.token = action.token;
      return newState;
    case actionTypes.DELETE_TOKEN:
      newState = {...state, token: null};
      newState.token = null;
      return newState;
    case actionTypes.LOGOUT:
      newState = {...state, status: LOGGED_OUT};
      return newState;
    case actionTypes.LOGIN_ERROR:
      newState = {...state, status: LOGIN_ERROR};
      return newState;
    case actionTypes.LOGIN_CANCELLED:
      newState = {...state, status: LOGIN_CANCELLED};
      return newState;
    default:
      return state;
  }

Effects and API with a static usernae and password is mentioned in \src\sagas folder

------------------------------------------------------------------------------------------------------------

How to tun the unit tests
-------------------------
$ npm install
$ npm test

# Test outputs
## Unit tests
-------------
 PASS  src/sagas/index.test.js
  login saga effects
    standard login flow
      it waits for a LOGIN_REQUEST action (4ms)
      then it forks the authorize method (1ms)
      then it waits for a LOGOUT or LOGIN_ERROR action
      then it cancels the authorize call on a LOGOUT action
      then it triggers a DELETE_TOKEN action
      and finally it waits again for a LOGIN_REQUEST action (1ms)
    login error flow
      if a LOGIN_ERROR action happens it doesn't cancel the authorize task (because it's the authorize task itself that triggers the LOGIN_ERROR action)
      neither it triggers a DELETE_TOKEN action (1ms)
  authorize saga effects
    standard login flow
      it calls the authorization method (1ms)
      then it triggers a LOGIN_SUCCESS action
      then it triggers a SAVE_TOKEN action
      finally it checks if it's been cancelled by another generator
    external cancellation
      It triggers a LOGIN_CANCELLED action if cancelled externally
    login error flow
      it triggers a LOGIN_ERROR action in case of login error

Test Suites: 1 passed, 1 total                                                                                                            
Tests:       14 passed, 14 total                                                                                                                  
Snapshots:   0 total
Time:        2.139s, estimated 6s

"# redux-login" 
