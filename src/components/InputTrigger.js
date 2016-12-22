import BaseInputTrigger from './BaseInputTrigger';
export default {

    mixins: [ BaseInputTrigger ],

    template: `
        <p class="control">
            <input type="text"
                class="input"
               @keyup="registeredStop"
    @blur="$emit( 'blur' )"
    @focus="$emit( 'focus' )"
                v-model="message"
                :placeholder="placeholder"
                >
        </p>
    `,
}
