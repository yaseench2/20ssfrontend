import { createStore} from 'vuex'

export const store = createStore({
    strict:true,
    state:{
        token:null,
        user:null,
        isLoggedIn:false,

    },
    mutations:{
        setToken(state,token){
            state.token=token
            if(token){
                state.isLoggedIn=true
            }else{
                state.isLoggedIn=false
            }
        },
        setUser(state,user){
            state.user=user
        },
        setUntoken(state){
            state.token=null
            state.isLoggedIn=false
            state.user=null
        }
    },
    actions:{
        setToken({commit}, token){
            commit('setToken',token)
        },
        setUser({commit}, user){
            commit('setUser',user)
        },
        setUntoken({commit}){
            commit('setUntoken')
        }
    }
})