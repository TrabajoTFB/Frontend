import React from "react";
import BookSellers from "../components/layout/BookSellers";
import BookDetails from "../components/layout/BookDetails";
import BookRecommendations from "../components/layout/BookRecommendations";

const BookName: React.FC = () => {
    return (
        <div>
            <BookSellers />
            <BookDetails />
            <BookRecommendations />
        </div>
    );
};

export default BookName;