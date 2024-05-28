import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {PaletteMode} from '@mui/material';
import {alpha, createTheme, ThemeOptions} from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}
}

export const yellow = {
  900: '#faaf00'
};

export const brand = {
  50: 'rgb(106, 152, 70)',
  100: 'rgb(244, 248, 236)',
  200: 'rgba(106, 152, 70, 70%)',
  300: 'rgba(106, 152, 60, 40%)',
  400: 'rgba(106, 152, 70, 50%)',
  500: 'rgb(107, 152, 60)',
  600: 'rgba(106, 152, 60, 70%)',
  700: 'rgba(106, 152, 60, 80%)',
  800: 'rgba(106, 152, 60, 50%)',
  900: 'rgba(106, 152, 60, 20%)'
};

export const grey = {
  50: 'hsl(190, 60%, 99%)',
  100: 'rgb(209, 209, 209)',
  200: 'rgb(169, 169, 169);',
  300: 'hsl(190, 25%, 80%)',
  400: 'hsl(190, 20%, 65%)',
  500: 'hsl(190, 20%, 42%)',
  600: 'hsl(190, 25%, 35%)',
  700: 'hsl(190, 25%, 25%)',
  800: 'hsl(190, 25%, 10%)',
  900: 'rgb(249, 249, 249)'
};

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 20%)',
  800: 'hsl(0, 95%, 16%)',
  900: 'hsl(0, 93%, 12%)'
};

const appTheme = createTheme();

export function getTheme(mode: PaletteMode): ThemeOptions {
  return {
    palette: {
      mode,
      primary: {
        light: brand[200],
        main: brand[500],
        dark: brand[800],
        contrastText: brand[50],
        ...(mode === 'dark' && {
          contrastText: brand[100],
          light: brand[300],
          main: brand[400],
          dark: brand[800]
        })
      },
      error: {
        light: red[300],
        main: red[500],
        dark: red[700],
        ...(mode === 'dark' && {
          light: red[300],
          main: '#D32F2F',
          dark: '#B22A2A'
        })
      },
      grey: {
        50: grey[50],
        100: grey[100],
        200: grey[200],
        300: grey[300],
        400: grey[400],
        500: grey[500],
        600: grey[600],
        700: grey[700],
        800: grey[800],
        900: grey[900]
      },
      text: {
        primary: grey[800],
        secondary: grey[600],
        ...(mode === 'dark' && {primary: '#fff', secondary: grey[400]})
      }
    },
    typography: {
      fontFamily: ['"Montserrat", "sans-serif"'].join(','),
      h1: {
        [appTheme.breakpoints.down('md')]: {
          fontSize: appTheme.typography.pxToRem(45)
        },
        fontSize: appTheme.typography.pxToRem(60),
        lineHeight: 1.2
      },
      h2: {
        [appTheme.breakpoints.down('md')]: {
          fontSize: appTheme.typography.pxToRem(20)
        },
        fontSize: appTheme.typography.pxToRem(32),
        lineHeight: 1.2,
        fontWeight: 600
      },
      h3: {
        [appTheme.breakpoints.down('md')]: {
          fontSize: appTheme.typography.pxToRem(22)
        },
        fontSize: appTheme.typography.pxToRem(22),
        lineHeight: 1.2,
        fontWeight: 600
      },
      h5: {
        [appTheme.breakpoints.down('md')]: {
          fontSize: appTheme.typography.pxToRem(14)
        },
        fontSize: appTheme.typography.pxToRem(18),
        fontWeight: 600
      },
      subtitle1: {
        fontSize: appTheme.typography.pxToRem(18)
      },
      subtitle2: {
        fontSize: appTheme.typography.pxToRem(16)
      },
      body1: {
        fontSize: appTheme.typography.pxToRem(15),
        fontWeight: 400
      },
      body2: {
        [appTheme.breakpoints.down('md')]: {
          fontSize: appTheme.typography.pxToRem(12)
        },
        fontSize: appTheme.typography.pxToRem(14),
        fontWeight: 400
      },
      caption: {
        fontSize: appTheme.typography.pxToRem(12)
      }
    },
    shape: {
      borderRadius: 12
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 795.98,
        lg: 1200,
        xl: 1536
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: () => ({
          html: {
            scrollBehavior: 'smooth'
          }
        })
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'inherit'
          }
        }
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
          disableRipple: true
        },
        styleOverrides: {
          root: {
            boxSizing: 'border-box',
            transition: 'all 100ms ease-in',
            '&:focus-visible': {
              outline: `4px solid ${alpha(brand[500], 0.5)}`,
              outlineOffset: '2px'
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: ({theme, ownerState}) => ({
            [appTheme.breakpoints.down('md')]: {
              fontSize: 10
            },
            minWidth: 100,
            gap: 1,
            boxShadow: 'none',
            borderRadius: theme.shape.borderRadius,
            textTransform: 'none',
            ...(ownerState.size === 'medium' && {
              height: '2.5rem'
            }),
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                color: 'white',
                backgroundColor: brand[50],
                boxShadow: `inset 0 2px 0 ${alpha(brand[200], 0.2)}, inset 0 -2px 0 ${alpha(brand[700], 0.4)}`,
                border: `1px solid ${brand[500]}`,
                '&:hover': {
                  backgroundColor: brand[700],
                  boxShadow: 'none'
                },
                '&:active': {
                  backgroundColor: brand[700],
                  boxShadow: `inset 0 2.5px 0 ${alpha(brand[700], 0.4)}`
                }
              }),
            ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'secondary' && {
                backgroundColor: grey[900],
                border: `1px solid ${grey[900]}`,
                color: grey[700],
                '&:hover': {
                  backgroundColor: alpha(grey[300], 0.3),
                  borderColor: alpha(grey[300], 0.5),
                  boxShadow: 'none'
                },
                '&:active': {
                  backgroundColor: alpha(grey[300], 0.4),
                  boxShadow: `inset 0 2.5px 0 ${alpha(grey[400], 0.2)}`,
                  backgroundImage: 'none'
                }
              }),
            ...(theme.palette.mode === 'dark' && {
              ...(ownerState.variant === 'outlined' &&
                ownerState.color === 'secondary' && {
                  color: grey[300],
                  backgroundColor: alpha(grey[600], 0.1),
                  borderColor: alpha(grey[700], 0.5),
                  boxShadow: `inset 0 2.5px ${alpha(grey[600], 0.1)}, inset 0 -2px ${alpha(grey[900], 0.5)}`,
                  '&:hover': {
                    backgroundColor: alpha(grey[700], 0.2),
                    borderColor: alpha(grey[700], 0.5),
                    boxShadow: 'none'
                  },
                  '&:active': {
                    backgroundColor: alpha(grey[800], 0.2),
                    boxShadow: `inset 0 2.5px 0 ${alpha(grey[900], 0.4)}`,
                    backgroundImage: 'none'
                  }
                })
            })
          })
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({theme, ownerState}) => ({
            ...(ownerState.size === 'medium' && {
              height: '40px',
              width: '40px'
            }),
            '&.Mui-disabled svg': {
              color: grey[100]
            },
            '&:hover': {
              backgroundColor: brand[100]
            },
            ...(theme.palette.mode === 'dark' && {
              color: brand[300],
              '&:hover': {
                backgroundColor: alpha(brand[600], 0.3)
              }
            })
          })
        }
      },
      MuiCard: {
        styleOverrides: {
          root: ({theme, ownerState}) => ({
            borderRadius: theme.shape.borderRadius,
            ...(ownerState.variant === 'outlined' && {
              border: `1px solid ${grey[200]}`,
              background: `linear-gradient(to bottom, #FFF, ${grey[50]})`,
              boxShadow: `${alpha(grey[200], 0.5)} 0 4px 12px 0, ${alpha(grey[200], 0.5)} 0 12px 24px`
            }),
            ...(theme.palette.mode === 'dark' && {
              ...(ownerState.variant === 'outlined' && {
                border: `1px solid ${grey[800]}`,
                background: `linear-gradient(to bottom, ${grey[900]}, ${alpha(grey[800], 0.2)})`,
                boxShadow: `${alpha(grey[900], 0.5)} 0 4px 12px 0, ${alpha(grey[900], 0.5)} 0 12px 24px`
              })
            })
          })
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            border: 'none'
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: () => ({
            backgroundColor: brand[100],
            color: brand[50]
          })
        }
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: () => ({
            backgroundColor: 'none',
            color: brand[50]
          })
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: () => ({
            color: 'rgb(21, 21, 21)'
          })
        }
      },
      MuiRating: {
        styleOverrides: {
          root: () => ({
            '&.MuiRating-root svg': {
              color: yellow[900]
            },
            '& .MuiRating-iconEmpty svg': {
              color: 'rgb(200, 200, 200)'
            }
          })
        }
      },
      MuiNativeSelect: {
        styleOverrides: {
          root: ({theme, ownerState}) => ({
            'input:-webkit-autofill': {
              WebkitBoxShadow: `0 0 0 1000px ${brand[100]} inset, 0 0 0 1px ${brand[200]}`,
              maxHeight: '4px',
              borderRadius: '8px'
            },
            '& .MuiInputBase-input': {
              '&::placeholder': {
                paddingLeft: '21px',
                color: theme.palette.mode === 'dark' ? grey[400] : grey[800],
                fontSize: theme.typography.body2
              }
            },
            flexGrow: 1,
            height: '40px',
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${grey[200]}`,
            transition: 'border-color 120ms ease-in',
            backgroundColor: alpha(grey[100], 0.2),
            '&:hover': {
              backgroundColor: alpha(grey[100], 0.5),
              borderColor: grey[300]
            },
            '&.Mui-focused': {
              outline: `4px solid ${alpha(brand[500], 0.4)}`,
              borderColor: brand[400]
            },
            ...(ownerState.color === 'error' && {
              borderColor: red[200],
              '& + .MuiFormHelperText-root': {
                color: red[500]
              }
            }),
            ...(theme.palette.mode === 'dark' && {
              'input:-webkit-autofill': {
                WebkitBoxShadow: `0 0 0 1000px ${brand[900]} inset, 0 0 0 1px ${brand[600]}`,
                maxHeight: '6px',
                borderRadius: '8px'
              },
              '& .MuiInputBase-input': {
                '&::placeholder': {
                  paddingLeft: '21px',
                  color: theme.palette.mode === 'dark' ? grey[400] : grey[800],
                  fontSize: theme.typography.body2
                }
              },
              borderColor: alpha(grey[700], 0.4),
              backgroundColor: alpha(grey[800], 0.4),
              transition: 'border-color 120ms ease-in',
              '&:hover': {
                borderColor: alpha(grey[700], 0.8),
                backgroundColor: alpha(grey[800], 0.8)
              },
              '&.Mui-focused': {
                outline: `4px solid ${alpha(brand[500], 0.5)}`,
                borderColor: brand[400]
              },
              ...(ownerState.color === 'error' && {
                borderColor: red[300],
                '& + .MuiFormHelperText-root': {
                  color: red[200]
                }
              })
            })
          })
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            border: 'none'
          },
          input: {
            paddingLeft: 10
          },
          root: ({theme, ownerState}) => ({
            'input:-webkit-autofill': {
              WebkitBoxShadow: `0 0 0 1000px ${brand[100]} inset, 0 0 0 1px ${brand[200]}`,
              maxHeight: '4px',
              borderRadius: '8px'
            },
            '& .MuiInputBase-input': {
              '&::placeholder': {
                paddingLeft: '21px',
                color: theme.palette.mode === 'dark' ? grey[400] : grey[800],
                fontSize: theme.typography.body2
              }
            },
            flexGrow: 1,
            height: '40px',
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${grey[200]}`,
            transition: 'border-color 120ms ease-in',
            backgroundColor: alpha(grey[100], 0.2),
            '&:hover': {
              backgroundColor: alpha(grey[100], 0.5),
              borderColor: grey[300]
            },
            '&.Mui-focused': {
              outline: `4px solid ${alpha(brand[500], 0.4)}`,
              borderColor: brand[400]
            },
            ...(ownerState.color === 'error' && {
              borderColor: red[200],
              '& + .MuiFormHelperText-root': {
                color: red[500]
              }
            }),
            ...(theme.palette.mode === 'dark' && {
              'input:-webkit-autofill': {
                WebkitBoxShadow: `0 0 0 1000px ${brand[900]} inset, 0 0 0 1px ${brand[600]}`,
                maxHeight: '6px',
                borderRadius: '8px'
              },
              '& .MuiInputBase-input': {
                '&::placeholder': {
                  paddingLeft: '21px',
                  color: theme.palette.mode === 'dark' ? grey[400] : grey[800],
                  fontSize: theme.typography.body2
                }
              },
              borderColor: alpha(grey[700], 0.4),
              backgroundColor: alpha(grey[800], 0.4),
              transition: 'border-color 120ms ease-in',
              '&:hover': {
                borderColor: alpha(grey[700], 0.8),
                backgroundColor: alpha(grey[800], 0.8)
              },
              '&.Mui-focused': {
                outline: `4px solid ${alpha(brand[500], 0.5)}`,
                borderColor: brand[400]
              },
              ...(ownerState.color === 'error' && {
                borderColor: red[300],
                '& + .MuiFormHelperText-root': {
                  color: red[200]
                }
              })
            })
          })
        }
      },
      MuiLink: {
        defaultProps: {
          underline: 'none'
        },
        styleOverrides: {
          root: ({theme}) => ({
            color: brand[50],
            position: 'relative',
            textDecoration: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: 0,
              height: '1px',
              bottom: 0,
              left: 0,
              backgroundColor: alpha(brand[400], 0.5),
              opacity: 0.7,
              transition: 'width 0.1s ease, opacity 0.3s ease'
            },
            '&:hover::before': {
              width: '100%',
              opacity: 1
            },
            '&:focus-visible': {
              outline: `3px solid ${alpha(brand[500], 0.5)}`,
              outlineOffset: '4px',
              borderRadius: '2px'
            },
            ...(theme.palette.mode === 'dark' && {
              color: brand[200]
            })
          })
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: ({theme}) => ({
            typography: theme.typography.caption,
            fontWeight: 600,
            marginBottom: 6,
            fontSize: 18,
            color: theme.palette.text.primary
          })
        }
      },
      MuiCheckbox: {
        defaultProps: {
          disableRipple: true,
          icon: <CheckBoxOutlineBlankRoundedIcon sx={{color: 'hsla(210, 0%, 0%, 0.0)'}} />,
          checkedIcon: (
            <CheckRoundedIcon
              sx={{
                height: 14,
                width: 14,
                color: grey[900]
              }}
            />
          )
        },
        styleOverrides: {
          root: ({theme}) => ({
            margin: 10,
            marginRight: 8,
            height: 16,
            width: 16,
            borderRadius: 6,
            backgroundColor: alpha(grey[100], 0.2),
            border: `1px solid ${grey[200]}`,
            '&:hover': {
              borderColor: brand[300]
            },
            '&.Mui-focusVisible': {
              outline: `4px solid ${alpha(brand[500], 0.4)}`,
              borderColor: brand[400]
            },
            '&.Mui-checked': {
              color: 'white',
              backgroundColor: brand[500],
              borderColor: brand[500],
              boxShadow: `none`,
              '&:hover': {
                backgroundColor: brand[600],
                borderColor: brand[600]
              }
            },
            ...(theme.palette.mode === 'dark' && {
              borderColor: alpha(grey[700], 0.4),
              backgroundColor: alpha(grey[800], 0.4),
              '&:hover': {
                borderColor: brand[300]
              },
              '&.Mui-focusVisible': {
                borderColor: brand[400],
                outline: `3px solid ${alpha(brand[500], 0.5)}`,
                outlineOffset: '2px'
              }
            })
          })
        }
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: ({theme}) => ({
            borderRadius: theme.shape.borderRadius,
            boxShadow: `0 2px 6px ${alpha(grey[400], 0.2)}`,
            ...(theme.palette.mode === 'dark' && {
              boxShadow: `0 2px 6px ${grey[900]}`
            })
          })
        }
      },
      MuiToggleButton: {
        styleOverrides: {
          root: ({theme}) => ({
            padding: '12px 14px',
            textTransform: 'none',
            fontWeight: 600,
            color: grey[800],
            '&.Mui-selected': {
              color: brand[700],
              backgroundColor: brand[100]
            },
            ...(theme.palette.mode === 'dark' && {
              color: grey[400],
              '&.Mui-selected': {
                color: brand[100],
                backgroundColor: alpha(brand[900], 0.5)
              }
            })
          })
        }
      },
      MuiStack: {
        defaultProps: {
          useFlexGap: true
        }
      }
    }
  };
}
