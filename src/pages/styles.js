import styled from "styled-components";

export const Container = styled.div`
     
.h1 {
    text-align: center;
    margin: 4rem 0;
}

.tbody {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 350px);
    column-gap: 3rem;
    row-gap: 4rem;

}
.ul{
    text-align: justify;
    text-justify: inter-word;
    margin: 4rem 0;
    display:flex;
    flex-direction: column;
}
.li{
    display:flex;
    flex-direction: column;

}
` 