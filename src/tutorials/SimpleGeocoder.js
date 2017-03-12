import {Geocoder} from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h1 class="title">Simple confirm</h1>
                    <p>This is a simple vue modal where you can listen to events if it is confirmed or canceled</p>
                    <pre>
    &#60;confirm @confirm="onConfirm" @cancel="onCancel" ref="confirm">&#60;/confirm>
        </pre>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

        <div class="container">
        <label class="label" for="">Geocoder</label>
        <geocoder @selected="onSelected" api-key=""></geocoder>
        </div>

                </div>
            </section>
            
        </div>
    `,

    methods: {
        onSelected( coordiante ) {
            console.log(coordiante);
        }
    },

    components: {
        Geocoder,
    },
}
