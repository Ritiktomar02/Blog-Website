import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
   isLoading: false,
   data: "",
   isError: "",
   pagenumber: 1,
}

const baseUrl = process.env.REACT_APP_API_KEY;

export const fetchdata = createAsyncThunk(
   'fetchdata',
   async ({ pagenumber=1, tag, category }) => {
    let url = `${baseUrl}?page=${pagenumber}`;
     console.log("url",url);
     if (tag) {
       url += `&tag=${tag}`;
     }
 
     if (category) {
       url += `&category=${category}`;
     }
 
     console.log(url);
 
     try {
       const res = await fetch(url);
       return res.json();
     } catch (err) {
       console.log("Error while fetching the data", err);
       throw err;  // Ensure error is propagated
     }
   }
 );
 

export const apislice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    increament: (state) => {
      state.pagenumber += 1;
    },
    decreament: (state) => {
      state.pagenumber -= 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchdata.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchdata.rejected, (state, action) => {
        state.isLoading = false;  // Set isLoading to false when rejected
        state.isError = action.error.message;  // Log the error message
      });
  }
});

export const { increament, decreament } = apislice.actions;

export default apislice.reducer;
