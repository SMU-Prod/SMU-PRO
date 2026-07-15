// Definições dos GAMES do EFEITO BÁSICO — cada um vira um HTML autocontido
// (motor StageFX + shell declarativo). O campo `src` é o corpo que define `GAME`.
// `frag` mapeia para a aula (por trecho do título) no curso efeito-basico.

export const GAMES = [
// ============================================================ 1) PLAYGROUND
{
  slug: "palco-de-efeitos",
  title: "Palco de Efeitos",
  subtitle: "O que é um efeito especial — experimente e sinta o impacto",
  frag: "O que é um efeito",
  src: `
  GAME = {
    env:{ haze:0.16, ledWall:0.6, label:"SMU · Palco de Efeitos" },
    controls:[
      {type:'button', id:'fog',  label:'💨 Fumaça', sub:'atmosférico'},
      {type:'button', id:'co2',  label:'❄ CO₂',    sub:'impacto'},
      {type:'button', id:'spark',label:'✨ Faísca fria', sub:'brilho'},
      {type:'button', id:'gerb', label:'🎆 Pirotecnia', cls:'fire', sub:'pirotécnico'},
      {type:'button', id:'conf', label:'🎉 Confete', sub:'celebração'},
      {type:'sep'},
      {type:'slider', id:'haze', label:'Névoa (haze)', min:0,max:100,value:20, fmt:v=>Math.round(v)+'%'},
    ],
    mission:{
      title:"Missão", win:"Boa! Você disparou as 4 famílias de efeito.",
      intro:"Cada efeito pertence a uma família. Dispare um de cada família e veja como o palco muda.",
      steps:[
        {id:'atm', text:'Dispare um efeito atmosférico (Fumaça)'},
        {id:'imp', text:'Dispare um efeito de impacto (CO₂)'},
        {id:'bri', text:'Dispare um efeito de brilho/celebração (Faísca ou Confete)'},
        {id:'piro',text:'Dispare um efeito pirotécnico (Pirotecnia)'},
      ]
    },
    onControl(id,val,fx,S,api){
      if(id==='haze'){ fx.setHaze(val/100); return; }
      if(id==='fog'){ fx.trigger('fog',{x:640}); fx.setHaze(Math.min(1,fx.env.haze+0.06)); api.done('atm'); }
      if(id==='co2'){ fx.trigger('co2',{x:460}); fx.trigger('co2',{x:820}); api.done('imp'); }
      if(id==='spark'){ fx.trigger('spark',{x:380,power:1.1}); fx.trigger('spark',{x:900,power:1.1}); api.done('bri'); }
      if(id==='conf'){ fx.trigger('confetti',{side:'L'}); fx.trigger('confetti',{side:'R'}); api.done('bri'); }
      if(id==='gerb'){ fx.trigger('gerb',{x:480}); fx.trigger('gerb',{x:800}); setTimeout(()=>fx.trigger('airburst',{x:640,y:220}),200); api.done('piro'); }
    }
  };`
},
// ============================================================ 2) FAMÍLIAS (quiz)
{
  slug: "familias-de-efeitos",
  title: "Famílias de Efeitos",
  subtitle: "Classifique cada efeito na sua família e veja-o acontecer",
  frag: "famílias de efeitos",
  src: `
  GAME = {
    env:{ haze:0.14, ledWall:0.5, label:"SMU · Classifique o efeito" },
    controls:[
      {type:'readout', id:'q', label:'Efeito', value:'—'},
      {type:'sep'},
      {type:'button', id:'atm', label:'Atmosférico', small:true, sub:'fumaça / haze / low fog'},
      {type:'button', id:'imp', label:'Impacto', small:true, sub:'CO₂ / criogenia'},
      {type:'button', id:'piro',label:'Pirotécnico', small:true, sub:'gerb / airburst / faísca'},
      {type:'button', id:'cen', label:'Cênico', small:true, sub:'confete / bolha / neve'},
      {type:'sep'},
      {type:'readout', id:'sc', label:'Acertos', value:'0/6'},
    ],
    _rounds:[
      {name:'Jato de CO₂',  fam:'imp',  fire:(fx)=>{fx.trigger('co2',{x:460});fx.trigger('co2',{x:820});}},
      {name:'Máquina de fumaça', fam:'atm', fire:(fx)=>fx.trigger('fog',{x:640})},
      {name:'Gerb pirotécnico', fam:'piro', fire:(fx)=>{fx.trigger('gerb',{x:480});fx.trigger('gerb',{x:800});}},
      {name:'Chuva de confete', fam:'cen', fire:(fx)=>{fx.trigger('confetti',{side:'L'});fx.trigger('confetti',{side:'R'});}},
      {name:'Névoa baixa (low fog)', fam:'atm', fire:(fx)=>{for(let i=0;i<3;i++)fx.trigger('lowfog',{});}},
      {name:'Airburst aéreo', fam:'piro', fire:(fx)=>fx.trigger('airburst',{x:640,y:220})},
    ],
    mission:{ title:"Missão", win:"Excelente! Você classificou todas as famílias.",
      intro:"Leia o nome do efeito no painel e toque na família correta. Acertou = o efeito acontece no palco.",
      steps:[{id:'all', text:'Classifique corretamente os 6 efeitos'}] },
    setup(fx,S,api){ S.i=0; S.score=0; this._next(fx,S,api); },
    _next(fx,S,api){
      if(S.i>=this._rounds.length){ api.setReadout('q','✓ fim'); api.done('all'); return; }
      api.setReadout('q', this._rounds[S.i].name);
    },
    onControl(id,val,fx,S,api){
      if(S.i>=this._rounds.length) return;
      const r=this._rounds[S.i];
      if(id===r.fam){ r.fire(fx); S.score++; api.toast('Correto! '+r.name,'good'); }
      else { api.toast('Não é dessa família — tente lembrar o que ele faz no ar','warn'); return; }
      S.i++; api.setReadout('sc', S.score+'/'+this._rounds.length); this._next(fx,S,api);
    }
  };`
},
// ============================================================ 3) CADEIA DE DISPARO
{
  slug: "cadeia-de-disparo",
  title: "Cadeia de Disparo",
  subtitle: "Do botão à mesa até o efeito — como o sinal viaja",
  frag: "Como um efeito é acionado",
  src: `
  GAME = {
    env:{ haze:0.18, ledWall:0.5, label:"SMU · Cadeia de disparo" },
    controls:[
      {type:'arm', id:'arm', label:'🔑 ARMAR sistema', onLabel:'🔑 ARMADO', cls:'arm'},
      {type:'button', id:'go', label:'▶ GO (disparar)', cls:'fire'},
      {type:'sep'},
      {type:'readout', id:'st', label:'Estado', value:'Desarmado'},
    ],
    mission:{ title:"Missão", win:"Isso! O sinal foi do botão à mesa e disparou o efeito.",
      intro:"O efeito não sai do botão direto: o GO manda um sinal para a MESA, que envia o comando para o EQUIPAMENTO. E só dispara com o sistema ARMADO.",
      steps:[
        {id:'a', text:'Arme o sistema (chave de segurança)'},
        {id:'g', text:'Pressione GO e acompanhe o sinal na cadeia'},
      ] },
    setup(fx,S,api){
      // cadeia visual (overlay)
      const bar=document.createElement('div');
      bar.style.cssText='position:fixed;left:0;right:0;top:44%;transform:translateY(-50%);z-index:4;display:flex;gap:0;align-items:center;justify-content:center;pointer-events:none';
      bar.innerHTML=[
        node('BOTÃO GO','🔘'), arrow('a1'), node('MESA / CONSOLE','🎛️'), arrow('a2'),
        node('SAÍDA (cabo)','🔌'), arrow('a3'), node('EFEITO','🎆')
      ].join('');
      document.body.appendChild(bar);
      function node(t,ic){return '<div style="text-align:center;min-width:74px"><div style="font-size:26px">'+ic+'</div><div style="font-size:10px;color:#9fb0cc;margin-top:2px;letter-spacing:.3px">'+t+'</div></div>';}
      function arrow(id){return '<div id="'+id+'" style="width:40px;height:3px;background:#2a3550;margin:0 4px 16px;border-radius:2px;transition:.15s"></div>';}
      S.bar=bar;
    },
    onControl(id,val,fx,S,api){
      if(id==='arm'){ api.setReadout('st', val?'ARMADO — pronto':'Desarmado'); if(val) api.done('a'); }
      if(id==='go'){
        if(!S.flags.arm){ api.toast('Sistema DESARMADO. Arme a chave de segurança antes de disparar.','bad'); return; }
        api.setReadout('st','Disparando…');
        // anima sinal pela cadeia
        const segs=['a1','a2','a3'];
        segs.forEach((s,i)=>setTimeout(()=>{const e=document.getElementById(s); if(e){e.style.background='#ff8f36';e.style.boxShadow='0 0 10px #ff8f36'; setTimeout(()=>{e.style.background='#2a3550';e.style.boxShadow='none';},350);} },i*300));
        setTimeout(()=>{ fx.trigger('gerb',{x:480}); fx.trigger('gerb',{x:800}); fx.trigger('co2',{x:460}); fx.trigger('co2',{x:820}); api.setReadout('st','Efeito disparado!'); api.done('g'); },950);
      }
    }
  };`
},
// ============================================================ 4) MÁQUINA DE FUMAÇA
{
  slug: "maquina-de-fumaca",
  title: "Máquina de Fumaça",
  subtitle: "Aquecimento, saída e o ciclo de PRONTA",
  frag: "Máquina de fumaça",
  src: `
  GAME = {
    env:{ haze:0.05, ledWall:0.4, label:"SMU · Fog machine" },
    controls:[
      {type:'toggle', id:'pow', label:'⏻ Ligar', onLabel:'⏻ Ligada'},
      {type:'readout', id:'temp', label:'Aquecimento', value:'0%'},
      {type:'sep'},
      {type:'slider', id:'out', label:'Saída (fluxo)', min:20,max:100,value:70, fmt:v=>Math.round(v)+'%'},
      {type:'toggle', id:'fog', label:'💨 Soltar fumaça', onLabel:'💨 Soltando…', cls:'fire'},
    ],
    mission:{ title:"Missão", win:"Perfeito! Você entendeu o ciclo de aquecimento e o gatilho.",
      intro:"A máquina de fumaça NÃO solta sozinha: ela aquece o fluido e só libera quando você aciona o gatilho. Ligue, espere chegar a PRONTA (100%) e então segure 'Soltar fumaça'. Soltando muito, o fluido esfria e ela precisa reaquecer.",
      steps:[
        {id:'on', text:'Ligue a máquina'},
        {id:'ready', text:'Espere o aquecimento chegar a PRONTA (100%)'},
        {id:'fire', text:'Acione o gatilho e solte a fumaça'},
      ] },
    setup(fx,S,api){ S.temp=0; S.em=null; },
    onControl(id,val,fx,S,api){
      if(id==='pow'){
        if(val){ api.done('on'); }
        else { api.setToggle('fog',false); if(S.em){ fx.stopEmitter(S.em); S.em=null; } }
      }
      if(id==='fog'){
        if(val){
          if(!S.flags.pow){ api.toast('Ligue a máquina primeiro.','warn'); api.setToggle('fog',false); return; }
          if(S.temp<98){ api.toast('Ainda aquecendo ('+Math.round(S.temp)+'%). Fluido frio só cospe gotas — espere a PRONTA.','warn'); api.setToggle('fog',false); return; }
        } else {
          if(S.em){ fx.stopEmitter(S.em); S.em=null; }
        }
      }
    },
    tick(fx,S,api,dt){
      // aquece quando ligada e NÃO soltando; esfria quando desligada
      if(S.flags.pow && !S.em){ if(S.temp<100) S.temp=Math.min(100,S.temp+dt*0.017); }
      else if(!S.flags.pow){ S.temp=Math.max(0,S.temp-dt*0.02); }
      api.setReadout('temp', Math.round(S.temp)+'%'+(S.temp>=98?' ✓PRONTA':''));
      if(S.temp>=98) api.done('ready');
      // só emite com gatilho acionado, ligada e fluido quente
      const emit = S.flags.fog && S.flags.pow && S.temp>=52;
      if(emit && !S.em){ S.em=fx.startEmitter('fog',{x:640,output:S.vals.out/100,spread:2.0}); api.done('fire'); }
      if(!emit && S.em){ fx.stopEmitter(S.em); S.em=null; }
      if(S.em){
        S.temp=Math.max(0,S.temp - dt*0.013*(0.5+S.vals.out/100));   // soltar consome calor
        if(S.temp<50){ fx.stopEmitter(S.em); S.em=null; api.setToggle('fog',false); api.toast('Fluido esfriou — reaquecendo. Solte o gatilho e espere a PRONTA.','warn'); }
      }
    }
  };`
},
// ============================================================ 5) HAZER
{
  slug: "hazer-e-feixes",
  title: "Hazer",
  subtitle: "A névoa invisível que revela os feixes de luz",
  frag: "Hazer",
  src: `
  GAME = {
    env:{ haze:0.03, ledWall:0.4, beams:true, label:"SMU · Hazer + feixes" },
    controls:[
      {type:'toggle', id:'pow', label:'⏻ Ligar hazer', onLabel:'⏻ Ligado'},
      {type:'slider', id:'dens', label:'Densidade', min:0,max:100,value:0, fmt:v=>Math.round(v)+'%'},
      {type:'sep'},
      {type:'readout', id:'vis', label:'Visibilidade dos feixes', value:'nenhuma'},
    ],
    mission:{ title:"Missão", win:"Você revelou a luz! Sem haze, os feixes ficam invisíveis.",
      intro:"O hazer não faz 'fumaça' visível — ele espalha uma névoa fina que deixa os feixes de luz aparecerem no ar. Aumente a densidade e observe os feixes surgirem.",
      steps:[
        {id:'on', text:'Ligue o hazer'},
        {id:'reveal', text:'Suba a densidade até os feixes aparecerem bem'},
        {id:'balance', text:'Não exagere: passe de 85% e o palco vira "leitoso"'},
      ] },
    setup(fx,S,api){ S.over=false; },
    onControl(id,val,fx,S,api){
      if(id==='pow'){ if(val) api.done('on'); else { fx.setHaze(0.03); } }
      if(id==='dens'){ if(!S.flags.pow){ api.toast('Ligue o hazer primeiro.','warn'); return; } fx.setHaze(val/100*0.75+0.03); }
    },
    tick(fx,S,api){
      const h=fx.env.haze;
      let v='nenhuma'; if(h>0.55)v='EXCESSIVA (leitoso)'; else if(h>0.35)v='ótima'; else if(h>0.18)v='boa'; else if(h>0.08)v='fraca';
      api.setReadout('vis', v);
      if(h>0.35 && h<0.55) api.done('reveal');
      if(S.flags.pow && (S.vals.dens>85)) api.done('balance');
    }
  };`
},
// ============================================================ 6) LOW FOG
{
  slug: "low-fog",
  title: "Fumaça Baixa (Low Fog)",
  subtitle: "O tapete de nuvem que fica no chão",
  frag: "Fumaça baixa",
  src: `
  GAME = {
    env:{ haze:0.08, ledWall:0.45, label:"SMU · Low fog" },
    controls:[
      {type:'toggle', id:'pow', label:'⏻ Ligar máquina', onLabel:'⏻ Ligada'},
      {type:'slider', id:'out', label:'Volume', min:0,max:100,value:60, fmt:v=>Math.round(v)+'%'},
      {type:'button', id:'burst', label:'☁ Soltar tapete', cls:'fire'},
      {type:'sep'},
      {type:'readout', id:'cov', label:'Cobertura do piso', value:'0%'},
    ],
    mission:{ title:"Missão", win:"Tapete de nuvem pronto! É o efeito das primeiras danças.",
      intro:"A fumaça baixa usa fluido resfriado (gelo/CO₂) para a fumaça ficar PESADA e não subir — formando um tapete no chão. Ligue e cubra o palco.",
      steps:[
        {id:'on', text:'Ligue a máquina de low fog'},
        {id:'cover', text:'Cubra pelo menos 70% do piso do palco'},
      ] },
    setup(fx,S,api){ S.em=null; },
    onControl(id,val,fx,S,api){
      if(id==='pow'){ if(val) api.done('on'); else if(S.em){fx.stopEmitter(S.em);S.em=null;} }
      if(id==='burst'){ if(!S.flags.pow){api.toast('Ligue primeiro.','warn');return;} for(let i=0;i<4;i++) fx.trigger('lowfog',{puff:3}); }
    },
    tick(fx,S,api){
      const want=S.flags.pow && S.vals.out>10;
      if(want && !S.em) S.em=fx.startEmitter('lowfog',{output:S.vals.out/100});
      if(!want && S.em){fx.stopEmitter(S.em);S.em=null;}
      const c=fx._count? fx._count().lowfog : 0;
      const cov=Math.min(100, Math.round(c*3.2));
      api.setReadout('cov', cov+'%');
      if(cov>=70) api.done('cover');
    }
  };`
},
// ============================================================ 7) CO2 JET (timing)
{
  slug: "co2-jet",
  title: "Jato de CO₂",
  subtitle: "O sopro gelado — dispare no tempo certo do drop",
  frag: "Jato de CO2",
  src: `
  GAME = {
    env:{ haze:0.22, ledWall:0.6, label:"SMU · CO₂ Jet" },
    controls:[
      {type:'slider', id:'ang', label:'Ângulo', min:-30,max:30,value:0, fmt:v=>(v>0?'+':'')+v+'°'},
      {type:'slider', id:'pow', label:'Pressão', min:40,max:100,value:80, cls:'c2', fmt:v=>Math.round(v)+'%'},
      {type:'sep'},
      {type:'button', id:'fire', label:'❄ DISPARAR CO₂', cls:'fire'},
      {type:'readout', id:'beat', label:'Compasso', value:'…'},
    ],
    mission:{ title:"Missão", win:"No tempo! CO₂ certo no drop faz a plateia explodir.",
      intro:"O CO₂ vive do TIMING. Um marcador de compasso corre até o DROP. Dispare exatamente quando marcar DROP! (janela curta) — 3 acertos.",
      steps:[
        {id:'aim', text:'Ajuste o ângulo e a pressão do jato'},
        {id:'hit', text:'Acerte o disparo no DROP 3 vezes'},
      ] },
    setup(fx,S,api){ S.phase=0; S.hits=0; S.window=false; },
    onControl(id,val,fx,S,api){
      if(id==='ang'||id==='pow'){ api.done('aim'); }
      if(id==='fire'){
        const tilt=S.vals.ang;   // 0 = reto pra cima; abre/inclina os dois lados
        // dois canhões, um de cada lado do palco (inclinam simetricamente pra dentro)
        fx.trigger('co2',{x:430,angle:-90+tilt,power:S.vals.pow/70});
        fx.trigger('co2',{x:850,angle:-90-tilt,power:S.vals.pow/70});
        if(S.window){ S.hits++; api.toast('DROP! Acerto '+S.hits+'/3','good'); if(S.hits>=3) api.done('hit'); }
        else api.toast('Fora do tempo — espere o DROP','warn');
      }
    },
    tick(fx,S,api,dt){
      S.phase += dt*0.0006; if(S.phase>1) S.phase-=1;
      const toDrop = S.phase>0.86 && S.phase<0.98;
      S.window = toDrop;
      let lbl; if(toDrop) lbl='▶ DROP!'; else if(S.phase>0.6) lbl='build… '+Math.round((0.86-S.phase)*100)/10; else lbl='intro';
      api.setReadout('beat', toDrop?'▶ DROP!':('build '+Math.round(S.phase*8+1)+'/8'));
    }
  };`
},
// ============================================================ 8) FAÍSCA FRIA
{
  slug: "faisca-fria",
  title: "Faísca Fria (Cold Spark)",
  subtitle: "Fonte de brilho sem pólvora — emoldure o artista",
  frag: "Faísca fria",
  src: `
  GAME = {
    env:{ haze:0.14, ledWall:0.5, label:"SMU · Cold spark" },
    controls:[
      {type:'slider', id:'h', label:'Altura', min:1,max:5,value:3, fmt:v=>v+' m'},
      {type:'sep'},
      {type:'button', id:'L', label:'✨ Fonte ESQUERDA', cls:'fire'},
      {type:'button', id:'R', label:'✨ Fonte DIREITA', cls:'fire'},
      {type:'button', id:'both', label:'✨✨ Par (emoldurar)', cls:'fire'},
    ],
    mission:{ title:"Missão", win:"Enquadramento perfeito! Duas fontes emoldurando o artista.",
      intro:"A faísca fria é fria ao toque e não usa pólvora — por isso entra em casamentos e entradas de artista. Posicione DUAS fontes (esquerda e direita) para emoldurar quem está no centro.",
      steps:[
        {id:'l', text:'Dispare a fonte da esquerda'},
        {id:'r', text:'Dispare a fonte da direita'},
        {id:'frame', text:'Dispare o PAR ao mesmo tempo (emoldurar)'},
      ] },
    setup(fx,S,api){},
    onControl(id,val,fx,S,api){
      const pw=0.7+S.vals.h*0.14;
      if(id==='L'){ fx.trigger('spark',{x:360,power:pw,burst:30}); api.done('l'); }
      if(id==='R'){ fx.trigger('spark',{x:920,power:pw,burst:30}); api.done('r'); }
      if(id==='both'){ fx.trigger('spark',{x:360,power:pw,burst:30}); fx.trigger('spark',{x:920,power:pw,burst:30}); api.done('l'); api.done('r'); api.done('frame'); }
    }
  };`
},
// ============================================================ 9) PIROTECNIA (safety)
{
  slug: "pirotecnia-gerb-airburst",
  title: "Pirotecnia de Palco",
  subtitle: "Gerb e airburst — só com o protocolo de segurança",
  frag: "Pirotecnia de palco",
  src: `
  GAME = {
    env:{ haze:0.16, ledWall:0.5, label:"SMU · Pirotecnia" },
    controls:[
      {type:'toggle', id:'area', label:'✅ Área livre?', onLabel:'✅ ÁREA LIVRE'},
      {type:'arm', id:'arm', label:'🔑 ARMAR', onLabel:'🔑 ARMADO', cls:'arm'},
      {type:'sep'},
      {type:'button', id:'gerb', label:'🎆 GERB', cls:'fire'},
      {type:'button', id:'burst', label:'💥 AIRBURST', cls:'fire'},
      {type:'readout', id:'st', label:'Status', value:'BLOQUEADO'},
    ],
    mission:{ title:"Missão", win:"Disparo pirotécnico feito com segurança. É sempre nessa ordem.",
      intro:"Pirotecnia é fogo real: só dispara com PROTOCOLO. Ordem obrigatória: 1) confirmar ÁREA LIVRE, 2) ARMAR a chave, 3) disparar. Sem os dois, o sistema fica bloqueado.",
      steps:[
        {id:'clear', text:'Confirme a área livre de pessoas'},
        {id:'armed', text:'Arme a chave de segurança'},
        {id:'fire', text:'Dispare um gerb e um airburst'},
      ] },
    setup(fx,S,api){},
    canFire(S){ return S.flags.area && S.flags.arm; },
    onControl(id,val,fx,S,api){
      if(id==='area'){ if(val) api.done('clear'); }
      if(id==='arm'){ if(val && !S.flags.area){ api.toast('Confirme a ÁREA LIVRE antes de armar.','warn'); } if(val && S.flags.area) api.done('armed'); }
      const ready=this.canFire(S);
      api.setReadout('st', ready?'PRONTO ✓':(S.flags.arm?'FALTA área livre':'BLOQUEADO'));
      if(id==='gerb'||id==='burst'){
        if(!ready){ api.toast('BLOQUEADO. Área livre + chave armada são obrigatórias.','bad'); return; }
        if(id==='gerb'){ fx.trigger('gerb',{x:480}); fx.trigger('gerb',{x:800}); }
        else { fx.trigger('airburst',{x:640,y:210}); }
        api.done('fire');
      }
    },
    tick(fx,S,api){ const ready=S.flags.area&&S.flags.arm; api.setReadout('st', ready?'PRONTO ✓':(S.flags.arm?'FALTA área livre':(S.flags.area?'FALTA armar':'BLOQUEADO'))); }
  };`
},
// ============================================================ 10) CHAMA
{
  slug: "chama-flame-jet",
  title: "Chama (Flame Jet)",
  subtitle: "Fogo de verdade sob controle",
  frag: "Chama (flame jet)",
  src: `
  GAME = {
    env:{ haze:0.10, ledWall:0.4, label:"SMU · Flame jet" },
    controls:[
      {type:'slider', id:'h', label:'Altura da labareda', min:1,max:5,value:3, fmt:v=>v+' m'},
      {type:'sep'},
      {type:'button', id:'burst', label:'🔥 Labareda (tap)', cls:'fire'},
      {type:'toggle', id:'hold', label:'🔥 Coluna (segurar)', onLabel:'🔥 QUEIMANDO', cls:'fire'},
      {type:'readout', id:'note', label:'', value:''},
    ],
    mission:{ title:"Missão", win:"Fogo controlado! Dois bicos flanqueando o palco — nunca sobre o artista.",
      intro:"O flame jet cospe uma labareda de gás controlada. Repare: os bicos ficam nas LATERAIS, longe do artista no centro. A altura define o pé-direito mínimo. Faça uma labareda curta e depois uma coluna sustentada.",
      steps:[
        {id:'tap', text:'Faça uma labareda curta (tap)'},
        {id:'hold', text:'Sustente uma coluna de fogo'},
        {id:'high', text:'Note: altura 5 m exige teto alto e afastamento'},
      ] },
    setup(fx,S,api){ S.em=null; S.em2=null; },
    _emit(fx,S,pw){ if(S.em)fx.stopEmitter(S.em); if(S.em2)fx.stopEmitter(S.em2); S.em=fx.startEmitter('flame',{x:420,power:pw}); S.em2=fx.startEmitter('flame',{x:860,power:pw}); },
    _stop(fx,S){ if(S.em){fx.stopEmitter(S.em);S.em=null;} if(S.em2){fx.stopEmitter(S.em2);S.em2=null;} },
    onControl(id,val,fx,S,api){
      const pw=0.6+S.vals.h*0.18;
      if(id==='burst'){ for(let i=0;i<6;i++) setTimeout(()=>{ fx.trigger('flame',{x:420,power:pw,n:9}); fx.trigger('flame',{x:860,power:pw,n:9}); }, i*42); api.done('tap'); }
      if(id==='hold'){ if(val){ this._emit(fx,S,pw); S.emPw=S.vals.h; api.done('hold'); } else this._stop(fx,S); }
      if(id==='h' && val>=5){ api.setReadout('note','⚠ teto alto!'); api.done('high'); } else if(id==='h'){ api.setReadout('note',''); }
    },
    tick(fx,S,api){ if(S.em && S.emPw!==S.vals.h){ this._emit(fx,S,0.6+S.vals.h*0.18); S.emPw=S.vals.h; } }
  };`
},
// ============================================================ 12) OPERADOR — GO/NO-GO
{
  slug: "operador-go-nogo",
  title: "Plantão do Operador",
  subtitle: "Quem pode operar decide: disparar ou bloquear?",
  frag: "Quem pode operar",
  src: `
  GAME = {
    env:{ haze:0.14, ledWall:0.5, label:"SMU · Go / No-Go" },
    controls:[
      {type:'readout', id:'cen', label:'Situação', value:'—'},
      {type:'sep'},
      {type:'button', id:'go', label:'✅ DISPARAR', cls:'fire'},
      {type:'button', id:'no', label:'⛔ BLOQUEAR / ABORTAR', cls:'arm'},
      {type:'sep'},
      {type:'readout', id:'sc', label:'Decisões certas', value:'0/7'},
    ],
    _cases:[
      {t:'E-match da CUE 4 sem continuidade no teste', go:false, why:'Sem continuidade = misfire. Bloqueie e reconecte antes.'},
      {t:'Tudo testado, área isolada, chave armada, no tempo da cue', go:true, why:'Condições completas: pode disparar.'},
      {t:'Público furou a grade e entrou na zona de exclusão', go:false, why:'Ninguém na zona de risco. Aborte e reisole.'},
      {t:'Começou chuva forte sobre a pirotecnia externa', go:false, why:'Umidade + pólvora = risco. Bloqueie os pirotécnicos.'},
      {t:'Faísca fria (efeito frio), área livre, artista posicionado', go:true, why:'Efeito frio, seguro, área livre: liberado.'},
      {t:'Extintor não está no posto e cheira a queimado', go:false, why:'Sem meios de combate + sinal de fogo = pare tudo.'},
      {t:'Cue de CO₂ conferida, cilindro com pressão, plateia atrás da barreira', go:true, why:'CO₂ ok e público protegido: pode disparar.'},
    ],
    mission:{ title:"Missão", win:"Julgamento profissional! É isso que separa quem pode operar.",
      intro:"O operador habilitado é quem DECIDE. Leia cada situação e escolha DISPARAR só quando for seguro. Um item crítico em falta = BLOQUEAR. Acerte as 7 decisões.",
      steps:[{id:'all', text:'Tome as 7 decisões corretamente'}] },
    setup(fx,S,api){ S.i=0; S.score=0; api.setReadout('cen', this._cases[0].t); },
    onControl(id,val,fx,S,api){
      if(S.i>=this._cases.length) return;
      if(id!=='go'&&id!=='no') return;
      const c=this._cases[S.i]; const chose=(id==='go');
      if(chose===c.go){ S.score++; api.toast('Certo — '+c.why,'good'); if(c.go){ fx.trigger('spark',{x:400,burst:14}); fx.trigger('spark',{x:880,burst:14}); } }
      else { api.toast((chose?'Perigoso! ':'')+c.why,'bad'); }
      S.i++; api.setReadout('sc', S.score+'/'+this._cases.length);
      if(S.i>=this._cases.length){ api.setReadout('cen','✓ fim ('+S.score+'/7)'); if(S.score>=6) api.done('all'); else api.toast('Reveja: decisões de segurança precisam de 6/7+','warn'); }
      else api.setReadout('cen', this._cases[S.i].t);
    }
  };`
},
// ============================================================ 11) CELEBRAÇÃO
{
  slug: "efeitos-de-celebracao",
  title: "Efeitos de Celebração",
  subtitle: "Confete, serpentina, bolhas e neve",
  frag: "Confete, serpentina",
  src: `
  GAME = {
    env:{ haze:0.10, ledWall:0.55, label:"SMU · Celebração" },
    controls:[
      {type:'button', id:'conf', label:'🎉 Confete', cls:'fire'},
      {type:'button', id:'strm', label:'🎊 Serpentina', cls:'fire'},
      {type:'button', id:'bub', label:'🫧 Bolhas'},
      {type:'button', id:'snow', label:'❄ Neve'},
    ],
    mission:{ title:"Missão", win:"Festa completa! Efeitos de celebração são seguros e sempre bem-vindos.",
      intro:"Os efeitos de celebração fecham o show sem fogo nem pressão perigosa — confete e serpentina chovem do alto, bolhas e neve criam clima. Dispare os quatro.",
      steps:[
        {id:'conf', text:'Solte confete dos dois lados'},
        {id:'strm', text:'Solte serpentina'},
        {id:'bub', text:'Ligue as bolhas'},
        {id:'snow', text:'Faça nevar'},
      ] },
    setup(fx,S,api){},
    onControl(id,val,fx,S,api){
      if(id==='conf'){ fx.trigger('confetti',{side:'L'}); fx.trigger('confetti',{side:'R'}); fx.trigger('confetti',{}); api.done('conf'); }
      if(id==='strm'){ fx.trigger('streamer',{side:'L'}); fx.trigger('streamer',{side:'R'}); api.done('strm'); }
      if(id==='bub'){ for(let i=0;i<3;i++) fx.trigger('bubbles',{}); api.done('bub'); }
      if(id==='snow'){ for(let i=0;i<3;i++) fx.trigger('snow',{}); api.done('snow'); }
    }
  };`
},
];
