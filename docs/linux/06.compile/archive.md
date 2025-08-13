# 라이브러리
## 심볼 확인
```bash
ar t ${lib_file}
```
### 상세 확인
* 심볼 테이블 확인
* 다음 중 하나 수행.
```bash
nm ${lib_file}
```
```bash
nm -o ${lib_file}
```
* `U`: Undefined
## 심볼 제거
```bash
ar d ${lib_file} ${OBJECT}
```
