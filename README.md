# electron-test


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

#### 패키지 완료한 실행 파일 위치
`/installer`


## 테스트 환경
#### Mac (Apple M3 Pro)
 + arch : arm64
 + macOS: 14.3(23D56)
 + Node : v21.6.1
#### Window
+ arch: x86_64
+ Node: v21.6.1

## 현재 Research 완료한 기능
+ [window 창 띄우기 ](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app)
	+ `mkdir my-electron-app && cd my-electron-app`
	+ `npm init`
	+ `npm install electron --save-dev`
	+ index.html 생성
	+  `main.js` 파일 생성  `BrowserWindow` 사용하여 index.html 로드 할 수 있게 코드 작성
	+ `preload.js` 파일 생성 `contextBridge` 를 사용하여 Main 스레드의 정보를 Window 객체에 저장하는 코드 작성 `contextBridge.exposeInMainWorld('versions', {...})` 
	+ `main.js` 에서 `webPreferences` 설정에 `preload.js` import 하게 설정
	+  index.html 에서 실행 할 js 파일 `renderer.js` 생성 (돔 에 원하는 정보 렌더링 등)
+ [Main 스레드 (Node) 와 Render 스레드 (Window) 간의 통신](https://www.electronjs.org/docs/latest/tutorial/ipc)
	+ `preload.js` 파일에서 Main 스레드와 통신 할 수 있는 함수를 Window 객체에 노출되게 함 `contextBridge.exposeInMainWorld('versions', {ping: () => ipcRenderer.invoke('ping')})` **절대 `ipcRenderer`를 직접 노출 금지**
	+ `main.js` 에서 `ipcMain` 을 통해 통신할 수 있음 `pcMain.handle('ping', () => 'pong')`
	+ `renderer.js` 에서는 window에 접근해서 통신 할 수 있음 `await window.versions.ping()`
+ Application 아이콘 , MenuBar 아이콘 등 아이콘들 커스텀 설정
	+  [Application 아이콘](https://electron.github.io/packager/main/)  > `forge.config.js` > `packagerConfig`
		+  `extraResource: './assets/icon.icns'` 
		+ `icon: "./assets/icon.icns"`
	+ [MenuBar 아이콘](https://www.electronjs.org/docs/latest/api/native-image) > `Tray` 생성 , `NativeImage` 생성 `BrowserWindow` 에서 설정 
		+ [Supported Formats](https://www.electronjs.org/docs/latest/api/native-image#supported-formats) 준비 필 (32 * 32 사이즈가 제일 적적한 듯)
	+ [DMG 파일 타이틀 아이콘 설정](https://github.com/LinusU/node-appdmg) > `forge.config.js` >  `makers` > `config:{icon : "./url"}`
+ 해당 코드 dmg(arm64)로 패키징 `npm run make`
	+ 특이 사항1: [**Mac** 에서만 패키징 가능](!https://www.electronforge.io/config/makers/dmg)
	+ dmg 파일 위치`out/make/vs-electron-app-1.0.0-arm64.dmg`
+ 해당 코드 exe 로 패키징 `npm run make`
	+ 특이 사항1: [**window**  혹은 **linux** 에서만 패키징 가능](!https://www.electronforge.io/config/makers/squirrel.windows)
	+ 특이 사항2: [패키지 이름, 설명 등에 `-` 혹은 띄어쓰기 들어가면 에러남](!https://github.com/electron/windows-installer/issues/167)
	 + [window > 시스템 > 고급 설정 > Path > `%SystemRoot%\system32\WindowsPowerShell\v1.0` 추가하기](!https://stackoverflow.com/questions/57750620/how-to-fix-error-spawnsync-powershell-exe-enoent)
	 + 특이 사항3: [코드 경로에 영어가 아닌 다른 문자가 없어야 함 `ex) C:/다운로드/code/...`](!https://github.com/electron/windows-installer/issues/167)
	+ window 아닌 환경에서 필요한 Lib  wine-stable, mono (리눅스 환경이 없어 테스트 못한 상황)
		+ wine-stable 다운로드 `brew install --cask wine-stable`
		+ mono 다운로드 https://www.mono-project.com/download/stable/



## TODO
+ ~~window~~ , linux 실행 파일 생성 (~~exe~~, deb)  
+ React, TS, Webpack 을 추가한 boilerplate 만들기
+ 기타 딥한 지식 습득
+ ....

