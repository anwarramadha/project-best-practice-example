import docsGenerator from '@sutekitechid/project-best-practices-example/docs/generator/docs-generator.js'
import { resolve } from 'node:path'

docsGenerator(resolve(resolve(), '../../apps/campus-directory/components'), resolve(resolve(), '../../apps/docs/content/campus-directory'))
docsGenerator(resolve(resolve(), '../../packages/components'), resolve(resolve(), '../../apps/docs/content/commons'))
