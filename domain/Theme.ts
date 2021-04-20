// Colors

export type Palette = {
  accentColor: string
  primary: string
  secondary: string
  background: string
  surface: string
  primaryTextOnBackground: string
  secondaryTextOnBackground: string
  primaryTextOnSurface: string
  secondaryTextOnSurface: string
  textOnPrimaryColor: string
  textOnSecondaryColor: string
}

// Typography

export enum FontStyle {
  normal = 'normal',
  italic = 'italic',
  oblique = 'oblique',
  initial = 'initial',
  inherit = 'inherit',
}

export type TypographySpec = {
  family: string
  size: string
  weight: number
  style: FontStyle
}

export type Typography = {
  h1: TypographySpec
  h2: TypographySpec
  h3: TypographySpec
  body1: TypographySpec
  body2: TypographySpec
  button: TypographySpec
}

export type SizeSpec = {
  s: number
  m: number
  l: number
  xl: number
}

export type Dimensions = {
  padding: SizeSpec
  margin: SizeSpec
  borderRadius: SizeSpec
}

export type Theme = {
  palette: Palette
  typography: Typography
  dimensions: Dimensions
}
