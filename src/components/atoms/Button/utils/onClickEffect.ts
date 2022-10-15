import { MouseEvent } from 'react'

export const onClickEffect = (event: MouseEvent) => {
  const element = event.currentTarget as HTMLElement
  const circle = document.createElement('span')

  circle.classList.add('wave')
  const diameter = Math.max(element?.clientWidth, element?.clientHeight)
  const radius = diameter / 2

  const { x, y } = element.getBoundingClientRect()
  circle.style.width = `${diameter}px`
  circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - x - radius}px`
  circle.style.top = `${event.clientY - y - radius}px`

  const wave = document.querySelector('.wave')

  if (wave) {
    wave.remove()
  }

  element.appendChild(circle)
}
