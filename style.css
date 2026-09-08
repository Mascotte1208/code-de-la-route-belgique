:root{
  --bg:#f3f4f6;
  --surface:#fff;
  --soft:#f7f8fa;
  --ink:#171a1f;
  --muted:#68707a;
  --line:#e1e4e8;
  --dark:#171a1f;
  --red:#c81e2c;
  --red2:#7a0f18;
  --blue:#1c5fa8;
  --amber:#e8a400;
  --purple:#6b46c1;
  --teal:#0e7c86;
  --good:#1e7a3c;
  --shadow:0 10px 30px rgba(20,25,30,.07);
  --radius:18px;
  --ease:cubic-bezier(.16,1,.3,1);
  --ease-snap:cubic-bezier(.4,0,.2,1);
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

html,body{
  margin:0;
  min-height:100%;
  background:var(--bg);
  color:var(--ink);
  font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  -webkit-font-smoothing:antialiased;
}

body{
  opacity:0;
  transition:opacity .35s var(--ease);
}

body.ready{
  opacity:1;
}

body.dark{
  --bg:#0e1115;
  --surface:#181c22;
  --soft:#222730;
  --ink:#f3f5f7;
  --muted:#aab1bb;
  --line:#343a44;
  --shadow:0 10px 30px rgba(0,0,0,.25);
}

button,
input{
  font:inherit;
}

button{
  cursor:pointer;
  transition:
    transform .12s var(--ease-snap),
    box-shadow .12s var(--ease-snap),
    background-color .15s var(--ease-snap),
    border-color .15s var(--ease-snap),
    opacity .15s var(--ease-snap);
}

button:active{
  transform:scale(.96);
}

button:focus-visible,
input:focus-visible{
  outline:3px solid rgba(28,95,168,.25);
  outline-offset:2px;
}

.hidden{
  display:none !important;
}

.top{
  position:sticky;
  top:0;
  z-index:50;
  background:var(--dark);
  color:#fff;
  padding:14px max(16px,calc((100vw - 1120px)/2));
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.brand{
  font-weight:900;
  letter-spacing:.2px;
  cursor:pointer;
}

.home-btn{
  display:none;
  border:1px solid #59616c;
  background:transparent;
  color:#fff;
  border-radius:10px;
  padding:7px 11px;
}

.lane{
  height:5px;
  background:repeating-linear-gradient(
    90deg,
    #fff 0 22px,
    transparent 22px 40px
  );
}

.offline{
  position:fixed;
  right:10px;
  top:69px;
  z-index:40;
  background:#eaf7ee;
  color:#176331;
  border:1px solid #c8e6d0;
  border-radius:999px;
  padding:5px 9px;
  font-size:9px;
  font-weight:900;
  letter-spacing:.4px;
  text-transform:uppercase;
}

.app{
  max-width:1120px;
  margin:auto;
  padding:24px 18px 90px;
}

.view{
  animation:viewIn .38s var(--ease);
}

@keyframes viewIn{
  from{
    opacity:0;
    transform:translateY(10px) scale(.995);
  }

  to{
    opacity:1;
    transform:none;
  }
}

/* ================= DASHBOARD ================= */

.hero{
  background:linear-gradient(135deg,#171a1f,#2b3139);
  color:#fff;
  border-radius:24px;
  padding:30px;
  display:flex;
  justify-content:space-between;
  align-items:end;
  gap:24px;
  box-shadow:var(--shadow);
  margin-bottom:16px;
}

.eyebrow{
  font-size:10px;
  font-weight:900;
  letter-spacing:1.3px;
  color:#abb2bc;
}

.hero h1{
  margin:7px 0 8px;
  font-size:32px;
  line-height:1.05;
  letter-spacing:-.8px;
}

.hero p{
  margin:0;
  color:#c7ccd3;
  font-size:14px;
  max-width:630px;
}

.actions{
  display:flex;
  gap:8px;
  align-items:center;
  flex:none;
}

.primary,
.ghost,
.danger{
  border-radius:12px;
  padding:12px 16px;
  font-weight:900;
}

.primary{
  background:#fff;
  color:#171a1f;
  border:0;
}

.primary:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.18);
}

.ghost{
  background:transparent;
  color:var(--ink);
  border:1px solid var(--line);
}

.ghost:hover{
  background:var(--soft);
}

.danger{
  background:transparent;
  color:var(--red2);
  border:1px solid var(--red);
}

.danger:hover{
  background:#fbeaea;
}

.theme{
  width:44px;
  height:44px;
  border-radius:12px;
  background:rgba(255,255,255,.07);
  color:#fff;
  border:1px solid #59616c;
}

.theme:hover{
  background:rgba(255,255,255,.14);
}

.stats{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
  margin-bottom:16px;
}

.stat,
.panel,
.practice,
.content{
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:var(--radius);
  box-shadow:0 5px 18px rgba(20,25,30,.045);
}

.stat{
  padding:16px;
  display:flex;
  gap:12px;
  align-items:center;
}

.stat i{
  width:40px;
  height:40px;
  border-radius:12px;
  background:var(--soft);
  display:grid;
  place-items:center;
  font-style:normal;
}

.stat b{
  display:block;
  font-size:21px;
  font-variant-numeric:tabular-nums;
}

.stat span{
  font-size:11px;
  color:var(--muted);
}

.grid{
  display:grid;
  grid-template-columns:minmax(0,1.7fr) minmax(270px,.8fr);
  gap:16px;
}

.section-title{
  font-size:21px;
  margin:0;
}

.muted{
  font-size:13px;
  color:var(--muted);
  margin:4px 0 14px;
}

.practice-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}

.practice{
  padding:16px;
  text-align:left;
  display:flex;
  align-items:center;
  gap:12px;
  transition:
    transform .18s var(--ease-snap),
    box-shadow .18s var(--ease-snap);
}

.practice:hover{
  transform:translateY(-3px);
  box-shadow:var(--shadow);
}

.practice-icon{
  width:42px;
  height:42px;
  border-radius:12px;
  background:var(--soft);
  display:grid;
  place-items:center;
  font-size:20px;
  flex:none;
}

.practice-copy{
  flex:1;
}

.practice-copy b{
  display:block;
  font-size:14px;
  margin-bottom:3px;
}

.practice-copy small{
  display:block;
  color:var(--muted);
  font-size:11.5px;
}

.arrow{
  color:#8d949d;
  font-size:20px;
}

.progress{
  padding:18px;
  margin-top:16px;
}

.progress-top{
  display:flex;
  justify-content:space-between;
  gap:14px;
}

.bar{
  height:10px;
  background:#eceef1;
  border-radius:999px;
  overflow:hidden;
  margin:15px 0 8px;
}

.bar span{
  display:block;
  height:100%;
  width:0;
  background:linear-gradient(90deg,var(--red),var(--amber));
  transition:width .7s var(--ease);
}

.meta{
  display:flex;
  justify-content:space-between;
  font-size:11px;
  color:var(--muted);
}

.quick,
.tip{
  padding:18px;
}

.quick h3,
.tip h3{
  margin:0 0 7px;
  font-size:14px;
}

.quick button{
  display:flex;
  width:100%;
  justify-content:space-between;
  border:0;
  border-top:1px solid var(--line);
  background:transparent;
  color:var(--ink);
  padding:12px 0;
  text-align:left;
}

.tip{
  margin-top:10px;
  background:#fff9eb;
  border-color:#eed9a5;
}

.tip p{
  margin:0;
  color:#6b6045;
  font-size:11.5px;
}

/* ================= PANNEAUX ================= */

.sign-stage{
  display:flex;
  justify-content:center;
  align-items:center;
  margin:15px 0;
}

.sign-card{
  width:150px;
  height:150px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  font-weight:900;
  box-shadow:0 10px 25px rgba(0,0,0,.12);
  position:relative;
  padding:10px;
}

.sign-card.danger{
  background:#ffffff;
  border:8px solid #c81e2c;
  clip-path:polygon(50% 0%,100% 100%,0% 100%);
  width:155px;
  height:140px;
  padding-top:45px;
  color:#171a1f;
}

.sign-card.priorite{
  background:#ffffff;
  border:6px solid #c81e2c;
  width:130px;
  height:130px;
  transform:rotate(45deg);
  color:#171a1f;
}

.sign-card.priorite.losange{
  background:#e8a400;
  border:4px solid #171a1f;
}

.sign-card.priorite *{
  transform:rotate(-45deg);
}

.sign-card.interdiction{
  background:#ffffff;
  border:12px solid #c81e2c;
  border-radius:50%;
  width:145px;
  height:145px;
  color:#171a1f;
}

.sign-card.obligation{
  background:#1c5fa8;
  border-radius:50%;
  width:145px;
  height:145px;
  color:#ffffff;
}

.sign-card.stationnement{
  background:#1c5fa8;
  border-radius:16px;
  width:140px;
  height:140px;
  color:#ffffff;
  border:4px solid #ffffff;
}

.sign-card.indication{
  background:#1c5fa8;
  border-radius:8px;
  width:160px;
  height:110px;
  color:#ffffff;
  border:3px solid #ffffff;
}

.sign-card.panonceau{
  background:#ffffff;
  border:3px solid #171a1f;
  border-radius:6px;
  width:160px;
  height:80px;
  color:#171a1f;
}

.sign-code{
  font-size:18px;
  letter-spacing:.5px;
}

.sign-subtext{
  font-size:11px;
  text-transform:uppercase;
  margin-top:4px;
  opacity:.85;
}

.repo-thumb .sign-card{
  width:45px;
  height:45px;
  box-shadow:none;
  font-size:10px;
  border-width:3px;
}

.repo-thumb .sign-card.danger{
  width:50px;
  height:45px;
  padding-top:15px;
  border-width:3px;
}

.repo-thumb .sign-card.priorite{
  width:40px;
  height:40px;
  border-width:2px;
}

.repo-thumb .sign-card.interdiction,
.repo-thumb .sign-card.obligation{
  width:45px;
  height:45px;
  border-width:4px;
}

.repo-thumb .sign-card.stationnement,
.repo-thumb .sign-card.indication{
  width:50px;
  height:35px;
  border-width:2px;
}

.repo-thumb .sign-card.panonceau{
  width:55px;
  height:28px;
  border-width:2px;
}

/* ================= GENERAL ================= */

.content{
  padding:20px;
}

.search{
  width:100%;
  padding:12px 14px;
  border:1px solid var(--line);
  background:var(--surface);
  color:var(--ink);
  border-radius:11px;
  margin-bottom:14px;
}

.cat-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:9px;
  margin:16px 0;
}

.cat-chip{
  border:1px solid var(--line);
  background:var(--surface);
  color:var(--ink);
  border-radius:12px;
  padding:12px;
  display:flex;
  gap:10px;
  align-items:center;
  text-align:left;
}

.cat-chip.off{
  opacity:.35;
}

.dot{
  width:16px;
  height:16px;
  border-radius:50%;
  flex:none;
}

.config{
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:var(--soft);
  padding:14px;
  border-radius:12px;
  margin-bottom:15px;
}

.field-row{
  margin-bottom:20px;
}

.field-row label{
  display:flex;
  justify-content:space-between;
  font-size:13px;
  font-weight:800;
  margin-bottom:8px;
}

.range{
  width:100%;
  accent-color:var(--red);
}

.progress-dots{
  display:flex;
  gap:3px;
  margin-bottom:11px;
}

.progress-dots i{
  height:5px;
  flex:1;
  background:var(--line);
  border-radius:99px;
}

.progress-dots i.done{
  background:var(--dark);
}

.quiz-top{
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:8px;
  color:var(--muted);
  font-size:12px;
}

.timer{
  font-weight:900;
  color:var(--red2);
  background:var(--soft);
  padding:5px 9px;
  border-radius:999px;
}

.fav-btn{
  border:0;
  background:transparent;
  color:var(--ink);
  font-size:22px;
  line-height:1;
}

.sign-caption{
  text-align:center;
  text-transform:uppercase;
  letter-spacing:.5px;
  font-size:10px;
  color:var(--muted);
  margin-bottom:17px;
}

.question{
  font-size:17px;
  font-weight:900;
  text-align:center;
  margin-bottom:15px;
}

.options{
  display:flex;
  flex-direction:column;
  gap:9px;
}

.option{
  border:1px solid var(--line);
  background:var(--surface);
  color:var(--ink);
  border-radius:11px;
  padding:14px;
  text-align:left;
  font-size:14px;
}

.option.correct{
  border-color:var(--good);
  background:#eaf6ee;
  color:#155728;
  font-weight:900;
}

.option.wrong{
  border-color:var(--red);
  background:#fbeaea;
  color:var(--red2);
  font-weight:900;
}

.feedback{
  margin-top:15px;
  padding:13px;
  border-left:3px solid var(--good);
  background:var(--soft);
  border-radius:0 10px 10px 0;
  font-size:13px;
}

.feedback.bad{
  border-left-color:var(--red);
}

.score{
  text-align:center;
  margin:12px 0 20px;
}

.score-ring{
  width:165px;
  height:165px;
  border-radius:50%;
  border:11px solid var(--red);
  margin:auto;
  display:grid;
  place-items:center;
  background:var(--surface);
}

.score-ring strong{
  font-size:38px;
}

.repo-head{
  display:flex;
  gap:8px;
  align-items:center;
  margin:18px 0 9px;
  font-size:13px;
  font-weight:900;
}

.repo-item{
  display:flex;
  gap:12px;
  align-items:center;
  padding:12px;
  border:1px solid var(--line);
  border-radius:12px;
  margin-bottom:7px;
  background:var(--surface);
}

.repo-thumb{
  width:54px;
  height:54px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex:none;
}

.repo-code{
  font-size:11px;
  color:var(--muted);
  font-weight:900;
}

.repo-name{
  font-size:14px;
  font-weight:900;
}

.repo-desc{
  font-size:12px;
  color:var(--muted);
  margin-top:3px;
}

.info-card,
.rule-card{
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:13px;
  padding:15px;
  margin-bottom:9px;
}

.info-header{
  display:flex;
  justify-content:space-between;
  gap:10px;
  margin-bottom:8px;
}

.badge{
  font-size:10px;
  font-weight:900;
  padding:5px 8px;
  border-radius:6px;
  background:var(--dark);
  color:#fff;
}

.badge-2{
  background:var(--amber);
  color:var(--ink);
}

.badge-3{
  background:var(--red);
}

.badge-4{
  background:#000;
}

.badge-vitesse{
  background:var(--purple);
}

.badge-alcool{
  background:var(--teal);
}

.action-row{
  display:flex;
  gap:8px;
}

.action-row > *{
  flex:1;
}

.empty{
  text-align:center;
  color:var(--muted);
  font-size:13px;
  padding:30px 10px;
}

/* ================= RESPONSIVE ================= */

@media(max-width:800px){

  .hero{
    align-items:flex-start;
    flex-direction:column;
  }

  .actions{
    width:100%;
  }

  .actions .primary{
    flex:1;
  }

  .grid{
    grid-template-columns:1fr;
  }

  .stats{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:560px){

  .app{
    padding:16px 12px 70px;
  }

  .hero{
    padding:22px;
    border-radius:18px;
  }

  .hero h1{
    font-size:27px;
  }

  .practice-grid{
    grid-template-columns:1fr;
  }

  .cat-grid{
    grid-template-columns:1fr 1fr;
  }

  .content{
    padding:15px;
  }

  .stats{
    gap:7px;
  }

  .stat{
    padding:12px;
  }

  .stat i{
    width:34px;
    height:34px;
  }

  .stat b{
    font-size:18px;
  }

  .stat span{
    font-size:10px;
  }

  .sign-card{
    transform:scale(.9);
  }
}
