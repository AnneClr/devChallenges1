import scarecrow from "../assets/scarecrow.png";
export default function Content() {
  return (
    <div className="containerContent">
      <img
        src={scarecrow}
        alt="illustration of scarecrow"
        className="imgScarecrow"
      />
      <div className="textContainer">
        <h1 className="text title">I have bad news for you</h1>
        <p className="text paragraph">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button type="button" className="btn backButton">
          Back to homepage
        </button>
      </div>
    </div>
  );
}
