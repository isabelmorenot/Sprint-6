import React, { useState } from "react"
import { Boton, Btnwraper, Texto } from "./escenas.styled"

const Escenas = ({frases}) => {
    const [isactive, setactive] = useState (2)
    const nextText = () => {
        if(isactive == 5){
            setactive(2)
        }else{
            setactive(isactive +1)
        }
    }
    const previousText = () => {
        if(isactive == 1){
            setactive(5)
        }else{
            setactive( isactive -1)
        }
    }
    
    console.log(isactive);
    return (
        <>
        <Btnwraper>
            <Boton onClick={previousText}>Anterior</Boton>
            <Boton onClick={nextText}>Siguiente</Boton>
        </Btnwraper>
       {frases.map((datos,index) => {
        return (
            <Texto active = {isactive} key={index}>{datos}</Texto>
        )
       })}
       </>
    )
}

export default Escenas