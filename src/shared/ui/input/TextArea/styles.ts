import {alpha, styled} from '@mui/material';
import {brand, grey} from '@/app/theme/theme';

export const TextAreaStyled = styled('textarea')(({theme}) => ({
  fontFamily: 'inherit',
  backgroundColor: alpha(grey[100], 0.2),
  width: '100%',
  resize: 'none',
  padding: '10px 20px',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${grey[200]}`,
  '&::placeholder': {
    color: grey[200],
    fontSize: '14px'
  },
  '&:focus': {
    outline: `4px solid ${alpha(brand[500], 0.4)}`,
    borderColor: brand[400]
  },
  '&:hover': {
    borderColor: theme.palette.grey[300],
    backgroundColor: alpha(theme.palette.grey[100], 0.5)
  }
}));
