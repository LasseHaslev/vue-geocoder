import Axios from 'axios';
export default {
	props: {
	    'api-key': {
	        type: String,
	        default: null,
	    },
	},

    methods: {
        search( address ) {
            return Axios.get( this.buildUrl( address ) );
        },

        gotResults( data ) {
            this.items = this.format( data );
        },

        buildUrl(address) {
            return 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.apiKey;
        },

        format( data ) {
            return data.data.results.map( function( item ) {
                return {
                    'address': item.formatted_address,
                    'lat': item.geometry.location.lat,
                    'lng': item.geometry.location.lng,
                }
            } );
        },

    },

}
