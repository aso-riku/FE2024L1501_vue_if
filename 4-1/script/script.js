// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 1
        };
    },
    methods: {
        increment() {
            this.count ++;
        },
        decrement() {
            this.count --;
        }
    },
    computed: {
        isPass() {
            return this.count >= 60;
        }
    }
});