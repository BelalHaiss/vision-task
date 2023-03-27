import { SliderAction, SliderItem } from '../../../types/section1';

export const sliders: SliderItem[] = [
  {
    img: 'https://www.vision2030.gov.sa/media/v5hlwzvf/nonprofit-banner2.jpg',
    text: 'A Vision That Empowers Giving,A Vision That Empowers Giving,A Vision That Empowers Giving,A Vision That Empowers Giving,',
    number: 1
  },
  {
    img: 'https://www.vision2030.gov.sa/media/rllggozq/explor-02.jpg',
    text: 'Vision 2030: A Story of Transformation',
    number: 2
  },
  {
    img: 'https://www.vision2030.gov.sa/media/whcffmqp/hm-banner-06.jpg',
    text: 'My primary goal is to be an exemplary and leading nation in all aspects, and I will work with you in achieving this endeavour. ',
    number: 3
  }
];

export function handleSliderNumber(
  activeSlider: number,
  actType: SliderAction
) {
  let activeNumber = 0;
  if (actType === 'next') {
    activeNumber = sliders.length === activeSlider ? 1 : activeSlider + 1;
  } else {
    activeNumber = activeSlider === 1 ? sliders.length : activeSlider - 1;
  }
  return activeNumber;
}

export function getClasses(
  isActive: boolean,
  leaving: boolean,
  action: SliderAction
) {
  let classess = 'slider-item ';
  if (isActive) {
    classess += action === 'next' ? ' slide-in-right' : ' slide-in-left';
  }
  if (leaving) {
    classess +=
      action === 'next' ? ' slider-leaving-right' : ' slider-leaving-left';
  }
  return classess;
}
