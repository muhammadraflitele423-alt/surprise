/* LOGIN */
function login(){
  if(user.value==="Karien Krisdina S" && pass.value==="070321"){
    if(confirm("Ini beneran Karien Krisdina S?")){
      sessionStorage.setItem("fromLogin","yes");
      sessionStorage.setItem("firstHome","yes");
      location.href="home.html";
    }else{
      alert("gabolleh liat 😤");
    }
  }else alert("Hehe salah 🤭");
}

/* AUTO MUSIC */
window.addEventListener("load",()=>{
  if(sessionStorage.getItem("fromLogin")==="yes"){
    playMusic();
    sessionStorage.removeItem("fromLogin");
  }
});

/* MUSIC */
function playMusic(){
  const m=document.getElementById("bgMusic");
  if(!m || !m.paused) return;
  m.volume=0;
  m.play().catch(()=>{});
  let v=0;
  const f=setInterval(()=>{
    if(v<0.5){v+=0.05;m.volume=v;}
    else clearInterval(f);
  },200);
}

/* TYPING */
const text="Selamat Lulus Sidang Skripsi 🎓";
let ti=0;
const typing=document.getElementById("typing");
if(typing){
  (function type(){
    if(ti<text.length){
      typing.innerHTML+=text[ti++];
      setTimeout(type,100);
    }
  })();
}

/* FLOWERS (FIRST TIME ONLY) */
const flowers=document.querySelector(".flowers");
if(flowers && sessionStorage.getItem("firstHome")==="yes"){
  let interval=setInterval(()=>{
    const f=document.createElement("div");
    f.className="flower";
    f.innerHTML=["🌸","💮","🌼","🌷"][Math.floor(Math.random()*4)];
    f.style.left=Math.random()*100+"vw";
    f.style.fontSize=(16+Math.random()*20)+"px";
    f.style.animationDuration=(6+Math.random()*6)+"s";
    flowers.appendChild(f);
    setTimeout(()=>f.remove(),12000);
  },400);

  setTimeout(()=>{
    clearInterval(interval);
    sessionStorage.removeItem("firstHome");
  },6000);
}


/* SURAT */
const letterContent=`
hihii sumpa gabisa berhenti ngomong kamute
keren banget anjayy.. tuuu bisaa kan
kata aku juga makanyaa jangan suka
rendahin selera akuu!!

maoo cobain tukeran mata sekali!?
kamu harus liat kamu sendiri dari
mata aku!!!

jujur setiap kamu ngomong kalau
kamu jelek tu aku nggak ngerti.
EMANG KAPAN KAMU GA CANTIK WOEE.

tapi sumpah ya setiap kamu bete sama
aku sebenernya sedih anjay aku..
kasian ke kamu..
kamute gapernah nyuruh aku harus suka sama kamu,
tapi akhirnya aku sendiri yang ngedeketin kamu

maaf ya harus direpotin sama perasaan aku
maaf kalau aku bikin kamu nggak nyaman 
maaf kamu ketemunya aku:(

hihii balik lagii pkonyaa kamu kereenn 
aku ngetik ini sambil bayangin muka kamu
kayanya lega banget yee..
banyak anjay yang pengen di ketik 
tapi aku tau kamu males baca hehe

intinya selamatt yaaa luvv
uuuu more than you know
cailaaa
`;
let li=0;
function openLetter(){
  document.querySelector(".envelope-front").style.display="none";
  const p=document.getElementById("letterPaper");
  p.classList.remove("hidden");
  (function type(){
    if(li<letterContent.length){
      letterText.textContent+=letterContent[li++];
      setTimeout(type,40);
    }
  })();
}

/* TANYA */
function tanya(){
  confirm("Mau liat buktinya?")
  ?location.href="bukti.html"
  :penutup.scrollIntoView({behavior:"smooth"});
}

/* NIGHT */
function toggleNight(){
  document.body.classList.toggle("night");
}
