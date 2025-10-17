function Card({ imgUrl, isFlipped, onClick }) {
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={imgUrl} alt="animal" />
        </div>
      </div>
    </div>
  );
}

export default Card;

