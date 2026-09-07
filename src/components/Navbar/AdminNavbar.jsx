import { Home, LogOut, Package } from 'lucide-react'
import { Link } from 'react-router-dom'

// TODO: substituir por dados reais quando o Contexto de Autenticação (Etapa de Login) for criado.
const loggedUserEmail = 'alex@gmail.com'

function AdminNavbar() {
  return (
    <nav className="flex items-center justify-between bg-green-600 px-6 py-3">
      <Link to="/admin" className="text-lg font-bold text-white">
        DSCommerce
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="flex items-center gap-1 text-sm font-semibold text-white"
        >
          <Home size={16} /> Início
        </Link>
        <Link
          to="/admin/products"
          className="flex items-center gap-1 text-sm font-semibold text-white"
        >
          <Package size={16} /> Produtos
        </Link>
        <div className="flex flex-col items-end leading-tight">
          <span className="text-xs text-white">{loggedUserEmail}</span>
          <button
            type="button"
            className="flex items-center gap-1 text-xs font-semibold text-white"
          >
            Sair <LogOut size={12} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default AdminNavbar
