<template>
    <v-container>
        <v-card>
            <v-toolbar flat dark color="red">
                <v-btn icon aria-label="Go back" @click="goBack">
                    <v-icon>{{ mdiArrowLeft }}</v-icon>
                </v-btn>
                <h2 class="headline white--text">
                    {{ title }}
                </h2>
                <v-spacer />
                <v-chip color="blue" label text-color="white">
                    {{ time }}
                </v-chip>
                <v-chip class="ml-2" :color="tagColor" label text-color="white">
                    {{ tag }}
                </v-chip>
            </v-toolbar>
            <v-card-text>
                <!--eslint-disable-next-line-->
                <section class="body-1" v-html="html" />

                <div v-if="img">
                    <Gallery v-if="img.constructor === Array" :imgs="img" />
                    <v-img v-else-if="img" :src="`/imgs/${img}`" />
                </div>
                <v-divider v-if="imgs" vertical></v-divider>
                <div v-if="imgs">
                    <Gallery v-if="imgs.constructor === Array" :imgs="imgs" />
                    <v-img v-else-if="imgs" :src="`/imgs/${imgs}`" />
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
import { mdiArrowLeft } from '@mdi/js'
import getTagColor from '@/tags'
import content from '@/content'
import Gallery from '@/components/Gallery'

export default {
    name: 'Name',
    components: { Gallery },
    validate({ params }) {
        return content.includes(params.slug)
    },
    async asyncData({ params }) {
        const fileContent = await import(`~/content/${params.slug}.md`)
        return {
            ...fileContent.attributes,
            html: fileContent.html
        }
    },
    data: () => ({
        img: null,
        mdiArrowLeft
    }),
    computed: {
        tagColor() {
            return getTagColor(this.tag)
        }
    },
    methods: {
        goBack() {
            this.$router.push('/')
        }
    },
    head() {
        return {
            title: this.title
        }
    }
}
</script>
