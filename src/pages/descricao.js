
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../pages/styles";
import "../Global.css";


const Descricao = () => {
  const [filmes, setFilmes] = useState([]);

  const fetchFilmes = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=5ee39d79c441b452cf8fed92a3e03925"
    );
    setFilmes(response.data.results);
  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  return (
    <Container>
      <h1 className="h1">Descrição</h1>
      <div className="tbody">
        {filmes &&
          filmes.map((filme) => (
            <div key={filme.id}>
              <p className="Descrição">{filme.overview }</p>
            </div>
          ))}
      </div>
    </Container>
  );
};


export default Descricao;