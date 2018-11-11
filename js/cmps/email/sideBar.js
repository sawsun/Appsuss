// import emailService from '../../../services/email-service.js'

export default {
    //    props:{'emails'},
    //     {name:'getEmailsInfo', type: Object, required: false, default: {"test": "wow"}},
        // props: {
        //     emails: Array,
        //     getEmailsInfo: Object
        //   },
       props:['emails','all','read','unread'],
    //    props: { type: Object, required: true, default: {}},
       template:`<ul class="emails-side-bar">
       <li class="emails-side-bar-info" @click="setFilter('byAll')">Inbox<span><i class="fas fa-inbox"></i></span> <span class="info">{{all}}</span></li>
       <li class="emails-side-bar-info" @click="setFilter('byRead')">Read<span><i class="fas fa-envelope-open"></i></span><span class="info">{{read}}</span></li>
       <li class="emails-side-bar-info" @click="setFilter('byUnRead')">Unread<span><i class="fas fa-envelope"></i></span>  <span class="info">{{unread}}</span></li>
       <li class="emails-side-bar-info">Sent<span><i class="fas fa-paper-plane"></i></span></li>
       <li class="emails-side-bar-info">Trash<span><i class="fas fa-trash"></i></span></li>
   </ul>`,
       data(){
        return {
          
            filter:{
                byRead : 0,
                byUnRead: 0,
                byAll: 0,
            }
        }
       },
        created() {
        console.log('I was created as side bar',this.all,this.read,this.unread);           
        },
       computed: {
           lolo(){
               setTimeout(()=>{
                   console.log('emailInfo',this.emailInfo);
               },500)
          }
       },
       methods:{
        setFilter(status){
            // console.log('I was called to filter the emails my status is ',status);
            this.filter['byRead'] = 0; this.filter['byUnRead'] = 0;  this.filter['byAll'] = 0;
            this.filter[status] = 1;
            this.$emit('setFilter', {...this.filter});
    
        }
       }
    }