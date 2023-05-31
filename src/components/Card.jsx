// eslint-disable-next-line react/prop-types
const Card = ({ input1, input2 }) => {
  return (
    <div className="card-container">
      <h3>Hola {input1}!</h3>
      <h4>Tu color favorito es:</h4>
      <button>{input2}</button>
    </div>
  );
};

export default Card;
