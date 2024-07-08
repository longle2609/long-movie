import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    seats: [],
    bookingSeats: [],
    currentSeats: []
}

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {

    }
})

export default bookingSlice.reducer