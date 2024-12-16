<template>
	<div class="flex gap-4 items-center">
		<i class="si-search"></i>
		<SInput
			:placeholder="placeholder"
			class="w-[300px]"
			@input="$event => $emit('input', $event)"
		/>
	</div>
</template>

<script lang="ts">
/**
 * SSearchInput is a component that is used to display a search input field.
 * @displayName SSearchInput
 *
 * @import
 * import { SInput } from '@sutekitechid/flowbite-vue'
 *
 * @example
 * <SSearchInput @input="onInput" placeholder="Search" />
 *
 */

export default {
	props: {
		/**
		 * The placeholder of the search input field.
		 */
		placeholder: {
			type: String,
			default: 'Search',
			required: true,
		},
		class: {
			type: String,
			default: '',
		},
	},
	setup() {
		return {}
	},
	emits: ['input'],
}
</script>

<style scoped>
:deep(.s-input) {
	border: none;
}
:deep(input:focus) {
	outline: none !important;
	border: none !important;
	box-shadow: none !important;
}
</style>
