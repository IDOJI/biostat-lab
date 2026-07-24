# ADNI Multimodal Data Project

## 🌐 Website

[**Open the ADNI Multimodal Data Project →**](https://idoji.github.io/biostat-lab/)

ADNI의 subject history, RS-fMRI 데이터 선택·다운로드·전처리,
SNP 전처리 절차를 공유하는 프로젝트 웹사이트입니다.

## Website structure

- [Subject History](https://idoji.github.io/biostat-lab/methods/subject-history.html)
- [RS-fMRI Data](https://idoji.github.io/biostat-lab/methods/rsfmri-data.html)
- [SNP Data](https://idoji.github.io/biostat-lab/methods/snp-data.html)

## Local preview

macOS에서 저장소 폴더를 열고 다음 명령을 실행합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다.

## GitHub Pages

GitHub 저장소에서 다음 순서로 활성화합니다.

1. `Settings`
2. `Pages`
3. `Build and deployment`
4. Source를 `Deploy from a branch`로 선택
5. Branch를 `main`, folder를 `/ (root)`로 선택
6. `Save`

배포 주소:

[https://idoji.github.io/biostat-lab/](https://idoji.github.io/biostat-lab/)

## Security

이 저장소는 공개 저장소입니다. 다음 자료를 커밋하지 마세요.

- ADNI 원본 영상 또는 임상 원자료
- RID와 민감정보가 함께 포함된 표
- 접근 토큰, 로그인 정보, cookie, 다운로드 URL
- 개인 또는 기관 내부 서버 경로

## Editing

- 메인 홈페이지: `index.html`
- 상세 페이지: `methods/`
- 기존 상세 가이드: `adni-guide.html`
- 디자인: `assets/style.css`, `assets/portal.css`, `assets/detail.css`
- 메뉴 및 화면 동작: `assets/app.js`
