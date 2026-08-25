const LINK_SECTIONS = [
  { title: '고객센터', links: ['공지사항', '자주 묻는 질문', '1:1 문의', '반품/교환'] },
  { title: '쇼핑 안내', links: ['배송 안내', '결제 안내', '취소/환불', '회원혜택'] },
  { title: '회사 정보', links: ['회사 소개', '인재 채용', '파트너십', '제휴 문의'] },
]

/**
 * 쇼핑몰 모든 페이지 하단에 공통으로 나오는 푸터 (전부 장식용 링크 — 실제 페이지는 없다)
 */
function ShoppingFooter() {
  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xl font-black text-white">
              ACC<span className="text-accent-500">IO</span>
            </h3>
            <p className="text-xs leading-relaxed text-neutral-500">
              정성훈 포트폴리오의 쇼핑몰 데모 프로젝트입니다.
            </p>
            <div className="mt-4 flex gap-2">
              {['IG', 'YT', 'BL', 'KT'].map((s) => (
                <div
                  key={s}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-neutral-800 text-[10px] font-bold text-neutral-400 transition-colors hover:bg-accent-500 hover:text-white"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {LINK_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="mb-3 text-sm font-bold text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-xs text-neutral-500 transition-colors hover:text-white">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-neutral-800 pt-6 text-[11px] text-neutral-500 md:flex-row">
          <span>© 2026 ACCIO Inc. All rights reserved.</span>
          <span>
            사업자등록번호: 123-45-67890 &nbsp;|&nbsp; 대표: 정성훈 &nbsp;|&nbsp; 통신판매업신고: 제2026-서울-00001호
          </span>
        </div>
      </div>
    </footer>
  )
}

export default ShoppingFooter
