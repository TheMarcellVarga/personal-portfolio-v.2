import {chromium} from '@playwright/test';
const b=await chromium.launch();
try {
for(const width of [1440,768,390]){
 const p=await b.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
 await p.goto('http://localhost:3100/resume',{waitUntil:'networkidle'});
 await p.evaluate(()=>document.fonts.ready);
 const bounds=await p.locator('.resume-preview').evaluate(e=>{
  const r=e.getBoundingClientRect();const sheet=e.querySelector('.resume-sheet');const grid=e.querySelector('.resume-print-grid');
  const last=[...sheet.querySelectorAll('article')].at(-1).getBoundingClientRect();
  return {width:r.width,height:r.height,ratio:r.width/r.height,grid:getComputedStyle(grid).gridTemplateColumns,contentFits:last.bottom<=r.bottom,overflow:document.documentElement.scrollWidth>window.innerWidth};
 });
 console.log(width,bounds);
 if(Math.abs(bounds.ratio-210/297)>0.001||!bounds.contentFits||bounds.overflow)throw Error('A4 preview check failed');
 await p.locator('.resume-preview').screenshot({path:`tmp/pdfs/ats-audit/preview-${width}.png`});
 await p.close();
}
const p=await b.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}); await p.goto('http://localhost:3100/resume',{waitUntil:'networkidle'}); await p.emulateMedia({media:'print'}); console.log('Print:',await p.locator('.resume-sheet').evaluate(e=>({width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}))); await p.close();
}finally{await b.close();}
