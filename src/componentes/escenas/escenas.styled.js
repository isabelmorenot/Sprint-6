import styled from "styled-components"

export const Btnwraper = styled.div`
    display:flex;
`;

export const Boton = styled.button`
    width: 100%;
    padding: 2rem;
    font-size: 1.3rem;
`;

export const Texto = styled.p`
    width: 100%;
    padding: 1rem 0;
    border:solid 1px black;
    &:nth-child(${({active})=>(active)}){
        background:red;
    }
    border-radius: 2rem;
    text-align: center;
`;



