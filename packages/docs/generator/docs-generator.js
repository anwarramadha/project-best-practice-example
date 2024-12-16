const fs = require('fs')
const { parse } = require('vue-docgen-api')
const iterator = require('../../utils/file-iterator')
const {kebabCase} = require('lodash')

const docsGenerator = (inputPath, outputPath) => iterator(inputPath, (error) => {
    if (error) {
        throw error;
    } else {
        console.log('-------------------------------------------------------------');
        console.log('finished.');
        console.log('-------------------------------------------------------------');
    }
}, (file) => {
    copyComponentIntoDocs(file, outputPath)
    writeToMarkdown(file, outputPath)
})

const copyComponentIntoDocs = (file, outputPath) => {
    const filename = file.split('/').pop()
    fs.copyFileSync(file, `${outputPath}/components/${filename}`)
}

const writeToMarkdown = (file, outputPath) => {
    parse(file).then((component) => {
        // console.log(component)
        const markdown = generateMarkdown(component)
        console.log(markdown)

        fs.writeFileSync(`${outputPath}/${kebabCase(component.displayName)}.md`, markdown)
    })
}

const generateMarkdown = (component) => {
    return `
# ${component.displayName}
${component.description}
${generateImport(component.tags?.import)}
${generateProps(component.props)}
${generateEvents(component.events)}
${generateSlots(component.slots)}
${generateMethods(component.methods)}
${generateExample(component.tags?.examples)}
${generateMarkdownComponent(component.tags?.examples)}
`
}

const generateProps = (props) => {
    if (!props) {
        return ''
    }
    return `## Props
| Name | Description | Type | Required | Default |
| ---- | ----------- | ---- | -------- | ------- |
${Object.keys(props).map((key) => {
    const prop = props[key]
    return `| ${prop.name} | ${prop.description || ''} | ${prop.type.name} | ${prop.required ? true : false} | ${prop.defaultValue?.value} |`
}).join('\n')}
    `
}

const generateEvents = (events) => {
    if (!events) {
        return ''
    }
    return `
## Events
| Name | Description |
| ---- | ----------- |
${Object.keys(events).map((key) => {
    const event = events[key]
    return `| ${event.name} | ${event.description || ''}`
}).join('\n')}
    `
}

const generateSlots = (slots) => {
    if (!slots) {
        return ''
    }
    return `
## Slots
| Name | Description |
| ---- | ----------- |
${Object.keys(slots).map((key) => {
    const slot = slots[key]
    return `| ${slot.name} | ${slot.description || ''} |`
}).join('\n')}
    `
}

const generateMethods = (methods) => {
    if (!methods) {
        return ''
    }
    return `
## Methods
| Name | Description | Parameters | Return |
| ---- | ----------- | ---------- | ------ |
${Object.keys(methods).map((key) => {
    const method = methods[key]
    return `| ${method.name} | ${method.description || ''} | ${generateParameters(method.params)} | ${method.returns?.type.name} |`
}).join('\n')}
    `
}

const generateExample = (examples) => {
    if (!examples) {
        return ''
    }
    return `
## Example
${examples.map((example) => {
    return `
        ${example.content}
    `
}).join('\n')}
    `
}

const generateImport = (importTag) => {
    if (!importTag) {
        return ''
    }
    return `
## Import
\`\`\`js
${importTag[0].description}
\`\`\`
    `
}

const generateMarkdownComponent = (example) => {
    if (!example) {
        return ''
    }
    
    // get all component tags
    const componentTags = example[0].content.match(/<\w+/g)
    // get all component names
    const componentNames = componentTags.map((tag) => tag.replace('<', ''))
    // get all component properties (component props are the value in the tag without @ symbol followed by the value, e.g. placeholder="Enter your name" would be placeholder)
    const componentProperties = example[0].content.match(/\w+(?==)/g)
    // get all component prop values
    const componentPropValues = example[0].content.match(/"\w+"/g)

    return `
## Component Example
::${componentNames[0]}${componentProperties ? `{${componentProperties?.map((prop, index) => `${prop}=${componentPropValues[index]}`).join(' ')}}` : ''}
::
    `
}

module.exports = docsGenerator