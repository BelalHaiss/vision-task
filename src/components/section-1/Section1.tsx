import { useEffect, useRef, useState } from 'react';
import { handleSliderNumber, sliders } from './sec-1.util';
import { SliderItem } from './SliderItem';
import { SliderAction } from '../../../types/section1';
import { Flex } from '@mantine/core';
import { Arrows } from './Arrows';

export function Section1() {
  const [action, setAction] = useState<SliderAction>('next');
  const [activeSlider, setActiveSlider] = useState(1);
  const [isLeaving, setIsLeaving] = useState(false);
  const shouldSlideRef = useRef(true);
  const handleSlider = (actType?: SliderAction) => {
    if (!shouldSlideRef.current) return;
    shouldSlideRef.current = false;
    const sliderItemNumber = handleSliderNumber(
      activeSlider,
      actType ?? 'next'
    );
    setAction(actType ?? 'next');
    setIsLeaving(true);
    setTimeout(() => {
      setActiveSlider(sliderItemNumber);
      setIsLeaving(false);
      shouldSlideRef.current = true;
    }, 500);
  };
  useEffect(() => {
    const interval = setInterval(handleSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [activeSlider]);
  return (
    <section>
      <Flex h='100vh'>
        {sliders.map((slider) => (
          <SliderItem
            action={action}
            isActive={slider.number === activeSlider}
            leaving={slider.number === activeSlider && isLeaving}
            item={slider}
            key={slider.number}
          />
        ))}
        <Arrows
          activeSlider={activeSlider}
          setAction={(act) => handleSlider(act)}
        />
      </Flex>
    </section>
  );
}
