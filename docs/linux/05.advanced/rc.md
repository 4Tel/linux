# RC (Run Commands)
## RC 동작 순서
1. 로그인 시 /etc/profile을 통해 /etc/profile.d/의 모든 쉘 스크립트를 실행. (vim, qt 등)
1. 다음 중 하나를 실행. 여러개 존재할 경우 위쪽에 있는 것을 우선.
    * ~/.bash_profile (bash 쉘 사용 시)
    * ~/.bashrc (bash 쉘 사용 시)
    * ~/.profile
1. ~/.bashrc 실행
1. /etc/bashrc 실행 (bash 쉘 사용 시)

## 주의사항
* ssh 접속 시
    * /etc/ssh_config를 통해 /etc/ssh_config.d/의 모든 쉘 스크립트를 실행.
    * 이후 ~/.ssh/rc 실행.
    * /etc/profile보다 우선 실행.
    * ssh 접속 최적화 프로그램의 경우 ~/.ssh/rc 작성으로 인해 오류가 발생할 수 있음.
* scp 등 ssh를 이용하는 프로토콜은 비대화형 ssh를 사용.
    * 대화형과 비대화형에 따라 RC의 코드가 다르게 영향을 끼칠 수 있음.
    * 일부 RC는 `if [ -n "$SSH_TTY" ];then # code;fi`를 통해 대화형 ssh의 경우에만 실행되도록 하여야 함.
* vscode는 비대화형 ssh를 사용하므로 vscode에서 코드 실행을 지정하고 싶은 경우 다음을 설정.
    * `[ -n "$VSCODE_IPC_HOOK_CLI ]` 또는 `[ -n "$SSH_TTY" ] || [ -n "$VSCODE_IPC_HOOK_CLI ]`
    * terminal.integrated.env.linux 옵션에서 `"SSH_TTY":"1"`을 사용하여 대화형 쉘에서만 동작할 스크립트를 허용.