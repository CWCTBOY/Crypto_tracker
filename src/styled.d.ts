import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    txtColor: string;
    bgColor: string;
    accentColor: string;
    btnColor: string;
    contrast: string;
  }
}