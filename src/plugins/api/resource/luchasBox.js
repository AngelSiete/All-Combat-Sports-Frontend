class LuchasBox {
    constructor(axios) {
        this.axios = axios
    }
  
    async list() {
      try{
    const response = await this.axios.get("/luchas/box");
    return response.data.data}
  
  catch(error){
      console.error(error.message)
  }
  }
  }
  
  export default LuchasBox