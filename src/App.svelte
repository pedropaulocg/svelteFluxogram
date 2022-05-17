<script>
 	import Sidemenu from './components/Sidemenu.svelte'
	import Card from './components/Card.svelte'
	import cardData from "./stores/store";
	import Linha from './components/Linha.svelte'

	let idNumber = 1
	let obj
	let arrow
	cardData.subscribe(data => {
        obj = data
    })
	console.log(obj);

	function addCard () {
		idNumber++
		obj.push({left: 60, top: 60,id: idNumber, text: 'test'})
		obj = obj
		console.log(idNumber)
	}
	

</script>

<main>


	<Sidemenu on:click={addCard}/>
	{#each obj as cardContent}
		<Card content={cardContent.text} id={cardContent.id}/>
	{/each}
	 
	{#each arrow as arrows}
	
	{/each}

</main>

<style>
	
</style>