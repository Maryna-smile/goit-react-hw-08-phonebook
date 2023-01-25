import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const usersApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
  });
  
export const fetchRegisterUser = createAsyncThunk (
    'register/fetchRegisterUser',
    async (user, { rejectWithValue }) => {
     try {
        const {data} = await usersApi.post('/users/signup', user);
        return data;
     } catch (error) {
        return rejectWithValue(error.message)
     }
    }
  )

  export const fetchLoginUser = createAsyncThunk (
   'login/fetchLoginUser',
   async (user, { rejectWithValue }) => {
    try {
       const {data} = await usersApi.post('/users/login', user);
       return data;
    } catch (error) {
       return rejectWithValue(error.message)
    }
   }
 )