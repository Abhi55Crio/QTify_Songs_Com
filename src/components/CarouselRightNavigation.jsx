import React, {useState, useEffect} from 'react'
import { ReactComponent as RightNavigation } from '../assets/svg/rightNavigation.svg'
import { useSwiper } from 'swiper/react';

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function(){
      setIsEnd(swiper.isEnd);
    })
  },[swiper])

  return (
    <div className='rightNavigation'>
      {!isEnd && <RightNavigation onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRightNavigation
