import emailService from '../../../services/email-service.js';

export default {
    template: `
<div class="email-view">
        <div class="sender"><span>From: </span>{{email.from}}</div>
        <div class="sub-date">
        <div class="subject-read"><span>Subject: </span>{{email.subject}}</div>
        <div class="at">{{email.date}}</div>
    </div>
        <div class="content">
        {{email.body}}
        There's a hero If you look inside your heart You don't have to be afraid
        Of what you are There's an answer If you reach into your soul
        And the sorrow that you know Will melt away And then a hero comes along
        With the strength to carry on And you cast your fears aside
        And you know you can survive So when you feel like hope is gone
        Look inside you and be strong And you'll finally see the truth
        That a hero lies in you It's a long road When you face the world alone
        No one reaches out a hand For you to hold You can find love
        If you search within yourself And that emptiness you felt 
        Will disappear And then a hero comes along With the strength to carry on
        And you cast your fears aside And you know you can survive
        So when you feel like hope is gone Look inside…
        </div>
        <div class="btns">
        <router-link exact to="/email"><button class="back-btn"><i class="fas fa-arrow-circle-left"></i></button></router-link>
        <button class="delete-btn" @click="deleteMail"><i class="fas fa-trash-alt"></i></button>
    </div>
    </div>
    `,
    data() {
        return {
            email: {}
        }
    },
    computed: {},
    methods: {
        goback() {
            this.$router.push('/email');

        },
        deleteMail() {
            emailService.deleteEmail(this.email.id).then(res => {});
            this.$router.push('/email');
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
