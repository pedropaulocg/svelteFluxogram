<script>
 	import Sidemenu from './components/Sidemenu.svelte'
	import Card from './components/Card.svelte'
	import Linha from "./components/Linha.svelte";

	let idNumber = 1

	let obj = [
		{id: idNumber, text:'teste'}
	]

	function addCard () {
		idNumber++
		obj.push({id: idNumber,text:'teste'})
		obj = obj
	}

</script>

<main>

	<Sidemenu on:click={addCard}/>
	{#each obj as cardContent}
		<Card content={cardContent.text} id={cardContent.idNumber}/>
		<Linha topI={60} leftI={60}/>
	{/each}
	 
	
	


</main>

<style>
	
</style>