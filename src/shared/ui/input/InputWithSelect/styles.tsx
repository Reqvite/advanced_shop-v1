import {alpha, Box, InputAdornment, InputBase, styled} from '@mui/material';
import {Select} from '../../select';

export const CustomBox = styled(Box)(({theme}) => ({
  height: '40px',
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

export const CustomSelectStyles = styled(Select)(({theme}) => ({
  border: 'none',
  background: 'none',
  fontWeight: 'bold',
  height: '40px',
  padding: 0,
  '& .MuiSelect-outlined': {
    padding: 0,
    paddingLeft: '18px'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-10.5px',
    height: '20px',
    width: '1px',
    backgroundColor: theme.palette.grey[100]
  },
  '&:hover': {
    background: 'none'
  },
  '&.Mui-focused': {
    outline: 'none'
  }
}));

export const CustomInputStyles = styled(InputBase)(({theme}) => ({
  '& .MuiInputBase-input': {
    [theme.breakpoints.down(890)]: {
      width: '150px'
    },
    position: 'relative',
    marginLeft: '20px',
    width: '250px',
    paddingRight: '10px'
  }
}));

export const CustomInputAdornment = styled(InputAdornment)(() => ({
  paddingLeft: '18px'
}));
