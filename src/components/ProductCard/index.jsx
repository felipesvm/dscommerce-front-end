import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/formatCurrency'

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="flex flex-col overflow-hidden rounded border border-gray-200 bg-white transition-shadow hover:shadow-md"
    >
      <img
        src={product.imgUrl}
        alt={product.name}
        className="h-36 w-full object-contain p-4"
      />
      <div className="border-t border-gray-100 p-3">
        <p className="text-sm font-bold text-green-700">
          {formatCurrency(product.price)}
        </p>
        <p className="line-clamp-2 text-xs text-gray-600">{product.name}</p>
      </div>
    </Link>
  )
}

export default ProductCard
