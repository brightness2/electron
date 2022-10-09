import {defineStore,} from 'pinia'

const useWebsiteStore = defineStore('websiteStore',{
    state(){
        return {
            versions:{
                app_name:'My App',
                chrome:'',
                node:'',
                electron:''
            }
        }
    },
    actions:{
        setVersions(data){
            this.versions = data
        }
    },
})

export default useWebsiteStore