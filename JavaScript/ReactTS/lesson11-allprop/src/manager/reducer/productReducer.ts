
const initialState: any[] = [];

export const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.product];
     
            case "REMOVE_PRODUCT":
                return state.filter(({id})=>{
                    return id !== action.id
                })

        default:
            return state;
    }
}