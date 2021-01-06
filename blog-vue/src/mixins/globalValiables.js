export default {
  methods:{
    getDate(){
      const date = new Date
      const year = date.getFullYear()
      const month = date.getMonth()+1
      const day = date.getDay()
      const hour = date.getHours()
      const min = date.getMinutes()
      const sec = date.getSeconds()
      return year+'/'+month+'/'+day+'/'+hour+':'+min+':'+sec
    }
  }
}