export interface Sizes {
  XXS: number | string
  XS: number | string
  S: number | string
  M: number | string
  L: number | string
  XL: number | string
  XXL: number | string
}

export const gapSizes: Partial<Sizes> = {
  S: '10px',
  M: '20px',
  L: '30px',
  XL: '40px',
  XXL: '50px',
}

export const screenSizes: Partial<Sizes> = {
  XS: 480,
  S: 640,
  M: 800,
  L: 1024,
  XL: 1100,
}

export const fontSizes: Sizes = {
  XXS: '14px',
  XS: '16px',
  S: '18px',
  M: '22px',
  L: '28px',
  XL: '36px',
  XXL: '48px',
}

export const lineHeights: Sizes = {
  XXS: '17px',
  XS: '24px',
  S: '22px',
  M: '27px',
  L: '34px',
  XL: '36px',
  XXL: '48px',
}

export const fontWeights: Sizes = {
  XXS: '200',
  XS: '300',
  S: '400',
  M: '500',
  L: '600',
  XL: '700',
  XXL: '800',
}

export const textAreaSizes = {
  S: '92px',
  M: '108px',
  L: '128px',
}

interface ThemeWithStates {
  [propName: string]: string
}

export interface Colors {
  Primary900: string
  Primary800: string
  Primary700: string
  Primary600: string
  Primary500: string
  Primary400: string
  Primary300: string
  Primary200: string
  Primary100: string
  Primary50: string
  Neutral900: string
  Neutral800: string
  Neutral700: string
  Neutral600: string
  Neutral500: string
  Neutral400: string
  Neutral300: string
  Neutral200: string
  Neutral100: string
  Neutral50: string
}

export const colors: Colors = {
  Primary900: '#1E3A8A',
  Primary800: '#1E40AF',
  Primary700: '#1D4ED8',
  Primary600: '#2563EB',
  Primary500: '#3B82F6',
  Primary400: '#60A5FA',
  Primary300: '#93C5FD',
  Primary200: '#BFDBFE',
  Primary100: '#DBEAFE',
  Primary50: '#EFF6FF',
  Neutral900: '#111827',
  Neutral800: '#1F2937',
  Neutral700: '#374151',
  Neutral600: '#4B5563',
  Neutral500: '#6B7280',
  Neutral400: '#9CA3AF',
  Neutral300: '#D1D5DB',
  Neutral200: '#E5E7EB',
  Neutral100: '#F3F4F6',
  Neutral50: '#F9FAFB',
}

export interface Theme {
  [propName: string]: string | ThemeWithStates | { [propName: string]: ThemeWithStates } | undefined
  activeTitle: string
  title: string
  background: string
  cardBackground: string
  bodyBackground: string
  searchBackground: string
  headerTitle: string
  headerBorder: string
  searchTitle: string
  activeBorder: string
  activeBackground: string
  cardTitle: string
  cardDesignation: string
}

export const darkTheme: Theme = {
  activeTitle: colors.Primary50,
  title: colors.Primary500,
  background: colors.Neutral900,
  cardBackground: colors.Primary900,
  bodyBackground: colors.Neutral800,
  searchBackground: colors.Neutral800,
  headerTitle: colors.Neutral100,
  headerBorder: colors.Neutral500,
  searchTitle: colors.Neutral500,
  activeBorder: colors.Primary600,
  activeBackground: colors.Primary600,
  cardTitle: colors.Neutral100,
  cardDesignation: colors.Neutral300,
}

export const lightTheme: Theme = {
  activeTitle: colors.Primary50,
  title: colors.Primary700,
  background: colors.Neutral50,
  cardBackground: colors.Primary50,
  bodyBackground: colors.Neutral100,
  searchBackground: colors.Neutral100,
  headerTitle: colors.Neutral800,
  headerBorder: colors.Neutral400,
  searchTitle: colors.Neutral400,
  activeBorder: colors.Primary600,
  activeBackground: colors.Primary600,
  cardTitle: colors.Neutral900,
  cardDesignation: colors.Neutral500,
}

export enum Themes {
  DARK,
  LIGHT,
}

export const getTheme = (theme: Themes) => {
  switch (theme) {
    case Themes.DARK:
      return darkTheme
    case Themes.LIGHT:
      return lightTheme
    default:
      return lightTheme
  }
}
