// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "button.svelte-1c9vzi4{background:rgba(var(--svelte-rgb), 0.05)}button.svelte-1c9vzi4:active{background:rgba(var(--svelte-rgb), 0.15)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}