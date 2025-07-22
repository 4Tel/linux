# 파일 시스템 관리
## 정보
```bash
df -hPT
```
* `-h`: human readable.
* `-P`: POSIX output format.
* `-T`: File System Type.
## 마운트 정보
```bash
cat /etc/fstab
```
* 6개의 필드로 구성
1. 파일시스템 장치명
2. mount point (디렉토리/경로명)
3. 파일 시스템 종류
4. 파일 시스템 속성 옵션
5. dump 설정 여부
6. 파일 점검 옵션
### 파일 시스템 종류
* TODO
### 속성 옵션
* TODO

## 용량 확인
### du 방법
* 매우 느리지만 정확.
```bash
du -sh
```
또는
```bash
du -hd (depth)
```
### xfs_quota
* xfs 시스템인 경우
* quota 설정한 경우
* 매우 빠르지만 관련 설정 필요.
* TODO: 확인 요망.
* TODO: 설정 방법.
```bash
sudo xfs_quota -x -c 'report -h' (경로)
```
### quotatool
* ext4 시스템인 경우
* quota 설정한 경우
* 빠르지만 관련 설정 필요.
* TODO: 확인 요망.
* TODO: 설정 방법.
```bash
sudo quotatool -s (경로)
```
또는
```bash
sudo repquota -h (경로)
```
### 범용 패키지 방법
* UI, 병렬화, 인덱싱 등 추가 기능 지원.
* UI 관련: [pdu 유사 프로그램](https://github.com/KSXGitHub/parallel-disk-usage?tab=readme-ov-file#similar-programs) 참고.
* 성능 관련: [gdu-go Benchmark](https://github.com/dundee/gdu?tab=readme-ov-file#benchmarks) 참고.
#### 사용 경험
##### 조건
* 약 30TB 크기의 xfs, non-quota 시스템
* `/home`의 각 유저의 디렉토리 용량 측정.
* `max-depth=3`까지의 용량 정보 저장이 필요.
##### 실행
* 초기에는 `du`를 이용한 용량 측정이 오래 걸리므로 인덱싱 방법을 조사함.
* 그러나 대부분의 범용 패키지 방법은 인덱싱을 지원하지 않음.
* 인덱싱을 지원하는 경우 max-depth를 지원하지 않아 모든 내용을 저장하거나, 실행 자체가 느림.
##### 후기
* `pdu`
  * 충분히 빠름
  * `max-depth` 지원
  * `max-depth`에 따라 시간이 차이가 없음.
  * `diskus`에 비해 현저히 느림.
* `diskus`
  * 매우 빠름
  * `max-depth` 미지원
  * 수동으로 `max-depth` 구현 시 속도가 `pdu`보다 느려짐.
* `max-depth` 기능이 필요한 경우 `pdu`를 사용. 그렇지 않은 경우 `diskus`를 사용.
* 24core 기준 30TB disk에 대한 `time` 측정표.
##### `pdu` 사용 예시
```bash
pdu --min-ratio=0.01 --max-depth=3 --top-down
```