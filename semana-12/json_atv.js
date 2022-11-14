let videos = 
    '{ "mais vistos" : [' +
    '{ "youtubeId": "hT_nvWreIhg", "title": "Counting Stars" },' +
    '{ "youtubeId": "YQHsXMglC9A", "title": "Hello" },' +
    '{ "youtubeId": "09R8_2nJtjg", "title": "Sugar" },' +
    '{ "youtubeId": "pRpeEdMmmQ0", "title": "Waka Waka" } ]}';

    
const objVideo = JSON.parse(videos)
const arrayVideos = objVideo['mais vistos']

const principal = document.querySelector('#principal')

arrayVideos.forEach(video => {
    let li = document.createElement('a')
    let link = `https://www.youtube.com/watch?v=${video.youtubeId}`
    
    li.setAttribute('href', link)  
    li.innerText = video.title
    li.classList = 'list-group-item listgroup-item-action'

    principal.appendChild(li)
})