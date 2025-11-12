import{j as i,a as l}from"./emotion-react-jsx-runtime.browser.esm-BU9uxSWI.js";import{B as n}from"./Button-DnQ3Dd05.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-B5b-D3XD.js";import"./preload-helper-PPVm8Dsz.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,b={title:"Shared/UI/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:o()}},a={args:{variant:"primary",label:"다음",fullWidth:!0}},r={args:{variant:"outline",label:"자세히",fullWidth:!1}},e={args:{},render:()=>i("div",{className:"btn-pair",style:{width:"335px"},children:[l(n,{variant:"outline",label:"자세히"}),l(n,{variant:"primary",label:"다음"})]})},t={args:{variant:"primary",label:"다음",fullWidth:!0,disabled:!0}},s={args:{variant:"outline",label:"자세히",fullWidth:!1,disabled:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: '다음',
    fullWidth: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: '자세히',
    fullWidth: false
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="btn-pair" style={{
    width: '335px'
  }}>
      <Button variant="outline" label="자세히" />
      <Button variant="primary" label="다음" />
    </div>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    label: '다음',
    fullWidth: true,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    label: '자세히',
    fullWidth: false,
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};const g=["Primary","Outline","PairButtons","Disabled","OutlineDisabled"];export{t as Disabled,r as Outline,s as OutlineDisabled,e as PairButtons,a as Primary,g as __namedExportsOrder,b as default};
