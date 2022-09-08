import React from 'react';
import "./Section2.css"
import swal from 'sweetalert';
function Section2(props) {
    var bookMovie=()=>{
        // var x=props.title.show.name;
        swal({
            title: "Success!",
            text: "You booked the "+props.title.show.name+ " movie ticket!",
            icon: "success",
            button: "Okay!",
          });
    }

    return (
        <div className='s2-outer-container'>
            
            <div className='s2-inner-container'>
                <div className='s2-limage'>
                    <img src={props.title.show.image.medium} height="400px"></img>
                </div>
                <div className='s2-about'>
                    <p>Title:{props.title.show.name}</p>
                    <p>Language:{props.title.show.language}</p>
                    <p>Score:{props.title.score}</p>
                    <button style={{fontSize:"20px",cursor:"pointer"}} onClick={bookMovie}>Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default Section2;