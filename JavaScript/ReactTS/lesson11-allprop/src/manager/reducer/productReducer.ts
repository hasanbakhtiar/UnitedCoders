
const initialState: any[] = [];

export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.product];
     

        default:
            return state;
    }
}