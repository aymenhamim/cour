import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id: 0,
    designation: "",
    price: 0
}]
const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addArticle: {
            prepare(id, designation, price) {
                return { payload: { id, designation, price } }
            },
            reducer(state, action) {
                state.push({ id: action.id, designation: action.designation, price: action.price })
            }
        }
    }
})

export default articleSlice.reducer

const { addArticle } = articleSlice.actions

export { addArticle }
