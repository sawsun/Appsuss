import memoPreview from './memo-preview.js';
import memoService from '../../../services/memo-service.js';
import memoTodo from './memo-todo.js';
import memoText from './memo-text.js';

export default {
    props: ['memos'],
    template: `
    <section class="memos-list" >
    <component  v-for="(memo,index) in memos" 
        :is="memo.type" 
        :memo="memo" :key="memo.id" 
        class="memo memo-preview"  
        v-on:delete-memo="deleteMemo"
        v-on:pin-memo="pinMemo" >
        </component>
    </section>`,
    data() {
        return {}
    },
    created() {},

    computed: {

    },
    methods: {
        deleteMemo(memoID) {
            memoService.deleteMemo(memoID).then(res => {
                memoService.memoQuery().then(memos => this.memos = memos);
            })
        },
        pinMemo(memoID) {
            memoService.pinMemo(memoID).then(res => {
                memoService.memoQuery().then(memos => this.memos = memos);
            })
        }

    },
    components: {
        memoPreview,
        memoTodo,
        memoText

    }
}