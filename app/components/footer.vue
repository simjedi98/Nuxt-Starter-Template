<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_padding?: string, // specify padding for your use case
        tw_background?: string, // specify background color of block
        tw_alignment?: string, // specify alignment of block content
        tw_gap?: string, // specify gap between child elements
        tw_width?: string, // specify width of block
        tw_height?: string, // specify height of block
        tw_z?: string, // specify z-index of block
        style_bindings?: {}
    }>(), {
        tw_position: 'relative',
        tw_direction: 'flex-row',
        tw_padding: '',
        tw_background: '',
        tw_alignment: '',
        tw_gap: '',
        tw_width: '',
        tw_height: ''
    });

    const rootClasses = computed(() => twMerge('flex py-2 px-34 w-full items-center justify-between', props.tw_position, props.tw_direction, props.tw_padding, props.tw_background, props.tw_alignment, props.tw_gap, props.tw_width, props.tw_height, props.tw_z) );
</script>

<template>
    <div :class="rootClasses" :style="props.style_bindings">
        <slot />
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>