import{_ as u,L as l,n as i,p as c,M as e,U as r,Q as t,s as n,a0 as s}from"./framework-074a7e01.js";const p={},_=t("h1",{id:"timepicker-时间选择器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#timepicker-时间选择器","aria-hidden":"true"},"#"),n(" TimePicker 时间选择器")],-1),h=t("p",null,"用于选择或输入日期。",-1),g=t("h2",{id:"示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),n(" 示例")],-1),k=s(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cvue-time-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cvue-time-picker</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,2),m=t("thead",null,[t("tr",null,[t("th",null,"属性名"),t("th",{style:{"text-align":"left"}},"说明"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"可选值")])],-1),f=t("tr",null,[t("td",null,"model-value / v-model"),t("td",{style:{"text-align":"left"}},"绑定值，如果它是数组，长度应该是 2"),t("td",null,"Date / number / string / Array"),t("td",null,"-"),t("td",null,"-")],-1),v=t("tr",null,[t("td",null,"readonly"),t("td",{style:{"text-align":"left"}},"完全只读"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),b=t("tr",null,[t("td",null,"disabled"),t("td",{style:{"text-align":"left"}},"禁用"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),x=t("tr",null,[t("td",null,"editable"),t("td",{style:{"text-align":"left"}},"文本框可输入"),t("td",null,"boolean"),t("td",null,"true"),t("td",null,"-")],-1),y=t("tr",null,[t("td",null,"clearable"),t("td",{style:{"text-align":"left"}},"是否显示清除按钮"),t("td",null,"boolean"),t("td",null,"true"),t("td",null,"-")],-1),C=t("tr",null,[t("td",null,"size"),t("td",{style:{"text-align":"left"}},"输入框尺寸"),t("td",null,"string"),t("td",null,"-"),t("td",null,"large / default / small")],-1),D=t("tr",null,[t("td",null,"placeholder"),t("td",{style:{"text-align":"left"}},"非范围选择时的占位内容"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),q=t("tr",null,[t("td",null,"start-placeholder"),t("td",{style:{"text-align":"left"}},"范围选择时开始日期的占位内容"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),P=t("tr",null,[t("td",null,"end-placeholder"),t("td",{style:{"text-align":"left"}},"范围选择时结束日期的占位内容"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),T=t("tr",null,[t("td",null,"is-range"),t("td",{style:{"text-align":"left"}},"是否为时间范围选择"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),w=t("tr",null,[t("td",null,"arrow-control"),t("td",{style:{"text-align":"left"}},"是否使用箭头进行时间选择"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),E=t("tr",null,[t("td",null,"popper-class"),t("td",{style:{"text-align":"left"}},"TimePicker 下拉框的类名"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),F=t("tr",null,[t("td",null,"range-separator"),t("td",{style:{"text-align":"left"}},"选择范围时的分隔符"),t("td",null,"string"),t("td",null,"'-'"),t("td",null,"-")],-1),H=t("td",null,"format",-1),I=t("td",{style:{"text-align":"left"}},"显示在输入框中的格式",-1),N=t("td",null,"string",-1),V=t("td",null,"HH:mm:ss",-1),B={href:"https://element-plus.org/en-US/component/date-picker.html#date-formats",target:"_blank",rel:"noopener noreferrer"},L=t("tr",null,[t("td",null,"default-value"),t("td",{style:{"text-align":"left"}},"可选，选择器打开时默认显示的时间"),t("td",null,"Date / [Date, Date]"),t("td",null,"-"),t("td",null,"-")],-1),M=t("tr",null,[t("td",null,"id"),t("td",{style:{"text-align":"left"}},"等价于原生 input 的 id 属性"),t("td",null,"string / [string, string]"),t("td",null,"-"),t("td",null,"-")],-1),S=t("tr",null,[t("td",null,"name"),t("td",{style:{"text-align":"left"}},"等价于原生 input 的 name 属性"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),U=t("tr",null,[t("td",null,"prefix-icon"),t("td",{style:{"text-align":"left"}},"自定义前缀图标"),t("td",null,"string | Component"),t("td",null,"Clock"),t("td",null,"-")],-1),j=t("tr",null,[t("td",null,"clear-icon"),t("td",{style:{"text-align":"left"}},"自定义清除图标"),t("td",null,"string | Component"),t("td",null,"CircleClose"),t("td",null,"-")],-1),z=t("tr",null,[t("td",null,"disabled-hours"),t("td",{style:{"text-align":"left"}},"禁止选择部分小时选项"),t("td",null,"function"),t("td",null,"-"),t("td",null,"-")],-1),A=t("tr",null,[t("td",null,"disabled-minutes"),t("td",{style:{"text-align":"left"}},"禁止选择部分分钟选项"),t("td",null,"Function(selectedHour)"),t("td",null,"-"),t("td",null,"-")],-1),Q=t("tr",null,[t("td",null,"disabled-seconds"),t("td",{style:{"text-align":"left"}},"禁止选择部分秒选项"),t("td",null,"Function(selectedHour, selectedMinute)"),t("td",null,"-"),t("td",null,"-")],-1),G=t("tr",null,[t("td",null,"teleported"),t("td",{style:{"text-align":"left"}},"是否将 popover 的下拉列表镜像至 body 元素"),t("td",null,"boolean"),t("td",null,"true"),t("td",null,"true / false")],-1),J=s('<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>(val: typeof v-model)</td></tr><tr><td>blur</td><td>在组件 Input 失去焦点时触发</td><td>(e: FocusEvent)</td></tr><tr><td>focus</td><td>在组件 Input 获得焦点时触发</td><td>(e: FocusEvent)</td></tr><tr><td>visible-change</td><td>当 TimePicker 的下拉列表出现/消失时触发</td><td>(visibility: boolean)</td></tr></tbody></table>',2);function K(O,R){const a=l("TimePickerDemo"),d=l("ContainerDemo"),o=l("ExternalLinkIcon");return i(),c("div",null,[_,h,g,e(d,null,{default:r(()=>[e(a)]),_:1}),k,t("table",null,[m,t("tbody",null,[f,v,b,x,y,C,D,q,P,T,w,E,F,t("tr",null,[H,I,N,V,t("td",null,[n("请查看 "),t("a",B,[n("date formats"),e(o)])])]),L,M,S,U,j,z,A,Q,G])]),J])}const X=u(p,[["render",K],["__file","time-picker.html.vue"]]);export{X as default};
