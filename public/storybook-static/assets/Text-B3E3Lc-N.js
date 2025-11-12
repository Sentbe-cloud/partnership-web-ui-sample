import{a as S}from"./emotion-react-jsx-runtime.browser.esm-BU9uxSWI.js";import{c as x}from"./emotion-react.browser.esm-BGgABCpj.js";import{t as h,f as C,a as n}from"./typography-BLgLjTO_.js";import{b as o}from"./baseColors-DqUdiJtl.js";const v=({children:i,variant:s="body1",color:l="G900",fontFamily:a,fontWeight:r,align:p="left",decoration:d="none",transform:f="none",as:m="span",className:u,style:c})=>{const t=h[s],y=e=>e in o,g=e=>y(e)?o[e]:e,T=x`
    margin: 0;
    padding: 0;
    font-size: ${t.fontSize};
    line-height: ${t.lineHeight};
    font-weight: ${r?C[r]:t.fontWeight};
    letter-spacing: ${t.letterSpacing};
    font-family: ${a?n[a]:n.primary};
    color: ${g(l)};
    text-align: ${p};
    text-decoration: ${d};
    text-transform: ${f};
  `;return S(m,{css:T,className:u,style:c,children:i})};v.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Text content"},variant:{required:!1,tsType:{name:"TypographyVariant"},description:"Typography variant",defaultValue:{value:"'body1'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"BaseColor | string",elements:[{name:"unknown"},{name:"string"}]},description:"Text color from baseColors or custom color value",defaultValue:{value:"'G900'",computed:!1}},fontFamily:{required:!1,tsType:{name:"FontFamily"},description:"Font family"},fontWeight:{required:!1,tsType:{name:"FontWeight"},description:"Font weight (overrides variant default)"},align:{required:!1,tsType:{name:"CSSProperties['textAlign']",raw:"CSSProperties['textAlign']"},description:"Text alignment",defaultValue:{value:"'left'",computed:!1}},decoration:{required:!1,tsType:{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"},description:"Text decoration",defaultValue:{value:"'none'",computed:!1}},transform:{required:!1,tsType:{name:"CSSProperties['textTransform']",raw:"CSSProperties['textTransform']"},description:"Text transform",defaultValue:{value:"'none'",computed:!1}},as:{required:!1,tsType:{name:"ElementType"},description:"HTML tag to render",defaultValue:{value:"'span'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional inline styles"}}};export{v as T};
