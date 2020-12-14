import 'styled-components'
import { DefaultTheme } from 'styled-components'
import * as colors from './colors'
import { fontFamilyRegular, typeScale, lineHeight } from './typography'
import { shadow, borderRadius } from './visual'

declare module 'styled-components' {
    export interface DefaultTheme {
      fontFamilyRegular: string
      colors: typeof colors
      typeScale: typeof typeScale
      lineHeight: typeof lineHeight
      shadow: typeof shadow
      borderRadius: typeof borderRadius
    }
  }

  export const theme : DefaultTheme = {
    fontFamilyRegular,
    colors,
    typeScale,
    lineHeight,
    shadow,
    borderRadius
  }



