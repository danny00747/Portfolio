<template>
    <v-window
        v-if="imgs.constructor === Array"
        show-arrows
        show-arrows-on-hover
        :next-icon="mdiArrowRight"
        :prev-icon="mdiArrowLeft"
    >
        <v-window-item v-for="img in imgs" :key="img" class="p-5 m-5">
            <v-card class="p-5 m-5" flat>
                <v-card-text>
                    <v-img :src="`/imgs/${img}`"></v-img>
                </v-card-text>
            </v-card>
        </v-window-item>
    </v-window>
</template>

<script>
import { mdiArrowLeft, mdiArrowRight } from '@mdi/js'

export default {
    name: 'Gallery',
    props: {
        imgs: {
            required: true,
            type: Array
        }
    },
    data: () => ({ mdiArrowRight, mdiArrowLeft })
}
</script>
