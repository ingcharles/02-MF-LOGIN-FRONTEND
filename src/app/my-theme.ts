import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

export const MyTheme = definePreset(Lara, {
  semantic: {
    primary: {
        50: '{blue.50}',
        100: '{blue.100}',
        200: '{blue.200}',
        300: '{blue.300}',
        400: '{blue.400}',
        500: '{blue.500}',
        600: '{blue.600}',
        700: '{blue.700}',
        800: '{blue.800}',
        900: '{blue.900}',
        950: '{blue.950}'
    },
  //   primary: {
  //     50: '{sky.50}',
  //     100: '{sky.100}',
  //     200: '{sky.200}',
  //     300: '{sky.300}',
  //     400: '{sky.400}',
  //     500: '{sky.500}',
  //     600: '{sky.600}',
  //     700: '{sky.700}',
  //     800: '{sky.800}',
  //     900: '{sky.900}',
  //     950: '{sky.950}'
  // },
    colorScheme: {
        // light: {
        //     primary: {
        //         color: '{zinc.950}',
        //         inverseColor: '#ffffff',
        //         hoverColor: '{zinc.900}',
        //         activeColor: '{zinc.800}'
        //     },
        //     highlight: {
        //         background: '{zinc.950}',
        //         focusBackground: '{zinc.700}',
        //         color: '#ffffff',
        //         focusColor: '#ffffff'
        //     }
        // },
        dark: {
            primary: {
                color: '{zinc.50}',
                inverseColor: '{zinc.950}',
                hoverColor: '{zinc.100}',
                activeColor: '{zinc.200}'
            },
            highlight: {
                background: 'rgba(250, 250, 250, .16)',
                focusBackground: 'rgba(250, 250, 250, .24)',
                color: 'rgba(255,255,255,.87)',
                focusColor: 'rgba(255,255,255,.87)'
            }
        }
      },
}
});
