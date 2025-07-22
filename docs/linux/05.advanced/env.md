# 시스템 환경
## Hardware
### CPU
* 스레드, 소켓, NUMA, 캐시, 명령어 집합 등 CPU 정보
```sh
lscpu # 종합 정보
```
```sh
cat /proc/cpuinfo # 상세 정보
```
## 시스템 환경
```sh
getconf -a
```
### 환경 변수 목록
```sh
printenv
```
### Architecture
* 다음 중 하나 실행
```sh
arch # machine architecture
```
```sh
uname -m # machine HW name
```
```sh
uname -p # processor type
```
```sh
uname -i # HW platform
```
### 커널
```sh
uname -r
```
## OS
* 운영체제 이름
```sh
uname -o
```
* 배포판 정보
```sh
cat /etc/system-release
```
* 상세 정보
```sh
cat /etc/os-release
```
### glibc
* local에서는 주로 ldd를 사용.
* 주요 프로그램은 /bin/ldd를 사용.
```sh
getconf -a | grep LIBC
ldd --version
/bin/ldd --version
/lib64/libc.so.6 --version
```
### libstdc++
```sh
strings /usr/lib64/libstdc++.so.6 | grep GLIBCXX
strings $(/sbin/ldconfig -p|grep stdc++|awk '{print $NF}')|grep -ao 'GLIBCXX_[0-9]*\.[0-9]*\.[0-9]*' | sort -V | tail -1
```
### binutils
```sh
ld --version
```
