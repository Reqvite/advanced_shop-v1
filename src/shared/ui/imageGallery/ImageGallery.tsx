import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {CardMedia, Grid, GridProps, IconButton} from '@mui/material';
import {ReactElement, useEffect, useState} from 'react';
import {imageGalleryStyles} from '@/app/theme/styles';
import {useMediaQuery} from '@/shared/lib/hooks';
import {Flex} from '../base/Flex';
import {ImageGalleryItem} from './ImageGalleryItem';

type Props = GridProps & {
  images: string[];
  withSlider?: boolean;
  title?: string;
  maxSliderImages?: number;
};

export const ImageGallery = ({
  images,
  withSlider,
  title = 'Img title',
  maxSliderImages = 3
}: Props): ReactElement => {
  const isMobile = useMediaQuery('md') || withSlider;
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [startIndex, setStartIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  const onThumbnailClick = (image: string): void => {
    setSelectedImage(image);
  };

  const onPrevImage = (): void => {
    setStartIndex((prevIndex) => prevIndex - 1);
  };

  const onNextImage = (): void => {
    setStartIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2} width="100%">
      <Grid item>
        <CardMedia component="img" src={selectedImage} height="400" width="100%" />
      </Grid>
      <Grid item>
        {isMobile ? (
          <Flex alignItems="center" gap={1}>
            <IconButton disabled={startIndex === 0} onClick={onPrevImage}>
              <ArrowBackIcon />
            </IconButton>
            {images.slice(startIndex, startIndex + maxSliderImages).map((image, index) => (
              <ImageGalleryItem
                key={`${startIndex}-${index}-${image}`}
                src={image}
                sx={imageGalleryStyles.smallImg}
                alt={`${title} ${startIndex + index}`}
                onClick={() => onThumbnailClick(image)}
              />
            ))}
            <IconButton
              disabled={startIndex >= images.length - maxSliderImages}
              onClick={onNextImage}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Flex>
        ) : (
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <ImageGalleryItem
                key={`${startIndex}-${index}-${image}`}
                src={image}
                sx={imageGalleryStyles.bigImg}
                alt={`${title} ${startIndex + index}`}
                onClick={() => onThumbnailClick(image)}
              />
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
