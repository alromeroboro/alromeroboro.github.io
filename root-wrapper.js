import React from 'react'
// import Layout from './src/components/layout'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './src/theme/global-style'

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>
)