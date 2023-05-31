import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Footer from './components/Footer';
import './styles/App.css'

const App = () => {
  const [data, setData] = useState();

  const handleSubmit = (formData) => {
    setData(formData);
  };

  return (
    <><div className="container">
      <h1>¡Bienvenidxs, dinos tus datos!</h1>
      <Form onSubmit={handleSubmit} />
      {data && <Card input1={data.input1} input2={data.input2} />}
    </div><Footer /></>

  );
};

export default App;
