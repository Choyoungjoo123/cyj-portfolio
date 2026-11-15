# Youngjoo.dev — 조영주 인프라 엔지니어 포트폴리오

Kubernetes·GPU·클라우드 인프라를 구축하고 운영하는 엔지니어 조영주의 포트폴리오 사이트입니다.

**🔗 사이트 바로가기: https://choyoungjoo123.github.io/cyj-portfolio/**

## 소개

- **현재**: 에이프리카(AIFRICA) AI Platform Infrastructure Engineer (2026.09 ~)
- AI(MLOps) 플랫폼을 Kubernetes·Ceph·GPU 위에 구축하고, 고객 환경(폐쇄망·클라우드)에 설치·검증합니다.
- 자격: RHCSA, 정보처리기사, 리눅스마스터 2급, 네트워크관리사 2급

## 실무 경험

| 사례 | 기간 | 내용 |
|---|---|---|
| [KT Cloud 마켓플레이스 PoC](https://choyoungjoo123.github.io/cyj-portfolio/experience/kt-cloud-poc.html) | 2026.10 | 자사 AI 플랫폼의 클라우드 사업자 환경 동작 검증을 단독 수행 (K8s·Rook-Ceph·A100 MIG, 테스트케이스 98건 중 96건 통과). 결과가 마켓플레이스 상품 등록으로 이어짐 |

## 프로젝트

| 프로젝트 | 핵심 기술 | 역할 |
|---|---|---|
| [팝업스토어 중개 플랫폼 · 하이브리드 K8s 인프라](https://choyoungjoo123.github.io/cyj-portfolio/projects/final_project.html) | AWS EKS, Terraform, Route53, VPN, MELT 관측성 | 팀장 (5명) |
| [HA 멀티 마스터 K8s 클러스터 및 신차 판매 웹](https://choyoungjoo123.github.io/cyj-portfolio/projects/project5.html) | Kubernetes, Ansible, ArgoCD, SonarQube, Chaos Mesh | 부팀장 (3명) |
| [아파트 분석 서비스 Docker Swarm 이전](https://choyoungjoo123.github.io/cyj-portfolio/projects/project4.html) | Docker Swarm, Elasticsearch, Kibana, Harbor | 팀장 (4명) |
| [아파트 실거래가 기반 주거지 추천 서비스](https://choyoungjoo123.github.io/cyj-portfolio/projects/project3.html) | Python, FastAPI, MariaDB, MongoDB | 팀장 (3명) |
| [TMDB API 영화 데이터 분석 파이프라인](https://choyoungjoo123.github.io/cyj-portfolio/projects/project2.html) | MySQL, MongoDB, Python | Data Architect (3명) |
| [DNS & SMTP 메일 서버 인프라 구축](https://choyoungjoo123.github.io/cyj-portfolio/projects/project1.html) | BIND, Postfix, Dovecot, Nginx | 팀장 (3명) |

## 사이트 구조

```
├── index.html            # 메인 (About · Skills · Experience · Projects · Contact)
├── style.css             # 공통 스타일
├── main.js               # 내비게이션 스크롤
├── experience/           # 실무 경험 상세 (에이프리카, KT Cloud PoC)
├── projects/             # 프로젝트 상세 페이지
└── images/               # 아키텍처 다이어그램 및 이미지
```

HTML·CSS·JavaScript로 만든 정적 사이트이며 GitHub Pages로 배포합니다. `main` 브랜치에 푸시하면 자동으로 반영됩니다.

## 연락처

- Email: youngjoo5063@naver.com
- GitHub: [@Choyoungjoo123](https://github.com/Choyoungjoo123)
