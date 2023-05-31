import { useState } from 'react';


// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.trim().length < 3 || /^\s/.test(input1)) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (input2.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    onSubmit({ input1, input2 });
    setError('');
    setInput1('');
    setInput2('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            placeholder='Ingresa tu nombre'
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            placeholder='Ingresa tu color favorito ej: #000000'
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Form;

