import{_ as o,L as l,n as i,p as r,M as e,U as p,Q as t,s as n,a0 as s}from"./framework-074a7e01.js";const c={},h=t("h1",{id:"input-输入框",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#input-输入框","aria-hidden":"true"},"#"),n(" Input 输入框")],-1),_=t("p",null,"通过鼠标或键盘输入字符。",-1),g=t("h2",{id:"示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),n(" 示例")],-1),x=s(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cvue-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cvue-input</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>`,2),f=t("thead",null,[t("tr",null,[t("th",null,"属性名"),t("th",{style:{"text-align":"left"}},"说明"),t("th",null,[t("strong",null,"类型")]),t("th",null,"默认值"),t("th",null,"可选值")])],-1),m=t("td",null,"type",-1),y=t("td",{style:{"text-align":"left"}},"类型",-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form__types",target:"_blank",rel:"noopener noreferrer"},b=t("td",null,"text",-1),v=t("td",null,"-",-1),q=t("tr",null,[t("td",null,"model-value / v-model"),t("td",{style:{"text-align":"left"}},"绑定值"),t("td",null,"string / number"),t("td",null,"-"),t("td",null,"-")],-1),w=t("tr",null,[t("td",null,"maxlength"),t("td",{style:{"text-align":"left"}},"最大输入长度"),t("td",null,"string / number"),t("td",null,"-"),t("td",null,"-")],-1),E=t("tr",null,[t("td",null,"minlength"),t("td",{style:{"text-align":"left"}},"原生属性，最小输入长度"),t("td",null,"number"),t("td",null,"-"),t("td",null,"-")],-1),C=t("tr",null,[t("td",null,"show-word-limit"),t("td",{style:{"text-align":"left"}},"是否显示统计字数, 只在 type 为 text 或 textarea 的时候生效"),t("td",null,"boolean"),t("td",null,"boolean"),t("td",null,"-")],-1),I=t("tr",null,[t("td",null,"placeholder"),t("td",{style:{"text-align":"left"}},"输入框占位文本"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),F=t("tr",null,[t("td",null,"clearable"),t("td",{style:{"text-align":"left"}},"是否显示清除按钮，只有当 type 不是 textarea时生效"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),V=t("tr",null,[t("td",null,"formatter"),t("td",{style:{"text-align":"left"}},'指定输入值的格式。(只有当 type 是"text"时才能工作)'),t("td",null,"Function"),t("td",null,"-"),t("td",null,"-")],-1),z=t("tr",null,[t("td",null,"parser"),t("td",{style:{"text-align":"left"}},'指定从格式化器输入中提取的值。(仅当 type 是"text"时才起作用)'),t("td",null,"Function"),t("td",null,"-"),t("td",null,"-")],-1),D=t("tr",null,[t("td",null,"show-password"),t("td",{style:{"text-align":"left"}},"是否显示切换密码图标"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),L=t("tr",null,[t("td",null,"disabled"),t("td",{style:{"text-align":"left"}},"是否禁用"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),N=t("tr",null,[t("td",null,"size"),t("td",{style:{"text-align":"left"}},"输入框尺寸，只在 type 不为 'textarea' 时有效"),t("td",null,"enum"),t("td",null,"-"),t("td",null,"-")],-1),j=t("tr",null,[t("td",null,"prefix-icon"),t("td",{style:{"text-align":"left"}},"自定义前缀图标"),t("td",null,"string / Component"),t("td",null,"-"),t("td",null,"-")],-1),B=t("tr",null,[t("td",null,"suffix-icon"),t("td",{style:{"text-align":"left"}},"自定义后缀图标"),t("td",null,"string / Component"),t("td",null,"-"),t("td",null,"-")],-1),M=t("tr",null,[t("td",null,"rows"),t("td",{style:{"text-align":"left"}},"输入框行数，仅 type 为 'textarea' 时有效"),t("td",null,"number"),t("td",null,"number"),t("td",null,"-")],-1),R=t("tr",null,[t("td",null,"autosize"),t("td",{style:{"text-align":"left"}},"textarea 高度是否自适应，仅 type 为 'textarea' 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }"),t("td",null,"boolean / object"),t("td",null,"false"),t("td",null,"-")],-1),S=t("tr",null,[t("td",null,"autocomplete"),t("td",{style:{"text-align":"left"}},"原生 autocomplete 属性"),t("td",null,"string"),t("td",null,"off"),t("td",null,"-")],-1),T=t("tr",null,[t("td",null,"name"),t("td",{style:{"text-align":"left"}},"等价于原生 input 的name 属性"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),U=t("tr",null,[t("td",null,"readonly"),t("td",{style:{"text-align":"left"}},"原生 readonly 属性，是否只读"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),H=t("tr",null,[t("td",null,"max"),t("td",{style:{"text-align":"left"}},"原生 max 属性，设置最大值"),t("td",null,"-"),t("td",null,"-"),t("td",null,"-")],-1),P=t("tr",null,[t("td",null,"min"),t("td",{style:{"text-align":"left"}},"原生属性，设置最小值"),t("td",null,"-"),t("td",null,"-"),t("td",null,"-")],-1),Q=t("tr",null,[t("td",null,"step"),t("td",{style:{"text-align":"left"}},"原生属性，设置输入字段的合法数字间隔"),t("td",null,"-"),t("td",null,"-"),t("td",null,"-")],-1),W=t("tr",null,[t("td",null,"resize"),t("td",{style:{"text-align":"left"}},"控制是否能被用户缩放"),t("td",null,"enum"),t("td",null,"-"),t("td",null,"-")],-1),A=t("tr",null,[t("td",null,"autofocus"),t("td",{style:{"text-align":"left"}},"原生属性，自动获取焦点"),t("td",null,"boolean"),t("td",null,"false"),t("td",null,"-")],-1),G=t("tr",null,[t("td",null,"form"),t("td",{style:{"text-align":"left"}},"原生属性"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),J=t("tr",null,[t("td",null,"labela11y"),t("td",{style:{"text-align":"left"}},"等价于原生 input 的 aria-label 属性"),t("td",null,"string"),t("td",null,"-"),t("td",null,"-")],-1),K=t("tr",null,[t("td",null,"tabindex"),t("td",{style:{"text-align":"left"}},"输入框的 tabindex"),t("td",null,"string / number"),t("td",null,"-"),t("td",null,"-")],-1),O=t("tr",null,[t("td",null,"validate-event"),t("td",{style:{"text-align":"left"}},"输入时是否触发表单的校验"),t("td",null,"boolean"),t("td",null,"true"),t("td",null,"-")],-1),X=t("tr",null,[t("td",null,"input-style"),t("td",{style:{"text-align":"left"}},"input 元素或 textarea 元素的 style"),t("td",null,"string / object"),t("td",null,"{}"),t("td",null,"-")],-1),Y=s('<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><table><thead><tr><th><strong>事件名</strong></th><th><strong>说明</strong></th><th><strong>类型</strong></th></tr></thead><tbody><tr><td>blur</td><td>当选择器的输入框失去焦点时触发</td><td>(event: FocusEvent) =&gt; void</td></tr><tr><td>focus</td><td>当选择器的输入框获得焦点时触发</td><td>(event: FocusEvent) =&gt; void</td></tr><tr><td>change</td><td>仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发</td><td>(value: string | number)=&gt;void</td></tr><tr><td>input</td><td>在 Input 值改变时触发</td><td>(value: string | number)=&gt;void</td></tr><tr><td>clear</td><td>在点击由 clearable 属性生成的清空按钮时触发</td><td>() =&gt; void</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><table><thead><tr><th>插槽名</th><th>说明</th><th>slotProps</th></tr></thead><tbody><tr><td>prefix</td><td>输入框头部内容，只对非 type=&quot;textarea&quot; 有效</td><td>-</td></tr><tr><td>suffix</td><td>输入框尾部内容，只对非 type=&quot;textarea&quot; 有效</td><td>-</td></tr><tr><td>prepend</td><td>输入框前置内容，只对非 type=&quot;textarea&quot; 有效</td><td>-</td></tr><tr><td>append</td><td>输入框后置内容，只对非 type=&quot;textarea&quot; 有效</td><td>-</td></tr></tbody></table>',4);function Z($,tt){const a=l("InputDemo"),d=l("ContainerDemo"),u=l("ExternalLinkIcon");return i(),r("div",null,[h,_,g,e(d,null,{default:p(()=>[e(a)]),_:1}),x,t("table",null,[f,t("tbody",null,[t("tr",null,[m,y,t("td",null,[n("string "),t("a",k,[n("native input types"),e(u)])]),b,v]),q,w,E,C,I,F,V,z,D,L,N,j,B,M,R,S,T,U,H,P,Q,W,A,G,J,K,O,X])]),Y])}const lt=o(c,[["render",Z],["__file","input.html.vue"]]);export{lt as default};
