import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-eWhK8UrY.js";import"./iframe-Bwffw9_S.js";import"./preload-helper-PPVm8Dsz.js";function e(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"센트비-파트너십-ui-구현-가이드",children:"센트비 파트너십 UI 구현 가이드"}),`
`,n.jsx(i.h2,{id:"-개요",children:"📋 개요"}),`
`,n.jsx(i.p,{children:"이 프로젝트는 센트비 파트너십 구현을 위한 UI 컴포넌트 샘플입니다."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"목적:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"파트너사는 이 Storybook 샘플을 검토합니다"}),`
`,n.jsx(i.li,{children:"제공된 서비스 플로우를 기반으로 완전한 웹 UI를 구현합니다"}),`
`,n.jsx(i.li,{children:"최종 구현물을 센트비에 다시 전달합니다"}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"전달해야 할 것:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"서비스 플로우에 맞는 React 컴포넌트"}),`
`,n.jsx(i.li,{children:"모든 페이지를 보여주는 Storybook 또는 실행 가능한 데모"}),`
`,n.jsx(i.li,{children:"센트비 통합을 위한 전체 소스 코드"}),`
`,n.jsxs(i.li,{children:["프로젝트 설명 문서",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"실행 방법, 구조 설명 포함"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"-요구사항",children:"🎯 요구사항"}),`
`,n.jsx(i.h3,{id:"-필수-required",children:"✅ 필수 (Required)"}),`
`,n.jsxs(i.h4,{id:"1-react-프레임워크",children:["1. ",n.jsx(i.strong,{children:"React 프레임워크"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"major 19 버전 이상의 React 를 사용합니다. (최신 버전 권장)"}),`
`,n.jsx(i.li,{children:"모든 컴포넌트는 React로 작성되어야 합니다"}),`
`,n.jsx(i.li,{children:"함수형 컴포넌트와 훅을 사용하세요"}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`// 예시
const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button className={\`btn btn--\${variant}\`} onClick={onClick}>
      {children}
    </button>
  );
};
`})}),`
`,n.jsxs(i.h4,{id:"2-typescript",children:["2. ",n.jsx(i.strong,{children:"TypeScript"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"typescript 5.8 버전 이상 사용 (최신 버전 권장)"}),`
`,n.jsx(i.li,{children:"타입 안전한 props와 state"}),`
`,n.jsx(i.li,{children:"더 나은 개발자 경험"}),`
`,n.jsx(i.li,{children:"더 쉬운 통합"}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', disabled }) => {
  // ...
};
`})}),`
`,n.jsxs(i.h4,{id:"3-atomic-ui-컴포넌트",children:["3. ",n.jsx(i.strong,{children:"Atomic UI 컴포넌트"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"재사용 가능한 원자 단위 UI 컴포넌트를 만드세요"}),`
`,n.jsx(i.li,{children:"컴포넌트는 작고, 집중되어 있으며, 조합 가능해야 합니다"}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"필수 컴포넌트 예시 :"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Button (onClick 지원)"}),`
`,n.jsx(i.li,{children:"Input (onChange 지원)"}),`
`,n.jsx(i.li,{children:"Text/Typography"}),`
`,n.jsx(i.li,{children:"Card"}),`
`,n.jsx(i.li,{children:"SelectBox/Dropdown (onChange 지원)"}),`
`,n.jsx(i.li,{children:"페이지에 필요한 기타 원자 컴포넌트"}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`// 예시: 인터랙션을 지원하는 Input
const Input = ({ value, onChange, label, placeholder }) => {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input
        value={value}
        onChange={onChange}  // ✅ onChange 지원 필수
        placeholder={placeholder}
      />
    </div>
  );
};
`})}),`
`,n.jsxs(i.h4,{id:"4-mobile-기기-친화적-반응형-디자인",children:["4. ",n.jsx(i.strong,{children:"Mobile 기기 친화적 반응형 디자인"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"다양한 모바일 기기에서 동작가능하도록 하는 반응형 레이아웃 디자인이 필요합니다."}),`
`]}),`
`,n.jsxs(i.h4,{id:"5-pages-디렉토리",children:["5. ",n.jsx(i.strong,{children:"Pages 디렉토리"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["모든 페이지 레벨 컴포넌트를 포함하는 ",n.jsx(i.code,{children:"pages/"})," 디렉토리가 있어야 합니다"]}),`
`,n.jsx(i.li,{children:"각 페이지는 서비스 플로우의 화면을 나타냅니다"}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`src/
└── pages/
    ├── Landing/
    ├── SendingMethod/
    ├── RecipientInfo/
    └── Confirmation/
`})}),`
`,n.jsxs(i.h4,{id:"6-디자인-기초-foundations",children:["6. ",n.jsx(i.strong,{children:"디자인 기초 (Foundations)"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Colors foundation이 있어야 합니다"}),`
`,n.jsx(i.li,{children:"Typography foundation이 있어야 합니다"}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`// 예시: src/foundations/colors.ts
export const colors = {
  primary: '#122666',
  secondary: '#F5F5F5',
  text: '#000000',
  // ... 디자인에 사용되는 모든 색상
};

// 예시: src/foundations/typography.ts
export const typography = {
  h1: { fontSize: '24px', fontWeight: '700' },
  h2: { fontSize: '20px', fontWeight: '600' },
  body: { fontSize: '14px', fontWeight: '400' },
  // ... 모든 텍스트 스타일
};
`})}),`
`,n.jsxs(i.h4,{id:"7-semantic-web-ui-에-맞는-사용자-인터랙션-지원",children:["7. ",n.jsx(i.strong,{children:"semantic web ui 에 맞는 사용자 인터랙션 지원"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"모든 인터랙티브 컴포넌트는 semantic web ui 에 맞는 이벤트 핸들러 추가 할 수 있어야 합니다."}),`
`,n.jsx(i.li,{children:"Button: onClick"}),`
`,n.jsx(i.li,{children:"Input: onChange, onFocus, onBlur"}),`
`,n.jsx(i.li,{children:"예를들어, Button 을 div 로 구현하지 않아야합니다."}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`// ❌ Don't
<div onClick={someMethod}> pretend to button </div>

// ✅ Do
<button onClick={onclickMethod}> real button </button>
`})}),`
`,n.jsxs(i.h4,{id:"8-완전한-서비스-플로우-페이지",children:["8. ",n.jsx(i.strong,{children:"완전한 서비스 플로우 페이지"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"따로 추가 제공되는 서비스 플로우에 따라 모든 페이지를 구현하세요"}),`
`,n.jsx(i.li,{children:"각 페이지는 Storybook 또는 데모에서 볼 수 있어야 합니다."}),`
`,n.jsxs(i.li,{children:["다음 중 하나를 선택하세요:",`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"옵션 A:"})," Storybook 설정 (모든 컴포넌트에 스토리 있음) (Recommended)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"옵션 B:"})," Storybook 없더라도 실행하여 page 들을 명확히 확인 가능한 데모 (npm install → npm start → 모든 페이지 확인 가능)"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(i.h4,{id:"9-전체-소스-코드",children:["9. ",n.jsx(i.strong,{children:"전체 소스 코드"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"완전한 프로젝트 소스 코드"}),`
`,n.jsx(i.li,{children:"설치 방법이 포함된 README"}),`
`,n.jsx(i.li,{children:"의존성 목록 (package.json)"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h3,{id:"-권장-recommended",children:"💡 권장 (Recommended)"}),`
`,n.jsxs(i.h4,{id:"1-feature-sliced-design-fsd-아키텍처",children:["1. ",n.jsx(i.strong,{children:"Feature-Sliced Design (FSD) 아키텍처"})]}),`
`,n.jsx(i.p,{children:"이 샘플 프로젝트는 FSD를 기반으로 구성되었습니다. 이 구조를 따르는 것을 권장합니다:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`src/
├── shared/          # 공유 유틸리티 및 UI
│   ├── ui/         # 원자 UI 컴포넌트
│   └── config/     # Colors, typography
├── widgets/        # 복합/컨테이너 컴포넌트
├── pages/          # 페이지 컴포넌트
└── foundations/    # 디자인 시스템 기초
`})}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"FSD를 사용하는 이유:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"명확한 관심사 분리"}),`
`,n.jsx(i.li,{children:"확장 가능한 아키텍처"}),`
`,n.jsx(i.li,{children:"유지보수 및 확장이 쉬움"}),`
`]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"FSD 예시:"})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`// ✅ 깔끔한 import 계층
import { Button } from '@/shared/ui/Button';
import { AmountInputForm } from '@/widgets/AmountInputForm';
import { Landing } from '@/pages/Landing';

// pages/Landing은 widgets을 사용
// widgets은 shared/ui를 사용
// 순환 의존성 없음
`})}),`
`,n.jsxs(i.h4,{id:"2-컴포넌트-네이밍-규칙",children:["2. ",n.jsx(i.strong,{children:"컴포넌트 네이밍 규칙"})]}),`
`,n.jsx(i.p,{children:"컴포넌트 네이밍은 자유이지만 semantic web ui 와 일치하거나, 명확하고 표준적인 컴포넌트 이름을 사용하세요:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"Button"})," (O), ",n.jsx(i.code,{children:"Btn"}),"이나 ",n.jsx(i.code,{children:"CustomButton"})," (X)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"Input"})," (O), ",n.jsx(i.code,{children:"TextField"}),"나 ",n.jsx(i.code,{children:"InputBox"})," (X)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"Card"})," (O), ",n.jsx(i.code,{children:"Panel"}),"이나 ",n.jsx(i.code,{children:"Container"})," (X)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"SelectBox"})," 또는 ",n.jsx(i.code,{children:"Dropdown"})," (O), ",n.jsx(i.code,{children:"Picker"})," (X)"]}),`
`]}),`
`,n.jsxs(i.h4,{id:"3-css-modules-또는-styled-components",children:["3. ",n.jsx(i.strong,{children:"CSS Modules 또는 Styled Components"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"충돌을 피하기 위한 범위가 지정된 스타일"}),`
`,n.jsx(i.li,{children:"더 나은 유지보수성"}),`
`,n.jsx(i.li,{children:"emotion 사용 가능"}),`
`]}),`
`,n.jsxs(i.h4,{id:"4-ui와-pages-사이의-container-레이어",children:["4. ",n.jsx(i.strong,{children:"UI와 Pages 사이의 Container 레이어"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Pages는 원자 UI 컴포넌트를 직접 사용하면 안 됩니다"}),`
`,n.jsx(i.li,{children:"최소한 하나의 컨테이너/복합 컴포넌트 레이어가 있어야 합니다"}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`❌ 나쁜 예 (Page가 원자 UI를 직접 사용):
pages/Landing.tsx → Button, Input, Card

✅ 좋은 예 (Page가 컨테이너를 사용):
pages/Landing.tsx → AmountInputForm, ExchangeRateDisplay
  └── AmountInputForm → Button, Input, Card
`})}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"구조 예시:"})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`src/
├── components/
│   ├── ui/              # 원자 UI 컴포넌트
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Card/
│   └── containers/      # 컨테이너/복합 컴포넌트
│       ├── AmountInputForm/
│       └── ExchangeRateDisplay/
└── pages/
    └── Landing/         # Page는 컨테이너를 사용, 원자 UI 직접 사용 안 함
`})}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h3,{id:"-선택-optional",children:"🎨 선택 (Optional)"}),`
`,n.jsxs(i.h4,{id:"1-추가-디자인-기초",children:["1. ",n.jsx(i.strong,{children:"추가 디자인 기초"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Spacing 시스템"}),`
`,n.jsx(i.li,{children:"Border radius 표준"}),`
`,n.jsx(i.li,{children:"Shadow/elevation 시스템"}),`
`,n.jsx(i.li,{children:"Animation/transition 표준"}),`
`]}),`
`,n.jsxs(i.h4,{id:"2-접근성",children:["2. ",n.jsx(i.strong,{children:"접근성"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"ARIA 레이블"}),`
`,n.jsx(i.li,{children:"키보드 네비게이션"}),`
`,n.jsx(i.li,{children:"스크린 리더 지원"}),`
`]}),`
`,n.jsxs(i.h4,{id:"3-추가-문서화",children:["3. ",n.jsx(i.strong,{children:"추가 문서화"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"컴포넌트 사용 예시"}),`
`,n.jsx(i.li,{children:"Props 문서"}),`
`]}),`
`,n.jsxs(i.h4,{id:"4-테스팅",children:["4. ",n.jsx(i.strong,{children:"테스팅"})]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"컴포넌트 유닛 테스트"}),`
`,n.jsx(i.li,{children:"페이지 통합 테스트"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"-프로젝트-구조-예시",children:"📁 프로젝트 구조 예시"}),`
`,n.jsx(i.p,{children:"이 샘플 프로젝트는 다음 구조를 따릅니다:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`sentbe-partnership-ui-sample/
├── src/
│   ├── shared/              # 권장: 공유 리소스
│   │   ├── ui/             # 권장: 원자 UI 컴포넌트
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.css
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Card/
│   │   │   └── SelectBox/
│   │   └── config/         # 필수: Foundations
│   │       ├── baseColors.ts
│   │       └── typography.ts
│   ├── widgets/            # 필수: 컨테이너 레이어
│   │   └── MethodCard/     # 복합 컴포넌트
│   │       ├── MethodCard.tsx
│   │       ├── MethodCard.css
│   │       └── MethodCard.stories.tsx
│   ├── pages/              # 필수: 페이지 컴포넌트
│   │   └── remittance/
│   │       ├── Landing/
│   │       │   ├── Landing.tsx
│   │       │   ├── Landing.css
│   │       │   └── Landing.stories.tsx
│   │       └── SendingMethod/
│   │           ├── SendingMethod.tsx
│   │           ├── SendingMethod.css
│   │           └── SendingMethod.stories.tsx
│   └── foundations/        # 필수: 디자인 기초
│       ├── Colors.tsx
│       ├── Colors.stories.tsx
│       ├── Typography.tsx
│       └── Typography.stories.tsx
├── .storybook/            # Storybook 사용 시
├── package.json
└── README.md
`})}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"-이-프로젝트의-샘플-컴포넌트",children:"🔍 이 프로젝트의 샘플 컴포넌트"}),`
`,n.jsx(i.h3,{id:"foundations",children:"Foundations"}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"필수 - 유사한 foundation을 구현해야 합니다"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Colors"}),": Primary와 Secondary 색상이 포함된 완전한 색상 팔레트"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Typography"}),": 텍스트 스타일과 폰트 시스템"]}),`
`]}),`
`,n.jsx(i.h3,{id:"sharedui-원자-컴포넌트",children:"Shared/UI (원자 컴포넌트)"}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"필수 - 동등한 원자 컴포넌트를 만들어야 합니다"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Button"}),": onClick 지원, 여러 variant (primary/secondary)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Input"}),": onChange, label, placeholder 지원"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Text"}),": variant가 있는 Typography 컴포넌트"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Card"}),": border와 padding이 있는 Container 컴포넌트"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"SelectBox"}),": onChange 지원하는 Dropdown"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Info"}),": 정보 표시 컴포넌트"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Heading"}),": 페이지 제목 컴포넌트"]}),`
`]}),`
`,n.jsx(i.h3,{id:"widgets-컨테이너복합",children:"Widgets (컨테이너/복합)"}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"필수 - 컨테이너 레이어가 있어야 합니다"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"MethodCard"}),": Button, Text, Card와 커스텀 스타일을 조합한 복합 카드",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"원자 컴포넌트를 조합하는 방법을 보여줍니다"}),`
`,n.jsx(i.li,{children:"복잡한 인터랙션 처리"}),`
`,n.jsx(i.li,{children:"컨테이너 컴포넌트의 예시"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.h3,{id:"pages",children:"Pages"}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"필수 - 서비스 플로우의 모든 페이지를 구현해야 합니다"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Landing"}),": 금액 입력 페이지",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"widgets과 원자 컴포넌트 사용"}),`
`,n.jsx(i.li,{children:"완전한 페이지 레이아웃"}),`
`,n.jsx(i.li,{children:"사용자 인터랙션"}),`
`]}),`
`]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"SendingMethod"}),": 결제 방법 선택 페이지",`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"여러 MethodCard 컴포넌트"}),`
`,n.jsx(i.li,{children:"네비게이션"}),`
`,n.jsx(i.li,{children:"상태 관리 예시"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"-전달-체크리스트",children:"✅ 전달 체크리스트"}),`
`,n.jsx(i.p,{children:"구현물을 제출하기 전에 확인하세요:"}),`
`,n.jsx(i.h3,{id:"필수-required",children:"필수 (Required)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[ ] React 19 버전 이상 사용 (최신 버전 권장)"}),`
`,n.jsx(i.li,{children:"[ ] TypeScript 5.8 버전 이상 사용 (최신 버전 권장)"}),`
`,n.jsx(i.li,{children:"[ ] 모든 컴포넌트가 React 함수형 컴포넌트로 작성됨"}),`
`,n.jsx(i.li,{children:"[ ] 원자 UI 컴포넌트 생성 (Button, Input, Card, SelectBox 등)"}),`
`,n.jsx(i.li,{children:"[ ] Semantic HTML 태그 사용 (button을 div로 구현하지 않음)"}),`
`,n.jsx(i.li,{children:"[ ] 모바일 기기 친화적 반응형 디자인 구현"}),`
`,n.jsx(i.li,{children:"[ ] 제공된 서비스 플로우의 모든 페이지 구현"}),`
`,n.jsxs(i.li,{children:["[ ] 모든 페이지가 포함된 ",n.jsx(i.code,{children:"pages/"})," 디렉토리 존재"]}),`
`,n.jsx(i.li,{children:"[ ] Colors foundation 구현"}),`
`,n.jsx(i.li,{children:"[ ] Typography foundation 구현"}),`
`,n.jsx(i.li,{children:"[ ] Storybook 또는 실행 가능한 데모 제공 (Storybook 권장)"}),`
`,n.jsx(i.li,{children:"[ ] 전체 소스 코드 포함"}),`
`,n.jsx(i.li,{children:"[ ] 프로젝트 설명 문서 (실행 방법, 구조 설명 포함된 README)"}),`
`,n.jsx(i.li,{children:"[ ] 의존성 목록 (package.json)"}),`
`]}),`
`,n.jsx(i.h3,{id:"권장-recommended",children:"권장 (Recommended)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[ ] FSD 아키텍처 사용 (이 샘플 프로젝트 구조 참고)"}),`
`,n.jsx(i.li,{children:"[ ] UI와 Pages 사이의 Container 혹은 Widget 레이어 구현"}),`
`,n.jsx(i.li,{children:"[ ] Semantic web ui에 맞는 명확한 컴포넌트 네이밍"}),`
`,n.jsx(i.li,{children:"[ ] 범위가 지정된 스타일링 (CSS Modules/Styled Components/Emotion)"}),`
`]}),`
`,n.jsx(i.h3,{id:"선택-optional",children:"선택 (Optional)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"[ ] 추가 디자인 foundations (Spacing, Border radius, Shadow 등)"}),`
`,n.jsx(i.li,{children:"[ ] 접근성 기능 (ARIA 레이블, 키보드 네비게이션)"}),`
`,n.jsx(i.li,{children:"[ ] 추가 문서화 (컴포넌트 사용 예시, Props 문서)"}),`
`,n.jsx(i.li,{children:"[ ] 테스팅 (유닛 테스트, 통합 테스트)"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h3,{id:"확인할-내용",children:"확인할 내용:"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Foundations"})," - 색상과 타이포그래피 시스템 확인"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Shared/UI"})," - 인터랙션이 있는 원자 컴포넌트 확인"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Widgets"})," - 원자 컴포넌트가 컨테이너로 조합되는 방식 확인"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Pages"})," - 완성된 페이지 구현 확인"]}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"-질문이-있으신가요",children:"📞 질문이 있으신가요?"}),`
`,n.jsx(i.p,{children:"다음 사항에 대해 질문이 있으시면 센트비 팀에 문의해 주세요."}),`
`,n.jsx(i.hr,{})]})}function o(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{o as default};
