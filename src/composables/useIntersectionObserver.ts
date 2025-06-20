import { onMounted } from 'vue'

export function useIntersectionObserver() {
  const observeElement = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    }

    // 利用IntersectionObserver监听元素相对于视口的位置，实现图片懒加载和动画效果

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement

          if (el.localName === 'img') {
            const src = el.getAttribute('data-src')
            if (src) {
              el.setAttribute('src', src)
            }
          }

          if (el.localName === 'video') {
            const videoEl = el as HTMLVideoElement
            videoEl.play()
          }

          el.classList.add('animate')
          observer.unobserve(el)
        }
      })
    }, options)

    const observeElements = (selector: string) => {
      Array.from(document.getElementsByClassName(selector)).forEach((el) => {
        observer.observe(el)
      })
    }

    observeElements('video')
    observeElements('lazy-text')
    observeElements('lazy-img')
  }

  onMounted(() => {
    observeElement()
  })
}
