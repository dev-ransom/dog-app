import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { GlobalStyle, theme } from './libs/theme'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './reducers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
