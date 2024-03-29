"use strict";var e=require("react"),t=require("@radix-ui/react-hover-card"),r=require("@wds-utilities/cn");function o(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var a=o(e),n=o(t),i=function(){return i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var s=n.Root,d=n.Trigger,f=a.forwardRef((function(e,t){var o=e.className,s=e.align,d=void 0===s?"center":s,f=e.sideOffset,c=void 0===f?4:f,l=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]])}return r}(e,["className","align","sideOffset"]);return a.createElement(n.Content,i({ref:t,align:d,sideOffset:c,className:r.cn("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o)},l))}));f.displayName=n.Content.displayName,exports.HoverCard=s,exports.HoverCardContent=f,exports.HoverCardTrigger=d;
//# sourceMappingURL=index.js.map
