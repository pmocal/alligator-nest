<template>
	<div id="travel">
		<h2 class="row1">Travels</h2>
		<div class="flex-container row2">
			<router-link to="/travel/america">America</router-link>
			<router-link to="/travel/china">China</router-link>
		</div>
		<router-view class="row3"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'TravelPage'
	}
</script>

<style scoped>
div {
	text-align: center;
}

#travel {
	display: grid;
	grid-template-rows: 20% 40% 40%;
}

.flex-container {
	display: flex;
	justify-content: space-around;
}
</style>