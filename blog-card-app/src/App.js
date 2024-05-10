import "./App.scss";
import CardImage from "./assets/images/illustration-article.svg";
import FooterImage from "./assets/images/image-avatar.webp";
function App() {
  return (
    <div className="App">
      <section className="card">
        <div className="card__body">
          <div className="card__image-container">

          <img className="card__image" src={CardImage} alt="abstract"></img>
          </div>
          <div className="card__content">
            <div className="card__flag">Learning</div>
            <p className="card__dateline">Published 21 Dec 2023</p>
            <h3 className="card__title">HTML & CSS foundations</h3>
            <p className="card__text">
              These languages are the backbone of every website, definiting
              structure, content, and presentation.
            </p>
          </div>
            <div className="card__footer">
              <img
                className="card__footer-image"
                src={FooterImage}
                alt="avatar"
              ></img>
              <p className="card__footer-byline">Greg Hooper</p>
            </div>
        </div>
      </section>
      {/* <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#" v>Meredith White</a>.
    </div> */}
    </div>
  );
}

export default App;
