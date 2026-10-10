import { chromium } from '@playwright/test';
const browser = await chromium.launch({headless:true});
try {
 const page = await browser.newPage({viewport:{width:1440,height:1200}, reducedMotion:'reduce'});
 await page.goto('http://localhost:3100/resume', {waitUntil:'networkidle'});
 await page.getByRole('button', {name:'Reveal phone number',exact:true}).click();
 await page.locator('.resume-sheet a[href^="tel:"]').waitFor();
 await page.emulateMedia({media:'print'});
 await page.addStyleTag({content: '.resume-sheet * { letter-spacing: normal !important; font-variant-ligatures: none !important; }'});
 await page.evaluate(()=>{
  const grid=document.querySelector('.resume-print-grid');
  const aside=grid.querySelector(':scope > aside');
  const main=grid.querySelector(':scope > div');
  aside.style.gridColumn='1'; aside.style.gridRow='1';
  main.style.gridColumn='2'; main.style.gridRow='1';
  grid.prepend(main);
 });
 await page.evaluate(async()=>{await document.fonts.ready; await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});
 await page.pdf({path:'tmp/pdfs/ats-audit/designed-improved.pdf',format:'A4',printBackground:true,preferCSSPageSize:true,tagged:true,outline:true});
 console.log('Exported tagged PDF');
} finally {await browser.close();}
