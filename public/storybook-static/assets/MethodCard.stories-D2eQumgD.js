import{j as p,a as l}from"./emotion-react-jsx-runtime.browser.esm-aUWFuhMu.js";import{M as e}from"./MethodCard-D6cvyxRd.js";import{R as T}from"./iframe-Bwffw9_S.js";import"./jsx-runtime-u17CrQMm.js";import"./Card-DkFxeaMW.js";import"./Text-DV9gpm5i.js";import"./emotion-react.browser.esm-mnbJeROg.js";import"./typography-BLgLjTO_.js";import"./baseColors-DqUdiJtl.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Widgets/MethodCard",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"송금 방법 제목"},fee:{control:"text",description:"수수료"},label:{control:"text",description:"라벨 텍스트"},labelType:{control:"select",options:["express","standard"],description:"라벨 타입"},deliveryTime:{control:"text",description:"배송 시간"},isSelected:{control:"boolean",description:"선택 상태"}}},r={args:{title:"은행",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:!1}},a={args:{title:"은행",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:!0}},i={args:{title:"카드",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:!1}},d={args:{title:"은행",fee:"100 USDT",label:"일반",labelType:"standard",deliveryTime:"09/15 도착",isSelected:!1}},o={args:{title:"은행 - 2",fee:"200 USDT",label:"방법",labelType:"express",isSelected:!1}},n={args:{},render:()=>p("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"335px"},children:[l(e,{title:"은행",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:!1}),l(e,{title:"카드",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:!1}),l(e,{title:"은행 - 2",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:!1}),l(e,{title:"은행",fee:"100 USDT",label:"일반",labelType:"standard",deliveryTime:"09/15 도착",isSelected:!0})]})},c={args:{},render:()=>{const[t,s]=T.useState("bank-standard");return p("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"335px"},children:[l(e,{title:"은행",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:t==="bank-express",onClick:()=>s("bank-express")}),l(e,{title:"카드",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:t==="visa",onClick:()=>s("visa")}),l(e,{title:"은행 - 2",fee:"200 USDT",label:"방법",labelType:"express",deliveryTime:"오늘 도착",isSelected:t==="moneygram",onClick:()=>s("moneygram")}),l(e,{title:"은행",fee:"100 USDT",label:"일반",labelType:"standard",deliveryTime:"09/15 도착",isSelected:t==="bank-standard",onClick:()=>s("bank-standard")})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: '은행',
    fee: '200 USDT',
    label: '방법',
    labelType: 'express',
    deliveryTime: '오늘 도착',
    isSelected: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: '은행',
    fee: '200 USDT',
    label: '방법',
    labelType: 'express',
    deliveryTime: '오늘 도착',
    isSelected: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: '카드',
    fee: '200 USDT',
    label: '방법',
    labelType: 'express',
    deliveryTime: '오늘 도착',
    isSelected: false
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: '은행',
    fee: '100 USDT',
    label: '일반',
    labelType: 'standard',
    deliveryTime: '09/15 도착',
    isSelected: false
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '은행 - 2',
    fee: '200 USDT',
    label: '방법',
    labelType: 'express',
    isSelected: false
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '335px'
  }}>
      <MethodCard title="은행" fee="200 USDT" label="방법" labelType="express" deliveryTime="오늘 도착" isSelected={false} />
      <MethodCard title="카드" fee="200 USDT" label="방법" labelType="express" deliveryTime="오늘 도착" isSelected={false} />
      <MethodCard title="은행 - 2" fee="200 USDT" label="방법" labelType="express" deliveryTime="오늘 도착" isSelected={false} />
      <MethodCard title="은행" fee="100 USDT" label="일반" labelType="standard" deliveryTime="09/15 도착" isSelected={true} />
    </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [selectedMethod, setSelectedMethod] = React.useState<string>('bank-standard');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '335px'
    }}>
        <MethodCard title="은행" fee="200 USDT" label="방법" labelType="express" deliveryTime="오늘 도착" isSelected={selectedMethod === 'bank-express'} onClick={() => setSelectedMethod('bank-express')} />
        <MethodCard title="카드" fee="200 USDT" label="방법" labelType="express" deliveryTime="오늘 도착" isSelected={selectedMethod === 'visa'} onClick={() => setSelectedMethod('visa')} />
        <MethodCard title="은행 - 2" fee="200 USDT" label="방법" labelType="express" deliveryTime="오늘 도착" isSelected={selectedMethod === 'moneygram'} onClick={() => setSelectedMethod('moneygram')} />
        <MethodCard title="은행" fee="100 USDT" label="일반" labelType="standard" deliveryTime="09/15 도착" isSelected={selectedMethod === 'bank-standard'} onClick={() => setSelectedMethod('bank-standard')} />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const U=["Default","Selected","ExpressType","StandardType","WithoutDeliveryTime","AllVariants","Interactive"];export{n as AllVariants,r as Default,i as ExpressType,c as Interactive,a as Selected,d as StandardType,o as WithoutDeliveryTime,U as __namedExportsOrder,h as default};
