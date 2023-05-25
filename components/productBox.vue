<template lang="pug">
div(class="product-box border-2 border-gray-500")
	div {{	title }}
	div {{	rate }}
	img(:src="image")
	div {{	remainingNumber }}
	div {{	price }}
	div {{	discountPercent }}
	div {{	deliveryLabel }}
</template>

<script>
import Vue from "vue";
export default {
	name: "product-box",
	data() {
		return {

		}
	},
	props: [
		"title",
		"rate",
		"image",
		"remainingNumber",
		"price",
		"discountPercent",
		"deliveryLabel",

	]
}
</script>
<!-- <script>
import Vue from "vue";
export default Vue.extends({
	name: "product-box",
	data() {
		return {

		}
	},
	props: [
		"name"
	]
}) -->
