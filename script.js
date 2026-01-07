/* LOGIN */
function login(){
  if(user.value==="Karien Krisdina S" && pass.value==="070321"){
    location.href="home.html";
  } else alert("Hehe salah 🤭");
}

/* MUSIC FADE */
function playMusic(){
  const m=document.getElementById("bgMusic");
  m.volume=0;
  m.play();
  let v=0;
  const f=setInterval(()=>{
    if(v<0.5){v+=0.05;m.volume=v;}
    else clearInterval(f);
  },200);
}

/* TYPING JUDUL */
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

/* FLOWERS */
const flowers=document.querySelector(".flowers");
if(flowers){
  setInterval(()=>{
    const f=document.createElement("div");
    f.className="flower";
    f.innerHTML=["🌸","💮","🌼","🌷"][Math.floor(Math.random()*4)];
    f.style.left=Math.random()*100+"vw";
    f.style.fontSize=(16+Math.random()*20)+"px";
    f.style.animationDuration=(6+Math.random()*6)+"s";
    flowers.appendChild(f);
    setTimeout(()=>f.remove(),12000);
  },400);
}

/* SURAT */
const letterContent=`
hihii sumpa gabisa berhenti ngomong kamute
keren banget anjayy.. tuuu bisaa kan
kata aku juga makanyaa jangan suka
rendahin selera akuu!!

maoo cobain tukeran mata sekali!!
kamu harus liat kamu sendiri dari
mata aku!!!

jujur setiap kamu ngomong kalau
kamu jelek tu aku nggak ngerti.
EMANG KAPAN KAMU GA CANTIK WO.

tapi sumpah ya setiap kamu bete sama
aku sebenernya sedih anjay aku..
kasian ke kamu..

maaf ya harus direpotin sama perasaan aku
maaf kalau aku bikin kamu nggak nyaman :(

intinya selamatt yaaa luvv
uwuu more than you know
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
