import { Search, X } from 'lucide-react'
import { useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { mockProducts } from '../../mocks/products'

function Catalog() {
  const [searchTerm, setSearchTerm] = useState('')

  // TODO: substituir por chamada real à API (GET /products?name=...) na etapa de integração.
  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-4 flex items-center gap-2 rounded border border-gray-300 bg-white px-3 py-2">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Nome do produto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 text-sm outline-none"
        />
        {searchTerm && (
          <button type="button" onClick={() => setSearchTerm('')}>
            <X size={16} className="text-gray-400" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-6 text-center text-sm text-gray-500">
          Nenhum produto encontrado.
        </p>
      )}

      <button
        type="button"
        className="mt-4 w-full rounded border border-blue-400 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
      >
        Carregar mais
      </button>
    </div>
  )
}

export default Catalog
