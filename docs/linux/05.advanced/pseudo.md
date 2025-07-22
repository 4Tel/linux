# 가짜 터미널
### 개요
* 일부 프로그램은 output이 터미널인지 여부에 따라 출력이 달라짐.
* 그러나 터미널이 아닌 경우에도 터미널 output을 원할 수 있음.
### 원리
* 가짜 터미널을 생성하여 프로그램을 실행.
* 실행 결과를 별도의 파일로 저장 가능.
## `script`
```bash
script -q -c '(command)' /dev/null > (output.txt)
```
## `unbuffer`
* `expect` 패키지에 포함된 프로그램.
* `expect` 패키지 설치 필요.
```bash
unbuffer (command) > (output.txt)
```