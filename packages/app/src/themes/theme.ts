import {
  createUnifiedTheme,
  genPageTheme,
  shapes,
  themes,
} from '@backstage/theme';

const redhatFont = `@font-face {
  font-family: 'Red Hat Font';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(/fonts/RedHatText-Regular.woff2) format('woff2'),
    url(/fonts/RedHatText-Regular.otf) format('opentype'),
    url(/fonts/RedHatText-Regular.ttf) format('truetype');
}`;

export const customTheme = createUnifiedTheme({
  fontFamily: '"Red Hat Font", Arial',
  palette: {
    ...themes.light.getTheme('v5')?.palette,
    navigation: {
      background: '#61c3ff',
      indicator: '#009596',
      color: '#ffffff',
      selectedColor: '#b12626',
      navItem: {
        hoverBackground: '#4f5255',
      },
    },
  },
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({ colors: ['#61c3ff', '#1ca7fc'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#61c3ff', '#1ca7fc'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#61c3ff', '#1ca7fc'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#61c3ff', '#eaf4fa'],
      shape: shapes.wave,
    }),
    tool: genPageTheme({ colors: ['#61c3ff', '#1ca7fc'], shape: shapes.round }),
    other: genPageTheme({ colors: ['#61c3ff', '#1ca7fc'], shape: shapes.wave }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: redhatFont,
    },
  },
});
