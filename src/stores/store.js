import { writable } from 'svelte/store'

const cardData = writable([
    { id: 'card'+1, text: 'test' }
])

export default cardData