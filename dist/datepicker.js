!function(t){var e={};function a(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist",a(a.s=0)}([function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a(1);class s{constructor(t={}){console.log("Pla"),this.options=s.extend(t),this.selector="string"==typeof this.options.selector?document.querySelector(this.options.selector):this.options.selector,this.activeDates=null,this.date=new Date,this.todaysDate=new Date,this.month=document.querySelector(".datepicker__month"),this.week=document.querySelector(".datepicker__week"),this.label=document.querySelector(".datepicker__label"),this.readFile("dist/langs/"+this.options.lang+".json",t=>{this.langs=JSON.parse(t),this.label.innerHTML=this.monthsAsString(this.date.getMonth())+" "+this.date.getFullYear();const e=this.options.weekShort?this.langs.daysShort:this.langs.days;for(let t=0;t<e.length;t++)this.creatWeek(e[t])}),this.date.setDate(1),this.createMonth()}static extend(t){const e={selector:".datepicker",lang:"en",format:"mm/dd/yyyy",weekShort:!0,multiplePick:!0,disablePastDays:!1,onInit:()=>{},onChange:()=>{}},a=t;for(const t in a)e[t]=a[t];return e}prev(){this.clearCalendar();var t=this.date.getMonth()-1;this.date.setMonth(t),this.createMonth()}next(){this.clearCalendar();var t=this.date.getMonth()+1;this.date.setMonth(t),this.createMonth()}creatWeek(t){const e=document.createElement("span");e.className="datepicker__week__day",e.innerHTML=t,this.week.appendChild(e)}createDay(t,e,a){var s=document.createElement("div"),i=document.createElement("span");i.innerHTML=t,s.className="datepicker__day",s.setAttribute("data-calendar-date",this.date),1===t&&(s.style.marginLeft=0===e?6*14.28+"%":14.28*(e-1)+"%"),this.options.disablePastDays&&this.date.getTime()<=this.todaysDate.getTime()-1?s.classList.add("is-disabled"):(s.classList.add("is-active"),s.setAttribute("data-calendar-status","active")),this.date.toString()===this.todaysDate.toString()&&s.classList.add("is-today"),s.appendChild(i),console.log(this.month),this.month&&this.month.appendChild(s)}dateClicked(){this.activeDates=document.querySelectorAll('[data-calendar-status="active"]');for(var t=0;t<this.activeDates.length;t++)this.activeDates[t].addEventListener("click",t=>{document.querySelectorAll('[data-calendar-label="picked"]')[0]&&console.log(t),this.removeActiveClass()})}createMonth(){for(var t=this.date.getMonth();this.date.getMonth()===t;)this.createDay(this.date.getDate(),this.date.getDay(),this.date.getFullYear()),this.date.setDate(this.date.getDate()+1);this.date.setDate(1),this.date.setMonth(this.date.getMonth()-1),this.dateClicked()}monthsAsString(t){return this.langs.months[t]}clearCalendar(){this.month.innerHTML=""}removeActiveClass(){for(var t=0;t<this.activeDates.length;t++)this.activeDates[t].classList.remove("is-selected")}readFile(t,e){var a=new XMLHttpRequest;a.overrideMimeType("application/json"),a.open("GET",t,!0),a.onreadystatechange=function(){4==a.readyState&&"200"==a.status&&e(a.responseText)},a.send(null)}}e.Datepicker=s;const i=a(0);var n;!function(t){t.Datepicker=i.Datepicker}(n=e.MyModule||(e.MyModule={})),window.Datepicker=n.Datepicker},function(t,e){}]);