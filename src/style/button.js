// buttonStyles.js
const buttonStyles = {
    MuiButtonBase: {
      styleOverrides: {
        root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' && {
                backgroundColor: 'secondary', // Exemple de changement de couleur de fond
                color: '#fAA', // Exemple de changement de couleur du texte
                '&:hover': {
                    backgroundColor: 'secondary', // Exemple de changement de couleur au survol
                },
                fontSize: '5rem', 
              }),
          }),
      },
    },
    MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' && {
              backgroundColor: 'secondary.main', // Exemple de changement de couleur de fond
              color: '#fff',
              '&:hover': {
                backgroundColor: 'secondary.main', // Exemple de changement de couleur au survol
              },
            }),
            fontSize: '1rem',
          }),
        },
      },
  };
  
  
export default buttonStyles;
  