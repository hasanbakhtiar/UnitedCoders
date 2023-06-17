const comingLSdata: any = localStorage.getItem('wish');
const convertLSdata: any = JSON.parse(comingLSdata);



const intialWish: any = convertLSdata ?? [];

export const wishReducer = (state = intialWish, action: any) => {
    switch (action.type) {
        case "ADD_WISH":


            if (localStorage.getItem('wish') == null) {
                localStorage.setItem('wish', '[]');
            } else {


                let ld: any = localStorage.getItem('wish');
                let old_data: any = JSON.parse(ld);
                old_data.push(action.wish);
                localStorage.setItem('wish', JSON.stringify(old_data));
              


            }

            const y: any = localStorage.getItem('wish');
            const yl = JSON.parse(y);



            return [...yl];

        case "REMOVE_WISH":

            const removewish: any = state.filter(({ id }: any) => {
                return id !== action.id
            })
            const tyu = JSON.stringify(removewish);
            localStorage.setItem('wish', tyu);

            return removewish


        default:
            return state;
    }
}