import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <br />
      <div className="jumbotron" style={{background: "rgb(211, 211, 211, 0.3)"}}>
        <h1 className="display-4">Welcome to Easy Español!</h1>
        <p className="lead">A small </p>
        <hr className="my-4" />
        <p>help</p>
        <p className="lead">
          <Link to="/books" className="btn btn-primary">Books</Link>
          <> </>
          <Link to="/vocab" className="btn btn-primary">Vocab Flashcards</Link>
          <> </>
          <Link to="/youtube" className="btn btn-primary">YouTube</Link>
          <> </>
          <Link to="/nouns" className="btn btn-primary">Nouns</Link>
          <> </>
          <Link to="/articles" className="btn btn-primary">Articles</Link>
          <> </>
          <Link to="/travel" className="btn btn-primary">Travel</Link>
          <> </>
          <Link to="/food" className="btn btn-primary">Food</Link>
          <> </>
          <Link to="/conversation" className="btn btn-primary">Conversation</Link>
          <> </>
          <Link to="/adjectives" className="btn btn-primary">Adjectives</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
