import { extendTheme } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configuración para el cambio entre modo claro y oscuro
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
  },
  colors: {
    brand: {
      blue: '#1E90FF',
      green: '#32CD32',
      purple: '#6A0DAD',
      black: '#1A202C',
      gray: '#718096',
      white: '#FFFFFF',
      darkBg: '#121212',
      lightText: '#F0F0F0',
    },
    accent: {
      yellow: '#FFD700',
      orange: '#FFA500',
    },
  },
  styles: {
    global: (props) => ({
      'html, body': {
        minWidth: '98vw',
        minHeight: '100vh',
        fontFamily: 'Poppins, system-ui, sans-serif',
        color: props.colorMode === 'dark' ? 'brand.lightText' : 'brand.black',
        backgroundColor: props.colorMode === 'dark' ? 'brand.darkBg' : 'brand.white',
      },
      button: {
        fontFamily: 'Poppins, system-ui, sans-serif',
        backgroundColor: props.colorMode === 'dark' ? 'accent.orange' : 'accent.yellow',
        color: props.colorMode === 'dark' ? 'brand.black' : 'brand.white',
        _hover: {
          backgroundColor: props.colorMode === 'dark' ? 'accent.yellow' : 'accent.orange',
        },
      },
      a: {
        color: props.colorMode === 'dark' ? 'brand.blue' : 'brand.purple',
        _hover: {
          textDecoration: 'underline',
          color: props.colorMode === 'dark' ? 'accent.orange' : 'accent.yellow',
        },
      },
      h1: {
        fontSize: '3xl',
        fontWeight: 'bold',
        color: props.colorMode === 'dark' ? 'brand.blue' : 'brand.purple',
      },
      h2: {
        fontSize: '2xl',
        fontWeight: 'semibold',
        color: props.colorMode === 'dark' ? 'brand.lightText' : 'brand.black',
      },
      h3: {
        fontSize: 'xl',
        fontWeight: 'medium',
        color: props.colorMode === 'dark' ? 'brand.lightText' : 'brand.black',
      },
    }),
  },
});

export default customTheme;