<template lang="pug">
div(class="container mx-auto")
	h1(class="hidden") products
	p(v-if="$fetchState.pending") loading...
	p(v-else-if="$fetchState.error") please refresh page ...
	div(class="grid grid-cols-5")
		<product-box v-for="product in products" :title="product.title" :rate="product.rate" :image="product.image" :remainingNumber="product.remainingNumber" :price="product.price" :discountPercent="product.discountPercent" :deliveryLabel="product.deliveryLabel" :key="product.id" />

</template>

<script>
import Vue from 'vue'
import ProductBox from "@/components/productBox.vue";
export default {
	name: 'IndexPage',
	data() {
		return {
			products: []
		}
	},
	async fetch() {
		this.products = await fetch('https://mocki.io/v1/a03f4c39-409c-4302-9b5e-e5078ed44434').then(res => res.json());
	},
	component: {
		ProductBox
	}
}
</script>
