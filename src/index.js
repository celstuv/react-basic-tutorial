import React from 'react';
import ReactDom from 'react-dom';
import Book from './Book';

//CSS
import './index.css';

//data
import { data } from './books';


function BookList() {
  return (
    <section className="booklist">
      {data. map((book, index) => {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
};



ReactDom.render(<BookList />, document.getElementById('root'));
