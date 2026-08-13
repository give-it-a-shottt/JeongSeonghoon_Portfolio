import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import FrontendHome from './pages/frontend/FrontendHome'
import ComponentGallery from './pages/frontend/ComponentGallery'
import ShoppingMallPlaceholder from './pages/frontend/ShoppingMallPlaceholder'
import MessengerPlaceholder from './pages/frontend/MessengerPlaceholder'
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
        <Route path="shopping" element={<ShoppingMallPlaceholder />} />
        <Route path="messenger" element={<MessengerPlaceholder />} />
      </Route>

      <Route path="/backend" element={<BackendHome />} />
    </Routes>
  )
}

export default App
