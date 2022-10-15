import { theme } from '../src/styles'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </BrowserRouter>
  ),
]
