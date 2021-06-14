class Luchador {
    constructor(axios) {
        this.axios = axios
    }
  
    async list() {
        try{
    const response = await this.axios.get("/luchador/:apellido");
    return response.data.data}

    catch(error){
        console.error(error.message)
    }
}
}
  
  export default Luchador