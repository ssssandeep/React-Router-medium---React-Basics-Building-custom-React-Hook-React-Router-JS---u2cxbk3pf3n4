import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';


export const BackgroundColorChanger = () =>{
    const {colorname} = useParams();
    return(
       <main style={{height:'100vh', backgroundColor:colorname}}>
        Background Color Changer
       </main>
    )
}