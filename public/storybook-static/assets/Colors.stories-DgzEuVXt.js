import{j as c,a as o}from"./emotion-react-jsx-runtime.browser.esm-aUWFuhMu.js";import{c as s}from"./emotion-react.browser.esm-mnbJeROg.js";import{p as u,s as b}from"./baseColors-DqUdiJtl.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-Bwffw9_S.js";import"./preload-helper-PPVm8Dsz.js";function n(){const g=s`
    padding: 40px;
    max-width: 1400px;
  `,i=s`
    margin-bottom: 60px;
  `,a=s`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 12px;
    color: #1a1a1a;
  `,d=s`
    font-size: 14px;
    color: #525357;
    margin-bottom: 30px;
  `,l=s`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  `,p=()=>s`
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
  `,m=r=>s`
    width: 100%;
    height: 120px;
    background: ${r};
  `,h=s`
    padding: 16px;
    background: white;
  `,x=s`
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
  `,f=s`
    font-size: 12px;
    font-family: monospace;
    color: #797b7d;
  `;return c("div",{css:g,children:[c("section",{css:i,children:[o("h2",{css:a,children:"Primary Colors"}),o("p",{css:d,children:"센트비의 주요 브랜드 색상입니다. SentBe Blue를 중심으로 다양한 단계의 색상을 제공합니다."}),o("div",{css:l,children:Object.entries(u).map(([r,e])=>c("div",{css:p,children:[o("div",{css:m(e)}),c("div",{css:h,children:[o("div",{css:x,children:r}),o("div",{css:f,children:e})]})]},r))})]}),c("section",{css:i,children:[o("h2",{css:a,children:"Secondary Colors"}),o("p",{css:d,children:"Gray Scale과 Semantic Colors를 포함한 보조 색상 팔레트입니다."}),o("div",{css:l,children:Object.entries(b).map(([r,e])=>c("div",{css:p,children:[o("div",{css:m(e)}),c("div",{css:h,children:[o("div",{css:x,children:r}),o("div",{css:f,children:e})]})]},r))})]})]})}n.__docgenInfo={description:"",methods:[],displayName:"Colors"};const z={title:"Foundations/Colors",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"]},t={args:{},render:()=>o(n,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Colors />
}`,...t.parameters?.docs?.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,z as default};
