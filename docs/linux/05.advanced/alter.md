# 대체 화면
* vim, less, watch 등 프로그램은 대체 화면 버퍼를 사용.
* 기존 화면과 다른 화면을 생성.
## 실행 방법
* 대체 화면 버퍼 진입 ANSI 코드 출력.
```bash
echo -ne '\e[?1049h'
```
## 실행 종료
* 대체 화면 버퍼 종료 ANSI 코드 출력.
```bash
echo -ne '\e[?1049l'
```
## bash 코드
```bash
#!/usr/bin/env bash
echo -ne '\e[?1049h'
stty -echo # hide input
trap 'echo -ne "\e[?1049l"; stty echo; exit' INT TERM EXIT

# (Main loop code here)
while true; do
  # Example: Display current date and time
  clear # clear the screen
  echo "Current date and time: $(date)"
  sleep 1
done
```
