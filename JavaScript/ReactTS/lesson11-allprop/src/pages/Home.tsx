import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Home = () => {
  const productdata: any = useSelector((state) => state);
  return (
    <div>
      <Swiper spaceBetween={0} slidesPerView={1}>
        {productdata.map((a: any) => (
          <SwiperSlide key={a.id}>
            <img
              src={a.photo}
              style={{ width: "100%", height: "500px" }}
              alt={a.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={()=>{
        const changedata = JSON.stringify(productdata);
        localStorage.setItem('data',changedata);
      }}>test</button>
    </div>
  );
};

export default Home;
