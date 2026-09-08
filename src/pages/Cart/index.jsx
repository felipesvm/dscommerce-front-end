import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'

function Cart() {
  const navigate = useNavigate()
  const { items, increaseQuantity, decreaseQuantity, removeItem, totalPrice } =
    useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm text-gray-500">Seu carrinho está vazio.</p>
        <Link to="/" className="mt-2 inline-block text-sm text-blue-600">
          Ir para o catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded border-2 border-blue-400 bg-white">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 border-b border-gray-100 p-3 last:border-b-0"
          >
            <img
              src={item.imgUrl}
              alt={item.name}
              className="h-12 w-12 object-contain"
            />

            <div className="flex-1">
              <p className="text-xs text-gray-800">{item.name}</p>
              <div className="mt-1 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  className="rounded border border-gray-300 p-0.5 text-gray-600 hover:bg-gray-100"
                >
                  <Minus size={12} />
                </button>
                <span className="text-xs font-semibold">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                  className="rounded border border-gray-300 p-0.5 text-gray-600 hover:bg-gray-100"
                >
                  <Plus size={12} />
                </button>
              </div>
            </div>

            <span className="text-xs font-bold text-green-700">
              {formatCurrency(item.price * item.quantity)}
            </span>

            <button
              type="button"
              onClick={() => removeItem(item.id)}
              title="Remover item"
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}

        <div className="flex justify-end p-3">
          <span className="text-sm font-bold text-green-700">
            {formatCurrency(totalPrice)}
          </span>
        </div>
      </div>

      <button
        type="button"
        // TODO: quando o AuthContext existir, checar se o usuário está logado.
        // Se sim, chamar a API para registrar o pedido e ir para a Confirmation.
        // Se não, redirecionar para /login (comportamento atual).
        onClick={() => navigate('/login')}
        className="mt-4 w-full rounded bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Finalizar pedido
      </button>

      <Link
        to="/"
        className="mt-2 block w-full rounded border border-blue-400 py-2 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
      >
        Continuar comprando
      </Link>
    </div>
  )
}

export default Cart
