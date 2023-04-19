import { Module } from "vuex"
import { ILoginState } from "./types"
import { IAccount } from "@/service/login/type"
import { IRootState } from "../types"
import { accountLoginRequest } from "@/service/login"
import localCache from "@/utils/cache"
const loginModule: Module<ILoginState, IRootState> = {
  // namespaced: true,
  state: () => {
    return {
      id: Number,
      token: "",
      userinfo: ""
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // debugger

      // console.log("loginResult:", loginResult)
      const loginResult = await accountLoginRequest(payload)

      if (loginResult.code === 200) {
        const { token } = loginResult.data
        commit("changeToken", token)
        localCache.setCache("token", token)
      }

      // const { id, token } = commit("changeToken",token)
    }
  }
}

export default loginModule
