import plugin from "tailwindcss/plugin"
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    '../../node_modules/@sutekitechid/flowbite-vue/**/*.{vue,js,jsx,ts,tsx, mjs}',
    '../../node_modules/@sutekitechid/project-best-practices-example/**/*.{vue,js,jsx,ts,tsx, mjs}'
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.sky, // Light mode Datepicker color
        "vtd-secondary": colors.gray, // Dark mode Datepicker color
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), 
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.bold') },
        'h3': { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.bold') },
        'ul': { listStyleType: theme('list-disc'), marginLeft: theme('spacing.4') },
        'ol': { listStyleType: theme('list-decimal'), marginLeft: theme('spacing.4') },
      })
    })
  ],
  presets: [require('../../node_modules/@sutekitechid/flowbite-vue/config/configPreset.js')]
}
