const intialWish:any = [];

export const wishReducer = (state=intialWish,action:any)=>{
    switch (action.type) {
        case "ADD_WISH":
            return [...state, action.wish];

            case "REMOVE_WISH":
                return state.filter(({id}:any)=>{
                    return id !== action.id
                })
        
        default:
            return state;
    }
}