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
        tw_block_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_block_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_block_alignment?: string,
        tw_block_padding?: string,
        tw_block_gap?: string, // specify gap between annotation and summary block
        tw_block_width?: string, // specify width of entire block
        annotation_path?: string, // path to svg annotation asset
        annotation_path_props?: Vector[],
        annotation_fill?: string,
        annotation_width?: number,
        annotation_height?: number,
        annotation_viewBox?: string,
        tw_meta_block_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_meta_block_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_meta_block_alignment?: string,
        tw_meta_block_padding?: string,
        tw_meta_block_gap?: string, // specify gap between annotation and summary block
        tw_meta_block_width?: string, // specify width of entire block
        heading_value?: string // text value to be rendered as heading
        heading_as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', //html element heading text can be rendered as
        metadata_value?: string // text value to be rendered as metadata content
        summary_value?: string, // text value to be rendered as body content
        tw_position?: 'relative'|'absolute'|'fixed'|'static'|'sticky', //specify which utility class for controlling how block is positioned
        tw_direction?: 'flex-row'|'flex-col'|'flex-row-reverse'|'flex-col-reverse',
        tw_width?: string, // specify width of block
        tw_gap?: string, // specify gap between heading and body content
        tw_header_classes?: string,
        tw_body_classes?: string,
        tw_heading_classes?: string, // specify utility classes to be appled to heading text
        tw_metadata_classes?: string, // specify utility classes to be appled to metadata text
        tw_summary_classes?: string, // specify utility classes to be appled to body text
        heading_style_bindings?: {},
        metadata_style_bindings?: {},
        summary_style_bindings?: {}
    }>(), {
        tw_block_position: 'relative',
        tw_block_direction: 'flex-col',
        tw_block_alignment: '',
        tw_block_padding: '',
        tw_block_gap: 'gap-7',
        tw_block_width: 'w-full',
        tw_meta_block_position: 'relative',
        tw_meta_block_direction: 'flex-row',
        tw_meta_block_alignment: 'justify-start',
        tw_meta_block_padding: '',
        tw_meta_block_gap: 'gap-7',
        tw_meta_block_width: '',
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
    <GroupBlock :tw_alignment="props.tw_block_alignment" :tw_padding="props.tw_block_padding" :tw_gap="props.tw_block_gap" :tw_width="props.tw_block_width" :tw_position="props.tw_block_position" :tw_direction="props.tw_block_direction" >
        <AnnotatedMetaHeading :tw_block_position="props.tw_meta_block_position" :tw_block_direction="props.tw_meta_block_direction" :tw_block_alignment="props.tw_meta_block_alignment" :tw_block_padding="props.tw_meta_block_padding" :tw_block_gap="props.tw_meta_block_gap" :tw_block_width="props.tw_meta_block_width" :annotation_path="props.annotation_path" :annotation_path_props="props.annotation_path_props" :annotation_fill="props.annotation_fill" :annotation_width="props.annotation_width" :annotation_height="props.annotation_height" :annotation_viewBox="props.annotation_viewBox" :heading_as="props.heading_as" :heading_value="props.heading_value" :metadata_value="props.metadata_value" :tw_position="props.tw_position" :tw_direction="props.tw_direction" :tw_gap="props.tw_gap" :tw_width="props.tw_width" :tw_header_classes="props.tw_header_classes" :tw_body_classes="props.tw_body_classes" :tw_heading_classes="props.tw_heading_classes" :tw_metadata_classes="props.tw_metadata_classes" :heading_style_bindings="props.heading_style_bindings" :metadata_style_bindings="props.metadata_style_bindings" />
        <TextBlock as="div" :label="props.summary_value" :tw_classes="props.tw_summary_classes" :style_bindings="props.summary_style_bindings" />
    </GroupBlock>
</template>

<style scoped>
   @import "tailwindcss";
</style>