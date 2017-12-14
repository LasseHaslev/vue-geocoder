<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-geocoder">
                        @lassehaslev/vue-geocoder
                    </a>
                </h3>
            </div>
        </section>

        <simple-geocoder></simple-geocoder>

        <div class="hero is-primary is-fullheight">
            <div class="hero-body">
                <div class="container is-fluid"></div>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleGeocoder from './tutorials/SimpleGeocoder';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SimpleGeocoder,
    }
}
</script>
