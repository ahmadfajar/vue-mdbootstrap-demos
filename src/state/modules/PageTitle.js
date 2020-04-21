import {GET_PAGE_TITLE, SET_PAGE_TITLE} from "./mutation-types";

const state = {
    title: ''
};

const mutations = {
    [SET_PAGE_TITLE](state, title) {
        state.title = title;
    }
};

const actions = {
    [SET_PAGE_TITLE]({commit}, title) {
        commit(SET_PAGE_TITLE, title);
    }
};

const getters = {
    [GET_PAGE_TITLE]: state => state.title
};

export default {
    state, mutations, actions, getters
}
