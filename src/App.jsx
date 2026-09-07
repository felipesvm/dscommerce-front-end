import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
