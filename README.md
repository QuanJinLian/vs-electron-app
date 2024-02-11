# electron-test
electron + react + webpack simple test




```Shell
npm install
```


#### 로컬 운영

```Shell
npm start
```


#### 패키징

```Shell
npm run make
```

##### dmg 파일 위치
`out/make/vs-electron-app-1.0.0-arm64.dmg`


## 테스트 환경
 + arch : arm64
 + macOS: 14.3(23D56)
 + Node : v21.6.1


## 현재 Research 완료한 기능
+ window 창 띄우기 
+ Main 스레드 (Node) 와 Render 스레드 (Window) 간의 통신
+ Application 아이콘 , MenuBar 아이콘 등 아이콘들 커스텀 설정
+ 해당 코드 dmg로 패키징



## TODO
+ window, linux 실행 파일 생성 (exe, deb)
+ React, TS, Webpack 을 추가한 boilerplate 만들기
+ 기타 딥한 지식 습득
+ ....