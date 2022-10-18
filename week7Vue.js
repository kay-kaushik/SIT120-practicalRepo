// global component
Vue.component('Global',{
    template:'<h1>{{ message }}</h1>',
    data: function(){
        return{
            message:"This is the global component",
        }
    }
});

// local component as registered locally
var Local = {
    props: ['messageforlocal'],
    template:'<div><h1> {{ message }} </h1> <h1> {{ messageforlocal }} </h1></div>',
    data: function(){
        return{
            message:"This is the local component",
        }
    }
};

//local component registered locally and used as a child component
var nested = {
    template:'<div><Local></Local> <h1>This is nested component it acts as a parent component to Local </h1></div>',
    components:{
        Local
    }
};



// locally registered components should be declared as a component property in the vue instance
var app = new Vue({
    el:'#app',
    data:{
        text:"hello Vue",
        nofpresses:0,
    },
    components: {
        Local,
        nested,
    },
    methods:{
        clicked(){
            this.nofpresses+=1;
        }

    }
});