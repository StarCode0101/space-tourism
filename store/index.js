export const state = ()=>{
    deviceType: ''
    isHidden: true
}

export const mutations = {
    changeDeviceType(state, arg){
        state.deviceType = arg;
    },

    toggleHidden(state, arg){
        state.isHidden = state.isHidden;
    }
}