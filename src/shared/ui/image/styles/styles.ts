const baseImageStyle = {
  cursor: 'pointer',
  borderRadius: 1,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)'
  }
};

export const imageGalleryStyles = {
  smallImg: {
    maxWidth: 60,
    height: 60,
    ...baseImageStyle
  },
  bigImg: {
    height: 218,
    width: '100%',
    ...baseImageStyle
  }
};
