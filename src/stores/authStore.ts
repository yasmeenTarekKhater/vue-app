import { defineStore } from 'pinia';
import axios from '@/plugins/axios.js';
import type {APIResponse , User} from '@/types/index';
export const useAuthStore = defineStore('AuthStore',{
  state: () => ( {} ),
  getters: {
  },
  actions: {
    async registerUser(form:Record<string,string>){
      return new Promise<User>(async (resolve,reject)=>{
        try {
          const {data}=await axios.post<APIResponse<{user:User}>>('/users/register',{...form});
          console.log("Registed",data.data);
          resolve(data.data.user);
        } catch (error) {
          reject(error);
        }
      })
    }
  },
})
