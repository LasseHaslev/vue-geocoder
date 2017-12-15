import BaseGeocoder from './BaseGeocoder';
import UsesGoogleApi from './mixins/UsesGoogleApi';
import {Autocomplete} from '@lassehaslev/vue-autocomplete';
export default {

    mixins: [ BaseGeocoder, UsesGoogleApi ],

    template: `
        <div>
            <autocomplete @selected="select" :placeholder="placeholder" :choice-adaptor="function( item ) { return item.address; }" :adaptor="format" :search="search"></autocomplete>
        </div>
    `,

    props: ['setPoint'],

    methods: {
        select( coordinate ) {
            this.setPoint({lat: coordinate.lat, lng: coordinate.lng});
        }
    },
    components: {
        Autocomplete,
    }
}
