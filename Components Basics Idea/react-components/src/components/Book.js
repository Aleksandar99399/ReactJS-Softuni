import style from "./Book.module.css";

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
    <article className={style.article}>
      <h3 onClick={props.clickHandler}>
        {props.title ? props.title : "No title"}
      </h3>
      <p className={style.description}>{props.description}</p>
      <p className={style.author}>{author}</p>
    </article>
  );
}

export default Book;
