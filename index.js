const toggle = document.getElementById("toggle");
const body = document.body;
const nav = document.getElementById("nav");
const social = document.getElementById("social");
const follow = document.getElementById("follow");
const boxa = document.getElementById("boxa");
const boxb = document.getElementById("boxb");
const boxc = document.getElementById("boxc");
const boxd = document.getElementById("boxd");
const logo = document.getElementById("logo");
const logob= document.getElementById("logob");
const logoc= document.getElementById("logoc");
const logod= document.getElementById("logod");
const number = document.getElementById("number");
const numberb = document.getElementById("numberb");
const numberc = document.getElementById("numberc");
const numberd = document.getElementById("numberd");
const followersb = document.getElementById("followersb");
const followersc = document.getElementById("followersc");
const followersd = document.getElementById("followersd");
const followerse = document.getElementById("followerse");
const today = document.getElementById("today");
const viewsd = document.getElementById("viewsd");
const views = document.getElementById("views");
const viewse = document.getElementById("viewse");
const viewsf = document.getElementById("viewsf");
const viewsg = document.getElementById("viewsg");
const viewsh = document.getElementById("viewsh");
const viewsi = document.getElementById("viewsi");
const viewsj = document.getElementById("viewsj");
const viewsc = document.getElementById("viewsc");
const viewsca = document.getElementById("viewsca");
const viewscb = document.getElementById("viewscb");
const viewscc = document.getElementById("viewscc");
const viewscd = document.getElementById("viewscd");
const viewsce = document.getElementById("viewsce");
const viewscf = document.getElementById("viewscf");
const viewscg = document.getElementById("viewscg");
const numbersb = document.getElementById("numbersb")
const numbersba = document.getElementById("numbersba")
const numbersbb = document.getElementById("numbersbb")
const numbersbc = document.getElementById("numbersbc")
const numbersbd = document.getElementById("numbersbd")
const numbersbe = document.getElementById("numbersbe")
const numbersbf = document.getElementById("numbersbf")
const numbersbg = document.getElementById("numbersbg")


toggle.addEventListener('input', e => {
  const isChecked = e.target.checked;

  if(isChecked){
    body.classList.add("dark-mode");
    nav.classList.add("nav-dark");
    social.classList.add("social-dark");
    follow.classList.add("follow-dark");
    boxa.classList.add("boxa-light");
    boxb.classList.add("boxb-light");
    boxc.classList.add("boxc-light");
    boxd.classList.add("boxd-light");
    logo.classList.add("logo-light");
    logob.classList.add("logo-light");
    logoc.classList.add("logo-light");
    logod.classList.add("logo-light");
    number.classList.add("number-light");
    numberb.classList.add("number-light");
    numberc.classList.add("number-light");
    numberd.classList.add("number-light");
    followersb.classList.add("followersb-light");
    followersc.classList.add("followersb-light");
    followersd.classList.add("followersb-light");
    followerse.classList.add("followersb-light");
    today.classList.add("today-light")
    viewsd.classList.add("views-light");
    views.classList.add("views-light");
    viewse.classList.add("views-light");
    viewsf.classList.add("views-light");
    viewsg.classList.add("views-light");
    viewsh.classList.add("views-light");
    viewsi.classList.add("views-light");
    viewsj.classList.add("views-light");
    viewsc.classList.add("viewsc-light")
    viewsca.classList.add("viewsc-light");
    viewscb.classList.add("viewsc-light");
    viewscc.classList.add("viewsc-light");
    viewscd.classList.add("viewsc-light");
    viewsce.classList.add("viewsc-light");
    viewscf.classList.add("viewsc-light");
    viewscg.classList.add("viewsc-light");
    numbersb.classList.add("numbersb-light")
    numbersba.classList.add("numbersb-light")
    numbersbb.classList.add("numbersb-light")
    numbersbc.classList.add("numbersb-light")
    numbersbd.classList.add("numbersb-light")
    numbersbe.classList.add("numbersb-light")
    numbersbf.classList.add("numbersb-light")
    numbersbg.classList.add("numbersb-light")




  }
  else{
      body.classList.remove("dark-mode");
      nav.classList.remove("nav-dark");
      social.classList.remove("social-dark")
      follow.classList.remove("follow-dark");
      boxa.classList.remove("boxa-light");
      boxb.classList.remove("boxb-light");
      boxc.classList.remove("boxc-light");
      boxd.classList.remove("boxd-light");
      logo.classList.remove("logo-light")
      logob.classList.remove("logo-light");
      logoc.classList.remove("logo-light");
      logod.classList.remove("logo-light");
      number.classList.remove("number-light")
      numberb.classList.remove("number-light")
      numberc.classList.remove("number-light")
      numberd.classList.remove("number-light")
      followersb.classList.remove("followersb-light")
      followersc.classList.remove("followersb-light")
      followersd.classList.remove("followersb-light")
      followerse.classList.remove("followersb-light")
      today.classList.remove("today-light")
      viewsd.classList.remove("views-light");
      views.classList.remove("views-light");
      viewse.classList.remove("views-light");
      viewsf.classList.remove("views-light");
      viewsg.classList.remove("views-light");
      viewsh.classList.remove("views-light");
      viewsi.classList.remove("views-light");
      viewsj.classList.remove("views-light");
      viewsc.classList.remove("viewsc-light");
      viewsca.classList.remove("viewsc-light");
      viewscb.classList.remove("viewsc-light");
      viewscc.classList.remove("viewsc-light");
      viewscd.classList.remove("viewsc-light");
      viewsce.classList.remove("viewsc-light");
      viewscf.classList.remove("viewsc-light");
      viewscg.classList.remove("viewsc-light");
      numbersb.classList.remove("numbersb-light")
      numbersba.classList.remove("numbersb-light")
      numbersbb.classList.remove("numbersb-light")
      numbersbc.classList.remove("numbersb-light")
      numbersbd.classList.remove("numbersb-light")
      numbersbe.classList.remove("numbersb-light")
      numbersbf.classList.remove("numbersb-light")
      numbersbg.classList.remove("numbersb-light")







    }
})

