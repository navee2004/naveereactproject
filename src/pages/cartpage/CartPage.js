import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import CartItemsContainer from "../../components/layouts/cart-items-container/CartItemsContainer";

const CartPage = () => {
    return (
        <section>
            <Navbar darkText={ true } />
            
            <CartItemsContainer />

            <Footer />
        </section>
    )
}

export default CartPage;