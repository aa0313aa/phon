# 전국모바일 (박스폰 · 최신폰 매입)

간단한 정적 홈페이지 템플릿입니다. 아래 파일이 생성되었습니다:

- `index.html` — 메인 페이지
- `styles.css` — 스타일

주의: `index.html`에 포함된 `전화번호`(예: 010-8290-9536), `사업자등록번호`(예: ABCDE), `주소`, `canonical` 및 `url`을 실제 값으로 교체하세요.

로컬에서 확인하는 방법 (PowerShell):

```powershell
# 해당 폴더로 이동
Set-Location 'C:\Users\aa031\OneDrive\바탕 화면\site\박스폰'

# 기본 브라우저에서 index.html 열기
start .\index.html

# 또는 간단한 로컬 서버 실행 (파이썬 필요)
python -m http.server 8000
```

배포 제안:
- 정적 사이트: GitHub Pages, Netlify, Vercel 사용 권장
- 더 필요하시면 제가 Netlify/Vercel 배포 설정(프로젝트 연결, 빌드 설정)까지 도와드릴게요.

다음 권장 작업:
1. 실제 전화번호·사업자 번호·주소 교체
2. OG 이미지(추천 크기: 1200x630) 추가 및 `og:image` 메타 태그 추가
3. 파비콘 추가
4. Lighthouse로 접근성/성능/SEO 검사

원하시면 제가 위 작업(정보 교체, OG 이미지 제작, Netlify 배포 설정)을 이어서 진행하겠습니다.
