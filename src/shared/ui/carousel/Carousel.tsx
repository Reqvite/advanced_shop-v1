import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {ComponentType, ReactElement} from 'react';
import {Swiper, SwiperProps, SwiperSlide} from 'swiper/react';
import {carouselStyles} from '@/app/theme/styles';
import {Flex} from '../base/Flex';

interface ItemWithId {
  _id: string;
}

type Props<T extends ItemWithId> = SwiperProps & {
  items: T[];
  component: ComponentType<T>;
};

export const Carousel = <T extends ItemWithId>({
  items,
  component: Component,
  ...otherProps
}: Props<T>): ReactElement => {
  return (
    <Swiper style={carouselStyles.swiper} {...otherProps}>
      <Flex gap={1}>
        {items.map((item) => (
          <SwiperSlide style={carouselStyles.swiperSlide} key={item._id}>
            <Component {...item} />
          </SwiperSlide>
        ))}
      </Flex>
    </Swiper>
  );
};
