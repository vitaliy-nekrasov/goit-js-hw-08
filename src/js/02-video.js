import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(evt) {
  const currentTime = evt.seconds;
  console.log(evt.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime);
}

if (localStorage.getItem('videoplayer-current-time')) {
  const getTime = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(getTime);
}
