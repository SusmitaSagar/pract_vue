console.log('hello vue in js')
const app = Vue.createApp({
    //data ,function {passsing an object} to react to event
    // template: '<h2> i am template</h2>'
    data(){
        return{
            title: 'my first vue experince',
            experience: 'very complex at first metting',
            time : '44', //dont forget to add comma
            sourc: true

        }
    },//will chngw after clickinhh
    methods: {
        changeExperience(experience){
            console.log('you clicked me so my experience changed into awsome')
            this.experience = experience // the experice chnge by clicking
        }

        // toggleShowSourc(sour){
        //     this.sour = sour
 
        // }
    }
   

    
})
app.mount('#app') //dynamic data will be controlled by vue


