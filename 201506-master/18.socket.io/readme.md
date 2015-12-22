#websocket
h5提供一种浏览器和服务器之间的全双工通信网络技术。
- 双工 可以双向通信
- 单工 只能单向通信
- 全双工 可以同时通信
轮询 comet 需要发请求
websocket只需要一个握手的动作，然后客户端和服务器就
形成了一条通道，可以直接进行数据传输。
- 节省资源 header 2Bytes
- 推送消息 不需要客户端请求，服务器可以主动推送数据

#socket.io
- 是一个websocket的库，包括服务器和客户端。
- 易用
- 跨平台
- 自适应 根据浏览器不同自动选择webscoket ajax轮询等方式。最低支持到ie5.5

#安装布署
npm install socket.io

