export const LAWTheme = {
  transition: {
    hover: 'background-color 0.3s ease-in',
    input_focus: 'all ease-in 0.3s',
  },
  weight: {
    normal: 400,
    bold: 700,
  },
  fontFamily: {
    header: "'Martel', serif",
    body: "'Open Sans', sans-serif",
  },
  border: {
    card: {
      light: '1px solid #E8E8E8',
    },
    input: {
      default: '1px solid #92a2ae',
      active: '1px solid #5a95e6',
    },
  },
  size: {
    font: {
      h1: '5.8rem',
      h2: '4rem',
      h3: '2.4rem',
      h4: '2rem',
      button: '1.4rem',
      mobile_menu: '3rem',
      card_header: '1.6rem',
      p: '1.4rem',
      list: '2rem',
      link: '1.4rem',
      input: '1.4rem',
    },
  },
  colors: {
    primary: '#D0A144',
    secondary_1: '#FDB602',
    secondary_2: '#784F33',
    secondary_3: '#DBB468',
    secondary_4: '#295C7A',
    // background_gradient_1: "",
    font: {
      dark: '#252B42',
      grey: '#737373',
      light: '#ffffff',
      input_label: '#BDBDBD',
    },
    background: {
      dark: '#252B42',
      light: '#FFFFFF',
      flashy: 'linear-gradient(270deg, #295C7A -1.04%, #0072B5 100%);',
    },
    state: {
      hover: '#2A7CC7',
      disabled: '#737373',
      success: '#2DC071',
      alert: '#E77C40',
      danger: '#E74040',
    },
  },
  margin: {
    cardHeader: {
      desktop: '0 0 1.6rem 0',
    },
  },
  padding: {
    sectionHeader: {
      desktop: '0 0 4.8rem 0',
    },
    section: {
      desktop: '14rem 0 10rem 0',
    },
    nav: {
      desktop: '4rem 0',
    },
    offerBox: {
      desktop: '3.5rem 4rem',
    },
    button: {
      desktop: '1.5rem 4rem',
    },
    input: {
      desktop: '1.5rem 2.1rem',
    },
  },
  radius: {
    button: '5px',
    input: '5px',
  },
}

export type ILAWTheme = typeof LAWTheme
