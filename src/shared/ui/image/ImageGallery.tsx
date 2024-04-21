import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Card, CardMedia, Grid, GridProps, IconButton, useMediaQuery, useTheme} from '@mui/material';
import {ReactElement, useState} from 'react';
import {Flex} from '../base/Flex';

type Props = GridProps & {
  images: string[];
  withSlider?: boolean;
  title?: string;
  maxSliderImages?: number;
};

const baseImageStyle = {
  cursor: 'pointer',
  borderRadius: 1,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)'
  }
};

export const ImageGallery = ({
  images,
  withSlider,
  title = 'Img title',
  maxSliderImages = 3
}: Props): ReactElement => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')) || withSlider;
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [startIndex, setStartIndex] = useState<number>(0);

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
    <Grid container direction="column" alignItems="center" spacing={2} sx={{width: '100%'}}>
      <Grid item>
        <Card>
          <CardMedia component="img" src={selectedImage} height="400" width="100%" />
        </Card>
      </Grid>
      <Grid item>
        {isMobile ? (
          <Flex alignItems="center" gap={1}>
            <IconButton disabled={startIndex === 0} onClick={onPrevImage}>
              <ArrowBackIcon />
            </IconButton>
            {images.slice(startIndex, startIndex + maxSliderImages).map((image, index) => (
              <CardMedia
                key={startIndex + index}
                component="img"
                src={image}
                sx={{
                  maxWidth: 60,
                  height: 60,
                  ...baseImageStyle
                }}
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
              <Grid key={index} item xs={6}>
                <CardMedia
                  component="img"
                  src={image}
                  sx={{
                    height: 218,
                    width: '100%',
                    ...baseImageStyle
                  }}
                  onClick={() => onThumbnailClick(image)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
