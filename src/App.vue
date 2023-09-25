<template>
    <v-app>
        <v-app-bar>
            <div class="d-flex ease-width" :style="{ width: `${width}px` }">
                <v-autocomplete :menu-icon="isFocused ? 'mdi-menu-down' : null" @mouseenter="width = 300" @mouseover="width = 300" @mouseleave="width = isFocused ? 300 : 45" @focus="focus()" @blur="blur()" placeholder="Search views" variant="solo-filled" density="compact" prepend-inner-icon="mdi-magnify" rounded hide-details></v-autocomplete>
            </div>
        </v-app-bar>
    </v-app>
</template>

<script setup>
import { ref } from "vue";

const width = ref(45);
const isFocused = ref(false);

function focus() {
    isFocused.value = true;
    width.value = 300;
}

function blur() {
    isFocused.value = false;
    width.value = 45;
}
</script>

<style>
.ease-width {
    transition: width 0.5s ease-in-out;
}
</style>
