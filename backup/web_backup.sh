#!/bin/bash

## 변수
NAME="$(/bin/whoami)"
BACKUP_DATE="$(/bin/date "+%y-%m-%d")"
BACKUP_FILE="/home/web/2024-Portfolio"
BACKUP_PATH="/mnt/backup/${BACKUP_DATE}"
BACKUP_NAME="${BACKUP_PATH}/${BACKUP_DATE}-backup.tgz"
TEL_PUSH="/home/backup/tel_push.sh"

## 백업 폴더 체크
if [ ! -d ${BACKUP_PATH} ]
then 
	/bin/mkdir -p "${BACKUP_PATH}"		
fi

## 로그파일 생성
/bin/touch /var/log/backup.log
LOG="/var/log/backup.log"

## 백업 및 로그 생성
{
	/bin/echo ""
        /bin/echo "웹파일 백업 시작"
        /bin/echo "$(/bin/date)"
        
	/bin/tar -zcf "${BACKUP_NAME}" "${BACKUP_FILE}"
        /bin/echo ""
        /bin/echo "웹파일 백업 완료"
        /bin/echo "$(/bin/date)"
        /bin/echo ""
        /bin/echo "데이터 크기"
        /bin/echo "$(/bin/ls -alh "${BACKUP_NAME}" | /bin/awk '{print $5}')"
} > ${LOG}

## 텔레그램 메세지 전송
"${TEL_PUSH}" "${NAME}" "$(/bin/cat ${LOG})"

## 최근 5일의 백업 파일 제외 삭제
/bin/find /mnt/backup -maxdepth 1 -mindepth 1 -type d -mtime +3 -exec /bin/rm -rf {} \;

## 로그파일 제거
/bin/rm -f "${LOG}"

