import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // shooping_exp는 학습용으로 참고한 Figma 내보내기 원본(의존성 미설치)이라 린트 대상에서 제외한다
  globalIgnores(['dist', 'src/shooping_exp']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    // src/components/shadcn은 shadcn/ui 공식 배포 코드를 그대로 옮긴 라이브러리성 파일이라
    // (예: badge.tsx가 컴포넌트와 badgeVariants 함수를 함께 export) fast-refresh 규칙을 적용하지 않는다
    files: ['src/components/shadcn/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
])
