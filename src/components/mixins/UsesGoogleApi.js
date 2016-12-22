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
            var self = this;
            Axios.get( this.buildUrl( address ) ).then( function(response) {
                self.gotResults( response.data );
            } );
        },

        gotResults( data ) {
            this.items = this.format( data );
        },

        buildUrl(address) {
            return 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.apiKey;
        },

        format( data ) {
            return data.results.map( function( item ) {
                return {
                    'address': item.formatted_address,
                    'lat': item.geometry.location.lat,
                    'lng': item.geometry.location.lng,
                }
            } );
        },

    },

}
