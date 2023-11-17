"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[960],{3846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(5893),l=t(1151),r=t(4866),o=t(5162);const s={layout:"default",title:"Autonomous Selector",parent:"Docs",description:"",nav_order:5},i="Autonomous Selector",u={id:"docs/auton_selector",title:"Autonomous Selector",description:"",source:"@site/ez-template-docs/docs/auton_selector.md",sourceDirName:"docs",slug:"/docs/auton_selector",permalink:"/EZ-Template/docs/auton_selector",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/ez-template-docs/docs/auton_selector.md",tags:[],version:"current",frontMatter:{layout:"default",title:"Autonomous Selector",parent:"Docs",description:"",nav_order:5},sidebar:"tutorialSidebar",previous:{title:"Autonomous Functions",permalink:"/EZ-Template/docs/auton_functions"},next:{title:"Drive Constructors",permalink:"/EZ-Template/docs/constructor"}},c={},d=[{value:"initialize()",id:"initialize",level:2},{value:"limit_switch_lcd_initialize()",id:"limit_switch_lcd_initialize",level:2},{value:"shutdown()",id:"shutdown",level:2},{value:"add_autons();",id:"add_autons",level:2},{value:"print_selected_auton();",id:"print_selected_auton",level:2},{value:"page_down()",id:"page_down",level:2},{value:"page_up()",id:"page_up",level:2},{value:"call_selected_auton()",id:"call_selected_auton",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"autonomous-selector",children:(0,a.jsx)(n.strong,{children:"Autonomous Selector"})}),"\n",(0,a.jsx)(n.h2,{id:"initialize",children:"initialize()"}),"\n",(0,a.jsx)(n.p,{children:"Initializes the autonomous selector.  If an sd card is plugged in, the current page will set to what's on the sd card."}),"\n",(0,a.jsxs)(r.Z,{groupId:"ex1",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,a.jsx)(o.Z,{value:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void initialize() {\r\n  ez::as::initialize();\r\n}\n"})})}),(0,a.jsx)(o.Z,{value:"proto",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void initialize();\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"limit_switch_lcd_initialize",children:"limit_switch_lcd_initialize()"}),"\n",(0,a.jsx)(n.p,{children:"Sets external buttons to increase/decrease the current autonomous page."}),"\n",(0,a.jsxs)(r.Z,{groupId:"ex2",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,a.jsx)(o.Z,{value:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"pros::ADIDigitalIn increase('A');\r\npros::ADIDigitalIn decrease('B');\r\nvoid initialize() {\r\n  ez::as::initialize();\r\n  ez::as::limit_switch_lcd_initialize(&increase, &decrease);\r\n  // . . .\r\n}\n"})})}),(0,a.jsx)(o.Z,{value:"proto",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void limit_switch_lcd_initialize(pros::ADIDigitalIn* right_limit, pros::ADIDigitalIn* left_limit = nullptr);\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"shutdown",children:"shutdown()"}),"\n",(0,a.jsxs)(n.p,{children:["Wrapper for ",(0,a.jsx)(n.code,{children:"pros::lcd::shutdown()"}),"."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"ex3",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,a.jsx)(o.Z,{value:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void initialize() {\r\n  ez::as::initialize();\r\n\r\n  // Do something\r\n\r\n  ez::as::shutdown();\r\n}\n"})})}),(0,a.jsx)(o.Z,{value:"proto",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void shutdown();\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"add_autons",children:"add_autons();"}),"\n",(0,a.jsxs)(n.p,{children:["Adds autonomous routines to the autonomous selector. Uses ",(0,a.jsx)(n.code,{children:"ez::print_to_screen()"})," to display to the brain."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"ex4",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,a.jsx)(o.Z,{value:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:'void auto1() {\r\n  // Do something\r\n}\r\nvoid auto2() {\r\n  // Do something\r\n}\r\nvoid auto3() {\r\n  // Do something\r\n}\r\n\r\nvoid initialize() {\r\n  ez::as::auton_selector.add_autons({\r\n    Auton("Autonomous 1\\nDoes Something", auto1),\r\n    Auton("Autonomous 2\\nDoes Something Else", auto2),\r\n    Auton("Autonomous 3\\nDoes Something More", auto3),\r\n  });\r\n}\n'})})}),(0,a.jsx)(o.Z,{value:"proto",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void add_autons(std::vector<Auton> autons);\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"print_selected_auton",children:"print_selected_auton();"}),"\n",(0,a.jsx)(n.p,{children:"Prints the current autonomous mode to the screen."}),"\n",(0,a.jsxs)(r.Z,{groupId:"ex5",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,a.jsx)(o.Z,{value:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void initialize() {\r\n  ez::as::auton_selector.print_selected_auton(); \r\n}\n"})})}),(0,a.jsx)(o.Z,{value:"proto",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void print_selected_auton();\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"page_down",children:"page_down()"}),"\n",(0,a.jsx)(n.p,{children:"Decreases the page. Best used with the lcd callback functions."}),"\n",(0,a.jsxs)(r.Z,{groupId:"ex6",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,a.jsx)(o.Z,{value:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void initialize() {\r\n  pros::lcd::register_btn0_cb(ez::as::page_down);\r\n  pros::lcd::register_btn2_cb(ez::as::page_up);\r\n}\n"})})}),(0,a.jsx)(o.Z,{value:"proto",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void page_down();\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"page_up",children:"page_up()"}),"\n",(0,a.jsx)(n.p,{children:"Increases the page. Best used with the lcd callback functions"}),"\n",(0,a.jsxs)(r.Z,{groupId:"ex7",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,a.jsxs)(o.Z,{value:"example",children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void initialize() {\r\n  pros::lcd::register_btn0_cb(ez::as::page_down);\r\n  pros::lcd::register_btn2_cb(ez::as::page_up);\r\n}\n"})})]}),(0,a.jsx)(o.Z,{value:"proto",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void page_down();\r\nvoid page_up();\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"call_selected_auton",children:"call_selected_auton()"}),"\n",(0,a.jsx)(n.p,{children:"Runs the current autonomous that's selected."}),"\n",(0,a.jsxs)(r.Z,{groupId:"ex8",defaultValue:"proto",values:[{label:"Prototype",value:"proto"},{label:"Example",value:"example"}],children:[(0,a.jsx)(o.Z,{value:"example",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void autonomous() {\r\n  chassis.reset_gyro(); \r\n  chassis.reset_drive_sensor(); \r\n  chassis.set_drive_brake(MOTOR_BRAKE_HOLD); \r\n\r\n  ez::as::auton_selector.call_selected_auton(); \r\n}\n"})})}),(0,a.jsx)(o.Z,{value:"proto",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"void call_selected_auton();\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(6010);const l={tabItem:"tabItem_Ymn6"};var r=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),l=t(6010),r=t(2466),o=t(6550),s=t(469),i=t(1980),u=t(7392),c=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=m({queryString:t,groupId:l}),[x,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,c.Nk)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),g=(()=>{const e=u??x;return h({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,r]),tabValues:r}}var v=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(5893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),l=s[t].value;l!==a&&(u(n),o(l))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,l.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function f(e){const n=x(e);return(0,_.jsxs)("div",{className:(0,l.Z)("tabs-container",g.tabList),children:[(0,_.jsx)(b,{...e,...n}),(0,_.jsx)(j,{...e,...n})]})}function w(e){const n=(0,v.Z)();return(0,_.jsx)(f,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(7294);const l={},r=a.createContext(l);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);