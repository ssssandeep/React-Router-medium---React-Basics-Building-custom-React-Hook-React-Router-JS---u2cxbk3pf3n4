import React from "react";
import { useParams, useSearchParams } from "react-router-dom";


export const Calculator = () =>{
    const [searchParams] = useSearchParams();
    const num1 = searchParams.get('num1')
    const num2 = searchParams.get('num2')
    const op = searchParams.get('op')
    const x  =decodeURIComponent(window.location.search)
    console.log(num1, num2, op, x);
    const getResult = () =>{
        if(op=== '+'){
            return (+num1)+(+num2);
        }else if(op==='-'){
            return num1-num2;
        }else if(op === '*'){
            return (num1)*(num2);
        }else if(op === '/'){
            return (num1)/(num2);
        }
        return (num1)%(num2);
    }
    return(
        <div>
            Your calculation Result is <span className="calc-result">{getResult()}</span>
        </div>
    )
}