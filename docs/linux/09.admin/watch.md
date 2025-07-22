# 파일 감시
`auditctl`  
* Linux Audit 시스템 구성 및 관리를 위한 명령어.
* 파일 및 프로세스에 대한 감시를 설정 가능.
* 감시 규칙을 추가, 수정 및 삭제할 수 있는 기능 제공.
## 설치
```bash
sudo apt install auditd
```
## 사용법
### 감시 규칙 추가
```bash
sudo auditctl -w (path) -p rwxa -k (keyword)
```
- `(path)`: 감시할 파일/폴더의 경로.
- `-p rwxa`: 감시할 권한 설정 (읽기, 쓰기, 실행, 속성 변경).
- `-k (keyword)`: 키워드 설정 (검색 시 사용).
### 감시 규칙 확인
```bash
sudo auditctl -l
```
### 감시 로그 확인
```bash
sudo ausearch -k (keyword)
```
### 감시 규칙 삭제
```bash title="특정 삭제"
sudo auditctl (watch)
```
```bash title="키워드 삭제"
sudo auditctl -l | grep 'key=(keyword)' | while read -r line;do
    sudo auditctl $(echo $line | sed 's/^-a /-d /g')
done
```
```bash title="전체 삭제"
sudo auditctl -D
```
* (watch): 규칙에서 -a를 -d로 변경.
* 키워드 삭제: 자동으로 -a를 -d로 변경하여 삭제.
### 감시 로그 파일 위치
```bash
sudo grep "log_file" /etc/audit/auditd.conf
```
- `/var/log/audit/audit.log`: 기본 로그 파일 위치.
### 감시 로그 관리
- 로그 파일의 크기가 커지면, `logrotate`를 사용하여 관리할 수 있음.
```bash
sudo logrotate /etc/logrotate.d/audit
```
### 서비스 상태 확인
```bash
sudo systemctl status auditd
```