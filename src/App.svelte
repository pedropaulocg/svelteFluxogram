<script>
 	import Sidemenu from './components/Sidemenu.svelte'
	import Card from './components/Card.svelte'
	import cardData from "./stores/store";

	let idNumber = 1
	let obj

	cardData.subscribe(data => {
        obj = data
    })
	console.log(obj);

	function addCard () {
		idNumber++
		obj.push({left: 60, top: 60,id: 'card'+idNumber, text: 'test'})
		obj = obj
		console.log(idNumber)
	}
	

</script>

<main>


	<Sidemenu on:click={addCard}/>
	{#each obj as cardContent}
		<Card content={cardContent.text} id={cardContent.id}/>
	{/each}
	 
	
	


</main>

<style>
	
</style>