export const state = () => ({

	title: '',

})



export const getters = {
	// getTitle(state) {
	// 	return state.title
	// }
}

export const mutations = {

	// changeSearchInputText(state, inputTextVal) {
	// 	state.layout.header.search.inputText = inputTextVal;
	// }
	// ,
	// ToggleMenuHeaderShow(state) {
	// 	state.layout.header.menuHeaderShow.show = !state.layout.header.menuHeaderShow.show;
	// }
	// ,

	// getProducts(state, products) {
	// 	state.layout.header.search.result.items = products;
	// 	// const jqxhr = $.ajax({
	// 	// 	url: `${state.Burl}/cpr/product?name=${state.layout.header.search.inputText}`,
	// 	// 	method: 'get',
	// 	// 	// data: { SearchedText: app.viewModel.layout.header.search.inputText },
	// 	// }).done(function (response) {
	// 	// 	state.layout.header.search.result.items =
	// 	// 		response.Value.Products
	// 	// })
	// },
	// PhoneNumbberAuth(state, status) {
	// 	state.user.authenticated = status;
	// },
	// userOTPAuth(state, status) {
	// 	state.user.userLogedIn = status;
	// },
	// PhoneNumberChange(state, value) {
	// 	state.user.PhoneNumber = value;
	// },
	// SET_UniqueId(state, val) {
	// 	state.user.UniqueId = val;
	// },
	// SET_Key(state, val) {
	// 	state.user.Key = val;
	// },
	// SET_PRODUCT(state, val) {
	// 	state.layout.header.search.result.items = val
	// }
}

export const actions = {
	// async callAPI({ commit, state }, payload) {
	// 	return await this.$axios.get(payload.url);
	// },
	// async getProducts() {
	// 	return await this.$axios.get(`/api/cpr/product?pagesize=5&?name=${this.state.layout.header.search.inputText}`)
	// },




	// async fetchCounter(state) {
	// 	// make request
	// 	const res = { data: 10 };
	// 	state.counter = res.data;
	// 	return res.data;
	// }


	// async getProductsList({ commit }) {
	// 	const ProductsList = await this.$axios.$get(`${state.Burl}/cpr/product?name=${state.layout.header.search.inputText}`)
	// 	commit('getProducts', ProductsList)
	// }
}
