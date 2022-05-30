import '@emotion/vue';
import { ITheme } from './types';

declare module '@emotion/vue' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ITheme {}
}
