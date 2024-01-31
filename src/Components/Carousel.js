import React, { useState } from 'react'
import '../Components/Carousel.css'

const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0)

    const handlePrevious = () => {
        setSlide(slide === 0 ? data.slides.length - 1 : slide - 1)
    }
    const handleNext = () => {
        setSlide(slide === data.slides.length - 1 ? 0 : slide + 1)
    }

    console.log(data)
    return (
        <>
            <div className='carousel'>
                {
                    data.slides.map((item, i) => {
                        return (
                            <img
                                className={slide === i ? "slide" : "slide slide-hidden"}
                                src={item.src}
                                alt={item.alt}
                                key={i}
                            />
                        )
                    })
                }
            </div>
            <div className='btn'>
                <button className='prev' onClick={handlePrevious}>Previous</button>
                <button className='next' onClick={handleNext}>Next</button>
            </div>

        </>
    )
}

export default Carousel