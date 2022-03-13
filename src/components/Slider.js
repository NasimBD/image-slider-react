import React, { useEffect, useState } from 'react';
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';


export const Slider = ({slides}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const sliderTimeOutId = setTimeout(nextSlide , 3000);

        return () => clearTimeout(sliderTimeOutId);
    }, [slideIndex]);

    const nextSlide = () => {
        if(slideIndex === slides.length - 1) {
            setSlideIndex(0);
        }else setSlideIndex( slideIndex + 1);
    }

    
    const previousSlide = () => {
        if(slideIndex===0){
            setSlideIndex( slides.length - 1 );
        }else setSlideIndex( slideIndex - 1);
    }


  return (
    <div id="slider-container">
        {
            slides.map((slide, indx) => 
            <div key={indx} className={`image-wrapper ${slideIndex===indx ? 'active' : ''}`}>
                <img src={slides[indx].imageSrc} alt="food"/>
            </div>
            )
        }
        <div id="console">
            <IoIosArrowDropleftCircle className="left-arrow" onClick={previousSlide}/>
            <IoIosArrowDroprightCircle className="right-arrow" onClick={nextSlide}/>
        </div>
    </div>
  )
}
