import { createSlice } from "@reduxjs/toolkit";

const initialState = { isEdit: false, articles: [] }
const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addArticle: {
            prepare(id, designation, price) {
                return { payload: { id, designation, price } }
            },
            reducer(state, action) {
                const ele = state.articles.find(a => a.id === action.payload.id);
                if (ele) {
                    alert('This id Already Exists')
                    return state
                }
                console.log(ele)

                state.articles.push({
                    id: action.payload.id,
                    designation: action.payload.designation,
                    price: action.payload.price
                });

            }
        },
        deleteArticle(state, action) {
            const index = state.articles.findIndex(s => s.id === action.payload);
            if (index !== -1) state.articles.splice(index, 1);
        },
        editArticle(state, action) {
            const index = state.articles.findIndex(s => s.id === action.payload);

            if (index !== -1) state.articles[index] = {
                // id: action.payload.id,
                designation: action.payload.designation,
                price: action.payload.price
            };
        }
    }


})

export default articleSlice.reducer

export const { addArticle, deleteArticle, editArticle } = articleSlice.actions
