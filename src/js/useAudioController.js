const audioElement = document.getElementById('audio')
/* let soundController = document.getElementById('volumeButton')

soundController.addEventListener('touchstart', showVolumeSlider())
soundController.addEventListener('touchend', hideVolumeSlider())
 */
const showVolumeSlider = () => {
  const volumeSlider = document.querySelector('.volume-slider')
  volumeSlider.style.display = 'block'
}

const hideVolumeSlider = () =>  {
  const volumeSlider = document.querySelector('.volume-slider')
  volumeSlider.style.display = 'none'
}

const changeVolume = () => {
  const volumeSlider = document.querySelector(
    '.volume-slider input[type="range"]'
  )
  const volumeValue = volumeSlider.value
  audioElement.volume = volumeValue / 100
}

const togglePlayback = () => {
  if (audioElement.paused) {
    audioElement.play()
    document.querySelector('.sound-controller i').classList.add('fa-volume-up')
    document
      .querySelector('.sound-controller i')
      .classList.remove('fa-volume-xmark')
  } else {
    document
      .querySelector('.sound-controller i')
      .classList.remove('fa-volume-up')
    document
      .querySelector('.sound-controller i')
      .classList.add('fa-volume-xmark')
    audioElement.pause()
    hideVolumeSlider()
  }
}

