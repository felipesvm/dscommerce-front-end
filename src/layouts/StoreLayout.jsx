import { Outlet } from 'react-router-dom'
import StoreNavbar from '../components/Navbar/StoreNavbar'

function StoreLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <StoreNavbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default StoreLayout
