import React from 'react';
import Header from "../../components/Header/header";
import ErrorPage from '../../components/error/ErrorPage';
import Footer from '../../components/footer/Footer';


const ErrorPages = () => {
    return (
        <div>
            <Header />
            <ErrorPage />
            <Footer />

        </div>
    );
};

export default ErrorPages;