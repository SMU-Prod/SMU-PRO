// Bloco AUTO-FIT que substitui o /*SMU-ZOOM*/ dos sims genéricos do pleno:
// embrulha o conteúdo e o ESCALA para preencher a área visível (auto), com
// +/- manual como ajuste relativo e correção de tela cheia (iframe inflado).
export const AUTOFIT = `<script>/*SMU-AUTOFIT*/(function(){
  var sc=null, manual=0;
  function wrap(){
    if(sc) return;
    sc=document.createElement('div'); sc.id='smu-sc';
    sc.style.cssText='transform-origin:top center;position:absolute;top:0;left:0;right:0;margin:0 auto;';
    [].slice.call(document.body.children).filter(function(el){return (el.id||'').indexOf('smu-')!==0 && el.tagName!=='SCRIPT';}).forEach(function(k){sc.appendChild(k);});
    document.body.insertBefore(sc,document.body.firstChild);
    document.documentElement.style.overflow='hidden'; document.body.style.margin='0'; document.body.style.overflow='hidden'; document.body.style.background=getComputedStyle(document.body).background;
  }
  function fit(){
    if(!sc) wrap();
    sc.style.transform='none';
    var w=sc.scrollWidth||sc.offsetWidth||800, h=sc.scrollHeight||sc.offsetHeight||600;
    var vw=window.innerWidth, ih=window.innerHeight, shh=(window.screen&&screen.height)||ih;
    var inflated=ih>shh+8, visH=Math.min(ih,shh)-(inflated?86:0);
    var z=Math.min(vw/w, visH/h)*Math.pow(1.1,manual);
    z=Math.max(0.25, Math.min(z, 3));
    sc.style.transform='scale('+z+')';
    var lbl=document.getElementById('smu-zl'); if(lbl) lbl.textContent=Math.round(z*100)+'%';
  }
  function ui(){
    if(document.getElementById('smu-zoom')) return;
    var b=document.createElement('div'); b.id='smu-zoom';
    b.style.cssText='position:fixed;left:10px;bottom:10px;z-index:99999;display:flex;align-items:center;gap:5px;background:#0e1420cc;border:1px solid #2c3340;border-radius:22px;padding:5px 8px;font-family:system-ui,sans-serif';
    function mk(t){var x=document.createElement('button');x.textContent=t;x.style.cssText='width:30px;height:30px;border-radius:50%;border:1px solid #2c3340;background:#171c26;color:#e5e7eb;font-size:17px;cursor:pointer;padding:0;line-height:1';return x;}
    var mi=mk('\\u2212'),lab=document.createElement('span'),pl=mk('+');
    lab.id='smu-zl'; lab.style.cssText='font-size:12px;color:#cbd5e1;min-width:42px;text-align:center;cursor:pointer'; lab.textContent='100%';
    b.appendChild(mi);b.appendChild(lab);b.appendChild(pl); document.body.appendChild(b);
    mi.onclick=function(){manual--; fit();}; pl.onclick=function(){manual++; fit();}; lab.onclick=function(){manual=0; fit();};
  }
  function boot(){ wrap(); ui(); fit(); }
  if(document.readyState!=='loading') boot(); else document.addEventListener('DOMContentLoaded', boot);
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function(){setTimeout(fit,150);});
  document.addEventListener('fullscreenchange', function(){[60,260,600].forEach(function(d){setTimeout(fit,d);});});
  document.addEventListener('webkitfullscreenchange', function(){[60,260,600].forEach(function(d){setTimeout(fit,d);});});
  setTimeout(fit,300); setTimeout(fit,900);
})();<\/script>`;

// substitui o bloco SMU-ZOOM (ou injeta antes de </body> se não houver)
export function applyAutofit(html) {
  const re = /<script>\/\*SMU-ZOOM\*\/[\s\S]*?<\/script>/;
  if (re.test(html)) return html.replace(re, AUTOFIT);
  if (html.includes("/*SMU-AUTOFIT*/")) return html; // já aplicado
  return html.replace(/<\/body>/i, AUTOFIT + "</body>");
}
