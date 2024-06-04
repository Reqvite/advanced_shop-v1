import {Box, CardMedia, GridProps} from '@mui/material';
import {ReactElement, useEffect, useState} from 'react';
import {Pagination} from 'swiper/modules';
import {SwiperProps} from 'swiper/react';
import {getImageStyles, imageGalleryStyles} from '@/app/theme/styles';
import {useMediaQuery} from '@/shared/lib/hooks';
import {ImgI} from '@/shared/types/product';
import {Carousel} from '../carousel/Carousel';
import {ImageGalleryItem} from './ImageGalleryItem';

type Props = GridProps & {
  images: ImgI[];
  title?: string;
};

export const maxPhotos = 4;
const getCarouselConfig = (isMobile: boolean, length: number): SwiperProps => {
  return {
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
    spaceBetween: 5,
    slidesPerView: isMobile ? 3 : length > maxPhotos ? maxPhotos : length,
    freeMode: true,
    allowTouchMove: true,
    modules: [Pagination]
  };
};

export const ImageGallery = ({images, title = 'Img title'}: Props): ReactElement => {
  const isMobile = useMediaQuery('md');
  const [selectedImage, setSelectedImage] = useState<string>(images[0]?.src);
  const imagesCount = images?.length;

  useEffect(() => {
    setSelectedImage(images[0]?.src);
  }, [images]);

  const onThumbnailClick = (image: string): void => {
    setSelectedImage(image);
  };

  const renderProductCard = (image: ImgI): ReactElement => {
    const isActive = selectedImage === image.src;

    return (
      <ImageGalleryItem
        isActive={isActive}
        sx={getImageStyles(imagesCount)}
        alt={`${title}-${image._id}`}
        onClick={() => onThumbnailClick(image.src)}
        {...image}
      />
    );
  };

  return (
    <Box width="100%">
      <CardMedia
        component="img"
        sx={imageGalleryStyles.mainImg}
        src={selectedImage}
        height="400"
        width="100%"
      />
      {imagesCount > 1 && (
        <Carousel<ImgI>
          {...getCarouselConfig(isMobile, imagesCount)}
          items={images}
          component={renderProductCard}
        />
      )}
    </Box>
  );
};
