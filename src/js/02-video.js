import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(evt) {
  const currentTime = evt;
  const currentTimeJSON = JSON.stringify(currentTime);
  localStorage.setItem('videoplayer-current-time', currentTimeJSON);
}

const getTimeJSON = localStorage.getItem('videoplayer-current-time');
const getTime = JSON.parse(getTimeJSON).seconds;

player.setCurrentTime(getTime);
