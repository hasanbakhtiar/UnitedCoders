import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import App from "./router/App";
import { Provider } from "react-redux";
import configureStore from "./manager/store/configureStore";
import products from "./data/products";
import { addproduct } from "./manager/action/productAction";
import 'aos/dist/aos.css';
const store = configureStore();

const MyProd = () => {
  return (
    <>
      {products.map((item: any) =>
        store.dispatch(
          addproduct({
            id: item.id,
            titleaz: item.titleaz,
            titleen: item.titleen,
            price: item.price,
            photo: item.photo,
            stock: item.stock,
          })
        )
      )}
    </>
  );
};
MyProd();
console.log(store.getState());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
