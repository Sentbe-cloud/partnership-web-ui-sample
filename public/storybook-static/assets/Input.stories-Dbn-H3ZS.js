import{I as o}from"./Input-D1WLcDzZ.js";import"./emotion-react-jsx-runtime.browser.esm-aUWFuhMu.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Bwffw9_S.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Shared/UI/Input",component:o,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{label:"보내는 금액",value:"1,000",readOnly:!0}},a={args:{label:"보내는 금액",value:"1,000",readOnly:!1,onChange:s=>console.log("Value changed:",s)}},r={args:{label:"받는 금액",value:"147,960.49",readOnly:!0}},n={args:{label:"송금 금액",value:"10,000,000",readOnly:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: '보내는 금액',
    value: '1,000',
    readOnly: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: '보내는 금액',
    value: '1,000',
    readOnly: false,
    onChange: value => console.log('Value changed:', value)
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: '받는 금액',
    value: '147,960.49',
    readOnly: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: '송금 금액',
    value: '10,000,000',
    readOnly: false
  }
}`,...n.parameters?.docs?.source}}};const p=["ReadOnly","Editable","ReceivedAmount","LargeAmount"];export{a as Editable,n as LargeAmount,e as ReadOnly,r as ReceivedAmount,p as __namedExportsOrder,m as default};
