class Luchas{
  constructor(axios){
    this.axios = axios
  }
  async list(){
    const response = await this.axios.get('/luchas')
    return response.data
}}

export default Luchas