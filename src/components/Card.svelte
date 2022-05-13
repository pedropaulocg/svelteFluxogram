<script>
    import Linha from "./Linha.svelte";

    export let content
    export let id
    



    let coord = {left: 60, top: 60}

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
    console.log(coord);
</script>

<svelte:window on:mouseup={stop} on:mousemove={move} />

<div style="left:{coord.left}px; top:{coord.top}px" class="draggable" on:mousedown={start} id={id}>
    <h3>{content}</h3>
</div>

<Linha leftI={coord.left-30} topI={coord.top+70} leftF={60} topF={60}/>


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