import Image from 'next/image';
import { Button, Flex, Title, Transition } from '@mantine/core';
import { SliderAction, SliderItem } from '../../../types/section1';
import { getClasses } from './sec-1.util';

type Props = {
  item: SliderItem;
  isActive: boolean;
  leaving: boolean;
  action: SliderAction;
};

export function SliderItem({ item, isActive, action, leaving }: Props) {
  return (
    <Flex className='full-absolute'>
      <Flex
        className={`slider-full`}
        p='lg'
        pos='relative'
        opacity={isActive ? 1 : 0}
      >
        <Image
          alt={item.text}
          style={{ zIndex: -1, objectFit: 'cover', opacity: isActive ? 1 : 0 }}
          fill
          src={item.img}
        />

        <Flex
          className={getClasses(isActive, leaving, action)}
          direction={'column'}
          h='100%'
          w='100%'
          sx={{
            paddingBottom: 100,
            paddingLeft: 100
          }}
          justify={{ base: 'center', md: 'end' }}
          align={'start'}
          mt={{ base: 0, mb: 1 }}
        >
          <Title maw={'500px'} color='white'>
            {item.text}
          </Title>

          <Button>check</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
