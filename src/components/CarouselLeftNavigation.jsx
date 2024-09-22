import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as LeftNavigation } from '../assets/svg/leftNavigation.svg';

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeigning, setIsBegining] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function(){
      setIsBegining(swiper.isBeginning);
    })
  },[swiper]);

  return (
    <div className='leftNavigation'>
      {!isBeigning && <LeftNavigation onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNavigation
