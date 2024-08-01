(()=>{"use strict";var t={710:(t,e,n)=>{n.d(e,{A:()=>b});var o=n(601),i=n.n(o),a=n(314),r=n.n(a),s=n(417),m=n.n(s),d=new URL(n(361),n.b),l=new URL(n(445),n.b),h=new URL(n(653),n.b),c=r()(i()),p=m()(d),f=m()(l),u=m()(h);c.push([t.id,`@font-face {\n    font-family: 'LatinModernRoman';\n    src: url(${p}) format("opentype");\n    unicode-range: U+0020-007F, /* Basic Latin */\n                   U+2200-22FF, /* Mathematical Operators */\n                   U+2A00-2AFF, /* Supplemental Mathematical Operators */\n                   U+27C0-27EF; /* Miscellaneous Mathematical Symbols-A */\n   font-display: swap;\n}\n\n@font-face {\n    font-family: 'BiauKai';\n    src: local('標楷體'),\n         url(${f}) format('woff'),\n         url(${u}) format('woff2');\n    unicode-range: U+4E00-9FFF;\n    font-display: swap;\n}\n\n/* ---- */\n\n.mathnote-container {\n    display: block;\n    width: 100%;\n/*    height: 100%;*/\n    border-style: solid;\n    border-color: gray;\n    border-width: 0.5px 0px;\n}\n\n.mathnote-matheq {\n    border-color: gray;\n    border-style: solid;\n    border-width: 0.5px 1px;\n}\n\n.mathnote-matheq.textmode textarea.mathnote-text-textarea {\n    border-width: 1px;\n    width: 100%;\n    overflow: hidden;\n    resize: none;\n    vertical-align: middle;\n    font-family: 'BiauKai', 'LatinModernRoman', 'Symbola',\n                 'Times New Roman', 'Times', serif;  \n    font-size: 1.15em;\n    border: none;\n    white-space: nowrap;\n}\n\n.mathnote-matheq.textmode .mathnote-text-textarea:focus{\n    outline: none;\n}\n\n.mathnote-matheq.focus,\n.mq-editable-field.mq-focused,\n.mq-math-mode .mq-editable-field.mq-focused {\n    box-shadow: none;\n    border-style: solid;\n    border-radius: 0px;\n    border-color: #6a93d2;\n    border-width: 1px 1px;\n\n/*    box-shadow: 0 0 2px #6a93d2 inset,*/\n/*                0 0 2px #6a93d2 inset;*/\n}\n\n.mathnote-matheq.focus {\n/*    box-shadow: 0 0 2px #d26a93 inset, 0 0 2px #d26a93 inset;*/\n    border-color: #d26a93;\n}\n\n.mathnote-matheq {\n    padding: 0px;\n}\n\n.mq-math-mode .mq-root-block {\n    padding: 15px;\n    overflow-x: scroll;\n}\n\n.mathnote-matheq.textmode textarea.mathnote-text-textarea {\n    padding: 14px 15px;\n}\n\n/* --- */\n\n.mathnote-matheq {\n    padding-right: 35px;\n}\n\n.mathnote-label {\n    position: absolute;\n    padding-right: 2px;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n    text-align: middle;\n}\n\n/* --- */\n\n.mq-editable-field,\n.mq-root-block,\n.mq-math-mode,\n.mq-math-mode .mq-root-block {\n    display: block;\n}\n\n/* --- */\n.mq-math-mode big {\n    font-size: 200%;\n}\n\n.mq-math-mode .mq-large-operator {\n    vertical-align: -0.3em;\n    padding: 0.2em;\n}\n\n.mq-math-mode .mq-sub {\n    font-size: 80%;\n    margin-right: 1px;\n}\n\n.mq-math-mode .mq-fraction {\n    font-size: 100%;\n}\n\n.mq-math-mode .mq-text-mode {\n    font-size: 100%;\n}\n\n.mq-editable-field .mq-latex-command-input {\n    border: 0.1px solid gray;\n}\n\n`,""]);const b=c},699:(t,e,n)=>{n.d(e,{A:()=>v});var o=n(601),i=n.n(o),a=n(314),r=n.n(a),s=n(417),m=n.n(s),d=new URL(n(989),n.b),l=new URL(n(349),n.b),h=new URL(n(45),n.b),c=new URL(n(599),n.b),p=new URL(n(316),n.b),f=new URL(n(999),n.b),u=r()(i()),b=m()(d),g=m()(l),q=m()(h),y=m()(c),x=m()(p),w=m()(f,{hash:"#Symbola"});u.push([t.id,`/*\n * MathQuill v0.10.1               http://mathquill.com\n * by Han, Jeanine, and Mary  maintainers@mathquill.com\n *\n * This Source Code Form is subject to the terms of the\n * Mozilla Public License, v. 2.0. If a copy of the MPL\n * was not distributed with this file, You can obtain\n * one at http://mozilla.org/MPL/2.0/.\n */\n@font-face {\n    font-family: Symbola;\n    src: url(${b});\n    src: local("Symbola Regular"), local("Symbola"), url(${g}) format("woff2"), url(${q}) format("woff"), url(${y}) format("truetype"), url(${x}) format("opentype"), url(${w}) format("svg");\n    font-display: swap;\n}\n\n.mq-editable-field {\n    display: -moz-inline-box;\n    display: inline-block;\n}\n\n.mq-editable-field .mq-cursor {\n    border-left: 1px solid black;\n    margin-left: -1px;\n    position: relative;\n    z-index: 1;\n    padding: 0;\n    display: -moz-inline-box;\n    display: inline-block;\n}\n\n.mq-editable-field .mq-cursor.mq-blink {\n    visibility: hidden;\n}\n\n.mq-editable-field,\n.mq-math-mode .mq-editable-field {\n    border: 1px solid gray;\n}\n\n.mq-editable-field.mq-focused,\n.mq-math-mode .mq-editable-field.mq-focused {\n    -webkit-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n    -moz-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n    box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\n    border-color: #709AC0;\n    border-radius: 1px;\n}\n\n.mq-math-mode .mq-editable-field {\n    margin: 1px;\n}\n\n.mq-editable-field .mq-latex-command-input {\n    color: inherit;\n    font-family: "Courier New", monospace;\n    border: 1px solid gray;\n    padding-right: 1px;\n    margin-right: 1px;\n    margin-left: 2px;\n}\n\n.mq-editable-field .mq-latex-command-input.mq-empty {\n    background: transparent;\n}\n\n.mq-editable-field .mq-latex-command-input.mq-hasCursor {\n    border-color: ActiveBorder;\n}\n\n.mq-editable-field.mq-empty:after,\n.mq-editable-field.mq-text-mode:after,\n.mq-math-mode .mq-empty:after {\n    visibility: hidden;\n    content: 'c';\n}\n\n.mq-editable-field .mq-cursor:only-child:after,\n.mq-editable-field .mq-textarea+.mq-cursor:last-child:after {\n    visibility: hidden;\n    content: 'c';\n}\n\n.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {\n    content: '';\n}\n\n.mq-editable-field.mq-text-mode {\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n\n.mq-root-block,\n.mq-math-mode .mq-root-block {\n    display: -moz-inline-box;\n    display: inline-block;\n    width: 100%;\n    padding: 2px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    white-space: nowrap;\n    overflow: hidden;\n    vertical-align: middle;\n}\n\n.mq-math-mode {\n    font-variant: normal;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 115%;\n    line-height: 1;\n    display: -moz-inline-box;\n    display: inline-block;\n}\n\n.mq-math-mode .mq-non-leaf,\n.mq-math-mode .mq-scaled {\n    display: -moz-inline-box;\n    display: inline-block;\n}\n\n.mq-math-mode var,\n.mq-math-mode .mq-text-mode,\n.mq-math-mode .mq-nonSymbola {\n    font-family: "Times New Roman", Symbola, serif;\n    line-height: .9;\n}\n\n.mq-math-mode * {\n    font-size: inherit;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n    border-color: black;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    box-sizing: border-box;\n}\n\n.mq-math-mode .mq-empty {\n    background: #ccc;\n}\n\n.mq-math-mode .mq-empty.mq-root-block {\n    background: transparent;\n}\n\n.mq-math-mode.mq-empty {\n    background: transparent;\n}\n\n.mq-math-mode .mq-text-mode {\n    font-size: 87%;\n}\n\n.mq-math-mode .mq-font {\n    font: 1em "Times New Roman", Symbola, serif;\n}\n\n.mq-math-mode .mq-font * {\n    font-family: inherit;\n    font-style: inherit;\n}\n\n.mq-math-mode b,\n.mq-math-mode b.mq-font {\n    font-weight: bolder;\n}\n\n.mq-math-mode var,\n.mq-math-mode i,\n.mq-math-mode i.mq-font {\n    font-style: italic;\n}\n\n.mq-math-mode var.mq-f {\n    margin-right: 0.2em;\n    margin-left: 0.1em;\n}\n\n.mq-math-mode .mq-roman var.mq-f {\n    margin: 0;\n}\n\n.mq-math-mode big {\n    font-size: 125%;\n}\n\n.mq-math-mode .mq-roman {\n    font-style: normal;\n}\n\n.mq-math-mode .mq-sans-serif {\n    font-family: sans-serif, Symbola, serif;\n}\n\n.mq-math-mode .mq-monospace {\n    font-family: monospace, Symbola, serif;\n}\n\n.mq-math-mode .mq-overline {\n    border-top: 1px solid black;\n    margin-top: 1px;\n}\n\n.mq-math-mode .mq-underline {\n    border-bottom: 1px solid black;\n    margin-bottom: 1px;\n}\n\n.mq-math-mode .mq-binary-operator {\n    padding: 0 0.2em;\n    display: -moz-inline-box;\n    display: inline-block;\n}\n\n.mq-math-mode .mq-supsub {\n    font-size: 90%;\n    vertical-align: -0.5em;\n}\n\n.mq-math-mode .mq-supsub.mq-limit {\n    font-size: 80%;\n    vertical-align: -0.4em;\n}\n\n.mq-math-mode .mq-supsub.mq-sup-only {\n    vertical-align: .5em;\n}\n\n.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {\n    display: inline-block;\n    vertical-align: text-bottom;\n}\n\n.mq-math-mode .mq-supsub .mq-sup {\n    display: block;\n}\n\n.mq-math-mode .mq-supsub .mq-sub {\n    display: block;\n    float: left;\n}\n\n.mq-math-mode .mq-supsub.mq-limit .mq-sub {\n    margin-left: -0.25em;\n}\n\n.mq-math-mode .mq-supsub .mq-binary-operator {\n    padding: 0 .1em;\n}\n\n.mq-math-mode .mq-supsub .mq-fraction {\n    font-size: 70%;\n}\n\n.mq-math-mode sup.mq-nthroot {\n    font-size: 80%;\n    vertical-align: 0.8em;\n    margin-right: -0.6em;\n    margin-left: .2em;\n    min-width: .5em;\n}\n\n.mq-math-mode .mq-paren {\n    padding: 0 .1em;\n    vertical-align: top;\n    -webkit-transform-origin: center .06em;\n    -moz-transform-origin: center .06em;\n    -ms-transform-origin: center .06em;\n    -o-transform-origin: center .06em;\n    transform-origin: center .06em;\n}\n\n.mq-math-mode .mq-paren.mq-ghost {\n    color: silver;\n}\n\n.mq-math-mode .mq-paren+span {\n    margin-top: .1em;\n    margin-bottom: .1em;\n}\n\n.mq-math-mode .mq-array {\n    vertical-align: middle;\n    text-align: center;\n}\n\n.mq-math-mode .mq-array>span {\n    display: block;\n}\n\n.mq-math-mode .mq-operator-name {\n    font-family: Symbola, "Times New Roman", serif;\n    line-height: .9;\n    font-style: normal;\n}\n\n.mq-math-mode var.mq-operator-name.mq-first {\n    padding-left: .2em;\n}\n\n.mq-math-mode var.mq-operator-name.mq-last {\n    padding-right: .2em;\n}\n\n.mq-math-mode .mq-fraction {\n    font-size: 90%;\n    text-align: center;\n    vertical-align: -0.4em;\n    padding: 0 .2em;\n}\n\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link {\n    display: -moz-groupbox;\n}\n\n.mq-math-mode .mq-fraction,\n.mq-math-mode .mq-large-operator,\n.mq-math-mode x:-moz-any-link,\n.mq-math-mode x:default {\n    display: inline-block;\n}\n\n.mq-math-mode .mq-numerator,\n.mq-math-mode .mq-denominator {\n    display: block;\n}\n\n.mq-math-mode .mq-numerator {\n    padding: 0 0.1em;\n}\n\n.mq-math-mode .mq-denominator {\n    border-top: 1px solid;\n    float: right;\n    width: 100%;\n    padding: 0.1em;\n}\n\n.mq-math-mode .mq-sqrt-prefix {\n    padding-top: 0;\n    position: relative;\n    top: 0.1em;\n    vertical-align: top;\n    -webkit-transform-origin: top;\n    -moz-transform-origin: top;\n    -ms-transform-origin: top;\n    -o-transform-origin: top;\n    transform-origin: top;\n}\n\n.mq-math-mode .mq-sqrt-stem {\n    border-top: 1px solid;\n    margin-top: 1px;\n    padding-left: .15em;\n    padding-right: .2em;\n    margin-right: .1em;\n    padding-top: 1px;\n}\n\n.mq-math-mode .mq-vector-prefix {\n    display: block;\n    text-align: center;\n    line-height: .25em;\n    margin-bottom: -0.1em;\n    font-size: 0.75em;\n}\n\n.mq-math-mode .mq-vector-stem {\n    display: block;\n}\n\n.mq-math-mode .mq-large-operator {\n    text-align: center;\n}\n\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator big,\n.mq-math-mode .mq-large-operator .mq-to {\n    display: block;\n}\n\n.mq-math-mode .mq-large-operator .mq-from,\n.mq-math-mode .mq-large-operator .mq-to {\n    font-size: 80%;\n}\n\n.mq-math-mode .mq-large-operator .mq-from {\n    float: right;\n    /* take out of normal flow to manipulate baseline */\n    width: 100%;\n}\n\n.mq-math-mode,\n.mq-math-mode .mq-editable-field {\n    cursor: text;\n    font-family: Symbola, "Times New Roman", serif;\n}\n\n.mq-math-mode .mq-overarrow {\n    border-top: 1px solid black;\n    margin-top: 1px;\n    padding-top: 0.2em;\n}\n\n.mq-math-mode .mq-overarrow:before {\n    display: block;\n    position: relative;\n    top: -0.34em;\n    font-size: 0.5em;\n    line-height: 0em;\n    content: '\\27A4';\n    text-align: right;\n}\n\n.mq-math-mode .mq-overarrow.mq-arrow-left:before {\n    -moz-transform: scaleX(-1);\n    -o-transform: scaleX(-1);\n    -webkit-transform: scaleX(-1);\n    transform: scaleX(-1);\n    filter: FlipH;\n    -ms-filter: "FlipH";\n}\n\n.mq-math-mode .mq-selection,\n.mq-editable-field .mq-selection,\n.mq-math-mode .mq-selection .mq-non-leaf,\n.mq-editable-field .mq-selection .mq-non-leaf,\n.mq-math-mode .mq-selection .mq-scaled,\n.mq-editable-field .mq-selection .mq-scaled {\n    background: #B4D5FE !important;\n    background: Highlight !important;\n    color: HighlightText;\n    border-color: HighlightText;\n}\n\n.mq-math-mode .mq-selection .mq-matrixed,\n.mq-editable-field .mq-selection .mq-matrixed {\n    background: #39F !important;\n}\n\n.mq-math-mode .mq-selection .mq-matrixed-container,\n.mq-editable-field .mq-selection .mq-matrixed-container {\n    filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important;\n}\n\n.mq-math-mode .mq-selection.mq-blur,\n.mq-editable-field .mq-selection.mq-blur,\n.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,\n.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,\n.mq-math-mode .mq-selection.mq-blur .mq-scaled,\n.mq-editable-field .mq-selection.mq-blur .mq-scaled,\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed {\n    background: #D4D4D4 !important;\n    color: black;\n    border-color: black;\n}\n\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {\n    filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important;\n}\n\n.mq-editable-field .mq-textarea,\n.mq-math-mode .mq-textarea {\n    position: relative;\n    -webkit-user-select: text;\n    -moz-user-select: text;\n    user-select: text;\n}\n\n.mq-editable-field .mq-textarea *,\n.mq-math-mode .mq-textarea *,\n.mq-editable-field .mq-selectable,\n.mq-math-mode .mq-selectable {\n    -webkit-user-select: text;\n    -moz-user-select: text;\n    user-select: text;\n    position: absolute;\n    clip: rect(1em 1em 1em 1em);\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    -o-transform: scale(0);\n    transform: scale(0);\n    resize: none;\n    width: 1px;\n    height: 1px;\n}\n\n.mq-math-mode .mq-matrixed {\n    background: white;\n    display: -moz-inline-box;\n    display: inline-block;\n}\n\n.mq-math-mode .mq-matrixed-container {\n    filter: progid:DXImageTransform.Microsoft.Chroma(color='white');\n    margin-top: -0.1em;\n}`,""]);const v=u},82:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(601),i=n.n(o),a=n(314),r=n.n(a)()(i());r.push([t.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}",""]);const s=r},16:(t,e,n)=>{n.d(e,{A:()=>s});var o=n(601),i=n.n(o),a=n(314),r=n.n(a)()(i());r.push([t.id,"* {\n    box-sizing: border-box;\n    position: relative;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    overflow: hidden;\n}\n\n/* --- */\n.freemath-container {\n}\n\n.freemath-canvas {\n}\n\n.freemath-path-container {\n}\n\n.freemath-note-container {\n\n}\n\n.note {\n    position: absolute;\n    display: block;\n    white-space: nowrap;\n    margin: 0;\n    padding: 8px;\n    border: 1px solid #888;\n    background-color: white;\n    border-radius: 6px;\n    cursor: move;\n    transform: translate(-50%, -50%);\n}\n\n.note.focus {\n    box-shadow: 0 0 6px #fdfa72, 0 0 6px #fdfa72, 0 0 6px #fdfa72;\n}",""]);const s=r},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var m=this[s][0];null!=m&&(r[m]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},417:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},r=[],s=0;s<t.length;s++){var m=t[s],d=o.base?m[0]+o.base:m[0],l=a[d]||0,h="".concat(d," ").concat(l);a[d]=l+1;var c=n(h),p={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(-1!==c)e[c].references++,e[c].updater(p);else{var f=i(p,o);o.byIndex=s,e.splice(s,0,{identifier:h,updater:f,references:1})}r.push(h)}return r}function i(t,e){var n=e.domAPI(e);n.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var a=o(t=t||[],i=i||{});return function(t){t=t||[];for(var r=0;r<a.length;r++){var s=n(a[r]);e[s].references--}for(var m=o(t,i),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=m}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},361:(t,e,n)=>{t.exports=n.p+"fonts/Latin-Modern-Roman-10.otf"},989:(t,e,n)=>{t.exports=n.p+"fonts/Symbola.eot"},316:(t,e,n)=>{t.exports=n.p+"fonts/Symbola.otf"},999:(t,e,n)=>{t.exports=n.p+"fonts/Symbola.svg"},599:(t,e,n)=>{t.exports=n.p+"fonts/Symbola.ttf"},45:(t,e,n)=>{t.exports=n.p+"fonts/Symbola.woff"},349:(t,e,n)=>{t.exports=n.p+"fonts/Symbola.woff2"},445:(t,e,n)=>{t.exports=n.p+"fonts/edukai-5.0.woff"},653:(t,e,n)=>{t.exports=n.p+"fonts/edukai-5.0.woff2"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=o[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o=n(72),i=n.n(o),a=n(825),r=n.n(a),s=n(659),m=n.n(s),d=n(56),l=n.n(d),h=n(540),c=n.n(h),p=n(113),f=n.n(p),u=n(82),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=m().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=c();i()(u.A,b);u.A&&u.A.locals&&u.A.locals;var g=n(699),q={};q.styleTagTransform=f(),q.setAttributes=l(),q.insert=m().bind(null,"head"),q.domAPI=r(),q.insertStyleElement=c();i()(g.A,q);g.A&&g.A.locals&&g.A.locals;var y=n(16),x={};x.styleTagTransform=f(),x.setAttributes=l(),x.insert=m().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=c();i()(y.A,x);y.A&&y.A.locals&&y.A.locals;var w=n(710),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=m().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=c();i()(w.A,v);w.A&&w.A.locals&&w.A.locals;const k=class{constructor(t={}){this.id=this.hash(Date.now().toString()),this.dom={},this.dom.parent=t.parent||document.body,this.mathquill=MathQuill.getInterface(2),this.createTime=this.getTime(),this.id_prefix=this.config?.id_prefix||this.id,this._id_num=1,this.focusId=null,this.mathfields={},this.downkeys={},this.states={},this.isComposing=!1,window.MathEditors?window.MathEditors.forEach((t=>{Object.values(t.mathfields).forEach((t=>{t.blur()}))})):window.MathEditors=[],window.MathEditors.push(this),window.needFocusUpDown=!1,this.initializeDom()}createId(t){return this._id_num+=1,`${this.id_prefix}-${this._id_num-1}`}initializeDom(){this.dom.container=this.createAndAppendElement(this.dom.parent,"div",{class:"mathnote-container",id:this.id}),this.dom.matheqs={},this.dom.labels={},this.createEquationDom()}createEquationDom(){const t=this.createId(),e={id:t,isEmpty:!0,latex:""},{matheq:n,mathfield:o}=this.addMathModeArea(t,e);return this.dom.container.lastChild&&this.dom.matheqs[this.focusId]&&this.dom.matheqs[this.focusId].nextSibling?this.dom.matheqs[this.focusId].nextSibling&&this.dom.container.insertBefore(n,this.dom.matheqs[this.focusId].nextSibling):this.dom.container.appendChild(n),this.orderLabelNum(),this.states[t]=e,this.focusId=t,o.focus(),!0}createLabelDom(t){const e=`${t}-label-num`,n=this.createAndAppendElement(null,"div",{class:"mathnote-label"}),o=this.createAndAppendElement(n,"span",{class:"mq-non-leaf"});this.createAndAppendElement(o,"span",{class:"mq-scaled mq-paren",style:"transform: scale(0.999983, 1.1999)",textContent:"("}),this.createAndAppendElement(o,"span",{class:"mq-non-leaf matheq-label-num",id:e,textContent:"0"}),this.createAndAppendElement(o,"span",{class:"mq-scaled mq-paren",style:"transform: scale(0.999983, 1.1999)",textContent:")"});return this.dom.labels[e]=n.querySelector(`#${e}`),n}addMathModeArea(t,e){const n=this.createAndAppendElement(null,"div",{class:"mathnote-matheq",id:t}),o=this.createLabelDom(t),i=this.createAndAppendElement(null,"textarea",{class:"mathnote-math-textarea",autocapitalize:"off",autocomplete:"off",autocorrect:"off",spellcheck:"false",id:`${t}-mathmode-textarea`});i.setAttribute("x-palm-disable-ste-all","true");const a=this.mathquill.MathField(n,{substituteTextarea:function(){return i},handlers:{edit:function(t){e.latex=a.latex(),e.isEmpty=""===e.latex},enter:function(){this.createEquationDom()}.bind(this)}});return n.appendChild(o),i.addEventListener("keydown",function(t){this.handleMathKeydown(t,n,a)}.bind(this),!1),n.addEventListener("click",function(e){this.focusId=t}.bind(this),!1),this.dom.matheqs[t]=n,this.mathfields[t]=a,{matheq:n,mathfield:a}}orderLabelNum(){requestAnimationFrame(function(){Array.from(this.dom.container.querySelectorAll(".matheq-label-num")).forEach(((t,e)=>{t.textContent=`${e+1}`}))}.bind(this))}addTextModeArea(t,e){const n=t.id,o=this.states[n],i=this.createAndAppendElement(null,"div",{class:"mathnote-matheq textmode",id:n});t.replaceWith(i);const a=this.createAndAppendElement(i,"div",{class:"mathnote-text-container"}),r=this.createAndAppendElement(a,"textarea",{class:"mathnote-text-textarea",autocapitalize:"off",id:`${n}-textmode-textarea`,rows:1});r.addEventListener("keydown",function(t){this.handleTextKeydown(t,r,i)}.bind(this),!1),r.addEventListener("focus",function(t){i.classList.add("focus")}.bind(this),!1),r.addEventListener("blur",function(t){i.classList.remove("focus")}.bind(this),!1),r.addEventListener("compositionstart",function(){this.isComposing=!0}.bind(this),!1),r.addEventListener("compositionend",function(){this.isComposing=!1}.bind(this),!1),r.addEventListener("input",function(){o.text=r.value,o.isEmpty=""===o.text,r.style.height="auto",r.style.height=r.scrollHeight+"px",r.style.width="auto",r.style.width=r.scrollWidth+"px"}.bind(this),!1),e.blur(),e=null,r.focus(),setTimeout((function(){r.value="",o.text=r.value,o.isEmpty=!0}),0),this.dom.matheqs[n]=i,this.mathfields[n]=r,delete o.latex}handleMathKeydown(t,e,n){const o=this.states[this.focusId];"ArrowUp"===t.key||"ArrowDown"===t.key?setTimeout(function(){window.needFocusUpDown&&(window.needFocusUpDown=!1,this.moveFocusUpDown(t,e))}.bind(this),0):!o.isEmpty||"Backspace"!==t.key||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey?o.isEmpty&&(t.ctrlKey||t.metaKey)&&"/"===t.key&&this.addTextModeArea(e,n):this.deleteFocus()}handleTextKeydown(t,e,n){const o=this.states[this.focusId];if(!this.isComposing)if("ArrowUp"===t.key||"ArrowDown"===t.key){const o=e.selectionStart,i=o>0,a=o<e.value.length;("ArrowUp"!==t.key||i)&&("ArrowDown"!==t.key||a)||this.moveFocusUpDown(t,n)}else if("Enter"!==t.key||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)if(!o.isEmpty||"Backspace"!==t.key||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey){if(o.isEmpty&&(t.ctrlKey||t.metaKey)&&"/"===t.key){const t=this.focusId,e=this.states[t],{matheq:o,mathfield:i}=this.addMathModeArea(t,e);n.replaceWith(o),this.orderLabelNum(),i.focus(),delete e.text}}else this.deleteFocus();else t.preventDefault(),this.createEquationDom()}deleteFocus(){const t=this.focusId,e=this.dom.matheqs[t]?.previousSibling;if(!e)return;this.dom.matheqs[t].remove();const n=e.id;this.focusId=n,delete this.dom.matheqs[t],delete this.states[t],delete this.mathfields[t],this.mathfields[n].focus()}moveFocusUpDown(t,e){if("ArrowDown"===t.key&&e.nextSibling){const t=e.nextSibling.id;this.mathfields[t]?.focus(),this.focusId=t}else if("ArrowUp"===t.key&&e.previousSibling){const t=e.previousSibling.id;this.mathfields[t]?.focus(),this.focusId=t}}getTime(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}:${String(t.getMilliseconds()).padStart(2,"0")}`}hash(t){let e=0;for(let n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e|=0}e=Math.abs(e);let n="";for(;e>0;){n="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[(e+Math.floor(100*Math.random()))%26]+n,e=Math.floor(e/26)}return n}createAndAppendElement(t,e,n={}){const o=document.createElement(e);return n.class&&(n.class.split(" ").forEach((t=>o.classList.add(t))),delete n.class),n.dataset&&(Object.keys(n.dataset).forEach((t=>o.dataset[t]=n.dataset[t])),delete n.dataset),Object.keys(n).forEach((t=>o[t]=n[t])),t&&t.appendChild(o),o}};const A=class{constructor(t={}){this.dom={},this.translate={x:0,y:0},this.background={type:"dot",size:20,lineStyle:"#aaa",lineWidth:1},this.createTime=this.getTime(),this.dom.parent=t.parent||document.body,this.mouseClickStart={x:0,y:0},this.currentDraggingNote=null,this.focusNote=null,this.drawingPath=!1,this.pathStart={x:0,y:0,id:null},this.initializeDom()}initializeDom(){this.dom.container=this.createAndAppendElement(this.dom.parent,"div",{class:"freemath-container",style:"display: block; position: fixed; top: 0; left: 0; overflow: hidden; width: 100vw; height: 100vh;"}),this.dom.canvas=this.createAndAppendElement(this.dom.container,"div",{class:"freemath-canvas",style:"display: block; position: fixed;  overflow: hidden; width: 100%; height: 100%;"}),this.dom.noteContainer=this.createAndAppendElement(this.dom.container,"div",{class:"freemath-note-container",style:"display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;"}),this.dom.notes={},this.dom.paths={},this.changeBackground(),this.initializeSVGLayer(),this.dom.container.addEventListener("wheel",this.containerWheelEvents.bind(this),{passive:!0}),this.dom.container.addEventListener("dblclick",this.containerDoubleClickEvent.bind(this),!1),this.dom.container.addEventListener("mousedown",this.containerMouseDownEvent.bind(this),!1),document.addEventListener("keydown",this.containerKeyDownEvent.bind(this),!1),document.addEventListener("mousemove",this.containerMouseMoveEvent.bind(this),!1),document.addEventListener("mouseup",this.containerMouseUpEvent.bind(this),!1)}initializeSVGLayer(){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("overflow","visible"),t.style="display: block; width: 100%; height: 100%; position: absolute; left: 0; top: 0;",this.dom.pathContainer=t,this.dom.canvas.appendChild(t),this.dom.noteContainer.appendChild(t)}containerWheelEvents(t){if(t.ctrlKey)return;this.translate.x-=t.deltaX,this.translate.y-=t.deltaY;const e=this.dom.container.getBoundingClientRect(),n=.5*e.width,o=.5*e.height;requestAnimationFrame(function(){this.dom.noteContainer.style.transform=`translate(${this.translate.x}px, ${this.translate.y}px)`,this.dom.canvas.style.backgroundPosition=`${n+this.translate.x}px ${o+this.translate.y}px`}.bind(this))}containerDoubleClickEvent(t){t.preventDefault(),app.addNote(t.clientX-this.translate.x,t.clientY-this.translate.y)}containerMouseDownEvent(t){if(Object.values(this.dom.notes).forEach((t=>{t.classList.remove("focus")})),t.target.classList.contains("note"))if(this.focusNote=t.target,this.focusNote.classList.add("focus"),!t.shiftKey||this.drawingPath||this.dom.drawingPath)this.currentDraggingNote=t.target,this.startX=t.clientX-t.target.offsetLeft,this.startY=t.clientY-t.target.offsetTop;else{this.drawingPath=!0;const e=t.target.getBoundingClientRect(),n=e.left+e.width/2-this.translate.x,o=e.top+e.height/2-this.translate.y;this.pathStart={x:n,y:o,id:t.target.id},this.dom.drawingPath=this.createBezierCurve(this.pathStart,this.pathStart)}else this.focusNote=null}containerMouseMoveEvent(t){if(!t.shiftKey&&this.currentDraggingNote){const e=this.dom.noteContainer.getBoundingClientRect(),n=t.clientX-e.left-this.startX+this.translate.x,o=t.clientY-e.top-this.startY+this.translate.y;this.currentDraggingNote.style.left=`${n}px`,this.currentDraggingNote.style.top=`${o}px`;const i=this.currentDraggingNote.id;Object.keys(this.dom.paths).forEach((t=>{if(!t.includes(i))return;const e=this.dom.paths[t],n=this.currentDraggingNote.getBoundingClientRect(),o=n.left+n.width/2-this.translate.x,a=n.top+n.height/2-this.translate.y;i===e.start.id?(e.start.x=o,e.start.y=a):i===e.end.id&&(e.end.x=o,e.end.y=a),this.setBezierCurvePath(e.dom,e.start,e.end)}))}else if(t.shiftKey&&this.drawingPath&&this.dom.drawingPath){const e={x:t.clientX-this.translate.x,y:t.clientY-this.translate.y};this.setBezierCurvePath(this.dom.drawingPath,this.pathStart,e)}}containerMouseUpEvent(t){if(this.currentDraggingNote)this.currentDraggingNote=null;else if(this.drawingPath&&this.dom.drawingPath&&(this.dom.drawingPath.remove(),t.target.classList.contains("note"))){const e=t.target.getBoundingClientRect(),n={x:e.left+e.width/2-this.translate.x,y:e.top+e.height/2-this.translate.y,id:t.target.id},o=`${this.pathStart.id}-${n.id}`;this.dom.paths[o]={start:this.pathStart,end:n,dom:this.createBezierCurve(this.pathStart,n)}}this.dom.drawingPath=null,this.drawingPath=!1}containerKeyDownEvent(t){if(this.focusNote&&"Backspace"===t.key){if(!window.confirm("Are you sure to delete this note?"))return;const t=this.focusNote.id;this.focusNote.remove(),Object.keys(this.dom.paths).forEach((e=>{e.includes(t)&&this.dom.paths[e].dom.remove()}))}else(t.metaKey||t.ctrlKey)&&"e"===t.key&&this.exportState()}exportState(){if(!window.MathEditors)return;const t={};window.MathEditors.forEach((e=>{t[e.id]=e.states}));const e=`freemath-${this.createTime}.json`,n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,4)),o=document.createElement("a");o.setAttribute("href",n),o.setAttribute("download",e),document.body.appendChild(o),o.click(),o.remove()}createBezierCurve(t,e){const n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("fill","none"),n.setAttribute("stroke","#000000"),n.setAttribute("stroke-width","1.75"),this.setBezierCurvePath(n,t,e),this.dom.pathContainer.appendChild(n),n}setBezierCurvePath(t,e,n){const o=e.x,i=e.y,a=n.x,r=n.y,s=o+(a-o)/3,m=i,d=a-(a-o)/3,l=r;t.setAttribute("d",`M ${o} ${i} C ${s} ${m}, ${d} ${l}, ${a} ${r}`)}findParentWithSelector(t,e){if(!t)return null;let n=t;for(;n;){if(n===document.body)return null;if(n.matches(e))return n;n=n.parentElement}return null}addNote(t,e){const n=this.hash(`${t}-${e}-${Date.now()}`.padStart(50,"0")).slice(0,10),o=this.createAndAppendElement(this.dom.noteContainer,"div",{class:"note",id:n,draggable:!1,style:`display: block; absolute; top: ${e}px; left: ${t}px; min-width: 300px;`});new k({parent:o});this.dom.notes[n]=o}changeBackground(){const t=this.dom.canvas,e=this.background;if("none"===e.type)return;const n=this.dom.container.getBoundingClientRect(),o=.5*n.width,i=.5*n.height;t.style.background="white","dot"===e.type?t.style.backgroundImage=`radial-gradient(${e.lineStyle} ${e.lineWidth}px, transparent 0)`:"grid"===e.type&&(t.style.backgroundImage=`linear-gradient(to right, ${e.lineStyle} ${e.lineWidth}px, transparent ${e.lineWidth}px), linear-gradient(to bottom, ${e.lineStyle} ${e.lineWidth}px, transparent ${e.lineWidth}px)`),t.style.backgroundPosition=`${o+this.translate.x}px ${i+this.translate.y}px`,t.style.backgroundSize=`${e.size}px ${e.size}px`}getTime(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}:${String(t.getMilliseconds()).padStart(2,"0")}`}hash(t){let e=0;for(let n=0;n<t.length;n++){e=(e<<5)-e+t.charCodeAt(n),e|=0}e=Math.abs(e);const n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let o="";for(;e>0;){o=n[(e+Math.floor(1e3*Math.random()))%26]+o,e=Math.floor(e/26*10)}return o}createAndAppendElement(t,e,n={}){const o=document.createElement(e);return n.class&&(n.class.split(" ").forEach((t=>o.classList.add(t))),delete n.class),n.dataset&&(Object.keys(n.dataset).forEach((t=>o.dataset[t]=n.dataset[t])),delete n.dataset),Object.keys(n).forEach((t=>{o[t]=n[t],o[t]||o.setAttribute(t,n[t])})),Object.keys(n).forEach((t=>{o[t]=n[t]})),t&&t.appendChild(o),o}};window.addEventListener("load",(t=>{const e=new A({});e.addNote(.5*window.innerWidth,.5*window.innerHeight),window.app=e}))})();