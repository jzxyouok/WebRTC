/**
 * Created by wchi on 2015/11/23.
 */

SkyRTC.rtc.on('remove_room',function(roomNum){
    console.log("已经将房间 "+roomNum+" 移除了");
});

SkyRTC.rtc.on('new_connect', function(socket) {
    console.log('创建新连接' + socket);
});

SkyRTC.rtc.on('remove_peer', function(socket) {
    console.log("用户[" + socket.userId + "," + socket.userName + "]离开");
});

SkyRTC.rtc.on('new_peer', function(socket, room) {
    console.log("新用户" + socket.id + "加入房间" + room);
});

SkyRTC.rtc.on('socket_message', function(socket, msg) {
    console.log("接收到来自" + socket.id + "的新消息：" + msg);
});

SkyRTC.rtc.on('ice_candidate', function(socket, ice_candidate) {
    console.log("接收到来自" + socket.id + "的ICE Candidate" + ice_candidate);
});

SkyRTC.rtc.on('offer', function(socket, offer) {
    console.log("接收到来自" + socket.id + "的Offer" + offer);
});

SkyRTC.rtc.on('answer', function(socket, answer) {
    console.log("接收到来自" + socket.id + "的Answer" + answer);
});

SkyRTC.rtc.on('error', function(error) {
    console.log("发生错误：" + error.message);
});