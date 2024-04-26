export const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between'
};

export const productCardStyles = {
  smallCardContainerStyles: {width: '100%', maxWidth: 500},
  smallCardActionsContainerStyles: {display: 'flex', justifyContent: 'space-between', gap: 2},
  bigCardContainerStyles: {maxWidth: 869, minHeight: 280, maxHeight: 280, width: '100%'},
  bigCardMediaStyles: {minHeight: '100%', maxWidth: 268, objectFit: 'cover'},
  bigCardContentStyles: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1
  },
  bigCardActionsContainerStyles: {display: 'flex', flexDirection: 'column', gap: 2}
};
