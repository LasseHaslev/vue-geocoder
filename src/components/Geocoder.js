import InputTrigger from './InputTrigger';
import BaseGeocoder from './BaseGeocoder';
import UsesGoogleApi from './mixins/UsesGoogleApi';
export default {

    mixins: [ BaseGeocoder, UsesGoogleApi ],

    template: `
        <div>
        <input-trigger @blur="autoHide" @focus="show" @trigger="search" placeholder="Please insert the address you wish to find."></input-trigger>
        <div v-if="showResults && items.length" class="panel is-default">
            <a v-for="coordinate in items" @click.prevent="select( coordinate )" href="#" class="panel-block">{{ coordinate.address }}</a>
        </div>
        </div>
    `,

    components: {
        InputTrigger,
    }
}
