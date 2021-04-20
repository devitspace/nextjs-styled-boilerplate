import { FontStyle, Theme } from '../domain/Theme'

const main: Theme = {
  palette: {
    accentColor: '#E49E36',
    primary: '#E49E36',
    secondary: '#309794',
    background: '#fff',
    surface: '#F5F5F5',
    primaryTextOnBackground: '#353535',
    secondaryTextOnBackground: '#7E8389',
    primaryTextOnSurface: '#353535',
    secondaryTextOnSurface: '#7E8389',
    textOnPrimaryColor: '#fff',
    textOnSecondaryColor: '#fff',
  },

  typography: {
    h1: {
      family: 'Montserrat',
      size: '24px',
      weight: 800,
      style: FontStyle.normal,
    },
    h2: {
      family: 'Montserrat',
      size: '18px',
      weight: 700,
      style: FontStyle.normal,
    },
    h3: {
      family: 'Montserrat',
      size: '16px',
      weight: 700,
      style: FontStyle.normal,
    },
    button: {
      family: 'Montserrat',
      size: '16px',
      weight: 700,
      style: FontStyle.normal,
    },
    body1: {
      family: 'Montserrat',
      size: '16px',
      weight: 500,
      style: FontStyle.normal,
    },
    body2: {
      family: 'Montserrat',
      size: '12px',
      weight: 400,
      style: FontStyle.normal,
    },
  },
  dimensions: {
    borderRadius: {
      s: 8,
      m: 10,
      l: 16,
      xl: 20,
    },
    margin: {
      s: 8,
      m: 10,
      l: 16,
      xl: 20,
    },
    padding: {
      s: 8,
      m: 10,
      l: 16,
      xl: 20,
    },
  },
}

export default main
