<template>
    <v-card class="elevation-1" height="100%">
        <v-toolbar flat :color="color" class="justify-center" dark>
            <slot name="header"></slot>
        </v-toolbar>
        <v-card-text class="body-1">
            <slot />
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'InfoCard',
    props: {
        color: {
            type: String,
            default: 'teal'
        }
    }
}
</script>
