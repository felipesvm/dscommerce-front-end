import { Route, Routes } from 'react-router-dom'
import StoreLayout from '../layouts/StoreLayout'
import AdminLayout from '../layouts/AdminLayout'
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
      <Route element={<StoreLayout />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminHome />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/create" element={<ProductForm />} />
        <Route path="products/:productId" element={<ProductForm />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
