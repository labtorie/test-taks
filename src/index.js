import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'fontsource-roboto';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'


let theme = createMuiTheme({
    direction: 'rtl',
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
