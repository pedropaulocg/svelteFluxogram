<script>
     
    export let content
    export let id

    let coord = {top: 60, left: 60}
    let moving = false

    function start () {
        moving = true
    }
    function stop () {
        moving = false
    }
    function move (e) {
        if(moving) {
            coord.left += e.movementX
            coord.top += e.movementY
        }
    }
    
</script>

<svelte:window on:mouseup={stop} on:mousemove={move} />

<div style="left:{coord.left}px; top:{coord.top}px" class="draggable" on:mousedown={start} id={id}>
    <h3>{content}</h3>
</div>

<style>
    .draggable {
        position: absolute;
        padding: 5px;
        background-color: white;
        border: 2px solid black;
        user-select: none;
        cursor: grab;
    }
</style>