import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    //     {
    //     id: 0,
    //     designation: "",
    //     price: 0
    // }
]
const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addArticle: {
            prepare(id, designation, price) {
                return { payload: { id, designation, price } }
            },
            reducer(state, action) {
                state.push({
                    id: action.payload.id,
                    designation: action.payload.designation,
                    price: action.payload.price
                });

            }
        },
        deleteArticle(state, action) {

            const index = state.findIndex(s => s.id === action.payload);
            if (index !== -1) state.splice(index, 1);
        },
        editArticle: {
            prepare(id, designation, price) {
                return { payload: { id, designation, price } }
            },
            reducer(state, action) {
                const index = state.findIndex(s => s.id === action.payload);
                if (index !== -1) state[index] = {
                    id: action.payload.id,
                    designation: action.payload.designation,
                    price: action.payload.price
                };
            }
        }


    }


})

export default articleSlice.reducer

export const { addArticle, deleteArticle } = articleSlice.actions
