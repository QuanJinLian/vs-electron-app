console.log("여기 비지니스 로직 쓰기?")


const information = document.getElementById('info')
information.innerText = `현재 사용되고 있는것은 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 와 Electron (v${versions.electron()})`