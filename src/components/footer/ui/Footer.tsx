import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {footerStyles} from '@/app/theme/styles';
import {AppLink, Chip, Container, Flex, List} from '@/shared/ui';
import {footerColumns, footerTags} from '../model/data';

export const Footer = (): ReactElement => {
  return (
    <Container component="footer">
      <Flex spacing={3} sx={footerStyles.flex}>
        {footerColumns.map((column, index) => (
          <Box key={index} sx={footerStyles.flexItem}>
            <Typography fontWeight={600} variant="h6" gutterBottom>
              {column.title}
            </Typography>
            <List items={column.links} renderItem={AppLink} itemStyle={{p: 1}} />
          </Box>
        ))}
      </Flex>
      <Typography variant="h6" fontWeight={600} sx={{marginTop: '20px'}}>
        Product tags
      </Typography>
      <List
        items={footerTags}
        row
        renderItem={Chip}
        sx={{justifyContent: 'flex-start'}}
        itemStyle={{width: 'auto'}}
      />
    </Container>
  );
};
