## Brew
* 기존 패키지 관리자의 단점 보완.
    * 패키지 설치/갱신 시 root 권한 요구.
    * 패키지 설치/갱신 시 다른 사용자에게 영향.
    * 여러 버전의 패키지 설치 유지 불가.
* 로컬에서 패키지를 버전별로 설치하여 사용 가능.
* root 권한 없이 사용 가능.  
※ 주의: glibc 등 OS 기반 패키지 버전 문제는 해결 불가.
### sudo 설치
* [참고](https://docs.brew.sh/Homebrew-on-Linux)
* homebrew 설치
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
* homebrew 설정
```sh
test -d ~/.linuxbrew && eval "$(~/.linuxbrew/bin/brew shellenv)"
test -d /home/linuxbrew/.linuxbrew && eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
echo "eval \"\$($(brew --prefix)/bin/brew shellenv)\"" >> ~/.bashrc
```
### 로컬 설치
* [참고](https://docs.brew.sh/Installation#alternative-installs)
* homebrew 설치
```sh
git clone https://github.com/Homebrew/brew homebrew
```
* homebrew 설정
```sh
eval "$(homebrew/bin/brew shellenv)"
brew update --force --quiet
chmod -R go-w "$(brew --prefix)/share/zsh"
```
* 설치
```sh
brew install hello
```