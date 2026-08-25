import { Outlet } from 'react-router-dom'
import { CartProvider } from '../../context/CartProvider'
import ShoppingHeader from './ShoppingHeader'
import ShoppingFooter from './ShoppingFooter'

/**
 * 쇼핑몰 전체(목록/상세/장바구니/결제)를 감싸는 최상위 레이아웃
 * 포트폴리오의 /frontend 탭바와 완전히 독립된 별도 페이지처럼 동작한다 (실제 쇼핑몰 사이트 느낌)
 * 홈 화면(ProductList)은 히어로 배너처럼 화면 끝까지 꽉 채우는 섹션이 있어서 <main>에는
 * 여백을 주지 않고, 각 하위 페이지가 필요한 만큼 스스로 max-w/padding을 지정한다
 * CartProvider로 감싸서, 쇼핑몰 안에서 페이지를 이동해도 장바구니 상태가 유지되게 한다
 */
function ShoppingLayout() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-neutral-50">
        <ShoppingHeader />
        <main>
          <Outlet />
        </main>
        <ShoppingFooter />
      </div>
    </CartProvider>
  )
}

export default ShoppingLayout
