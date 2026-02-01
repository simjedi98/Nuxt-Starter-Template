<script setup lang="ts">
    import type { NuxtError } from '#app';

    const props = defineProps<{
        error: NuxtError
    }>();
</script>

<template>
    <NuxtLayout >
        <div class="relative flex flex-col gap-4.5 items-center justify-center w-screen h-screen">
            <TextBlock :label="`${error.statusCode}`" :as="'div'" tw_classes="text-xl md:text-xl lg:text-xl text-white leading-6.5 font-bold" />
            <TextBlock :label="error.statusCode === 404? 'Oooh Snap! seems you\'ve wondered too far' : 'Oooh Snap! looks like we\'ve ran into an error.'" :as="'div'" tw_classes="text-[10px] md:text-[10px] lg:text-[10px] text-white leading-4 font-normal" />
        </div>
    </NuxtLayout>
</template>

<style scoped>
   @import "tailwindcss";
</style>