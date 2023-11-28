import styled from "styled-components";

export const Container = styled.div`
  .h1 {
    text-align: center;
    margin: 4rem 0;
    color: white;  
  }

  .filme {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    p {
      margin-top: 0;
    }
  }

  .tbody {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr)); 
    column-gap: 1rem;  
    row-gap: 4rem;
    text-align: center;
    margin: 0 8rem;
  }

  .ul {
    text-align: justify;
    text-justify: inter-word;
    margin: 4rem 0;
    display: flex;
    flex-direction: column;
    color: white;  
    
  }

  .li {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  .imgFilme {
    border-radius: 1.5rem;
    transition: transform 0.3s ease-in-out; 
  }

  .imgFilme:hover {
    transform: scale(1.1);
  }
  .botaoSinopse {
    width: 40%;
    height: 3rem;
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background-color: red;
    color: white;
    text-decoration: none;
    border-radius: 0.5rem;
    margin-top: 2rem;
    transition: transform 0.3s ease-in-out;

  }

  .botaoSinopse:hover {
    transform: scale(1.1);

  }

  .titleButton {
    font-weight: 300;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  }

  .sinopse {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
`;
