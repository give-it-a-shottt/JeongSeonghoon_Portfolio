// 다음 단계에서 구현할 기능 목록 (미리 보여줘서 방향을 안내하는 용도)
const UPCOMING_FEATURES = [
  { emoji: '📋', title: '채팅 목록', desc: '대화 상대 목록과 최근 메시지 미리보기' },
  { emoji: '💬', title: '채팅방', desc: '말풍선 UI로 메시지 주고받기' },
  { emoji: '⚡', title: '실시간 통신', desc: 'Supabase Realtime 또는 WebSocket 연동' },
]

/**
 * 메신저 탭은 3단계에서 실제 기능을 구현할 예정 -> 지금은 안내용 자리 표시 페이지
 */
function MessengerPlaceholder() {
  return (
    <div className="text-center">
      <div className="mb-4 text-5xl">💬</div>
      <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
        메신저 — 준비 중
      </h2>
      <p className="mx-auto mb-10 max-w-md text-neutral-500 dark:text-neutral-400">
        다음 단계에서 카카오톡 스타일의 채팅 UI를 구현할 예정입니다. 아래는 구현 예정 기능입니다.
      </p>

      <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
        {UPCOMING_FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900"
          >
            <div className="mb-2 text-2xl">{f.emoji}</div>
            <h3 className="mb-1 font-semibold text-neutral-900 dark:text-neutral-100">
              {f.title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessengerPlaceholder
