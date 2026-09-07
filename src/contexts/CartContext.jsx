import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'dscommerce:cart'

function loadInitialCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialCart)

  // Sempre que "items" mudar, salva no localStorage.
  // Assim, se o usuário atualizar a página (F5), o carrinho não some.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function addItem(product, quantity = 1) {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...prevItems, { ...product, quantity }]
    })
  }

  function removeItem(productId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  function increaseQuantity(productId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function decreaseQuantity(productId) {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Hook customizado: em vez de todo componente ter que importar
// useContext + CartContext, ele só chama useCart().
export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart deve ser usado dentro de um <CartProvider>')
  }

  return context
}
