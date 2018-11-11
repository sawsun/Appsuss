import emailService from '../../../services/email-service.js';
import emailPreview from './emailPreview.js';


export default{
   props:['emails'] ,
   template:`
   <ul class="emails-container">
        <li class="subject" v-for="mail in emails" :class="{unread:!mail.isRead}">
        <!-- <div style="width:50;" @click="toggleRead(mail)">::</div> -->
        <email-preview :email="mail" @click.native="readMail(mail)" ></email-preview>
        </li>
   </ul>
`,
data(){
    return{
    
    }
},
   created(){
      console.log('emailList cmp was created',this.emails);
   },
   methods:{
    readMail(mail){
        console.log('mail.id:', mail.id);
        this.$router.push(`email/readMail/${mail.id}`);  
    },

   
   },

   components:{
    emailPreview
}
}