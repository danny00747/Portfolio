<template>
    <InfoCard color="green">
        <template v-slot:header>
            <h2>Activities</h2>
        </template>
        <template v-slot>
            <v-data-table
                :headers="headers"
                :items="items"
                :show-sort-icons="true"
                :sort-desc="[false, true]"
                :footer-props="{
                    'items-per-page-options': [5, 10, 20, -1]
                }"
                :items-per-page="10"
                sort-by="tag"
            >
                <template v-slot:item.title="{ item }">
                    <v-btn text color="primary" :to="`/${item.slug}`">
                        {{ item.title }}
                    </v-btn>
                </template>
                <template v-slot:item.time="{ item }">
                    <v-chip color="blue" label text-color="white">
                        {{ item.time }}
                    </v-chip>
                </template>
                <template v-slot:item.tag="{ item }">
                    <v-chip
                        :v-if="item.tag"
                        :color="getTagColor(item.tag)"
                        label
                        text-color="white"
                    >
                        {{ item.tag }}
                    </v-chip>
                </template>
                <template v-slot:footer>
                    <v-toolbar flat>
                        <v-spacer />
                        Total
                        <v-chip color="blue" dark class="ml-2">
                            {{ total }}
                        </v-chip>
                    </v-toolbar>
                </template>
            </v-data-table>
        </template>
    </InfoCard>
</template>
<script>
import getTagColor from '@/tags'
import InfoCard from '@/components/InfoCard'

export default {
    name: 'ActivitiesTable',
    components: { InfoCard },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        headers: [
            { text: 'Title', align: 'start', value: 'title', sortable: true },
            {
                text: 'Hours spent',
                value: 'time',
                align: 'center',
                sortable: true
            },
            { text: 'Category', value: 'tag', align: 'center' }
        ]
    }),
    computed: {
        total() {
            const totalInMinutes = this.items
                .map((e) => e.time)
                .map((e) => {
                    const spl = e.split(':')
                    return Number(spl[1]) + Number(spl[0]) * 60
                })
                .reduce((total, current) => (total += current), 0)
            const hours = Math.floor(totalInMinutes / 60)
            const minutes = totalInMinutes % 60
            return `${hours}h ${minutes}m`
        }
    },
    methods: { getTagColor }
}
</script>
