class Calendario {
    constructor(axios) {
        this.axios = axios
    }
  
    async list() {
    const response = await this.axios.get("/calendario");
    return response.data
}
}
  
  export default Calendario