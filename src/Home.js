import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./pages/styles";
import "./Global.css";
import { Link, useNavigate } from "react-router-dom";



const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [myModels, setMyModels] = useState([]);
  const navigate = useNavigate();


  const fetchFilmes = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=5ee39d79c441b452cf8fed92a3e03925"
    );
    setFilmes(response.data.results);
  };
  const buttonSinopse = () => {
    // Use history to navigate to the "/descricao" route
    navigate("/descricao");
  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/myModels")
      .then((response) => {
        setMyModels(response.data);
      })
      .catch((error) => {
        console.error("Erro: " + error);
      });
  }, []);

  return (
    <Container>
      <h1 className="h1">MOVIE HOUSE</h1>
      <ul className="ul">
        {myModels.map((myModel) => (
          <li key={myModel._id} className="li">
            <strong>{myModel.name}</strong>: {myModel.description}
          </li>
        ))}
      </ul>
      <div className="tbody">
        {filmes &&
          filmes.map((filme) => (
            <div key={filme.id} className="filme">
              <p className="title">{filme.title}</p>
              <img className="imgFilme"src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} />
              <button onClick={buttonSinopse}  className="botaoSinopse"  > <p className="titleButton">SINOPSE</p> </button>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Home;
