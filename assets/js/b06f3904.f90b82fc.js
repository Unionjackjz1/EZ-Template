"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[780],{6289:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=s(5893),t=s(1151);const r={title:"Example Autonomous Routines",description:"Some examples and test routines"},a="Example Autonomous Routines",d={id:"tutorials/example_autons",title:"Example Autonomous Routines",description:"Some examples and test routines",source:"@site/ez-template-docs/tutorials/example_autons.md",sourceDirName:"tutorials",slug:"/tutorials/example_autons",permalink:"/EZ-Template/tutorials/example_autons",draft:!1,unlisted:!1,editUrl:"https://github.com/EZ-Robotics/EZ-Template/tree/website/ez-template-docs/tutorials/example_autons.md",tags:[],version:"current",frontMatter:{title:"Example Autonomous Routines",description:"Some examples and test routines"},sidebar:"tutorialSidebar",previous:{title:"Adding Autonomous Routines",permalink:"/EZ-Template/tutorials/autons"},next:{title:"Joystick Curves",permalink:"/EZ-Template/tutorials/joystick_curve"}},o={},l=[{value:"Assumed Constants",id:"assumed-constants",level:2},{value:"Drive",id:"drive",level:2},{value:"Turn",id:"turn",level:2},{value:"Drive and Turn",id:"drive-and-turn",level:2},{value:"Wait Until and Changing Speed",id:"wait-until-and-changing-speed",level:2},{value:"Swing Turns",id:"swing-turns",level:2},{value:"Combining All Movements",id:"combining-all-movements",level:2},{value:"Interference",id:"interference",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"example-autonomous-routines",children:(0,i.jsx)(n.strong,{children:"Example Autonomous Routines"})}),"\n",(0,i.jsx)(n.h2,{id:"assumed-constants",children:"Assumed Constants"}),"\n",(0,i.jsx)(n.p,{children:"These are default speeds that we can use throughout our autonomous routines to make it easier to modify them retroactively."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"const int DRIVE_SPEED = 110; \r\nconst int TURN_SPEED  = 90;\r\nconst int SWING_SPEED = 90;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"drive",children:"Drive"}),"\n",(0,i.jsxs)(n.p,{children:["This autonomous routine will have the robot go forwards for 24 inches with slew enabled, come back -12 inches, then come back another -12 inches to where it started.  It will do all of this at the predefined ",(0,i.jsx)(n.code,{children:"DRIVE_SPEED"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void drive_example() {\r\n  // The first parameter is target inches\r\n  // The second parameter is max speed the robot will drive at\r\n  // The third parameter is a boolean (true or false) for enabling/disabling a slew at the start of drive motions\r\n  // for slew, only enable it when the drive distance is greater then the slew distance + a few inches\r\n\r\n\r\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_drive_pid(-12, DRIVE_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_drive_pid(-12, DRIVE_SPEED);\r\n  chassis.wait_drive();\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"turn",children:"Turn"}),"\n",(0,i.jsxs)(n.p,{children:["This autonomous routine will turn 90 degrees, then back 45 degrees, and finally to 0 where it started.  It will do all of this at the predefined ",(0,i.jsx)(n.code,{children:"TURN_SPEED"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void turn_example() {\r\n  // The first parameter is target degrees\r\n  // The second parameter is max speed the robot will drive at\r\n\r\n\r\n  chassis.set_turn_pid(90, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(45, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(0, TURN_SPEED);\r\n  chassis.wait_drive();\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"drive-and-turn",children:"Drive and Turn"}),"\n",(0,i.jsx)(n.p,{children:"This autonomous routine will combine driving and turning in a single function."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void drive_and_turn() {\r\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(45, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(-45, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(0, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_drive_pid(-24, DRIVE_SPEED, true);\r\n  chassis.wait_drive();\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"wait-until-and-changing-speed",children:"Wait Until and Changing Speed"}),"\n",(0,i.jsxs)(n.p,{children:["Now we add ",(0,i.jsx)(n.code,{children:"wait_until()"}),".  This new function will wait until a specified distance has been traveled and then allow the code to continue.  The robot will drive at ",(0,i.jsx)(n.code,{children:"DRIVE_SPEED"})," until the robot has traveled 6 inches, then will lower the max speed to 40.  The same thing happens on the return back."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void wait_until_change_speed() {\r\n  // wait_until will wait until the robot gets to a desired position\r\n\r\n\r\n  // When the robot gets to 6 inches, the robot will travel the remaining distance at a max speed of 40\r\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\r\n  chassis.wait_until(6);\r\n  chassis.set_max_speed(40); // After driving 6 inches at DRIVE_SPEED, the robot will go the remaining distance at 40 speed\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(45, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(-45, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(0, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  // When the robot gets to -6 inches, the robot will travel the remaining distance at a max speed of 40\r\n  chassis.set_drive_pid(-24, DRIVE_SPEED, true);\r\n  chassis.wait_until(-6);\r\n  chassis.set_max_speed(40); // After driving 6 inches at DRIVE_SPEED, the robot will go the remaining distance at 40 speed\r\n  chassis.wait_drive();\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"swing-turns",children:"Swing Turns"}),"\n",(0,i.jsx)(n.p,{children:"Swing turns are turns that only use one side of the drive.  Left swings use the left side, and right swings use the right side.  This will turn the robot to 45 degrees using the left side, drive 24 inches, then turn to 0 degrees using the right side."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void swing_example() {\r\n  // The first parameter is ez::LEFT_SWING or ez::RIGHT_SWING\r\n  // The second parameter is target degrees\r\n  // The third parameter is speed of the moving side of the drive\r\n\r\n\r\n  chassis.set_swing_pid(ez::LEFT_SWING, 45, SWING_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\r\n  chassis.wait_until(12);\r\n\r\n  chassis.set_swing_pid(ez::RIGHT_SWING, 0, SWING_SPEED);\r\n  chassis.wait_drive();\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"combining-all-movements",children:"Combining All Movements"}),"\n",(0,i.jsx)(n.p,{children:"This combines all movements from above."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void combining_movements() {\r\n  chassis.set_drive_pid(24, DRIVE_SPEED, true);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(45, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_drive_pid(ez::RIGHT_SWING, -45, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_turn_pid(0, TURN_SPEED);\r\n  chassis.wait_drive();\r\n\r\n  chassis.set_drive_pid(-24, DRIVE_SPEED, true);\r\n  chassis.wait_drive();\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"interference",children:"Interference"}),"\n",(0,i.jsx)(n.p,{children:'Interference checks if the drive exited in an unintentional way.  If the robot stops unintentionally or pulls too many amps this will trigger.  This allows you to add fail-safes that stop your robot from burning out.  The below function will attempt to "tug" an opponent mobile goal a couple times before giving up.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'void tug (int attempts) {\r\n  for (int i=0; i<attempts-1; i++) {\r\n    // Attempt to drive backwards\r\n    printf("i - %i", i);\r\n    chassis.set_drive_pid(-12, 127);\r\n    chassis.wait_drive();\r\n\r\n    // If failsafed...\r\n    if (chassis.interfered) {\r\n      chassis.reset_drive_sensor();\r\n      chassis.set_drive_pid(-2, 20);\r\n      pros::delay(1000);\r\n    }\r\n    // If robot successfully drove back, return\r\n    else {\r\n      return;\r\n    }\r\n  }\r\n}\r\n\r\n// If there is no interference, robot will drive forward and turn 90 degrees. \r\n// If interfered, robot will drive forward and then attempt to drive backwards. \r\nvoid interfered_example() {\r\n chassis.set_drive_pid(24, DRIVE_SPEED, true);\r\n chassis.wait_drive();\r\n\r\n if (chassis.interfered) {\r\n   tug(3);\r\n   return;\r\n }\r\n\r\n chassis.set_turn_pid(90, TURN_SPEED);\r\n chassis.wait_drive();\r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>a});var i=s(7294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);