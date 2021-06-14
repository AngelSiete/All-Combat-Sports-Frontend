class Calendario {
    constructor(axios) {
        this.axios = axios
    }
  
    async list() {
        try{
    const response = await this.axios.get("/calendario");
    return response.data.data}

    catch(error){
        console.error(error.message)
    }
}
}
  
  export default Calendario