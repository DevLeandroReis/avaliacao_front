import React, { useState, useEffect } from 'react';
import axios from '../../services/api';
import { Link } from 'react-router-dom';

const Index = () => {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    axios.get('/cliente').then((response) => {
      setCliente(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/cliente/${id}`).then(() => {
      setCliente(cliente.filter((client) => client.id !== id));
    });
  };

  return (
    <div className="container mt-5">
      <h1>Clientes</h1>
      <ul className="list-group">
        {cliente.map((client) => (
          <li key={client.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{client.nome} - {client.porte}</span>
            <div>
              <Link to={`/cliente/edite/${client.id}`} className="btn btn-warning btn-sm me-2">Editar</Link>
              <button onClick={() => handleDelete(client.id)} className="btn btn-danger btn-sm">Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;