const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // autoplay: false, //自动播放
    listFolded: false, //播放列表默认折叠
    listMaxHeight: 10, //播放列表最大高度
    order: 'list', //音频循环顺序, 可选值: 'list', 'random'
    loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
    theme: '#b7daff', //切换音频时的主题色，优先级低于audio.theme
    preload: 'auto', //音频预加载，可选值: 'none', 'metadata', 'auto'
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    lrcType: 3, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    fixed: true, //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）

    // 音乐直链搜索：https://music.liuzhijin.cn/  
    audio: [{
        name: '相信你的人',
        artist: '陈奕迅',
        lrc: 'http://qpugd0hk7.hn-bkt.clouddn.com/music/lrc/%E7%9B%B8%E4%BF%A1%E4%BD%A0%E7%9A%84%E4%BA%BA-%E9%99%88%E5%A5%95%E8%BF%85.lrc',
        cover: 'http://p4.music.126.net/q0pAbNpw5OA6yo3RFMvAxQ==/109951164194081148.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=1376091684.mp3'
      },
      {
        name: '人来人往 (Live)',
        artist: '陈奕迅',
        lrc: 'http://qpugd0hk7.hn-bkt.clouddn.com/music/lrc/%E4%BA%BA%E6%9D%A5%E4%BA%BA%E5%BE%80%20%28Live%29-%E9%99%88%E5%A5%95%E8%BF%85.lrc',
        cover: 'http://p4.music.126.net/LE6HV_Y5-HXFfdXKGhJ94Q==/109951163104933982.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=65923.mp3'
      },
      {
        name: '高山低谷',
        artist: '林奕匡',
        lrc: 'http://qpugd0hk7.hn-bkt.clouddn.com/music/lrc/高山低谷-林奕匡.lrc',
        cover: 'http://p4.music.126.net/-Ghh732Mw5P7SroEr954qA==/6011030069358994.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=28457932.mp3'
      }
    ]
  });