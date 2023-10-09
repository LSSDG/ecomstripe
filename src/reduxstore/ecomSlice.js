import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData:[],
    userInfo:null,
}

export const ecomSlice = createSlice({
    name:"ecom",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=state.productData.find((item)=>item._id===action.payload._id)
            if(item){
                item.quantity+=action.payload.quantity
            }else{
                state.productData.push(action.payload);
            }
        },
        deleteItem:(state,action)=>{
            //console.log(action.payload)
            state.productData=state.productData.filter((item)=>item._id !== action.payload)
            
        },
        resetCart:(state)=>{
            state.productData=[]
        },
        incrementQty:(state,action)=>{
            const item = state.productData.find(item=>item._id===action.payload._id);
            if(item){
                item.quantity++;
            }
        },
        decrementQty:(state,action)=>{
            const item = state.productData.find(item=>item._id===action.payload._id);
            if(item.quantity===1){
                item.quantity=1;
            }else{
                item.quantity--;
            }
        },
        addUser:(state,action)=>{
            state.userInfo=action.payload;
        },
        removeUser:(state)=>{
            state.userInfo=null;
        }
    }
})

export const {addToCart,deleteItem,resetCart,incrementQty,decrementQty,addUser,removeUser} = ecomSlice.actions;

export default ecomSlice.reducer;