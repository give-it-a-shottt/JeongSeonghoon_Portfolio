import { useState, type ReactNode } from 'react'
import { toast } from 'sonner'
import MenuBar from '../../components/ui/MenuBar'
import Card from '../../components/ui/Card'
import Carousel from '../../components/ui/Carousel'
import Modal from '../../components/ui/Modal'
import Dropdown from '../../components/ui/Dropdown'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/shadcn/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/shadcn/accordion'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../components/shadcn/tooltip'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/shadcn/select'
import { Avatar, AvatarFallback, AvatarImage } from '../../components/shadcn/avatar'
import { Badge } from '../../components/shadcn/badge'
import { Switch } from '../../components/shadcn/switch'
import { Progress } from '../../components/shadcn/progress'
import { Skeleton } from '../../components/shadcn/skeleton'
import { Toaster } from '../../components/shadcn/sonner'

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

// Switch는 켜짐/꺼짐 상태를 직접 들고 있어야 하므로 별도 작은 컴포넌트로 분리했다
function SwitchDemo() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex items-center gap-3">
      <Switch checked={checked} onCheckedChange={setChecked} id="notify-switch" />
      <label htmlFor="notify-switch" className="text-sm text-neutral-700 dark:text-neutral-200">
        알림 {checked ? '켜짐' : '꺼짐'}
      </label>
    </div>
  )
}

// Progress도 값을 바꿔볼 수 있도록 버튼과 함께 로컬 상태로 관리한다
function ProgressDemo() {
  const [value, setValue] = useState(40)
  return (
    <div className="w-full max-w-sm">
      <Progress value={value} className="mb-3" />
      <button
        onClick={() => setValue((v) => (v >= 100 ? 0 : v + 20))}
        className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-800"
      >
        {value}% (클릭해서 증가)
      </button>
    </div>
  )
}

/**
 * 여러 UI 컴포넌트를 실제로 동작하는 상태로 모아 전시하는 페이지
 * 상단은 직접 만든 컴포넌트, 하단은 shadcn/ui(Radix 기반) 컴포넌트를 설치해 이식한 것 — 두 방식을 비교하며 학습할 수 있다
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

      <h2 className="mt-16 mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        shadcn/ui 컴포넌트
      </h2>
      <p className="mb-8 text-neutral-500 dark:text-neutral-400">
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-[13px] dark:bg-neutral-800">
          src/shooping_exp
        </code>
        에서 참고한 shadcn/ui(Radix UI 기반) 컴포넌트를 실제로 설치해 이식했습니다. 위 컴포넌트들과 달리
        접근성(키보드 조작, 포커스 트랩 등)이 라이브러리에 내장되어 있습니다.
      </p>

      <Section title="탭 (Tabs)" description="키보드 화살표로도 전환 가능한 탭">
        <Tabs defaultValue="account" className="w-full max-w-sm">
          <TabsList>
            <TabsTrigger value="account">계정</TabsTrigger>
            <TabsTrigger value="password">비밀번호</TabsTrigger>
            <TabsTrigger value="notify">알림</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-2 text-sm text-neutral-600">
            계정 정보를 확인하고 수정할 수 있습니다.
          </TabsContent>
          <TabsContent value="password" className="p-2 text-sm text-neutral-600">
            비밀번호를 변경할 수 있습니다.
          </TabsContent>
          <TabsContent value="notify" className="p-2 text-sm text-neutral-600">
            알림 수신 여부를 설정할 수 있습니다.
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="아코디언 (Accordion)" description="클릭한 항목만 펼쳐지는 FAQ 스타일 아코디언">
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>배송은 얼마나 걸리나요?</AccordionTrigger>
            <AccordionContent>영업일 기준 2~3일 소요됩니다.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>교환/반품은 어떻게 하나요?</AccordionTrigger>
            <AccordionContent>수령 후 7일 이내 고객센터로 문의해주세요.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      <Section title="툴팁 (Tooltip)" description="마우스를 올리면 잠깐 뒤 설명이 뜨는 툴팁">
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="rounded-lg border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-800">
              여기에 호버해보세요
            </button>
          </TooltipTrigger>
          <TooltipContent>이것이 툴팁입니다</TooltipContent>
        </Tooltip>
      </Section>

      <Section title="셀렉트 (Select)" description="키보드로도 옵션을 고를 수 있는 커스텀 셀렉트박스">
        <Select defaultValue="apple">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="과일 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">사과</SelectItem>
            <SelectItem value="banana">바나나</SelectItem>
            <SelectItem value="grape">포도</SelectItem>
          </SelectContent>
        </Select>
      </Section>

      <Section title="아바타 (Avatar)" description="이미지가 없거나 로드에 실패하면 이니셜로 대체되는 아바타">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&auto=format"
              alt="사용자"
            />
            <AvatarFallback>정</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="/존재하지-않는-이미지.png" alt="사용자" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>홍</AvatarFallback>
          </Avatar>
        </div>
      </Section>

      <Section title="뱃지 (Badge)" description="class-variance-authority로 variant를 관리하는 뱃지">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Section>

      <Section title="스위치 (Switch)" description="켜짐/꺼짐 상태를 토글하는 스위치">
        <SwitchDemo />
      </Section>

      <Section title="프로그레스 (Progress)" description="현재 값에 따라 채워지는 진행률 바">
        <ProgressDemo />
      </Section>

      <Section title="스켈레톤 (Skeleton)" description="데이터가 로딩되는 동안 자리만 잡아두는 placeholder">
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-40" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </Section>

      <Section title="토스트 (Toast)" description="화면 구석에 잠깐 나타났다 사라지는 알림 (sonner 라이브러리)">
        <button
          onClick={() => toast.success('저장되었습니다!')}
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
        >
          토스트 띄우기
        </button>
        {/* Toaster는 실제 토스트 알림이 렌더링되는 위치. 페이지 어디에 둬도 되지만 한 번만 마운트하면 된다 */}
        <Toaster />
      </Section>
    </div>
  )
}

export default ComponentGallery
