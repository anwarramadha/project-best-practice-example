const fs = require('fs')
const { parse } = require('vue-docgen-api')
const iterator = require('../../utils/file-iterator')
const {kebabCase} = require('lodash')
const htmlparser2 = require("htmlparser2")

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
        const markdown = generateMarkdown(component)
        fs.writeFileSync(`${outputPath}/${kebabCase(component.displayName)}.md`, markdown)
    })
}

const generateMarkdown = (component) => {
    return `---
title: ${component.displayName}
description: ${component.description}
---
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
| Name | Description | Props (if any) |
| ---- | ----------- | -------------- |
${Object.keys(slots).map((key) => {
    const slot = slots[key]
    return `| ${slot.name} | ${slot.description || ''} | ${generateSlotProps(slot.bindings)} |`
}).join('\n')}
    `
}

const generateSlotProps = (props) => {
    if (!props) {
        return ''
    }
    return `${props.map((prop) => {
        return `\`${prop.name}\`: ${prop.description}`
    }).join('\n')}`
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
\`\`\`vue
${examples.map((example) => {
    return example.content
}).join('\n')}
\`\`\`
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

    let result = ''
    let indent = ''
    // parse string into html
    const parser = new htmlparser2.Parser({
        onopentag(name, attribs) {
            const attributes = Object.keys(attribs).map((key) => key.startsWith('@') ? '' : `${key}='${attribs[key].replaceAll('\'', '"')}'`).join(' ')
            result += `${indent}::${name}${attribs ? `{${attributes}}` : ''}`
            indent += ' '
        },
        ontext(text) {
            result += `\n${indent}  ${text}`
        },
        onclosetag(tagname) {
            indent = indent.slice(0, -1)
            result += `\n${indent}::`
        }
    }, {decodeEntities: true, lowerCaseTags: false})

    parser.write(example[0].content)

    return `\n
## Component View
${result}
    `
}

module.exports = docsGenerator