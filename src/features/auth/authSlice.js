import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const log = createAsyncThunk(
  'auth/log_in',
  async function () {
    const API = "http://localhost:8080/api/login";
    const response = await fetch(API, {
      method: "POST",
      // mode: 'no-cors',
      header: {
        'Content-Type': 'json/application',
      },
      body: JSON.stringify({
        username: "ayaz@gmail.com",
        password: "ayaz2002"
      })
    })
      .then(response => { response.json() })
      .catch((error) => {
        console.error(error);
        console.log("ошибка...");
      })
    return response;
  }
);

export const reg = createAsyncThunk(
  'auth/log_in',
  async function () {
    const API = "http://localhost:8080/api/register";
    const response = await fetch(API, {
      method: "POST",
      // mode: 'no-cors',
      header: {
        'Content-Type': 'json/application',
      },
      body: JSON.stringify({
        lastName: "fedorov",
        firstName: "ivan",
        middleName: "viktorovich",
        phone: null,
        email: "adam@mail.ru",
        password: "aeveneleve34Nabc"
      })
    })
      .then(response => response.json())
      .catch((error) => {
        console.error(error);
        console.log("ошибка...");
      })
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload
      state.user = user
      state.token = accessToken
    },
    logOut: (state, action) => {
      state.user = null
      state.token = null
    }
  },
  superreducers: {
    [reg.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [log.fulfilled]: (state, action) => {
      console.log(action.payload);
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

//export const selectCurrentUser = (state) => state.auth.user
//export const selectCurrentToken = (state) => state.auth.token