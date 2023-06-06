import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_froyt_list = createAsyncThunk(
  "froyts/api_v1_froyt_list",
  async payload => {
    const response = await apiService.api_v1_froyt_list(payload)
    return response.data
  }
)
export const api_v1_froyt_create = createAsyncThunk(
  "froyts/api_v1_froyt_create",
  async payload => {
    const response = await apiService.api_v1_froyt_create(payload)
    return response.data
  }
)
export const api_v1_froyt_retrieve = createAsyncThunk(
  "froyts/api_v1_froyt_retrieve",
  async payload => {
    const response = await apiService.api_v1_froyt_retrieve(payload)
    return response.data
  }
)
export const api_v1_froyt_update = createAsyncThunk(
  "froyts/api_v1_froyt_update",
  async payload => {
    const response = await apiService.api_v1_froyt_update(payload)
    return response.data
  }
)
export const api_v1_froyt_partial_update = createAsyncThunk(
  "froyts/api_v1_froyt_partial_update",
  async payload => {
    const response = await apiService.api_v1_froyt_partial_update(payload)
    return response.data
  }
)
export const api_v1_froyt_destroy = createAsyncThunk(
  "froyts/api_v1_froyt_destroy",
  async payload => {
    const response = await apiService.api_v1_froyt_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const froytsSlice = createSlice({
  name: "froyts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_froyt_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_froyt_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_froyt_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_froyt_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_froyt_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_froyt_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_froyt_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_froyt_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_froyt_list,
  api_v1_froyt_create,
  api_v1_froyt_retrieve,
  api_v1_froyt_update,
  api_v1_froyt_partial_update,
  api_v1_froyt_destroy,
  slice: froytsSlice
}
