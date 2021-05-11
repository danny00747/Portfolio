<template>
    <v-app dark>
        <v-app-bar color="indigo darken-2" app dark>
            <v-toolbar-title>
                <v-btn text to="/">O. Daniel</v-btn>
            </v-toolbar-title>
            <v-spacer />
            <v-btn text to="/#intro">Intro</v-btn>
            <v-btn text to="/#skills">Skills</v-btn>
            <v-btn text to="/#activities">Activities</v-btn>
        </v-app-bar>
        <v-content>
            <v-container fill-height>
                <v-row no-gutters justify="center">
                    <v-col>
                        <nuxt />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {}
</script>

<style>
html {
    overflow-y: auto;
}
</style>
