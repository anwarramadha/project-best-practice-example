---
title: SDropdownTest
description: SDropdownTest is a component that is used to display a dropdown.
---

## Import
```js
import { SDropdownTest } from '@sutekitechid/flowbite-vue'
```
    
## Props
| Name | Description | Type | Required | Default |
| ---- | ----------- | ---- | -------- | ------- |
| options | The options of the dropdown. | array | false | [] |
    

## Events
| Name | Description |
| ---- | ----------- |
| input | 
    

## Slots
| Name | Description | Props (if any) |
| ---- | ----------- | -------------- |
| default | This is a slot | `item`: The value of the dropdown. |
    


## Example
```vue
<SDropdownTest :options="['1', '2', '3']" @input="onInput">
 <SDropdownTestItem>1</SDropdownTestItem>
 <SDropdownTestItem>2</SDropdownTestItem>
</SDropdownTest>
```
    


## Component View
::SDropdownTest{:options='["1", "2", "3"]' }
   
  ::SDropdownTestItem{}
    1
 ::
   
  ::SDropdownTestItem{}
    2
 ::
   

::
    
