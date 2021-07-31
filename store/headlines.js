import { getAttributeValue } from "domutils"
import { v4 as uuid } from "uuid"

export const state = () => ({
    headlines: [],
    headline: null
})

export const mutations = {
    setHeadlines(state, payload) {
        state.headlines = payload
    },
    setHeadline(state, payload) {
        state.headline = payload
    }
}

export const actions = {
    async loadHeadlines({ commit }, payload) {
        try {
            const { articles } = await this.$axios.$get(payload)
            const headlines = articles.map((article) => {
                const slug = uuid(article.title)
                const headline = {...article, slug }
                return headline
            })
            commit('setHeadlines', headlines)

        } catch (e) {
            console.log(e)
        }
    },
    submitHeadline({ commit }, headline) {
        console.log('store', headline)
        commit('setHeadline', headline)
    }
}

export const getters = {
    headlines(state) {
        return state.headlines
    },
    headline(state) {
        return state.headline
    }
}