import Layout from "@/Layout";
import bookApi from "@/services/bookApi";
import React, { useEffect, useState } from "react";

const GetBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await bookApi.get("/books");
        setBooks(response.data);
        console.log("fetch books:", response.data);
      } catch (error) {
        console.error("Fetch failed:", error);
      }

      fetchBookData();
    };
  }, []);
  return (
    <Layout>
      <h2>Books list</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>ID:{book.id} </p>
            <p>Title:{book.title} </p>
            <p>User ID:{book.user_id} </p>
            <p>Description:{book.description} </p>
            <p>Publication_date: {book.publication_date} </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default GetBooks;
