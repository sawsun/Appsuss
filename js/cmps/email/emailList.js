import emailPreview from './emailPreview.js';

export default {
    props: ['emails'],
    template: `
   <ul class="emails-container">
        <li class="subject" v-for="mail in emails" :class="{unread:!mail.isRead}">
        <email-preview :email="mail" @click.native="readMail(mail)" ></email-preview>
        </li>
   </ul>
`,
    data() {
        return {

        }
    },
    created() {},
    methods: {
        readMail(mail) {
            this.$router.push(`email/readMail/${mail.id}`);
        },
    },

    components: {
        emailPreview
    }
}