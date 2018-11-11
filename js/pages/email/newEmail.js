import emailService from '../../../services/email-service.js';
export default {
    template: `
    <div class="email-view">
        <div class="sender"><span>From: </span>
            <input type="text"  
            v-model.trim="email.from" 
            placeholder="example@gmail.com" 
            class="new-email-from" >
        </div>

        <div class="new-email-subject-div"><span>Subject:</span>
            <input type="text"  
            v-model.trim="email.subject"
            placeholder="Subject goes here" 
            class="new-email-subject-input" >
        </div>
        
        <textarea class="content-new-email" 
        placeholder=" Your Message Content Goes In Here ..."
        v-model.trim="email.body">   
        </textarea>

        <div class="actoin-bar">
        <div class="btns">
        <router-link exact to="/email"><button class="back-btn"><i class="fas fa-arrow-circle-left"></i></button></router-link>
        </div>
        <i class="fa fa-paper-plane fa-lg send-icon" 
        aria-hidden="true" title="Send Email" @click="sendEmail"></i>
        </div>
    </div>
    `,
    data() {
        return {
            email: {
                from: '',
                subject: '',
                body: ''
            }
        }
    },
    computed: {},
    methods: {
        goback() {
            this.$router.push('/email');

        },

        sendEmail() {
            var tmp = { ...this.email
            }
            emailService.sendEmail(tmp).then(res => {
                setTimeout(() => {
                    this.$router.push('/email');
                }, 500)
            });
        }
    },
    mounted: {},
    created() {
        const emailID = this.$route.params.emailID;
        if (emailID) {
            emailService.getEmailbyId(emailID).then(email => {
                this.email = email;
                this.email.isRead = true;
                emailService.saveEmailData(this.email.id);
            })
        }
    },
}