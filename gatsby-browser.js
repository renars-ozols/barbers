import 'typeface-lato'

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    return import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
