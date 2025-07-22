# 유저 관리
## 계정 생성
### 주요 절차
1. 계정 생성 `useradd`
2. 비밀번호 설정 `passwd`
3. (필요한 경우) iptables 설정
4. ([NIS](../04.remote/protocol/NIS.md)인 경우) NIS 갱신 `make -C /var/yp`
### 계정 생성
* 사용자 계정을 생성합니다.
```bash
useradd [옵션] (사용자이름)
```
* 사용자 계정 및 홈 디렉토리를 생성합니다.
```bash
useradd -m (사용자이름)
```
또는
```bash
useradd -d /home/(디렉토리명) (사용자이름)
```
### 계정 생성 확인
* 생성된 사용자 계정을 확인합니다.
```bash
cat /etc/group | grep (사용자이름)  # 그룹 정보 확인
cat /etc/passwd | grep (사용자이름) # 사용자 정보 확인
cat /etc/shadow | grep (사용자이름) # 비밀번호 정보 확인
```
### 비밀번호 설정
* 사용자 계정에 비밀번호를 설정합니다.
```bash
passwd (사용자이름)
```
### 그룹 생성
* 새로운 그룹을 생성합니다.
```bash
groupadd (그룹이름)
```
### 그룹 설정
* 사용자를 그룹에 추가합니다.
```bash
usermod -aG (그룹이름) (사용자이름)
```
### 기본 쉘 지정
* 사용자 계정을 생성할 때 기본 쉘을 지정할 수 있습니다.
```bash
useradd -s /bin/bash (사용자이름)
```
## 계정 삭제
### 계정 삭제
* 사용자 계정을 삭제합니다.
```bash
userdel [옵션] (사용자이름)
```
* 사용자 계정과 홈 디렉토리를 삭제합니다.
```bash
userdel -r (사용자이름)
```
* 사용자 홈 디렉토리만 삭제합니다.
```bash
rm -rf /home/(사용자이름)
```
* 사용자 메일함만 삭제합니다.
```bash
rm -rf /var/mail/(사용자이름)
```
또는
```bash
rm -rf /var/spool/mail/(사용자이름)
```
## sudo 권한
* superuser do
### sudoers 파일 편집
```bash
visudo
```
또는
```bash
vi /etc/sudoers
```
### sudoers.d 폴더 편집
* `/etc/sudoers.d/` 디렉토리에 개별 파일로 sudoers 설정을 추가 가능.
* `/etc/sudoers` 파일과 동일한 형식으로 작성되어야 함.
### sudoers 파일 구조
* `Defaults` : 기본 설정
* `User_Alias` : 사용자 별칭 정의
* `Runas_Alias` : 실행 권한 별칭 정의
* `Host_Alias` : 호스트 별칭 정의
* `Cmnd_Alias` : 명령어 별칭 정의
## useradd 옵션
* `-m`: 유저의 홈 디렉토리를 생성합니다.
* `-s`: 로그인 쉘을 지정합니다. 예: `/bin/bash`, `/bin/sh`, `/bin/zsh` 등.
* `-c`: 사용자에 대한 설명을 추가합니다.
* `-G`: 그룹을 지정합니다. 쉼표로 구분하여 여러 그룹을 지정할 수 있습니다.