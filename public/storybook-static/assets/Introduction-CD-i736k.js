import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Ce0QMw9N.js";import"./iframe-B5b-D3XD.js";import"./preload-helper-PPVm8Dsz.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"sentbe-partnership-ui-implementation-guide",children:"Sentbe Partnership UI Implementation Guide"}),`
`,n.jsx(e.h2,{id:"-overview",children:"📋 Overview"}),`
`,n.jsx(e.p,{children:"This is a UI component sample project for Sentbe partnership implementation."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Purpose:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Partners will review this Storybook sample"}),`
`,n.jsx(e.li,{children:"Create complete web UI based on the implementation this Storybook guidelines for the service flow defined by the partner"}),`
`,n.jsx(e.li,{children:"Deliver the final implementation back to Sentbe"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"What you need to deliver:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Full source code for Sentbe integration",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React components matching the service flow"}),`
`,n.jsx(e.li,{children:"Storybook or runnable demo showing all pages"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Project documentation",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Including setup instructions and structure explanation"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-requirements",children:"🎯 Requirements"}),`
`,n.jsx(e.h3,{id:"-required-must-have",children:"✅ Required (Must Have)"}),`
`,n.jsxs(e.h4,{id:"1-react-framework",children:["1. ",n.jsx(e.strong,{children:"React Framework"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use React major version 19 or higher (latest version recommended)"}),`
`,n.jsx(e.li,{children:"All components must be written in React"}),`
`,n.jsx(e.li,{children:"Use functional components with hooks"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Example
const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button className={\`btn btn--\${variant}\`} onClick={onClick}>
      {children}
    </button>
  );
};
`})}),`
`,n.jsxs(e.h4,{id:"2-typescript",children:["2. ",n.jsx(e.strong,{children:"TypeScript"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use TypeScript version 5.8 or higher (latest version recommended)",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Type-safe props and state"}),`
`,n.jsx(e.li,{children:"Better developer experience"}),`
`,n.jsx(e.li,{children:"Easier integration"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', disabled }) => {
  // ...
};
`})}),`
`,n.jsxs(e.h4,{id:"3-atomic-ui-components",children:["3. ",n.jsx(e.strong,{children:"Atomic UI Components"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Create reusable, atomic-level UI components"}),`
`,n.jsx(e.li,{children:"Components must be small, focused, and composable"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Required Component Examples:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button (with onClick support)"}),`
`,n.jsx(e.li,{children:"Input (with onChange support)"}),`
`,n.jsx(e.li,{children:"Text/Typography"}),`
`,n.jsx(e.li,{children:"Card"}),`
`,n.jsx(e.li,{children:"SelectBox/Dropdown (with onChange support)"}),`
`,n.jsx(e.li,{children:"Any other atomic components needed for your pages"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Example: Input with interaction support
const Input = ({ value, onChange, label, placeholder }) => {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input
        value={value}
        onChange={onChange}  // ✅ Must support onChange
        placeholder={placeholder}
      />
    </div>
  );
};
`})}),`
`,n.jsxs(e.h4,{id:"4-mobile-friendly-responsive-design",children:["4. ",n.jsx(e.strong,{children:"Mobile-Friendly Responsive Design"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Responsive layout design that works on various mobile devices is required."}),`
`]}),`
`,n.jsxs(e.h4,{id:"5-pages-directory",children:["5. ",n.jsx(e.strong,{children:"Pages Directory"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Must have a ",n.jsx(e.code,{children:"pages/"})," directory containing all page-level components"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`src/
└── pages/
    ├── Landing/
    ├── SendingMethod/
    ├── RecipientInfo/
    └── Confirmation/
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Each page represents a screen in the service flow"}),`
`,n.jsxs(e.li,{children:["If navigation between pages is required:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Implement page navigation (Recommended)"}),`
`,n.jsx(e.li,{children:"OR"}),`
`,n.jsx(e.li,{children:"Specify which UI interaction should trigger navigation to another page"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Recommended
const moveToNextPage = () => {
  // pseudo code
  const router = useRouter()
  router.push('/next-page-path')
}
<button onClick={moveToNextPage}> Next Page </button>

// OR

const moveToNextPage = () => {
  // TODO
  // move to '/next-page-path' path from current
}
<button onClick={moveToNextPage}> Next Page </button>
`})}),`
`,n.jsxs(e.h4,{id:"6-design-foundations",children:["6. ",n.jsx(e.strong,{children:"Design Foundations"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Must include Colors foundation"}),`
`,n.jsx(e.li,{children:"Must include Typography foundation"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// Example: src/foundations/colors.ts
export const colors = {
  primary: '#122666',
  secondary: '#F5F5F5',
  text: '#000000',
  // ... all colors used in the design
};

// Example: src/foundations/typography.ts
export const typography = {
  h1: { fontSize: '24px', fontWeight: '700' },
  h2: { fontSize: '20px', fontWeight: '600' },
  body: { fontSize: '14px', fontWeight: '400' },
  // ... all text styles
};
`})}),`
`,n.jsxs(e.h4,{id:"7-user-interaction-support-with-semantic-web-ui",children:["7. ",n.jsx(e.strong,{children:"User Interaction Support with Semantic Web UI"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["All interactive components must support event handlers that align with semantic web UI.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["For example:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Button: onClick"}),`
`,n.jsx(e.li,{children:"Input: onChange, onFocus, onBlur"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Implement basic UI interactions required for the service flow.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["For example, in /pages/SendingMethod, each card should be selectable when clicked. Implement basic UI interactions like this that are needed for the service flow.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Business logic is not required; only implement interactions that change the UI design visually."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["Event handlers must align with semantic web UI.",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"For example, buttons should not be implemented using div elements."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ❌ Don't
<div onClick={someMethod}> pretend to button </div>

// ✅ Do
<button onClick={onclickMethod}> real button </button>
`})}),`
`,n.jsxs(e.h4,{id:"8-complete-service-flow-pages",children:["8. ",n.jsx(e.strong,{children:"Complete Service Flow Pages"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Implement ALL pages according to the separately provided service flow"}),`
`,n.jsx(e.li,{children:"Each page must be viewable in Storybook or demo"}),`
`,n.jsxs(e.li,{children:["Choose one of the following:",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Option A:"})," Storybook setup (all components have stories) (Recommended)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Option B:"})," Runnable demo without Storybook where all pages are clearly viewable (npm install → npm start → view all pages)"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.h4,{id:"9-full-source-code",children:["9. ",n.jsx(e.strong,{children:"Full Source Code"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Complete project source code"}),`
`,n.jsx(e.li,{children:"README with setup instructions"}),`
`,n.jsx(e.li,{children:"Dependencies list (package.json)"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"-recommended-strongly-suggested",children:"💡 Recommended (Strongly Suggested)"}),`
`,n.jsxs(e.h4,{id:"1-feature-sliced-design-fsd-architecture",children:["1. ",n.jsx(e.strong,{children:"Feature-Sliced Design (FSD) Architecture"})]}),`
`,n.jsx(e.p,{children:"This sample project is structured based on FSD. We recommend following this structure:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`src/
├── shared/          # Shared utilities and UI
│   ├── ui/         # Atomic UI components
│   └── config/     # Colors, typography
├── widgets/        # Composite/Container components
├── pages/          # Page components
└── foundations/    # Design system foundations
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Why FSD?"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clear separation of concerns"}),`
`,n.jsx(e.li,{children:"Scalable architecture"}),`
`,n.jsx(e.li,{children:"Easy to maintain and extend"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"FSD Example:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// ✅ Clean import hierarchy
import { Button } from '@/shared/ui/Button';
import { AmountInputForm } from '@/widgets/AmountInputForm';
import { Landing } from '@/pages/Landing';

// pages/Landing uses widgets
// widgets use shared/ui
// No circular dependencies
`})}),`
`,n.jsxs(e.h4,{id:"2-component-naming-convention",children:["2. ",n.jsx(e.strong,{children:"Component Naming Convention"})]}),`
`,n.jsx(e.p,{children:"Component naming is flexible, but use names that align with semantic web UI or are clear and standard:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Button"})," (O), not ",n.jsx(e.code,{children:"Btn"})," or ",n.jsx(e.code,{children:"CustomButton"})," (X)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Input"})," (O), not ",n.jsx(e.code,{children:"TextField"})," or ",n.jsx(e.code,{children:"InputBox"})," (X)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Card"})," (O), not ",n.jsx(e.code,{children:"Panel"})," or ",n.jsx(e.code,{children:"Container"})," (X)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"SelectBox"})," or ",n.jsx(e.code,{children:"Dropdown"})," (O), not ",n.jsx(e.code,{children:"Picker"})," (X)"]}),`
`]}),`
`,n.jsxs(e.h4,{id:"3-css-modules-or-styled-components",children:["3. ",n.jsx(e.strong,{children:"CSS Modules or Styled Components"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Scoped styles to avoid conflicts"}),`
`,n.jsx(e.li,{children:"Better maintainability"}),`
`,n.jsx(e.li,{children:"Emotion is also acceptable"}),`
`]}),`
`,n.jsxs(e.h4,{id:"4-container-layer-between-ui-and-pages",children:["4. ",n.jsx(e.strong,{children:"Container Layer Between UI and Pages"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Pages should not directly use atomic UI components"}),`
`,n.jsx(e.li,{children:"Must have at least one container/composite component layer"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`❌ Bad (Page directly using atomic UI):
pages/Landing.tsx → Button, Input, Card

✅ Good (Page using containers):
pages/Landing.tsx → AmountInputForm, ExchangeRateDisplay
  └── AmountInputForm → Button, Input, Card
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example Structure:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`src/
├── components/
│   ├── ui/              # Atomic UI components
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Card/
│   └── containers/      # Container/Composite components
│       ├── AmountInputForm/
│       └── ExchangeRateDisplay/
└── pages/
    └── Landing/         # Page uses containers, not atomic UI directly
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"-optional-nice-to-have",children:"🎨 Optional (Nice to Have)"}),`
`,n.jsxs(e.h4,{id:"1-additional-design-foundations",children:["1. ",n.jsx(e.strong,{children:"Additional Design Foundations"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Spacing system"}),`
`,n.jsx(e.li,{children:"Border radius standards"}),`
`,n.jsx(e.li,{children:"Shadow/elevation system"}),`
`,n.jsx(e.li,{children:"Animation/transition standards"}),`
`]}),`
`,n.jsxs(e.h4,{id:"2-accessibility",children:["2. ",n.jsx(e.strong,{children:"Accessibility"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"ARIA labels"}),`
`,n.jsx(e.li,{children:"Keyboard navigation"}),`
`,n.jsx(e.li,{children:"Screen reader support"}),`
`]}),`
`,n.jsxs(e.h4,{id:"3-additional-documentation",children:["3. ",n.jsx(e.strong,{children:"Additional Documentation"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Component usage examples"}),`
`,n.jsx(e.li,{children:"Props documentation"}),`
`]}),`
`,n.jsxs(e.h4,{id:"4-testing",children:["4. ",n.jsx(e.strong,{children:"Testing"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Unit tests for components"}),`
`,n.jsx(e.li,{children:"Integration tests for pages"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-project-structure-example",children:"📁 Project Structure Example"}),`
`,n.jsx(e.p,{children:"This sample project follows this structure:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`sentbe-partnership-ui-sample/
├── src/
│   ├── shared/              # Recommended: Shared resources
│   │   ├── ui/             # Recommended: Atomic UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.css
│   │   │   │   ├── Button.stories.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Card/
│   │   │   └── SelectBox/
│   │   └── config/         # Required: Foundations
│   │       ├── baseColors.ts
│   │       └── typography.ts
│   ├── widgets/            # Required: Container layer
│   │   └── MethodCard/     # Composite component
│   │       ├── MethodCard.tsx
│   │       ├── MethodCard.css
│   │       └── MethodCard.stories.tsx
│   ├── pages/              # Required: Page components
│   │   └── remittance/
│   │       ├── Landing/
│   │       │   ├── Landing.tsx
│   │       │   ├── Landing.css
│   │       │   └── Landing.stories.tsx
│   │       └── SendingMethod/
│   │           ├── SendingMethod.tsx
│   │           ├── SendingMethod.css
│   │           └── SendingMethod.stories.tsx
│   └── foundations/        # Required: Design foundations
│       ├── Colors.tsx
│       ├── Colors.stories.tsx
│       ├── Typography.tsx
│       └── Typography.stories.tsx
├── .storybook/            # If using Storybook
├── package.json
└── README.md
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-sample-components-in-this-project",children:"🔍 Sample Components in This Project"}),`
`,n.jsx(e.h3,{id:"foundations",children:"Foundations"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Required - Must implement similar foundations"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Colors"}),": Complete color palette with primary and secondary colors"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Typography"}),": Text styles and font system"]}),`
`]}),`
`,n.jsx(e.h3,{id:"sharedui-atomic-components",children:"Shared/UI (Atomic Components)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Required - Must create equivalent atomic components"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"}),": Supports onClick, multiple variants (primary/secondary)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Input"}),": Supports onChange, label, placeholder"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Text"}),": Typography component with variants"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card"}),": Container component with borders and padding"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SelectBox"}),": Dropdown with onChange support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Info"}),": Information display component"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Heading"}),": Page heading component"]}),`
`]}),`
`,n.jsx(e.h3,{id:"widgets-containercomposite",children:"Widgets (Container/Composite)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Required - Must have container layer"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"MethodCard"}),": Composite card combining Button, Text, Card, and custom styling",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Shows how to combine atomic components"}),`
`,n.jsx(e.li,{children:"Handles complex interactions"}),`
`,n.jsx(e.li,{children:"Example of container component"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"pages",children:"Pages"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Required - Must implement all pages in service flow"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Landing"}),": Amount input page",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Uses widgets and atomic components"}),`
`,n.jsx(e.li,{children:"Complete page layout"}),`
`,n.jsx(e.li,{children:"User interactions"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"SendingMethod"}),": Payment method selection page",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Multiple MethodCard components"}),`
`,n.jsx(e.li,{children:"Navigation"}),`
`,n.jsx(e.li,{children:"State management example"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-checklist-for-delivery",children:"✅ Checklist for Delivery"}),`
`,n.jsx(e.p,{children:"Before submitting your implementation, ensure:"}),`
`,n.jsx(e.h3,{id:"required-must-have",children:"Required (Must Have)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"[ ] React version 19 or higher (latest version recommended)"}),`
`,n.jsx(e.li,{children:"[ ] TypeScript version 5.8 or higher (latest version recommended)"}),`
`,n.jsx(e.li,{children:"[ ] All components written as React functional components"}),`
`,n.jsx(e.li,{children:"[ ] Atomic UI components created (Button, Input, Card, SelectBox, etc.)"}),`
`,n.jsx(e.li,{children:"[ ] Semantic HTML tags used (buttons not implemented with div)"}),`
`,n.jsx(e.li,{children:"[ ] Mobile-friendly responsive design implemented"}),`
`,n.jsx(e.li,{children:"[ ] All pages from provided service flow implemented"}),`
`,n.jsxs(e.li,{children:["[ ] ",n.jsx(e.code,{children:"pages/"})," directory exists with all pages"]}),`
`,n.jsx(e.li,{children:"[ ] Colors foundation implemented"}),`
`,n.jsx(e.li,{children:"[ ] Typography foundation implemented"}),`
`,n.jsx(e.li,{children:"[ ] Storybook OR runnable demo provided (Storybook recommended)"}),`
`,n.jsx(e.li,{children:"[ ] Full source code included"}),`
`,n.jsx(e.li,{children:"[ ] Project documentation (README with setup instructions and structure explanation)"}),`
`,n.jsx(e.li,{children:"[ ] Dependencies list (package.json)"}),`
`]}),`
`,n.jsx(e.h3,{id:"recommended",children:"Recommended"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"[ ] FSD architecture used (refer to this sample project structure)"}),`
`,n.jsx(e.li,{children:"[ ] Container or Widget layer between UI and Pages implemented"}),`
`,n.jsx(e.li,{children:"[ ] Clear component naming aligned with semantic web UI"}),`
`,n.jsx(e.li,{children:"[ ] Scoped styling (CSS Modules/Styled Components/Emotion)"}),`
`]}),`
`,n.jsx(e.h3,{id:"optional",children:"Optional"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"[ ] Additional design foundations (Spacing, Border radius, Shadow, etc.)"}),`
`,n.jsx(e.li,{children:"[ ] Accessibility features (ARIA labels, keyboard navigation)"}),`
`,n.jsx(e.li,{children:"[ ] Additional documentation (component usage examples, props documentation)"}),`
`,n.jsx(e.li,{children:"[ ] Testing (unit tests, integration tests)"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"what-to-check",children:"What to Check:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Foundations"})," - Review color and typography system"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Shared/UI"})," - Review atomic components with interactions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Widgets"})," - Review how atomic components combine into containers"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pages"})," - Review complete page implementations"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-questions",children:"📞 Questions?"}),`
`,n.jsx(e.p,{children:"If you have any questions, please contact the Sentbe team."}),`
`,n.jsx(e.hr,{})]})}function c(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{c as default};
