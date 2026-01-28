<script setup lang="ts">
    type Vector = {
        id?: string,
        d?: string,
        fill?: string,
        stroke?: string,
        strokeWidth?: number,
        opacity?: number
    }

    const props = withDefaults(defineProps<{
        annotation_path?: string, // path to svg annotation asset
        annotation_path_props?: Vector[],
        annotation_fill?: string,
        annotation_width?: number,
        annotation_height?: number,
        annotation_viewBox?: string,
        tw_block_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_block_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_block_alignment?: string,
        tw_block_padding?: string,
        tw_block_gap?: string, // specify gap between annotation and summary block
        tw_block_width?: string, // specify width of entire block
        heading_value?: string|null, // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', //html element heading text can be rendered as
        metadata_value?: string|null, // text value to be rendered as body content
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_width?: string, // specify width of block
        tw_gap?: string, // specify gap between heading and body content
        tw_header_classes?: string,
        tw_body_classes?: string,
        tw_heading_classes?: string, // specify utility classes to be appled to heading text
        tw_metadata_classes?: string, // specify utility classes to be appled to body text
        heading_style_bindings?: {},
        metadata_style_bindings?: {}
    }>(), {
        tw_block_position: 'relative',
        tw_block_direction: 'flex-row',
        tw_block_alignment: 'justify-start',
        tw_block_padding: '',
        tw_block_gap: 'gap-7',
        tw_block_width: '',
        heading_value: 'Summary Block',
        heading_as: 'h3',
        metadata_value: 'A component type that is coupled with a short summary',
        tw_position: 'relative',
        tw_direction: 'flex-col',
        tw_width: 'w-full',
        tw_gap: 'gap-3',
        tw_header_classes:'',
        tw_body_classes: '',
        tw_heading_classes: '',
        tw_metadata_classes: ''
    });
</script>

<template>
    <GroupBlock :tw_alignment="props.tw_block_alignment" :tw_padding="props.tw_block_padding" :tw_gap="props.tw_block_gap" :tw_width="props.tw_block_width" :tw_position="props.tw_block_position" :tw_direction="props.tw_block_direction">
        <div>
            <VectorRenderer :path="props.annotation_path" :paths="props.annotation_path_props" :fill="props.annotation_fill" :width="props.annotation_width" :height="props.annotation_height" :viewBox="props.annotation_viewBox"/>
        </div>
        <SummaryBlock :heading_as="props.heading_as" :heading_value="props.heading_value" :summary_value="props.metadata_value" :tw_position="props.tw_position" :tw_direction="props.tw_direction" :tw_gap="props.tw_gap" :tw_width="props.tw_width" :tw_header_classes="props.tw_header_classes" :tw_body_classes="props.tw_body_classes" :tw_heading_classes="props.tw_heading_classes" :tw_summary_classes="props.tw_metadata_classes" :heading_style_bindings="props.heading_style_bindings" :summary_style_bindings="props.metadata_style_bindings"/>
    </GroupBlock>
</template>

<style scoped>
   @import "tailwindcss";
</style>