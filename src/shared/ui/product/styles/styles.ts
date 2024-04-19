import {Card, Stack, styled} from '@mui/material';
export const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between'
};

export const MediumCardStyled = styled(Card)(({theme}) => ({
  maxWidth: 869,
  minHeight: 280,
  maxHeight: 280,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    minHeight: 400
  }
}));

export const MediumCardStackStyled = styled(Stack)(({theme}) => ({
  flexDirection: 'row',
  minHeight: 280,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));
