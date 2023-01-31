
// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var      -> variable (global)
// const    -> constant (local)
// let      -> let      (local)




// global

// if(true){
//     // local global
//     if (true) {
//         const info = "Hello";
//         // local global
//         if (true) {
//             // local
//         }
//     }
//     // local
//     console.log(info);
// }


// if -> eger
// else -> deyilse
// else if -> deyilse eger
// info = 51
// if (info == 5) {
//     console.log('this is 5');
// }else if(info == 10){
//     console.log('this is 10');

// }else{
//     console.log('something is wrong ');
// }



// const myTime =10;

// if (myTime >5 && myTime <13) {
//     console.log('good morning');
//     if (myTime === 9) {
//         console.log('hava a breakfast');
//     }else if(myTime >= 7 && myTime < 10){
//         console.log('get up');
//     }else{
//         console.log('u r late work');
//     }
// }else if(myTime >= 13 && myTime <=17){
//     console.log('good afternoon');

// }else if(myTime > 17 && myTime <=21){
//     console.log('good evening');
// }else if(myTime >=22 && myTime<=23){
//     console.log('good night');
// }else{
//     console.log('no time');
// }


const info = 1;

switch(info){
    case 5:
        console.log('this is 5');
    break;
    case 10:
        console.log('this is 10');    
    break;
    default:
        console.log('this is deafult');
    break;
}



const productOne = ['milk','bread','butter'];
const productTwo = ['meal 0.5kq','egg','cheese'];
const productThree = [' meal 1kg', 'seba butter','bread'];
const productFour = ['meal 2kq', 'holland cheese','tomatto'];
const productFive = ['meal 5kq','bread','chocolate'];




