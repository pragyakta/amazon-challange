import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            
            {/*Product_id,title,price,rating,image*/}
            <div className="home_row">
                <Product 
                    id="12321341"
                    title="The Lean Startup:Running businesses Sucessfully (Papperback)"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="12321342"
                    title="
                    Apple MacBook Pro MF839LL/A 128GB Flash Storage - 8GB LPDDR3 - 13.3in with Intel Core i5 2.7 GHz (Renewed)"
                    price={729}
                    rating={4}
                    image="https://www.amazon.com/images/I/81bTK8-ei4L._AC_SL1500_.jpg"              />
            </div>

            <div className="home_row">
            <Product 
                    id="12321343"
                    title="Tower Fan,Floor Fan with Remote & Large LED Display, Up to12H Timer Bladeless Standing Fan"
                    price={73}
                    rating={3}
                    image="https://www.amazon.com/images/I/61DM7HrdqML._AC_SL1300_.jpg"
                />
                <Product 
                    id="12321341"
                    title="Google Pixel 4 - Clearly White 128GB - Unlocked"
                    price={889}
                    rating={4}
                    image="https://www.amazon.com/images/I/61C9GrXEp4L._AC_SL1500_.jpg"
                />
                <Product 
                    id="12321341"
                    title="Amazfit Bip Smartwatch Heart Rate and Activity Tracking, Sleep Monitoring, GPS, Ultra-Long Battery Life, Bluetooth(A1608 Black)"
                    price={69}
                    rating={5}
                    image="https://www.amazon.com/images/I/61b7GRV385L._AC_SL1500_.jpg"
                />
            </div>

            <div className="home_row">
            <Product 
                    id="12321341"
                    title="All-New Toshiba 32LF221U21 32-inch Smart HD 720p TV - Fire TV Edition, Released 2020"
                    price={149}
                    rating={4}
                    image="https://www.amazon.com/images/I/61piX33QmAL._AC_SL1000_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
