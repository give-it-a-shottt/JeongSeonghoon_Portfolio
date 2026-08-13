import { Link } from 'react-router-dom'

// 백엔드 아키텍처에서 각 기술이 담당하는 역할
const STACK_ROLES = [
  {
    emoji: '⚡',
    title: 'FastAPI',
    desc: 'Python 기반 API 서버. 쇼핑몰/메신저의 비즈니스 로직(주문 처리, 채팅 규칙 등)을 담당하는 REST API를 제공한다.',
  },
  {
    emoji: '🗄️',
    title: 'Supabase',
    desc: 'PostgreSQL DB, 사용자 인증(로그인/회원가입), 파일 스토리지, 실시간 구독(Realtime)을 관리형 서비스로 제공한다.',
  },
]

// 앞으로 진행할 백엔드 관련 로드맵 (전체 계획 4~6단계에 해당)
const ROADMAP = [
  { step: '4단계', title: 'FastAPI 서버 구축 + Supabase 연동', done: false },
  { step: '5단계', title: '프론트-백엔드 연결 (쇼핑몰 주문 저장, 메신저 실시간 통신)', done: false },
  { step: '6단계', title: '배포 (프론트: Vercel, 백엔드: Railway/Render)', done: false },
]

/**
 * 백엔드 소개 페이지. 아직 실제 서버는 없으므로 아키텍처 설계와 로드맵을 보여주는 안내 페이지로 구성한다.
 */
function BackendHome() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <header className="border-b border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-900">
        <Link
          to="/"
          className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
        >
          ← 메인으로
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Backend
        </h2>
        <p className="mb-10 text-neutral-500 dark:text-neutral-400">
          이 포트폴리오의 백엔드는 FastAPI와 Supabase 조합으로 구현될 예정입니다. 프론트엔드의
          쇼핑몰/메신저 기능이 실제 데이터로 동작하도록 연결하는 것이 목표입니다.
        </p>

        <section className="mb-10">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            아키텍처 구성
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {STACK_ROLES.map((role) => (
              <div
                key={role.title}
                className="rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <div className="mb-2 text-2xl">{role.emoji}</div>
                <h4 className="mb-1 font-semibold text-neutral-900 dark:text-neutral-100">
                  {role.title}
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            로드맵
          </h3>
          <ul className="space-y-3">
            {ROADMAP.map((item) => (
              <li
                key={item.step}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900"
              >
                <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
                  {item.step}
                </span>
                <span className="text-sm text-neutral-700 dark:text-neutral-200">{item.title}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default BackendHome
