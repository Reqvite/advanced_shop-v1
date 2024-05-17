import {alpha, Box, FormLabel, InputBase, styled} from '@mui/material';

export const CustomBox = styled(Box)(({theme}) => ({
  padding: '5px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  background: 'rgb(249, 249, 249)',
  borderRadius: theme.shape.borderRadius,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: theme.shape.borderRadius,
    transition: 'border-color 120ms ease-in',
    backgroundColor: alpha(theme.palette.grey[100], 0.2)
  },
  '&:hover::before': {
    borderColor: theme.palette.grey[300],
    backgroundColor: alpha(theme.palette.grey[100], 0.5)
  },
  '&.Mui-focused::before': {
    outline: `4px solid ${theme.palette.primary.main}`,
    borderColor: theme.palette.primary.main
  }
}));

export const CustomSelectFormLabel = styled(FormLabel)(({theme}) => ({
  fontWeight: 400,
  marginBottom: 0,
  marginLeft: '5px',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-24.5px',
    height: '20px',
    width: '1px',
    backgroundColor: theme.palette.grey[100]
  },
  fontSize: 14
}));

export const CustomSelectStyle = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    position: 'relative',
    marginLeft: '40px',
    width: '100%'
  }
}));
