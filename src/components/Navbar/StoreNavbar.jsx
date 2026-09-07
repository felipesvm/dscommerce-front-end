import { LogOut, Settings, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

// TODO: substituir por dados reais quando o Contexto de Autenticação (Etapa de Login) for criado.
const isAuthenticated = false
const loggedUserEmail = 'alex@gmail.com'

function CartIcon() {
  const { totalItems } = useCart()

  return (
    <Link to="/cart" title="Carrinho" className="relative">
      <ShoppingCart size={20} className="text-gray-800" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
          {totalItems}
        </span>
      )}
    </Link>
  )
}

function StoreNavbar() {
  return (
    <nav className="flex items-center justify-between bg-yellow-400 px-6 py-3">
      <Link to="/" className="text-lg font-bold text-gray-800">
        DSCommerce
      </Link>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link to="/admin" title="Configurações">
              <Settings size={20} className="text-gray-800" />
            </Link>
            <CartIcon />
            <div className="flex flex-col items-end leading-tight">
              <span className="text-xs text-gray-800">{loggedUserEmail}</span>
              <button
                type="button"
                className="flex items-center gap-1 text-xs font-semibold text-gray-800"
              >
                Sair <LogOut size={12} />
              </button>
            </div>
          </>
        ) : (
          <>
            <CartIcon />
            <Link to="/login" className="text-sm font-semibold text-gray-800">
              Entrar
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default StoreNavbar
