
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./pages/styles";
import  "./Global.css"


const Home = () => {
  const [filmes, setFilmes] = useState([]);

  const fetchFilmes = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=5ee39d79c441b452cf8fed92a3e03925"
    );
    setFilmes(response.data.results);
    console.log(filmes);

  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  const [myModels, setMyModels] = useState([]);

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
      <h1>MOVIE HOUSE</h1>
      <ul>
        {myModels.map((myModel) => (
          <li key={myModel._id}>
            <strong>{myModel.name}</strong>: {myModel.description}
          </li>
        ))}
      </ul>
      <tbody>
          {filmes &&
            filmes.map((filme) => (
              <tr key={filme.id}>
                <td>{filme.title}</td>
                <td><img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} /></td>
                <td>
                </td>
              </tr>
            ))}
        </tbody>
    </Container>
  );
};

export default Home;
