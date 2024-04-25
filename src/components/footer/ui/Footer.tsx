import {Grid, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {AppLink, Chip, Container, List} from '@/shared/ui';
import {footerColumns, footerTags} from '../model/data';

export const Footer = (): ReactElement => {
  return (
    <Container component="footer">
      <Grid container spacing={3}>
        {footerColumns.map((column, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography fontWeight={600} variant="h6" gutterBottom>
              {column.title}
            </Typography>
            <List items={column.links} renderItem={AppLink} itemStyle={{width: 'auto'}} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" fontWeight={600} style={{marginTop: '20px'}}>
        Product tags
      </Typography>
      <List items={footerTags} row renderItem={Chip} itemStyle={{width: 'auto'}} />
    </Container>
  );
};
