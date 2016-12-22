export default {

    props: {
        debounce: {
            type: Number,
            default: 300,
        },

        placeholder: {
            type: String,
            default: '',
        },

        message: {
            type: String,
            default: '',
        }
    },

    mounted() {
        if (this.$options.propsData.message) {
            this.message = this.$options.propsData.message;
        }
    },

    data() {
        return {
            hiddenMessage: '',
            timeouter: null,
        }
    },

    computed: {
        message: {
            get() {
                return this.hiddenMessage;
            },
            set( message ) {
                this.hiddenMessage = message;
            }
        }
    },

    methods: {
        registeredStop() {
            this.startTimer();
        },

        startTimer() {
            window.clearTimeout( this.timeouter );
            this.timeouter = window.setTimeout( this.notify, this.debounce );
        },

        notify() {
            this.$emit( 'trigger', this.message );
        }

    },

}
