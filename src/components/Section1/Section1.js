import React, { useEffect, useState } from 'react';
import axios from "axios";
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./Section1.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Section1(props) {
    var [data, setData] = useState([])
    useEffect(() => {
        console.log("hiiiiiiiiiiii",props.title);
        setData(props.title)
        console.log("hi");
        // axios.get("https://api.tvmaze.com/search/shows?q=all")
        //     .then((res) => {
        //         setData(res.data)
        //         console.log("resdata", res.data[0].show);
        //     })
    }, [])
    return (
        <div>
           
                    <div className='s1-grid-container'>
                        {
                            data.map((l, i) => {
                                return (
                                    
                                        <div className='s1-grid-item'>
                                            <h2>
                                                {l.show.name}
                                            </h2>
                                            <img src={l.show.image.medium}></img>
                                            <br></br>
                                            <button className='s1-button' onClick={()=>{props.handleChange(i)}}> Click Me</button>
                                    </div>
                                )
                            })
                        }
                        </div>
                
        </div>
    );
}

export default Section1;