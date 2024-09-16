import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  misPublicaciones: [],
  allPublications: []
  
};

const marketPlaceSlice = createSlice({
  name: "marketPlace",
  initialState,
  reducers: {
    setAllPublications: (state, action) => {
      // console.log('payoad en session', action.payload)
      return { ...state, allPublications: action.payload };
    },
    setMyPublications: (state, action) => {
      return {...state, misPublicaciones: action.payload }
    },
    updateProductState: (state, action) => {
      return {
        ...state,
        misPublicaciones: state.misPublicaciones.map((product) =>
          product._id === action.payload._id
            ? action.payload 
            : product
        ),
      };
    }
  },
 
});

export const { setAllPublications, setMyPublications, updateProductState } = marketPlaceSlice.actions;

export const getAllPublicaciones = () => async (dispatch) => {
    const API_URL = import.meta.env.VITE_REACT_APP_URL;
    const GET_ALL_PUBLICATIONS = import.meta.env.VITE_REACT_APP_GET_ALL_PRODUCTS;

    try {
      const response = await fetch(`${API_URL}${GET_ALL_PUBLICATIONS}`);
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const data = await response.json();
      dispatch(setAllPublications(data));
    } catch (error) {
      console.error("Error al obtener las publicaciones:", error.message);
    }
  };

  export const getUserProducts = (id) => async (dispatch) => {
    const API_URL = import.meta.env.VITE_REACT_APP_URL;
    const GET_USER_PRODUCTS = import.meta.env.VITE_REACT_APP_GET_USER_PRODUCTS;
    
    try {
      const response = await fetch(`${API_URL}${GET_USER_PRODUCTS}/${id}`);
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const data = await response.json();
      dispatch(setMyPublications(data));
    } catch (error) {
      console.error("Error al obtener las publicaciones:", error.message);
    }
  };

  //para pausar/reanudar la publicacion de marketplace
  export const toggleProductState = (productId, isActive) => async (dispatch) => {
    const API_URL = import.meta.env.VITE_REACT_APP_URL;
    const UPDATE_PRODUCT_MARKETPLACE = import.meta.env.VITE_REACT_APP_UPDATE_PRODUCT_MARKETPLACE;
    const URL = `${API_URL}${UPDATE_PRODUCT_MARKETPLACE}/${productId}`;
  
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isActive }),
    };
  
    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      // console.log('data en la respuesta', data);
      dispatch(updateProductState(data))
    } catch (error) {
      console.log('error', error.message);
    }
  };



export default marketPlaceSlice.reducer;
