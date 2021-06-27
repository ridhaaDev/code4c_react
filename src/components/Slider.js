import React, { useState, useEffect } from 'react'
import './css/Slider.css'


const Slider = ({ data, interval }) => {

    const [currentSlide, setCurrentSlide] = useState(1)

    useEffect(()=>{
        const loop = setInterval(()=>{
            if(currentSlide === data.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 
    }, [data, currentSlide, interval]);

    const boxStyles = {
        backgroundImage: "url(" + data[currentSlide].url + ")"
    }

    const changeSlide = (e) => {
        const target = parseInt(e.target.innerHTML)
        setCurrentSlide(target - 1)
    }

    const nextSlide = (e) => {
        if (currentSlide == 2) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = (e) => {
        if (currentSlide == 0) {
            setCurrentSlide(2)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <div className="img-grid">
            <div className="box" style={boxStyles}></div>

            <section>
                <button onClick={prevSlide}>Previous</button>
                <button onClick={changeSlide}>1</button>
                <button onClick={changeSlide}>2</button>
                <button onClick={changeSlide}>3</button>
                <button  onClick={nextSlide}>Next</button>

            </section>
        </div>
    )
}

export default Slider
