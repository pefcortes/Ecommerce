import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import UserContextProvider from './contexts/user.context.tsx'
import CategoryContextProvider from './contexts/category.context.tsx'
import CartContextProvider from './contexts/cart.context.tsx'
import store from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <CategoryContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoryContextProvider>
      </UserContextProvider>
    </Provider>
  </StrictMode>
)
