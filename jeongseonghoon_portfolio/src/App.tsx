import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import FrontendHome from './pages/frontend/FrontendHome'
import ComponentGallery from './pages/frontend/ComponentGallery'
import MessengerPlaceholder from './pages/frontend/MessengerPlaceholder'
import ShoppingLayout from './pages/shopping/ShoppingLayout'
import ProductList from './pages/shopping/ProductList'
import ProductDetail from './pages/shopping/ProductDetail'
import CartPage from './pages/shopping/CartPage'
import CheckoutPage from './pages/shopping/CheckoutPage'
import BackendHome from './pages/backend/BackendHome'

// App.tsx는 오직 "어떤 경로에 어떤 페이지를 보여줄지"만 정의한다
// 실제 화면 내용은 각 페이지 컴포넌트(src/pages/**) 안에서 구현한다
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      {/* /frontend 하위 경로들은 FrontendHome 안의 <Outlet />에 렌더링된다 (중첩 라우트) */}
      <Route path="/frontend" element={<FrontendHome />}>
        <Route path="components" element={<ComponentGallery />} />
        <Route path="messenger" element={<MessengerPlaceholder />} />
      </Route>

      {/* 쇼핑몰은 포트폴리오 탭바에 종속되지 않는 완전히 독립된 사이트처럼 동작하도록
          /frontend 밑이 아닌 최상위 경로(/shopping)로 분리한다 */}
      <Route path="/shopping" element={<ShoppingLayout />}>
        <Route index element={<ProductList />} />
        <Route path=":productId" element={<ProductDetail />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>

      <Route path="/backend" element={<BackendHome />} />
    </Routes>
  )
}

export default App
