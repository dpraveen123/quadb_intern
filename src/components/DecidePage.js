import React, { useEffect, useState } from 'react';

import axios from "axios";
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
function DecidePage(props) {
    var [data, setData] = useState([])
    var [x, setX] = useState("")
    var [y, setY] = useState()

    useEffect(() => {
        console.log("hiiiiiiiiiiii");
        axios.get("https://api.tvmaze.com/search/shows?q=all")
            .then((res) => {
                setData(res.data)
                console.log("resdata", res.data[0].show);
                setX("page1")
            })
    }, [])
    var handleChange=(index)=>{
        console.log("index",index);
        setY(index)
        setX("page2")
    }

    return (
        <div>
          {
            x==""?<div>loading</div>:  <div>{
                x=="page1"?<Section1 title={data} handleChange={handleChange}/>:<Section2 title={data[y]} />
            }</div>
          }
        </div>
    );
}

export default DecidePage;