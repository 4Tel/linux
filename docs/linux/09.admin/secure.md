## 방화벅 설정 (TODO)
#### 실행
```sh
systemctl start firewalld.service
```
#### 정지
```sh
systemctl stop firewalld.service
```
#### 상태
```sh
systemctl status firewalld.service
```
#### 자동 시작 적용
```sh
systemctl enable firewalld.service
```
#### 자동 시작 해제
```sh
systemctl disable firewalld.service
```
#### TODO
현재 상태 --state
변경 적용 --reload
### IP
#### 허용 IP 목록 
```sh
firewall-cmd --list-rich-rule
```
#### IP 허용/차단 목록 추가/제거
```sh
firewall-cmd --permanent --[add/remove]-rich-rule='rule family="ipv4" source address="[IP]" port protocol="[tcp,udp]" port="[Port]" [accept/reject]'
```
### 포트
허용 포트 목록 --list-port
포트 허용 추가 --permanent --add-port=[Port]/[tcp,udp]
포트 허용 제거 --permanent --remove-port=[Port]/[tcp,udp]
### 서비스
허용 서비스 목록 --list-service
서비스 허용 추가 --permanent --add-service=[서비스(https 등)]
서비스 허용 제거 --permanent --remove-service=[서비스[]]

## SSH 보안
### SSH 설정
```sh
vim /etc/ssh/sshd_config
```
#### 파일 설정 (TODO)
```sh
# root
PermitRootLogin no # root 로그인 금지
# 로그인 설정
PermitEmptyPasswords no # 비밀번호 없음 금지
PasswordAuthentication no # 비밀번호 로그인 금지
# 암호화
PubkeyAuthentication yes # 공개키 로그인
AuthorizedKeysFile .ssh/authorized_keys # 공개키 인증
PubkeyAcceptedKeyTypes +ssh-rsa # 공개키 암호화
PubkeyAcceptedAlgorithms +ssh-rsa # 공개키 알고리즘
ChallengeResponseAuthentication no # 비밀번호 인증
UsePAM no # PAM 인증
UseDNS no # DNS 인증
# 허용
AllowUsers [user] # 허용 유저
AllowGroups [group] # 허용 그룹
DenyUsers [user] # 금지 유저
DenyGroups [group] # 금지 그룹
# SSH 설정
Port [Port] # 포트 변경
X11Forwarding no # X11 포워딩 금지
TCPKeepAlive yes # TCP Keep Alive
ClientAliveInterval 60 # 클라이언트 생존 주기
ClientAliveCountMax 3 # 클라이언트 생존 카운트
MaxAuthTries 3 # 최대 인증 시도 횟수
MaxSessions 2 # 최대 세션 수
MaxStartups 10:30:60 # 최대 시작 수
PermitTunnel no # 터널링 금지
AllowTcpForwarding no # TCP 포워딩 금지
PermitTTY no # TTY 금지
PermitUserEnvironment no # 유저 환경 금지
```
#### SSH 설정 적용
```sh
systemctl restart sshd.service
```
#### SSH 설정 확인
```sh
sshd -t
```
#### SSH 설정 테스트
```sh
sshd -t -f /etc/ssh/sshd_config
```
