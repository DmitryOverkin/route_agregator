import { ref, onMounted, onUnmounted } from 'vue'

export default function useWindowWidthMobile() {
    const windowWidth = ref(window.innerWidth)

    const update = () => { windowWidth.value = window.innerWidth }

    onMounted(() => {
        update()
        window.addEventListener('resize', update)
    })
    onUnmounted(() => {
        window.removeEventListener('resize', update)
    })

    return { windowWidth }
}