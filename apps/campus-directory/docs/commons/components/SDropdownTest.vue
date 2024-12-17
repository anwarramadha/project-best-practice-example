<template>
	<SDropdown>
		<!--
            @slot This is a slot
            @binding item The value of the dropdown.
        -->

		<slot :item="false" />
	</SDropdown>
</template>

<script lang="ts">
import { defineEmits } from 'vue'
/**
 * SDropdownTest is a component that is used to display a dropdown.
 * @displayName SDropdownTest
 *
 * @import
 * import { SDropdownTest } from '@sutekitechid/flowbite-vue'
 *
 * @example
 * <SDropdownTest :options="['1', '2', '3']" @input="onInput">
 *  <SDropdownTestItem>1</SDropdownTestItem>
 *  <SDropdownTestItem>2</SDropdownTestItem>
 * </SDropdownTest>
 */
export default {
	props: {
		/**
		 * The options of the dropdown.
		 */
		options: {
			type: Array,
			default: () => [],
		},
	},
	setup() {
		const emits = defineEmits<{
			/**
			 * Emitted when the value of the dropdown changes.
			 * @event input
			 * @property {string} value - The value of the dropdown.
			 */
			input: (value: string) => void
		}>()
		return {
			emits,
		}
	},
}
</script>
