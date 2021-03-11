function Book(props) {
  //   if (!props.title) {
  //     return (
  //       <article>
  //         <p>No information</p>
  //       </article>
  //     );
  //   }

  const author = props.author || <strong>Pesho</strong>;

  return (
    <article>
      <h3 onClick={props.clickHandler}>
        {props.title ? props.title : "No title"}
      </h3>
      <p>{props.description}</p>
      <p>{author}</p>
    </article>
  );
}

export default Book;
