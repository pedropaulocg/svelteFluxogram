import { writable } from 'svelte/store'

const cardData = writable([
    { id: 1, text: 'test',left:60,top:60 }
])

export default cardData