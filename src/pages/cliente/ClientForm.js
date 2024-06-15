import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../services/api';

const ClientForm = () => {
  const [nome, setName] = useState('');
  const [porte, setPorte] = useState('pequena');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/cliente/${id}`).then((response) => {
        setName(response.data.nome);
        setPorte(response.data.porte);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clientData = {
      nome: nome,
      porte: porte,
    };

    try {
      if (id) {
        await axios.put(`/cliente/${id}`, clientData);
      } else {
        await axios.post('/cliente', clientData);
      }
      navigate('/');
    } catch (error) {
      console.error("There was an error saving the client data!", error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Porte</label>
          <select
            className="form-select"
            value={porte}
            onChange={(e) => setPorte(e.target.value)}
          >
            <option value="pequena">Pequena</option>
            <option value="media">Média</option>
            <option value="grande">Grande</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Salvar</button>
      </form>
    </div>
  );
};

export default ClientForm;