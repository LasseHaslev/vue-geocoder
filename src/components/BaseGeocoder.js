export default {

    props: {
        'auto-close': {
            default: 1000,
        }
    },

    data() {
        return {
            items: [],
            showResults: false,
            timeouter: null,
        }
    },

    methods: {
        select( item ) {
            this.$emit( 'selected', item );
        },

        show() {
            window.clearTimeout( this.timeouter );
            this.showResults = true;
        },
        hide() {
            this.showResults = false;
            window.clearTimeout( this.timeouter );
        },

        autoHide() {
            window.clearTimeout( this.timeouter );
            this.timeouter = window.setTimeout( this.hide, this.autoClose );
        },


    },
}
