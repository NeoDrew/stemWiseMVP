import { extendTheme } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import buttonColors from './buttonColors';
import colors from './colors';
import fonts from './fonts';
import Form from './form';
import Modal from './modal';
import textStyles from './textStyles';

const theme = extendTheme({
  breakpoints,
  buttonColors,
  colors,
  fonts,
  textStyles,
  components: {
    Form,
    Modal,
  },
  styles: {
    global: () => ({
      body: {
        bg: 'white.200',
      }, html: {
        overflowY: "scroll",
      },
    }),
  },
});

export default theme;
