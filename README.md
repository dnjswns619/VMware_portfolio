# 🛠️ Homelab Infrastructure & DevOps Automation Modules

본 레포지토리는 VMware 가상화 환경 기반의 개인 홈랩 인프라 중, **핵심 운영 자동화 모듈(웹 앱 배포, 백업, 디스크 모니터링, 텔레그램 알림)**만 발췌하여 목적별로 모듈화한 저장소입니다.

- 전체 가상 머신(VM) 프로비저닝이나 네트워크 토폴로지 설정 코드는 제외되어 있으며, 실무에서 가장 빈번히 발생하는 **운영/반복 작업의 자동화 파이프라인 구현 초점**에 맞춰 구성되었습니다.
- **실행 환경 가정:** Rocky Linux, Nginx, Crontab, Docker 환경

## 📒노션정리
<a>https://app.notion.com/p/VMware-e7a11a0fe1e482b9b64201c832fba68b</a>

## 📂 Repository Structure

server-infra-workspace/
├── web/          # React 프론트엔드 앱 및 Docker 컨테이너 / Nginx 설정
├── monitor/      # 시스템 상태 헬스체크 및 Telegram Bot 실시간 알림 스크립트
└── backup/       # 주기적 데이터 백업 및 system cron 자동화 스크립트

🚀 Core Modules & Engineering Implementation
1. Web Service & Containerization (/web)
컨테이너 격리 및 배포: React 애플리케이션을 Docker를 통해 컨테이너화하여 실행 환경의 독립성 확보.

3. System Monitoring & Alerting (/monitor)
디스크 감지 자동화: Bash 기반의 시스템 모니터링 스크립트를 작성하여 디스크의 상태를 확인하며 디스크 사용량이 일정 이상 올라가면 텔레그램 알림이 오도록 설정.

Telegram Bot 연동: 시스템 장애나 예기치 않은 이벤트 발생 시, Telegram Bot API를 통해 관리자에게 실시간 경보(Alert)를 전송하는 알림 파이프라인 구축.

3. Automated Backup Pipeline (/backup)
데이터 백업: 주요 웹 설정 파일 및 디렉토리를 주기적으로 백업하는 스크립트 구현.

Cron Scheduler 연동: 리눅스 crontab을 활용해 백업 작업이 자동으로 실행되도록 스케줄링 관리.
