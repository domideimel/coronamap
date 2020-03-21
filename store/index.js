export const state = () => {
  countries: []
}

export const mutations = {
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  }
}

export const actions = {
  async GET_COUNTRIES({context, commit}) {
    const countries = await this.app.apolloProvider.defaultClient.query({
      query: require('../graphql/query.graphql')
    })
    commit('SET_COUNTRIES', countries)
  }
}
