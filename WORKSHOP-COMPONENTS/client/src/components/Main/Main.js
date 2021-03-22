import "./Main.css";
import "../Post";
import Post from "../Post";

const Main = ({ posts }) => {
  return (
    <main className="main-container">
      <h1>Soooooome Heading</h1>

      <div className="posts">
        {posts.map((x) => (
          <Post
            key={x.id}
            // post = {x}
            content={x.content}
            author={x.author}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
