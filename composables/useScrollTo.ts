/**
 * useScrollTo — Composable para scroll suave entre seções da One Page
 */
export const useScrollTo = () => {
  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return { scrollTo }
}
