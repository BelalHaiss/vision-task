import { Flex, Text } from '@mantine/core';

import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { SliderAction } from '../../../types/section1';
import { sliders } from './sec-1.util';

type Props = {
  activeSlider: number;
  setAction: (act: SliderAction) => void;
};
export function Arrows({ activeSlider, setAction }: Props) {
  return (
    <Flex
      w='100%'
      h='100%'
      align='end'
      style={{ paddingBottom: '90px' }}
      justify={'center'}
    >
      <Flex align='center' gap='lg'>
        <HiOutlineArrowLeft
          onClick={() => setAction('prev')}
          className='slider-arrow right-arrow'
        />

        <Flex align='center' gap='xs'>
          <Text color='white' fz='md'>
            {activeSlider}
          </Text>
          <Text color='white' fz='md'>
            /
          </Text>
          <Text c='dimmed'>{sliders.length} </Text>
        </Flex>
        <HiOutlineArrowRight
          onClick={() => setAction('next')}
          className='slider-arrow left-arrow '
        />
      </Flex>
    </Flex>
  );
}
