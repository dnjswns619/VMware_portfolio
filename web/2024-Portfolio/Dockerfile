# --- 1단계: 빌드 환경 (주방) ---
FROM node:18 AS build
WORKDIR /app

# 패키지 정보(package.json)를 먼저 복사하고 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 나머지 모든 소스 코드를 복사하고 빌드(요리) 진행
COPY . .
RUN npm run build

# --- 2단계: 실행 환경 (진열대) ---
FROM nginx:alpine

# Nginx 웹 서버의 기본 문서를 지우고, 1단계에서 완성된 빌드 파일만 복사해옴
COPY --from=build /app/build /usr/share/nginx/html

# 리눅스 본체에 만든 nginx.conf 텍스트 파일을, 도커 안의 Nginx 진짜 설정 폴더로 복사해서 덮어씌움
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 80번 포트를 열어둠
EXPOSE 80

# Nginx 서버 실행
CMD ["nginx", "-g", "daemon off;"]
