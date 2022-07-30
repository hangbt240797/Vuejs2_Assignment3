const app = Vue.createApp({
    data() {
      return {
        number:0,
        result:'',
      };
    },
    computed:{
    },
    watch:{
        result(){
            const that = this;
            setTimeout(
                function(){
                    that.number = 0;
                }, 5000
            )
            
        }
    },
    methods: {
        add(value){
            if(this.number < 37)
            {
                this.number = this.number + parseInt(value);
                this.result = 'Not there yet';
            }
            else
            {
                this.number = this.number + parseInt(value);
                this.result = 'Too much';
            }
        },
    },
  });
  
  app.mount("#assignment3");
  