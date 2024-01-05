import React from "react";
import Navbar from '../../components/layouts/navbar/Navbar';
import DetailsSection from "../../components/layouts/details-section/DetailsSection";
import Footer from '../../components/layouts/footer/Footer';

const BookDetails = () => {
    return (
        <section>
           <Navbar darkText={ true } />

           <DetailsSection />
           <Footer />
        </section>
    )
}

export default BookDetails;