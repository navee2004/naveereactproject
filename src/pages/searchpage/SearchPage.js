import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/layouts/navbar/Navbar';
import Footer from '../../components/layouts/footer/Footer';
import './searchpage.styles.css';
import { BookData } from '../../util/BookData';
import SearchResultCard from '../../components/cards/search-result-card/SearchResultCard';

const SearchPage = () => {
    const location = useLocation();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        let searchValue = [];

        // console.log(location);

        const obj = location.state;
        if( "keyword" in obj ){
            searchValue = BookData.filter((data) => data.book_name.toLowerCase().includes(location.state["keyword"].toLowerCase()));
        }
        if("genre" in obj){
            searchValue = BookData.filter((data) => data.genre.toLowerCase().includes(location.state["genre"].toLowerCase()));
        }
        setSearchResult(searchValue);
    }, [location.state])

    return (
        <section>
            <Navbar darkText={true} />
            
            <div className='search-result-container'>
                <div className="container">
                    <h2>Your Search Result</h2>

                    {searchResult.map((result) => (
                        <SearchResultCard key={result.id} bookData={result} />
                    ))}
                </div>
            </div>

            <Footer />
        </section>
    )
}

export default SearchPage;