import { SetStateAction } from 'react';
import { themeID } from './themeID';

export interface MyThemeProps {
  ID: themeID;
  primaryColor: string;
  secondaryColor: string;
  bodyBackgroundColor: string;
  bodyFontColor: string;
}
