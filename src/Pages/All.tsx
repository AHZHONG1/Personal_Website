export function isTargetSize(size: string) {
    // https://stackoverflow.com/a/8876069
    const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    )
    if (width <= 576 && size == 'xs') return true
    if (width <= 768 && size == 'sm') return true
    if (width <= 992 && size == 'md') return true
    if (width <= 1200 && size == 'lg') return true
    if (width <= 1400 && size == 'xl') return true
    if (width > 1400 && size == 'xxl') return true
    return false
}

