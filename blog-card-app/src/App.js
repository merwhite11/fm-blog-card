import './App.css';
import CardImage from "./assets/images/illustration-article.svg"

function App() {
  return (
    <div className="App">
      <section className="card">
        <div className="card___body">
          <img className="card__image" src={CardImage} alt="abstract">

          </img>
          <div className="card__content">
            <div className="card__flag"></div>
            <p className="card__dateline"></p>
            <h1>HTML & CSS foundations</h1>
            <p className="card__text">These languages are the backbone of every website, definiting structure, content, and presentation.</p>
            <div className="card__footer"></div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
