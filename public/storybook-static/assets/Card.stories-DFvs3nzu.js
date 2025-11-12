import{j as a,a as e}from"./emotion-react-jsx-runtime.browser.esm-BU9uxSWI.js";import{C as c,a as i,b as o,c as p}from"./Card-DADEsB6_.js";import{I as u}from"./Info-XIkEOZlz.js";import{S as n}from"./SelectBox-Dr2XWZ8c.js";import{I as t}from"./Input-8lTUX6kT.js";import{T as r}from"./Text-B3E3Lc-N.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-B5b-D3XD.js";import"./preload-helper-PPVm8Dsz.js";import"./emotion-react.browser.esm-BGgABCpj.js";import"./typography-BLgLjTO_.js";import"./baseColors-DqUdiJtl.js";const I={title:"Shared/UI/Card",component:c,parameters:{layout:"centered"},tags:["autodocs"]},d={args:{},render:()=>a(c,{children:[a(u,{children:[e(r,{as:"span",variant:"body2",fontWeight:"semibold",color:"G700",style:{letterSpacing:"-0.195px"},children:"147.96 JPY"}),e(r,{as:"span",variant:"body2",color:"G400",children:"≈"}),e(r,{as:"span",variant:"body2",fontWeight:"semibold",color:"SB550",style:{letterSpacing:"-0.195px"},children:"1 USDT"})]}),a(i,{children:[a(o,{children:[e(n,{icon:"usdt",code:"USDT"}),e(t,{label:"보내는 금액",value:"1,000",readOnly:!0})]}),e(p,{}),a(o,{children:[e(n,{icon:"jpy",code:"JPY"}),e(t,{label:"받는 금액",value:"147,960.49",readOnly:!0})]})]})]})},l={args:{},render:()=>e(c,{children:a(i,{children:[a(o,{children:[e(n,{icon:"krw",code:"KRW"}),e(t,{label:"보내는 금액",value:"1,350,000",readOnly:!1})]}),e(p,{}),a(o,{children:[e(n,{icon:"usd",code:"USD"}),e(t,{label:"받는 금액",value:"1,000",readOnly:!0})]})]})})},s={args:{},render:()=>a(c,{children:[a(u,{children:[e(r,{as:"span",variant:"body2",fontWeight:"semibold",color:"G700",style:{letterSpacing:"-0.195px"},children:"1,350 KRW"}),e(r,{as:"span",variant:"body2",color:"G400",children:"≈"}),e(r,{as:"span",variant:"body2",fontWeight:"semibold",color:"SB550",style:{letterSpacing:"-0.195px"},children:"1 USD"})]}),a(i,{children:[a(o,{children:[e(n,{icon:"krw",code:"KRW"}),e(t,{label:"보내는 금액",value:"1,350,000",readOnly:!1,onChange:m=>console.log("From currency changed:",m)})]}),e(p,{}),a(o,{children:[e(n,{icon:"usd",code:"USD"}),e(t,{label:"받는 금액",value:"1,000"})]})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Card>
      <Info>
        <Text as="span" variant="body2" fontWeight="semibold" color="G700" style={{
        letterSpacing: '-0.195px'
      }}>
          147.96 JPY
        </Text>
        <Text as="span" variant="body2" color="G400">
          ≈
        </Text>
        <Text as="span" variant="body2" fontWeight="semibold" color="SB550" style={{
        letterSpacing: '-0.195px'
      }}>
          1 USDT
        </Text>
      </Info>

      <CardContent>
        <CardRow>
          <SelectBox icon="usdt" code="USDT" />
          <Input label="보내는 금액" value="1,000" readOnly />
        </CardRow>

        <CardDivider />

        <CardRow>
          <SelectBox icon="jpy" code="JPY" />
          <Input label="받는 금액" value="147,960.49" readOnly />
        </CardRow>
      </CardContent>
    </Card>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Card>
      <CardContent>
        <CardRow>
          <SelectBox icon="krw" code="KRW" />
          <Input label="보내는 금액" value="1,350,000" readOnly={false} />
        </CardRow>

        <CardDivider />

        <CardRow>
          <SelectBox icon="usd" code="USD" />
          <Input label="받는 금액" value="1,000" readOnly />
        </CardRow>
      </CardContent>
    </Card>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Card>
      <Info>
        <Text as="span" variant="body2" fontWeight="semibold" color="G700" style={{
        letterSpacing: '-0.195px'
      }}>
          1,350 KRW
        </Text>
        <Text as="span" variant="body2" color="G400">
          ≈
        </Text>
        <Text as="span" variant="body2" fontWeight="semibold" color="SB550" style={{
        letterSpacing: '-0.195px'
      }}>
          1 USD
        </Text>
      </Info>

      <CardContent>
        <CardRow>
          <SelectBox icon="krw" code="KRW" />
          <Input label="보내는 금액" value="1,350,000" readOnly={false} onChange={value => console.log('From currency changed:', value)} />
        </CardRow>

        <CardDivider />

        <CardRow>
          <SelectBox icon="usd" code="USD" />
          <Input label="받는 금액" value="1,000" />
        </CardRow>
      </CardContent>
    </Card>
}`,...s.parameters?.docs?.source}}};const D=["Default","WithoutRateInfo","Editable"];export{d as Default,s as Editable,l as WithoutRateInfo,D as __namedExportsOrder,I as default};
