<script setup lang="ts">
    import { twJoin } from 'tailwind-merge';

    const props = withDefaults(defineProps<{
        as?: 'p' | 'div', // specify html element block is rendered as
        tw_width?: string, // specify block width
        tw_align?: 'text-left'|'text-center'|'text-right'|'text-justify'|'text-start'|'text-end', // text alignment direction
        tw_color?: string, // specify text color
        tw_font_weight?: string, //specify font weight
        tw_font_size?: string, //specify font size
        tw_font_family?: string, //specify font family
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned for your use case.
        tw_padding?: string, //spacify padding around block
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_gap?: string, // specify gap between elements if direction is flex
        tw_left?: string, 
        tw_right?: string,
        tw_top?: string,
        tw_bottom?: string,
    }>(), {
        as: 'p',
        tw_width: 'w-full',
        tw_align: 'text-left',
        tw_color: 'text-black',
        tw_font_weight: 'font-normal',
        tw_font_size: 'text-base',
        tw_font_family: '',
        tw_position: 'relative',
        tw_direction: 'flex-col',
        tw_gap: '',
        tw_padding: 'p-0',
        tw_left: '',
        tw_right: '',
        tw_top: '',
        tw_bottom: '',
    });

    const rootClasses = computed(() => twJoin('flex', props.tw_position, props.tw_padding, props.tw_left, props.tw_right, props.tw_top, props.tw_bottom, props.tw_width, props.tw_align, props.tw_color, props.tw_font_weight, props.tw_font_size, props.tw_font_family, props.tw_direction, props.tw_gap))
</script>

<template>
    <component :is="props.as" :class="rootClasses" >
        <slot />
    </component>
</template>

<style scoped>
   @import "tailwindcss";
</style>