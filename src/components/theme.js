import React from 'react';
import { Button, ThemeProvider, createTheme } from '@mui/material';

function ButtonNav() {
    const theme = createTheme({
        palette: {
            primary:{
          main:'#c01515'
        },
        },
      });
    }

export default ButtonNav;


/***/ 
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100hv',
    },
    appBar: {
       boxShadow: 'none',
    },
})

);

export default makeStyles;