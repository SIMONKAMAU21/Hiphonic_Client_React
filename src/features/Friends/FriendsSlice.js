// FriendsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const getFriends = createAsyncThunk('friends/getFriends', async () => {
 


   try {
    const authToken = localStorage.getItem("token")
    console.log(authToken)
    const config={
       headers:{
          Authorization:`${authToken}`
       }
    }
    const response = await axios.get('http://localhost:3000/friendship',config)
  

    return response.data;
  } catch (error) {
    return error.response.data;
  }
});


export const followOtherUser = createAsyncThunk('friends/followOtherUser', async (followingId, { getState }) => {
  
  const authToken = getAuthToken(getState());
    const user = getState().auth.user;
    const followerId = user.user_id;
  
    try {
      const response = await axios.post(`http://localhost:3000/friendship/${followingId}`, {
        followerId,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${authToken}`,
        },
      });
  
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  });
  

// Get all followers
export const getAllFollowers = createAsyncThunk('friends/getAllFollowers', async (_, { getState }) => {
  const authToken = getAuthToken(getState());
  const user = getState().auth.user;
  const userId = user.user_id;

  try {
    const response = await axios.get(`http://localhost:3000/friendship/followers/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});


export const sendMessage = createAsyncThunk('friends/sendMessage', async ({ content, receiver_id }) => {
  try {

    const authToken = localStorage.getItem("token")
    console.log(authToken)
    const config={
       headers:{
          Authorization:`${authToken}`
       }
    }
        const response = await axios.post('http://localhost:3000/message/new', {receiver_id, content},config);
         console.log(response)
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    });

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    entities: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(getFriends.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(followOtherUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(followOtherUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Handle success if needed
      })
      .addCase(followOtherUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getAllFollowers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllFollowers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(getAllFollowers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Handle success if needed
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default friendsSlice.reducer;
export const selectAllFriends = (state) => state.friends.entities;
export const getFriendsStatus = (state) => state.friends.status;
export const getFriendsError = (state) => state.friends.error;













// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';


// const getAuthToken = (state) => state.auth.token;


// export const getFriends = createAsyncThunk('friends/getFriends', async () => {


//   try {
//     const authToken = localStorage.getItem("token")
//     console.log(authToken)
//     const config={
//        headers:{
//           Authorization:`${authToken}`
//        }
//     }
//     const response = await axios.get('http://localhost:3000/friendship',config)
  

//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// });


// export const followOtherUser = createAsyncThunk('friends/followOtherUser', async (followingId, { getState }) => {
//   const authToken = getAuthToken(getState());
//   const user = getState().auth.user;
//   const followerId = user.user_id;

//   try {
//     const response = await axios.post(`http://localhost:3000/friendship/${followingId}`, {
//       followerId,
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `JWT ${authToken}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// });


// export const getAllFollowers = createAsyncThunk('friends/getAllFollowers', async (_, { getState }) => {
//   const authToken = getAuthToken(getState());
//   const user = getState().auth.user;
//   const userId = user.user_id;

//   try {
//     const response = await axios.get(`http://localhost:3000/friendship/followers/${userId}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `JWT ${authToken}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// });


// export const sendMessage = createAsyncThunk('friends/sendMessage', async ({ friendId, message }) => {
//   try {
//     const response = await axios.post('http://localhost:3000/message/new', {
//       friendId,
//       message,
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// });

// const friendsSlice = createSlice({
//   name: 'friends',
//   initialState: {
//     entities: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getFriends.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(getFriends.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.entities = action.payload;
//       })
//       .addCase(getFriends.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(followOtherUser.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(followOtherUser.fulfilled, (state, action) => {
//         state.status = 'succeeded';
        
//       })
//       .addCase(followOtherUser.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(getAllFollowers.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(getAllFollowers.fulfilled, (state, action) => {
//         state.status = 'succeeded';
        
//         state.entities = action.payload;
//       })
//       .addCase(getAllFollowers.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(sendMessage.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(sendMessage.fulfilled, (state, action) => {
//         state.status = 'succeeded';
        
//       })
//       .addCase(sendMessage.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default friendsSlice.reducer;
// export const selectAllFriends = (state) => state.friends.entities;
// export const getFriendsStatus = (state) => state.friends.status;
// export const getFriendsError = (state) => state.friends.error;
