<template>
    <v-row>
        <v-col id="intro" cols="12">
            <Intro />
        </v-col>
        <v-col id="project" cols="12">
            <Proj />
        </v-col>
        <v-col id="info" cols="12" md="6">
            <Infos />
        </v-col>
        <v-col id="skills" cols="12" md="6">
            <Skills />
        </v-col>
        <v-col id="activities" cols="12">
            <ActivitiesTable :items="items" />
        </v-col>
    </v-row>
</template>

<script>
import ActivitiesTable from '@/components/ActivitiesTable'
import Infos from '@/components/Infos'
import Proj from '@/components/Proj'
import Intro from '@/components/Intro'
import Skills from '@/components/Skills'
import content from '@/content'

export default {
    components: { ActivitiesTable, Infos, Intro, Skills, Proj },
    asyncData() {
        async function asyncImport(item) {
            const { attributes } = await import(`~/content/${item}.md`)
            return { ...attributes, slug: item }
        }
        return Promise.all(content.map((e) => asyncImport(e))).then((res) => {
            return {
                items: res
            }
        })
    },
    head: () => ({
        title: 'Home'
    })
}
</script>
