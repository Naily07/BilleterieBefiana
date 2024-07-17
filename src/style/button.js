// buttonStyles.js
const buttonStyles = {
    MuiButtonBase: {
      
    },
    MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' && {
              backgroundColor: '#1E0A3C', 
              textTransform: "capitalize",
              color: '#fff',
              '&:hover': {
                backgroundColor: '#3D64FF', // Exemple de changement de couleur au survol
              },
            }),
            fontSize: '1rem',
          }),
        },
      },
  };
  
  
export default buttonStyles;
  