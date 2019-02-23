import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)



//创建一个仓库
export default new Vuex.Store({
    state: state,
    actions: {
        //ctx:上下文，city：传过来的参数
        changeCity(ctx, city) {
            ctx.commit('changeCity', city);//执行mutations中的changeCity
        }
    },
    //mutations：用来改变我们的数据
    mutations: {
        //state:定义的数据 ,city:传过来的参数
        changeCity(state, city) {
            state.city = city
            try {
                localStorage.city = city
            } catch (e) {

            }

        }
    },
    //类似组件中computed（计算属性）
    getters: {
        doubleCity(state) {
            return state.city + ' ' + state.city
        }
    },
    //当我们使用到非常复杂的vue场景，比如我们在管理后台系统的时候，经常会有很多的公用数据，在vuex中存储，如果我们把这些数据都存放到state中那将会变得非常庞大，难以维护，这时候我们就应该使用modules来进行模块的拆分
    // const modelA = {};
    // const modelB = {};
    // modules:{
    //     a:modelA,
    //     b:modelB
    // }
})