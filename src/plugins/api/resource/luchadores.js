class Luchadores {
    constructor(axios) {
        this.axios = axios
    }
  
    async list() {
      try{
    const response = await this.axios.get("/luchadores");
    return response.data.data}
  
  catch(error){
      console.error(error.message)
  }
  }
  }
  
  export default Luchadores