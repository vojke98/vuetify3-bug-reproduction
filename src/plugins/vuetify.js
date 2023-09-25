// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

const customLight = {
    dark: false,
    colors: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
    },
}

const customDark = {
    dark: true,
    colors: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
    },
}

/* const settings = {
    theme: {
        defaultTheme: 'dark'
    }
} */

export default createVuetify({
    components,
    directives,
    theme: {
        themes: {
            customLight,
            customDark
        }
    }
});