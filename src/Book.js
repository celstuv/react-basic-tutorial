import React from 'react';


const Book = ({ img, title, author }) => {

  // attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    alert('Hello World');
    console.log(e.target);
  };

  const complexeExample = (author) => {
    console.log(author);
  }

  return (
    <article className="book" onMouseOver={() => {
        console.log(title)
      }}>
      <img src={img} alt="image" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Exemple</button><br />
      <button type="button" onClick={() => complexeExample(author)}>more complexe example</button>
    </article>);
};


export default Book;
