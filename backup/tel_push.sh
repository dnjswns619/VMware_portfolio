#! /bin/bash

TOKEN="$BotToken"
CHAT_ID="$BotChatID"

if [ $# -ne 2 ]
then
	/bin/echo "서버 이름과 로그 메세지를 입력해주세요."
	exit 0
fi

DATE="$(/bin/date "+%y-%m-%d %H:%M")"
TEXT="${DATE} [$1] $2"

curl -s -X POST "https://api.telegram.org/bot${TOKEN}/sendMessage" -d "chat_id=${CHAT_ID}" -d "text=${TEXT}"
/bin/echo ""

