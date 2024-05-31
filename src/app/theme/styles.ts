import {SxProps, Theme} from '@mui/material';
import {CSSProperties} from 'react';
import {maxPhotos} from '@/shared/ui/imageGallery/ImageGallery';
import {brand, grey, yellow} from './theme';

export const headerStyles = {
  appBar: {boxShadow: 'none'},
  headerContainer: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    flexDirection: 'column',
    alignItems: 'none'
  }),
  navContainerStyles: (theme: Theme) => ({
    alignItems: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      borderBottom: `1px solid ${theme.palette.grey[100]}`,
      alignItems: 'center',
      flexDirection: 'row'
    },
    p: 2,
    justifyContent: 'center'
  }),
  navStackStyles: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    },
    flexDirection: 'row',
    gap: 2
  }),
  navDrawerContainer: {gap: 2, p: 2},
  categoriesContainer: (theme: Theme) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: theme.palette.grey[900]
  }),
  navMaxWidth: {
    width: '100%',
    maxWidth: 1500
  }
};

export const containerStyles = {
  container: {flex: '1 0 auto', paddingY: 3}
};

const baseImageStyle = {
  cursor: 'pointer',
  borderRadius: 1,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(0.99)'
  }
};

export const imageGalleryStyles = {
  mainImg: {
    objectFit: 'contain'
  },
  smallImg: {
    maxWidth: 140,
    height: 140,
    ...baseImageStyle
  },
  bigImg: {
    height: 218,
    width: '100%',
    minWidth: 180,
    maxWidth: 200,
    objectFit: 'contain',
    ...baseImageStyle
  }
};

export const getImageStyles = (slidesPerView: number): SxProps => {
  const baseImageStyle = imageGalleryStyles.smallImg;

  const perViewStyles = {
    1: {
      maxWidth: 200
    },
    2: {
      maxWidth: 180
    },
    3: {
      maxWidth: 160
    },
    4: {
      maxWidth: 140
    }
  };
  return {
    ...baseImageStyle,
    ...(perViewStyles as {[key: number]: {maxWidth: number}})[
      slidesPerView > maxPhotos ? maxPhotos : slidesPerView
    ]
  };
};

export const stickyContentLayoutStyles = {
  gridContainer: (theme: Theme) => ({
    display: 'grid',
    gridTemplateAreas: `"left content"`,
    gridTemplateColumns: 'min-content 1fr',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1% 1fr'
    }
  }),
  leftGridItem: {
    gridArea: 'left',
    position: 'sticky',
    top: 32,
    height: 'fit-content',
    zIndex: 100
  },
  contentGridItem: {
    gridArea: 'content',
    maxWidth: '100%',
    justifySelf: 'right',
    padding: 2,
    width: '100%'
  }
};

export const productCardStyles = {
  smallCardContainer: {
    width: '100%',
    height: 'auto',
    minWidth: 180,
    maxWidth: 300,
    p: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    objectFit: 'contain'
  },
  smallCardActionsContainer: {display: 'flex', justifyContent: 'space-between', gap: 2},
  bigCardContainer: {maxWidth: 869, minHeight: 280, maxHeight: 280, width: '100%'},
  bigCardMedia: {minHeight: '100%', minWidth: 60, maxWidth: 268, objectFit: 'contain'},
  bigCardContent: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1
  },
  bigCardActionsContainer: {display: 'flex', flexDirection: 'column', gap: 2},
  box: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  },
  outOfStockBox: {
    filter: 'opacity(50%)',
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export const productsListStyles = {
  mobileFiltersBox: (isSticky: boolean) => ({
    position: 'sticky',
    top: 0,
    left: 0,
    background: isSticky ? brand[900] : 'transparent',
    borderRadius: '0 0 10px 10px',
    width: '100%',
    padding: 1.4,
    zIndex: 100,
    justifyContent: 'space-between'
  })
};

export const footerStyles = {
  flex: (theme: Theme) => ({
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }),
  flexItem: {
    minWidth: '200px',
    justifyContent: 'center'
  }
};

export const modalStyles = {
  modal: (theme: Theme) => ({
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[19],
    padding: theme.spacing(5)
  }),
  logo: {position: 'absolute', left: 20, top: 2},
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 8
  }
};

export const carouselStyles = {
  swiper: {
    paddingTop: '10px',
    paddingBottom: '10px',
    '--swiper-pagination-color': brand[500],
    '--swiper-pagination-bullet-inactive-color': grey[500],
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-size': '12px',
    '--swiper-pagination-bullet-horizontal-gap': '6px'
  },
  swiperSlide: {
    display: 'flex',
    justifyContent: 'center'
  }
};

export const checkboxGroupStyles = (showCheckbox: boolean): Record<string, CSSProperties> => ({
  formGroup: {
    gap: showCheckbox ? 0 : 1
  },
  checkbox: {
    display: showCheckbox ? 'flex' : 'none'
  }
});

export const checkoutStyles = {
  orderSummaryBox: (theme: Theme) => ({
    width: '45%',
    padding: '32px 16px',
    border: `1px solid ${grey[100]}`,
    borderRadius: '12px',
    order: 1,
    height: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      order: -1,
      mb: '30px'
    }
  }),
  completeOrderButton: {
    minWidth: '150px',
    mt: '30px'
  },
  orderSummaryList: {
    mt: '30px',
    maxHeight: '600px',
    flexWrap: 'nowrap',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '8px'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: grey[100],
      borderRadius: '4px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: brand[500],
      borderRadius: '4px'
    }
  },
  orderSummaryListItem: {
    padding: 0,
    borderBottom: `1px solid ${grey[900]}`
  }
};

export const cartButtonStyles = {
  quantityBade: {
    '& .MuiBadge-badge': {
      bottom: '7px',
      left: '7px',
      color: 'white',
      fontWeight: 600,
      background: 'rgb(230, 112, 75)',
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)'
    }
  }
};

export const autoCompleteStyles = {
  textField: {
    '& .MuiInputBase-input': {
      position: 'absolute',
      width: '80%'
    },
    '& .MuiAutocomplete-inputRoot .MuiAutocomplete-input': {
      width: '80%'
    }
  },
  autoComplete: {
    '& .MuiAutocomplete-input': {
      minWidth: '100%',
      width: '100%',
      maxWidth: '100%'
    }
  }
};

export const yellowSliderStyles = {
  '& .MuiSlider-thumb': {
    color: yellow[900]
  },
  '& .MuiSlider-track': {
    color: yellow[900]
  },
  '& .MuiSlider-rail': {
    color: 'primary.main'
  },
  '& .MuiSlider-active': {
    color: 'primary.main'
  }
};
