import { useParams, Link } from 'react-router-dom'
import { mockProducts } from '../../mocks/products'
import { formatCurrency } from '../../utils/formatCurrency'

function ProductDetails() {
  const { productId } = useParams()

  // TODO: substituir por chamada real à API (GET /products/:id) na etapa de integração.
  const product = mockProducts.find((p) => String(p.id) === productId)

  if (!product) {
    return (
      <div className="mx-auto max-w-md text-center">
        <p className="text-sm text-gray-500">Produto não encontrado.</p>
        <Link to="/" className="mt-2 inline-block text-sm text-blue-600">
          Voltar ao catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded border border-gray-200 bg-white p-4">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="mx-auto h-40 object-contain"
        />

        <p className="mt-4 text-lg font-bold text-green-700">
          {formatCurrency(product.price)}
        </p>
        <p className="text-sm font-semibold text-gray-800">{product.name}</p>
        <p className="mt-2 text-xs text-gray-500">{product.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.categories.map((category) => (
            <span
              key={category.id}
              className="rounded bg-gray-700 px-2 py-1 text-xs text-white"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Comprar
      </button>

      <Link
        to="/"
        className="mt-2 block w-full rounded border border-blue-400 py-2 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
      >
        Início
      </Link>
    </div>
  )
}

export default ProductDetails
