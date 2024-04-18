import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardProps,
  Stack,
  Typography
} from '@mui/material';
import {LabelOptionsI} from '@/shared/types/options';
import {Button} from '../button/Button';
import {CharacteristicList} from '../characteristicList/CharacteristicList';
import {Rating} from '../rating/Rating';
import {PriceText} from '../text/PriceText';

type Props = CardProps & {
  rating: number;
  title: string;
  description: string;
  characteristics: LabelOptionsI[];
  price: number;
  discount?: number;
};

export const MediumProductCard = ({
  rating = 0,
  title,
  description,
  characteristics,
  price,
  discount,
  ...otherProps
}: Props) => {
  return (
    <Card sx={{maxWidth: 869, minHeight: 280, maxHeight: 280}} {...otherProps}>
      <Stack flexDirection="row" sx={{flexDirection: 'row', minHeight: 280}}>
        <CardMedia
          component="img"
          sx={{minHeight: '100%', maxWidth: 268, objectFit: 'cover'}}
          image="https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg"
          title="green iguana"
        />
        <CardContent sx={{display: 'flex', alignItems: 'center'}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Rating value={rating} readOnly />
            </Box>
            <CharacteristicList characteristics={characteristics} maxListItems={4} />
          </Box>
          <Box>
            <PriceText price={price} discount={discount} />
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Box>
        </CardContent>
      </Stack>
    </Card>
  );
};
