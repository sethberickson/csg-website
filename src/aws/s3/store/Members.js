import CSGMembers from "../functions/CSGMembers";
export const namespaced = true;

export const state = {
    members: []
};

export const getters = {
    
};

export const actions = {
    async getAllMembers({ commit, dispatch }) {
        dispatch("setIsLoading", true, {root:true});
        await CSGMembers.getAllMembers()
            .then(result => {
                commit("SET_ALL_MEMBERS", result);
                dispatch("setIsLoading", false, {root:true});
            })
            .catch(e => {
                console.error(e);
                dispatch("setIsLoading", false, {root:true});
            });
    }
};

export const mutations = {
    SET_ALL_MEMBERS (state, payload) {
        state.members = payload.data.Items;
    }
};