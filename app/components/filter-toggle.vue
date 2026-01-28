<script setup lang="ts">
    import { twMerge } from 'tailwind-merge';

    const model = defineModel<boolean>();
        
    const props = withDefaults(defineProps<{
        label?: string,
        tw_position?: 'static'|'fixed'|'absolute'|'relative'|'sticky',
        tw_display?: string,
        tw_padding?: string,
        tw_width?: string,
        tw_height?: string,
        custom?: boolean,
        default_color?: string,
        hover_color?: string,
        active_color?: string
        tw_text_classes?: string
        style_bindings?: {}
    }>(), {
        label: 'Filter',
        tw_position: 'relative',
        tw_display: '',
        tw_padding: '',
        tw_width: '',
        tw_height: '',
        custom: false,
        default_color: '#808080',
        hover_color: '#333333',
        active_color: '#FA002A',
        tw_text_classes: ''
    });

const color = ref({accent: model.value ? props.active_color : props.default_color});

    const rootClasses = 'flex cursor-pointer';
    const textClasses = 'relative text-base md:text-xl lg:text-xl font-normal';

    const mergedrootClasses = twMerge(rootClasses, props.tw_position, props.tw_display, props.tw_padding, props.tw_width, props.tw_height);
    const mergedtextClasses = twMerge(textClasses, props.tw_text_classes);

    const toggle = () => model.value = !model.value;

    const hoveron = () => tweens.changeaccent_std(color, props.hover_color, 0.5);

    const hoveroff = () => tweens.changeaccent_std(color, model.value? props.active_color : props.default_color, 0.5);

    watch(model, async (newVal) => {

        tweens.changeaccent_std(color, newVal? props.active_color: props.default_color, 0.5);

    });

</script>

<template>
    <div :class="mergedrootClasses" @click="toggle" @mouseenter="hoveron" @mouseleave="hoveroff" :style="props.style_bindings">
        <slot v-if="props.custom" />
        <p v-if="!props.custom" :class="mergedtextClasses" :style="{color: color.accent}">{{ props.label }}</p>
    </div>
</template>

<style scoped>
   @import "tailwindcss";
</style>