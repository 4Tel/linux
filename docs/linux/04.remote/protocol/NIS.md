* Network Information Service (NIS)
* [RPC](../method/RPC.md) 기반
## Daemon 실행
```bash
service ypserv start
service yppasswd start
service ypxfrd start
service ypbind start
```
## 갱신
* 사용자 등 정보를 추가/수정/삭제한 후에는 NIS 정보를 갱신해야 합니다.
```bash
make -C /var/yp
```
