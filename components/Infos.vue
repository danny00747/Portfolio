<template>
    <InfoCard>
        <template v-slot:header>
            <h2>Quelques informations à mon propos</h2>
        </template>
        <template v-slot>
            <v-list-item v-for="key in keys" :key="key.key">
                <v-list-item-content>
                    <v-list-item-title>{{ key.key }}</v-list-item-title>
                    <v-list-item-subtitle v-if="key.value">{{
                        key.value
                    }}</v-list-item-subtitle>
                    <v-list-item-subtitle v-else-if="key.href">
                        <a :href="key.href">
                            {{ key.href }}
                        </a>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>
    </InfoCard>
</template>

<script>
import InfoCard from '@/components/InfoCard'

export default {
    name: 'Infos',
    components: { InfoCard },
    data: () => ({
        keys: [
            { key: 'Name', value: 'Daniel Olivier' },
            { key: 'Town', value: 'Brussels' },
            { key: 'Email', value: 'olvdanny@protonmail.com' },
            { key: 'GitHub', href: 'https://github.com/danny00747' }
        ]
    })
}
</script>
