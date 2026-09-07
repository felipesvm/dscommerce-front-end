import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Catalog from '../pages/Catalog'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import AdminHome from '../pages/admin/Home'
import ProductForm from '../pages/admin/ProductForm'
import ProductList from '../pages/admin/ProductList'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/products" element={<ProductList />} />
      <Route path="/admin/products/create" element={<ProductForm />} />
      <Route path="/admin/products/:productId" element={<ProductForm />} />
    </Routes>
  )
}

export default AppRoutes
