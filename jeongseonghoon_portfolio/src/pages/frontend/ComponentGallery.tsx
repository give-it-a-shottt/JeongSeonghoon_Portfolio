import type { ReactNode } from 'react'
import MenuBar from '../../components/ui/MenuBar'
import Card from '../../components/ui/Card'
import Carousel from '../../components/ui/Carousel'
import Modal from '../../components/ui/Modal'
import Dropdown from '../../components/ui/Dropdown'

// 갤러리에서 반복되는 "제목 + 설명 + 실제 컴포넌트" 레이아웃을 하나로 묶은 섹션 컴포넌트
function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="mb-12">
      <h3 className="mb-1 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
      <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
        {children}
      </div>
    </section>
  )
}

/**
 * 여러 UI 컴포넌트를 실제로 동작하는 상태로 모아 전시하는 페이지
 */
function ComponentGallery() {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        컴포넌트 디자인
      </h2>
      <p className="mb-8 text-neutral-500 dark:text-neutral-400">
        실무에서 자주 쓰이는 UI 요소들을 직접 구현해 모아둔 카탈로그입니다.
      </p>

      <Section title="메뉴바" description="클릭하면 활성 탭이 이동하는 네비게이션 메뉴바">
        <MenuBar />
      </Section>

      <Section title="카드" description="호버 시 살짝 떠오르는 인터랙션이 적용된 카드">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card emoji="🛒" title="쇼핑몰" description="상품 목록부터 결제까지" />
          <Card emoji="💬" title="메신저" description="실시간 채팅 모작 프로젝트" />
          <Card emoji="🧩" title="컴포넌트" description="재사용 가능한 UI 조각들" />
        </div>
      </Section>

      <Section title="캐러셀" description="이전/다음 버튼과 인디케이터로 슬라이드가 전환되는 캐러셀">
        <Carousel />
      </Section>

      <Section title="모달" description="버튼 클릭으로 열고, 배경 클릭이나 닫기 버튼으로 닫는 모달">
        <Modal />
      </Section>

      <Section title="드롭다운" description="옵션을 선택하면 값이 바뀌고 바깥 클릭 시 자동으로 닫히는 드롭다운">
        <Dropdown />
      </Section>
    </div>
  )
}

export default ComponentGallery
