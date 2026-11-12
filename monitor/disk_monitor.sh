#!/bin/bash

## 변수
NAME="$(/bin/whoami)"
TEL_PUSH="/home/backup/tel_push.sh"

## disk 용량 감지 로그 생성
TEXT="$(
	/bin/echo "";\
	/bin/df -h |\
	/bin/awk 'NR > 1 {
		gsub("%", "", $5);
		USE=$5 + 0;
		NAME=$6;
		if (USE > 40 && USE < 80) {
			print NAME,"의 사용량이 ",USE"% 넘었습니다. 주의가 필요합니다."
			
		} else if (USE >= 80) {
                        print NAME,"의 사용량이 ",USE"% 넘었습니다. 확인이 필요합니다."
                        
                };
	}' 
)"

## 텔레그램 메세지 전송
"${TEL_PUSH}" "${NAME}" "${TEXT}"
