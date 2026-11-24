/*
  REESPAWN LOBBY — PREÇOS (exemplos editáveis) e comportamento do site.
  Contato, mapa e WhatsApp ficam em config.js. Cardápio fica em cardapio.js.
  Para um preço ainda indefinido, use "Consultar".
*/
const priceGroups = [
  {id:"pc",title:"COMPUTADORES",note:"PC Gamer · preço por equipamento",items:[
    {type:"ALUGUEL POR HORA",name:"PC Gamer",description:"Acesso a um computador gamer. Pacote de 3 horas com desconto.",price:"R$ 12",unit:"1 HORA",extra:"R$ 30 · PACOTE DE 3 HORAS"},
    {type:"PASSE",name:"Meio período",description:"4 horas de PC Gamer dentro do horário de funcionamento.",price:"R$ 35",unit:"4 HORAS"},
    {type:"PASSE",name:"Passe diário",description:"Válido durante todo o horário de funcionamento.",price:"R$ 45",unit:"O DIA TODO"}],
   gamesTitle:"JOGOS DISPONÍVEIS NO PC",games:[
    {name:"Valorant",tag:"FPS tático"},{name:"League of Legends",tag:"MOBA"},{name:"Counter-Strike 2",tag:"FPS"},
    {name:"Fortnite",tag:"Battle royale"},{name:"Minecraft",tag:"Construção e exploração"},{name:"GTA V",tag:"Mundo aberto"}],
   gamesNote:"Lista de exemplo para o PC — confirme os títulos que estarão instalados antes de publicar."},
  {id:"playstation",title:"PLAYSTATION",note:"PlayStation · preço por equipamento, não por pessoa",items:[
    {type:"ALUGUEL POR HORA",name:"PlayStation 5",description:"Os amigos dividem o valor, respeitando a capacidade de jogadores e os controles.",price:"R$ 15",unit:"1 HORA",extra:"R$ 38 · PACOTE DE 3 HORAS"},
    {type:"PASSE",name:"Meio período",description:"4 horas de PlayStation ou Xbox, por equipamento.",price:"R$ 40",unit:"4 HORAS"},
    {type:"PASSE",name:"Passe diário",description:"Válido durante todo o horário de funcionamento.",price:"R$ 55",unit:"O DIA TODO"}],
   gamesTitle:"JOGOS DISPONÍVEIS NO PLAYSTATION",games:[
    {name:"EA Sports FC 25",tag:"Futebol"},{name:"Mortal Kombat 11",tag:"Luta"},{name:"Overcooked! 2",tag:"Cooperação"},
    {name:"Crash Team Racing Nitro-Fueled",tag:"Corrida"},{name:"Minecraft",tag:"Construção e exploração"}],
   gamesNote:"Sugestão de catálogo — confirme os títulos que realmente estarão disponíveis."},
  {id:"xbox",title:"XBOX",note:"Xbox · preço por equipamento, não por pessoa",items:[
    {type:"ALUGUEL POR HORA",name:"Xbox",description:"Os amigos dividem o valor, respeitando a capacidade de jogadores e os controles.",price:"R$ 15",unit:"1 HORA",extra:"R$ 38 · PACOTE DE 3 HORAS"},
    {type:"PASSE",name:"Meio período",description:"4 horas de PlayStation ou Xbox, por equipamento.",price:"R$ 40",unit:"4 HORAS"},
    {type:"PASSE",name:"Passe diário",description:"Válido durante todo o horário de funcionamento.",price:"R$ 55",unit:"O DIA TODO"}],
   gamesTitle:"JOGOS DISPONÍVEIS NO XBOX",games:[
    {name:"EA Sports FC 25",tag:"Futebol"},{name:"Minecraft",tag:"Construção e sobrevivência"},{name:"Overcooked! 2",tag:"Cooperação"},
    {name:"Forza Horizon 4",tag:"Corrida"},{name:"Mortal Kombat 11",tag:"Luta"}],
   gamesNote:"O catálogo depende do modelo do Xbox e da compatibilidade de cada jogo."},
  {id:"nintendo",title:"NINTENDO",note:"Nintendo Switch · preço por equipamento, não por pessoa",items:[
    {type:"ALUGUEL POR HORA",name:"Nintendo Switch",description:"Ótimo para partidas locais com amigos, respeitando os controles disponíveis.",price:"R$ 18",unit:"1 HORA",extra:"R$ 45 · PACOTE DE 3 HORAS"},
    {type:"PASSE",name:"Meio período",description:"4 horas de Nintendo Switch, por equipamento.",price:"R$ 45",unit:"4 HORAS"},
    {type:"PASSE",name:"Passe diário",description:"Válido durante todo o horário de funcionamento.",price:"R$ 60",unit:"O DIA TODO"}],
   gamesTitle:"JOGOS DISPONÍVEIS NO NINTENDO SWITCH",games:[
    {name:"Mario Kart 8 Deluxe",tag:"Corrida"},{name:"Super Smash Bros. Ultimate",tag:"Luta"},{name:"Mario Party Superstars",tag:"Minijogos"},
    {name:"Overcooked! All You Can Eat",tag:"Cooperação"},{name:"Clubhouse Games: 51 Worldwide Classics",tag:"Jogos clássicos"}],
   gamesNote:"Verifique quantos jogadores cada título suporta."},
  {id:"mesa",title:"TABULEIROS",note:"Preço por pessoa · troque de jogo à vontade durante o período",items:[
    {type:"JOGOS DE MESA",name:"1 hora",description:"Acesso aos jogos de tabuleiro disponíveis no espaço.",price:"R$ 5",unit:"POR PESSOA"},
    {type:"JOGOS DE MESA",name:"Meio período",description:"Até 3 horas de jogos de tabuleiro.",price:"R$ 8",unit:"POR PESSOA"},
    {type:"PASSE",name:"Passe diário",description:"O dia todo, dentro do horário de funcionamento.",price:"R$ 15",unit:"POR PESSOA"},
    {type:"GRUPO",name:"Passe diário para grupos",description:"Para grupos de 4 ou mais pessoas.",price:"R$ 12",unit:"POR PESSOA · 4+"}],
   gamesTitle:"CATÁLOGO DE JOGOS DE TABULEIRO",games:[
    {name:"UNO",tag:"Cartas · Rápido · Grupos",desc:"Fácil de aprender e ótimo para partidas rápidas entre amigos."},
    {name:"Dobble",tag:"Observação · Agilidade",desc:"Um jogo de rapidez visual, ideal para começar sem aprender regras complicadas."},
    {name:"Jenga",tag:"Habilidade · Competição",desc:"Retire os blocos sem derrubar a torre. Simples e divertido para várias idades."},
    {name:"Exploding Kittens",tag:"Cartas · Estratégia leve · Humor",desc:"Um jogo descontraído em que cada decisão pode mudar a partida."},
    {name:"Dixit",tag:"Criatividade · Imaginação",desc:"Os jogadores usam pistas e interpretações para relacionar frases e ilustrações."},
    {name:"CATAN",tag:"Estratégia · Negociação",desc:"Ideal para quem gosta de administrar recursos, negociar e planejar jogadas."},
    {name:"Banco Imobiliário",tag:"Estratégia · Economia",desc:"Um clássico de compra e negociação de propriedades."},
    {name:"The Resistance: Avalon",tag:"Dedução · Blefe · Equipes",desc:"Os participantes tentam descobrir em quem confiar enquanto cumprem missões."}],
   gamesNote:"O passe dá acesso aos jogos disponíveis no estabelecimento. Não inclui comida e bebida, e os jogos não podem ser levados para casa."},
  {id:"pacotes",title:"COMBOS",note:"Fique mais tempo, pague menos",items:[
    {type:"COMBO",name:"Solo Queue",description:"1 hora de PC + desconto em um lanche.",price:"R$ 12",unit:"+ DESCONTO NO LANCHE"},
    {type:"COMBO",name:"Squad",description:"3 horas de console para o grupo. R$ 38 no PlayStation/Xbox ou R$ 45 no Switch.",price:"R$ 38",unit:"PS/XBOX · R$ 45 NO SWITCH"},
    {type:"COMBO",name:"Board Game Day",description:"Passe diário de jogos de tabuleiro.",price:"R$ 15",unit:"POR PESSOA"},
    {type:"COMBO",name:"Party de Tabuleiro",description:"Passe diário de tabuleiro para 4 ou mais pessoas.",price:"R$ 12",unit:"POR PESSOA · 4+"},
    {type:"COMBO",name:"Respawn Completo",description:"Passe de meio período + um lanche e uma bebida.",price:"Consultar",unit:"EM BREVE"}]}
];
const rules = [
  {title:"COBRANÇA",items:["O tempo conta a partir do início da sessão.","Consoles e PC: o preço é por equipamento, não por pessoa. Tabuleiros: preço por pessoa.","Os passes valem dentro do horário de funcionamento e dependem da lotação.","Pagamento ao final da sessão."]},
  {title:"RESERVA",items:["Reserve com antecedência pelo WhatsApp ou pelo formulário.","Informe dia, horário, número de pessoas e o que quer jogar.","A reserva é confirmada por mensagem."]},
  {title:"CANCELAMENTO",items:["Avise com antecedência para liberar o horário.","Atrasos longos podem liberar a mesa ou o equipamento.","O passe diário não garante uso exclusivo do equipamento o dia todo, caso haja pausas ou reservas."]}
];

const $ = s => document.querySelector(s);
const SET = typeof SITE !== "undefined" ? SITE : {};

function toast(msg){
  let t = $("#toast");
  if(!t){t = document.createElement("div");t.id = "toast";t.setAttribute("role","status");document.body.appendChild(t);}
  t.textContent = msg;t.classList.add("show");
  clearTimeout(toast.t);toast.t = setTimeout(() => t.classList.remove("show"), 4500);
}
function waLink(text){
  const n = (SET.whatsapp || "").replace(/\D/g,"");
  return n ? `https://wa.me/${n}?text=${encodeURIComponent(text || "")}` : "";
}
const MISSING_WA = "Adicione o número do WhatsApp no arquivo config.js.";

// ---------- Preços ----------
const priceWrap = $("#priceGroups");
function renderPrices(filter = "todos"){
  if(!priceWrap) return;
  priceWrap.innerHTML = priceGroups.filter(g => filter === "todos" || g.id === filter).map(g => `
    <section class="price-group" id="${g.id}">
      <div class="group-head"><h3>${g.title}</h3><span>${g.note}</span></div>
      <div class="price-grid">${g.items.map(p => `
        <article class="price-card">
          <span class="price-category">${p.type}</span>
          <h3>${p.name}</h3><p>${p.description}</p>
          <div class="price-bottom"><strong>${p.price}</strong><span>${p.unit}</span></div>
          ${p.extra ? `<div class="price-extra">${p.extra}</div>` : ""}
        </article>`).join("")}</div>
      ${g.games ? `<h4 class="sub-head">${g.gamesTitle}</h4>
      <div class="price-grid game-grid">${g.games.map(j => `
        <article class="price-card game-card">
          <span class="price-category">${j.tag}</span>
          <h3>${j.name}</h3>${j.desc ? `<p>${j.desc}</p>` : ""}
        </article>`).join("")}</div>
      <p class="game-note">${g.gamesNote}</p>` : ""}
    </section>`).join("");
}
const rulesWrap = $("#rulesGrid");
if(rulesWrap) rulesWrap.innerHTML = rules.map(r => `<article class="rule-card"><h3>${r.title}</h3><ul>${r.items.map(i => `<li>${i}</li>`).join("")}</ul></article>`).join("");

// ---------- Cardápio ----------
const menuWrap = $("#menuWrap");
const menuState = {cat:"todos", diet:new Set()};
const dietOk = (i, d) => d === "vegetariano" ? i.vegetarian : true;
const slugify = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const PHOTO_EXT = ["jpg","jpeg","png","webp"];
function photoSrc(i){return i.image || `assets/fotos/${i.category}-${slugify(i.name)}.jpg`;}
// tenta as outras extensões; se nenhuma existir, mostra o espaço reservado "FOTO EM BREVE"
function photoFail(img){
  const n = +img.dataset.try || 0;
  if(!img.dataset.custom && n < PHOTO_EXT.length - 1){
    img.dataset.try = n + 1;img.src = img.src.replace(/\.[a-z]+$/, "." + PHOTO_EXT[n + 1]);return;
  }
  const box = img.parentElement;box.classList.add("ph");
  box.innerHTML = '<img class="ph-logo" src="assets/logo-icon.svg" alt=""><span>FOTO EM BREVE</span>';
}
const AGE_NOTE = "Venda e consumo exclusivos para maiores de 18 anos. Beba com moderação. Se for dirigir, não beba.";
function menuCard(i){
  return `<article class="menu-card">
    <div class="menu-photo"><img src="${photoSrc(i)}" alt="${i.name}" loading="lazy"${i.image ? ' data-custom="1"' : ""} onerror="photoFail(this)"></div>
    <div class="menu-body">
      <div class="menu-top"><h3>${i.name}</h3><strong>${i.price}</strong></div>
      <p>${i.description}</p>
      <div class="chips">${i.category === "alcoolicos" ? '<span class="chip chip-red">+18 · CONTÉM ÁLCOOL</span>' : i.vegetarian ? '<span class="chip chip-green">VEGETARIANO</span>' : ""}</div>
      <details><summary>INGREDIENTES</summary><p>${i.ingredients}</p></details>
    </div>
  </article>`;
}
function renderMenu(){
  if(!menuWrap) return;
  const cats = Object.keys(menuCategories).filter(c => menuState.cat === "todos" || c === menuState.cat);
  const html = cats.map(c => {
    const items = menu.filter(i => i.category === c && [...menuState.diet].every(d => dietOk(i, d)));
    if(!items.length) return "";
    const subs = [...new Set(items.map(i => i.sub || ""))];
    const body = subs.map(s => `${s ? `<h4 class="sub-head">${s.toUpperCase()}</h4>` : ""}<div class="menu-grid">${items.filter(i => (i.sub || "") === s).map(menuCard).join("")}</div>`).join("");
    return `<section class="menu-group" id="${c}"><div class="group-head"><h3>${menuCategories[c]}</h3><span>${items.length} ${items.length > 1 ? "itens" : "item"}</span></div>${c === "alcoolicos" ? `<p class="age-note"><b>+18</b> ${AGE_NOTE}</p>` : ""}${body}</section>`;
  }).join("");
  menuWrap.innerHTML = html || '<p class="empty">Nenhum item com esses filtros. Tente remover algum.</p>';
}
document.querySelectorAll(".menu-tab").forEach(t => t.addEventListener("click", () => {
  document.querySelectorAll(".menu-tab").forEach(x => {x.classList.remove("active");x.setAttribute("aria-selected","false");});
  t.classList.add("active");t.setAttribute("aria-selected","true");menuState.cat = t.dataset.category;renderMenu();
}));
document.querySelectorAll(".diet-chip").forEach(c => c.addEventListener("click", () => {
  const d = c.dataset.diet, on = !menuState.diet.has(d);
  on ? menuState.diet.add(d) : menuState.diet.delete(d);
  c.classList.toggle("active", on);c.setAttribute("aria-pressed", String(on));renderMenu();
}));

// ---------- Abas de preços ----------
const tabs = document.querySelectorAll(".price-tab");
tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(i => {i.classList.remove("active");i.setAttribute("aria-selected","false");});
  tab.classList.add("active");tab.setAttribute("aria-selected","true");renderPrices(tab.dataset.category);
}));

// ---------- Menu mobile ----------
const menuToggle = $("#menuToggle"), nav = $("#nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent = "☰";
}));

// ---------- WhatsApp / Instagram / contato ----------
document.querySelectorAll("[data-wa]").forEach(a => {
  const link = waLink(a.dataset.wa);
  if(link){a.href = link;a.target = "_blank";a.rel = "noopener noreferrer";}
  else a.addEventListener("click", e => {e.preventDefault();toast(MISSING_WA);});
});
const ig = (SET.instagram || "").replace("@","");
document.querySelectorAll("[data-ig]").forEach(a => {
  if(ig){a.href = `https://instagram.com/${ig}`;a.target = "_blank";a.rel = "noopener noreferrer";}
  else a.addEventListener("click", e => {e.preventDefault();toast("Adicione o usuário do Instagram no arquivo config.js.");});
});
const PH = t => t || "[Preencher em config.js]";
if($("#infoEndereco")){
  $("#infoEndereco").textContent = PH(SET.endereco);
  $("#infoWhats").textContent = "Contato fictício — não disponível";
  $("#infoInsta").textContent = ig ? "@" + ig + " (perfil ilustrativo)" : PH("");
  $("#infoHorarios").innerHTML = (SET.horarios || []).map(([d,h]) => `<div class="contact-line"><span>${d.toUpperCase()}</span><b>${PH(h)}</b></div>`).join("");
}

// ---------- Formulário ----------
const form = $("#contactForm");
if(form){
  const params = new URLSearchParams(location.search);
  if(params.get("assunto")) form.assunto.value = params.get("assunto");
  const setReserva = () => form.querySelectorAll(".only-reserva").forEach(el => el.hidden = form.assunto.value !== "reserva");
  form.assunto.addEventListener("change", setReserva);setReserva();
  const status = $("#formStatus");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form).entries());
    const linhas = [`Olá! Sou ${d.nome}.`,`Assunto: ${form.assunto.selectedOptions[0].text}.`];
    if(d.assunto === "reserva") linhas.push(`Data: ${d.data || "-"} | Horário: ${d.hora || "-"} | Pessoas: ${d.pessoas || "-"}.`);
    linhas.push(d.mensagem, `Meu contato: ${d.telefone}`);
    const texto = linhas.join("\n");
    if(SET.formEndpoint){
      status.textContent = "Enviando...";
      try{
        const r = await fetch(SET.formEndpoint,{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify({...d,mensagem_completa:texto})});
        if(!r.ok) throw new Error();
        form.reset();setReserva();status.textContent = "Mensagem enviada! Responderemos em breve.";status.className = "form-status ok";
      }catch{status.textContent = "Não foi possível enviar agora. Tente pelo WhatsApp.";status.className = "form-status err";}
      return;
    }
    const link = waLink(texto);
    if(link){window.open(link,"_blank","noopener");status.textContent = "Abrimos o WhatsApp com sua mensagem pronta. É só enviar.";status.className = "form-status ok";}
    else{status.textContent = "Para receber mensagens, adicione o WhatsApp ou o formEndpoint no arquivo config.js.";status.className = "form-status err";}
  });
}

const yearEl = $("#year");
if(yearEl) yearEl.textContent = new Date().getFullYear();
renderPrices();renderMenu();

if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
  const io = new IntersectionObserver(es => es.forEach(e => {if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll(".experience-card,.food-features>div,.community-stats>div,.section-heading,.rule-card,.step").forEach(el => {el.classList.add("reveal");io.observe(el);});
}

/* ===== EFEITOS VISUAIS — fundo animado, divisórias, faixa em movimento e cards interativos ===== */
(function(){
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const main = document.querySelector("main");
  if(!main) return;

  /* 1) Divisórias animadas entre as seções */
  const mkDivider = () => {
    const d = document.createElement("div");
    d.className = "lobby-divider";
    d.setAttribute("aria-hidden","true");
    d.innerHTML = "<i></i><em></em><b></b>";
    for(let k=0;k<4;k++){
      const u = document.createElement("u");
      u.style.animationDuration = (9+Math.random()*9)+"s";
      u.style.animationDelay = (-Math.random()*14)+"s";
      d.appendChild(u);
    }
    return d;
  };
  [...main.children].forEach((el,i,arr) => {
    if(i===0 || el.classList.contains("ticker") || arr[i-1].classList.contains("ticker")) return;
    if(!el.matches("section")) return;
    main.insertBefore(mkDivider(), el);
  });
  const footer = document.querySelector(".footer");
  if(footer) footer.parentNode.insertBefore(mkDivider(), footer);

  /* 2) Faixa laranja: texto rolando sem parar */
  const ticker = document.querySelector(".ticker");
  if(ticker && ticker.firstElementChild && !reduce){
    const src = ticker.firstElementChild;
    const html = src.innerHTML.trim();
    const probe = document.createElement("div");
    probe.className = "tick-half";
    probe.style.cssText = "position:absolute;visibility:hidden";
    probe.innerHTML = html;
    ticker.appendChild(probe);
    const unit = probe.getBoundingClientRect().width || 600;
    probe.remove();
    const reps = Math.max(1, Math.ceil((window.innerWidth*1.2)/unit));
    const half = () => { const h = document.createElement("div"); h.className = "tick-half"; h.innerHTML = (html+" ").repeat(reps); return h; };
    const track = document.createElement("div");
    track.className = "tick-track";
    track.append(half(), half());
    ticker.classList.add("live-ticker");
    src.replaceWith(track);
    const bits = document.createElement("div");
    bits.className = "tick-bits";
    for(let k=0;k<14;k++){
      const b = document.createElement("i");
      b.style.left = Math.random()*100+"%";
      b.style.animationDuration = (2+Math.random()*3)+"s";
      b.style.animationDelay = (-Math.random()*4)+"s";
      bits.appendChild(b);
    }
    ticker.appendChild(bits);
  }

  /* 3) Hero: orbes de luz e formas flutuando */
  const hero = document.querySelector(".hero");
  let orbs = null;
  if(hero && !reduce){
    orbs = document.createElement("div");
    orbs.className = "hero-orbs";
    orbs.setAttribute("aria-hidden","true");
    orbs.innerHTML = '<div class="orb o1"></div><div class="orb o2"></div><div class="orb o3"></div>';
    const shapes = ["+","■","▲","●","✦","◆","×"];
    const n = innerWidth < 700 ? 8 : 14;
    for(let k=0;k<n;k++){
      const f = document.createElement("span");
      f.className = "floater";
      f.textContent = shapes[k % shapes.length];
      f.style.left = (Math.random()*96)+"%";
      f.style.top = (45+Math.random()*55)+"%";
      f.style.fontSize = (10+Math.random()*20)+"px";
      f.style.animationDuration = (9+Math.random()*10)+"s";
      f.style.animationDelay = (-Math.random()*16)+"s";
      orbs.appendChild(f);
    }
    hero.insertBefore(orbs, hero.firstChild);
  }

  /* 4) Barra de progresso de rolagem */
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  let ticking = false;
  const onScroll = () => {
    if(ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = "scaleX("+(h>0 ? Math.min(1,scrollY/h) : 0)+")";
      ticking = false;
    });
  };
  addEventListener("scroll", onScroll, {passive:true}); onScroll();

  if(reduce) return;

  /* 5) Fundo animado: partículas gamer ligadas por linhas */
  const cv = document.createElement("canvas");
  cv.id = "fxCanvas";
  cv.setAttribute("aria-hidden","true");
  document.body.insertBefore(cv, document.body.firstChild);
  const ctx = cv.getContext("2d");
  let W=0,H=0,dpr=1,parts=[],raf=0;
  const mouse = {x:-999,y:-999};
  const kinds = ["sq","plus","tri","ring","dpad"];
  const make = (init) => ({
    x:Math.random()*W, y:init ? Math.random()*H : H+20,
    vx:(Math.random()-.5)*.25, vy:-(.12+Math.random()*.35),
    s:4+Math.random()*9, r:Math.random()*Math.PI*2, vr:(Math.random()-.5)*.012,
    k:kinds[(Math.random()*kinds.length)|0], a:.12+Math.random()*.28, t:Math.random()*6.28
  });
  const resize = () => {
    dpr = Math.min(2, devicePixelRatio||1);
    W = innerWidth; H = innerHeight;
    cv.width = W*dpr; cv.height = H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    const count = W<700 ? 22 : W<1100 ? 34 : 50;
    parts = Array.from({length:count},() => make(true));
  };
  const drawShape = (p) => {
    ctx.save();
    ctx.translate(p.x,p.y); ctx.rotate(p.r);
    ctx.globalAlpha = p.a*(.65+.35*Math.sin(p.t));
    ctx.strokeStyle = ctx.fillStyle = "#f07832";
    ctx.lineWidth = 1.4;
    const s = p.s;
    if(p.k==="sq") ctx.fillRect(-s/2,-s/2,s,s);
    else if(p.k==="plus"){ctx.beginPath();ctx.moveTo(-s,0);ctx.lineTo(s,0);ctx.moveTo(0,-s);ctx.lineTo(0,s);ctx.stroke();}
    else if(p.k==="tri"){ctx.beginPath();ctx.moveTo(0,-s);ctx.lineTo(s,s);ctx.lineTo(-s,s);ctx.closePath();ctx.stroke();}
    else if(p.k==="ring"){ctx.beginPath();ctx.arc(0,0,s*.7,0,6.283);ctx.stroke();}
    else {const a=s*.35;ctx.fillRect(-a,-s,a*2,s*2);ctx.fillRect(-s,-a,s*2,a*2);}
    ctx.restore();
  };
  const frame = () => {
    ctx.clearRect(0,0,W,H);
    for(const p of parts){
      p.x += p.vx; p.y += p.vy; p.r += p.vr; p.t += .02;
      const dx = p.x-mouse.x, dy = p.y-mouse.y, d2 = dx*dx+dy*dy;
      if(d2 < 14000){const d=Math.sqrt(d2)||1;p.x += dx/d*1.1;p.y += dy/d*1.1;}
      if(p.y < -20 || p.x < -30 || p.x > W+30){Object.assign(p, make(false));}
    }
    ctx.lineWidth = 1;
    for(let i=0;i<parts.length;i++){
      for(let j=i+1;j<parts.length;j++){
        const a=parts[i],b=parts[j],dx=a.x-b.x,dy=a.y-b.y,d2=dx*dx+dy*dy;
        if(d2 < 16000){
          ctx.globalAlpha = (1-d2/16000)*.16;
          ctx.strokeStyle = "#f07832";
          ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
        }
      }
    }
    for(const p of parts) drawShape(p);
    raf = requestAnimationFrame(frame);
  };
  resize();
  let rt; addEventListener("resize", () => {clearTimeout(rt); rt = setTimeout(resize,150);});
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(raf);
    if(!document.hidden) raf = requestAnimationFrame(frame);
  });
  raf = requestAnimationFrame(frame);

  if(!fine) return;

  /* 6) Brilho que segue o mouse + parallax no hero */
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);
  addEventListener("pointermove", e => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    glow.style.transform = "translate("+e.clientX+"px,"+e.clientY+"px)";
    glow.classList.add("on");
    if(orbs && hero){
      const r = hero.getBoundingClientRect();
      if(r.bottom > 0){
        const px = (e.clientX/innerWidth-.5), py = (e.clientY/innerHeight-.5);
        orbs.style.transform = "translate("+(px*-26)+"px,"+(py*-20)+"px)";
      }
    }
  }, {passive:true});
  document.addEventListener("pointerleave", () => {glow.classList.remove("on"); mouse.x = mouse.y = -999;});

  /* 7) Cards: luz que segue o mouse e leve inclinação 3D (vale também para cards criados depois) */
  const sel = ".experience-card,.menu-card,.price-card,.team-card,.step,.rule-card";
  let cur = null;
  document.addEventListener("pointermove", e => {
    const c = e.target.closest ? e.target.closest(sel) : null;
    if(cur && cur !== c){cur.classList.remove("tilt-on");cur.style.removeProperty("--rx");cur.style.removeProperty("--ry");}
    cur = c;
    if(!c) return;
    const r = c.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width, y = (e.clientY-r.top)/r.height;
    c.style.setProperty("--mx", (x*100)+"%");
    c.style.setProperty("--my", (y*100)+"%");
    c.style.setProperty("--ry", ((x-.5)*7)+"deg");
    c.style.setProperty("--rx", ((.5-y)*7)+"deg");
    c.classList.add("tilt-on");
  }, {passive:true});
  document.addEventListener("pointerleave", () => {if(cur){cur.classList.remove("tilt-on");cur=null;}});
})();
