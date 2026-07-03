

    // ── THEME ──
    function toggleTheme() {
      const d = document.documentElement;
      const isDark = d.getAttribute('data-theme') === 'dark';
      d.setAttribute('data-theme', isDark ? '' : 'dark');
      document.querySelector('.btn-theme').textContent = isDark ? '🌙' : '☀️';
    }

    // ── MOBILE MENU ──
    function toggleMenu() {
      document.getElementById('mobileMenu').classList.toggle('open');
    }
// زرار التنقل
function toggleScroll() {
  // حساب المسافة المتبقية لأسفل الصفحة
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const currentScroll = window.scrollY;

  // إذا كنا قريبين من الأعلى، ينزل لأسفل الصفحة
  if (currentScroll < totalHeight / 2) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth' // حركة انسيابية
    });
  } else {
    // إذا كنا قريبين من الأسفل، يصعد لأعلى الصفحة
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
// intro
// دالة فتح الستائر وتفعيل المؤثرات عند الضغط من الموبايل
function openCurtain() {
    const intro = document.getElementById('intro');
    const site = document.getElementById('site');
    const weddingAudio = document.getElementById('wedding-audio-track');
    
    // 1. بدء تشغيل اللحن الملكي الهادئ المختار في الخلفية
    if (weddingAudio) {
        weddingAudio.play().catch(error => {
            console.log("تم حجب التشغيل التلقائي من المتصفح، سيعمل الصوت الآن بعد التفاعل.");
        });
        // تحديث شكل زر الموسيقى ليعكس حالة التشغيل
        const playBtn = document.getElementById('music-play-pause-btn');
        if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    
    // 2. إضافة كلاس الفتح لتفعيل حركة الـ CSS الانسيابية
    intro.classList.add('open');
    
    // 3. تفعيل التمرير وفتح محتوى الموقع خلف الستار
    if (site) {
        site.classList.add('active');
    }
    
    // 4. إزالة شاشة الستائر تماماً بعد انتهاء الحركة (1.8 ثانية) حتى لا تحجب الأزرار خلفها
    setTimeout(() => {
        intro.style.display = 'none';
    }, 1800);
}

// التأكد من تهيئة الصفحة وحالة الصوت عند التحميل على الجوال
document.addEventListener('DOMContentLoaded', () => {
    // التحقق مما إذا كان المستخدم يتصفح من الجوال
    if (window.innerWidth < 768) {
        // خفض الصوت قليلاً ليكون هادئاً وملكياً عند البداية
        const weddingAudio = document.getElementById('wedding-audio-track');
        if (weddingAudio) {
            weddingAudio.volume = 0.4; 
            const volumeSlider = document.getElementById('volume-slider');
            if (volumeSlider) volumeSlider.value = 0.4;
        }
    }
});
// تغيير شكل السهم تلقائياً أثناء التمرير العادي بالماوس
window.onscroll = function() {
  const scrollIcon = document.getElementById("scrollIcon");
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  if (window.scrollY > totalHeight / 2) {
    // تغيير السهم ليتجه لأعلى
    scrollIcon.className = "fas fa-arrow-up";
  } else {
    // تغيير السهم ليتجه لأسفل
    scrollIcon.className = "fas fa-arrow-down";
  }
};
    // ── COUNTDOWN ──
    (function () {
      const target = new Date('2026-08-14T20:00:00');
      function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) {
          document.getElementById('countdown').innerHTML = '<div style="color:var(--gold-light);font-family:Cairo,sans-serif;font-size:1.25rem">🎉 اليوم الكبير حان!</div>';
          return;
        }
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
        document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
        document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
        document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
      }
      update();
      setInterval(update, 1000);
    })();
// timeline
function runDirectHeroCinematic() {
    const tl = gsap.timeline();
    
    tl.from("#hero-badge", { opacity: 0, scale: 0.9, duration: 0.8, ease: "power2.out" })
      .from("#groom-avatar", { x: window.innerWidth > 640 ? 40 : 0, y: window.innerWidth > 640 ? 0 : 20, opacity: 0, duration: 1, ease: "back.out(1.5)" }, "-=0.4")
      .from("#bride-avatar", { x: window.innerWidth > 640 ? -40 : 0, y: window.innerWidth > 640 ? 0 : 20, opacity: 0, duration: 1, ease: "back.out(1.5)" }, "<")
      .from("#couple-names", { scale: 0.85, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.6)" }, "-=0.5")
      .from("#hero-desc", { opacity: 0, y: 15, duration: 0.8 }, "-=0.6");
}
    // ── SCROLL REVEAL ──
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => observer.observe(el));

    // ── GALLERY ──
 const galleryData = [
  { image: "media/pic/gall-1.jpg", cat: "engagement", h: 1 },
  { image: "/media/pic/gall-2.jpg", cat: "engagement", h: 1.3 },
  { image: "/media/pic/gall-3.jpg", cat: "travel", h: 0.8 },
  { image: "/media/pic/gall-4.jpg", cat: "travel", h: 1.2 },
  { image: "/media/pic/gall-5.jpg", cat: "family", h: 1 },
  { image: "/media/pic/gall-6.jpg", cat: "engagement", h: 1.4 },
  { image: "/media/pic/gall-7.jpg", cat: "travel", h: 0.9 },
  { image: "/media/pic/gall-8.jpg", cat: "family", h: 1.1 },
  { image: "/media/pic/fell-lov.jpg", cat: "engagement", h: 0.85 },
];function renderGallery(filter) {
  const g = document.getElementById('galleryGrid');
  const items = filter === 'all'
    ? galleryData
    : galleryData.filter(x => x.cat === filter);

  g.innerHTML = items.map(item => `
    <div class="gallery-item" onclick="openLightbox('${item.image}')">
      <div class="gallery-img" style="aspect-ratio:1/${item.h}">
        <img
          src="${item.image}"
          alt=""
          class="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div class="gallery-overlay">
        <div class="gallery-overlay-icon">🔍</div>
      </div>
    </div>
  `).join('');
}
    renderGallery('all');
    function filterGallery(cat, btn) {
      document.querySelectorAll('.gallery-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(cat);
    }
   function openLightbox(image) {
  document.getElementById('lightboxContent').innerHTML = `
    <img src="${image}" alt="" style="max-width:100%;max-height:90vh;border-radius:12px;">
  `;
  document.getElementById('lightbox').classList.add('open');
}
    function closeLightbox() {
      document.getElementById('lightbox').classList.remove('open');
    }

    // ── VIDEO ──
    const eventDate = new Date("2026-08-15T20:00:00").getTime();

setInterval(()=>{

    const now = Date.now();
    const diff = eventDate-now;

    if(diff<=0){

        document.getElementById("beforeEvent").style.display="none";
        document.getElementById("liveEvent").style.display="block";

        return;
    }

    document.getElementById("days").innerHTML=Math.floor(diff/(1000*60*60*24));

    document.getElementById("hours").innerHTML=Math.floor(diff/(1000*60*60)%24);

    document.getElementById("minutes").innerHTML=Math.floor(diff/(1000*60)%60);

    document.getElementById("seconds").innerHTML=Math.floor(diff/1000%60);

},1000);
    function openVideo(type, id) {
      const modal = document.getElementById('videoModal');
      const frame = document.getElementById('videoFrame');
      if (type === 'youtube') {
        frame.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      }
      modal.classList.add('open');
    }
    function closeVideo() {
      document.getElementById('videoModal').classList.remove('open');
      document.getElementById('videoFrame').src = '';
    }

    // ── MUSIC PLAYER ──

// التحكم الصوتي للموسيقى المحيطية العائمة

const audioTrack = document.getElementById("wedding-audio-track");
const playPauseBtn = document.getElementById("music-play-pause-btn");
const playlistSelector = document.getElementById("playlist-selector");
const trackTitle = document.getElementById("player-track-title");

const playlist = [
    {
        src: "media/sound/sound1.mpeg",
        title: "اللحن الرومانسي الملكي"
    },
    {
        src: "media/sound/sound2.mpeg",
        title: "موسيقى هادئة كلاسيك"
    },
    {
        src: "media/sound/sound3.mpeg",
        title: "زفة الفرح والبهجة"
    }
];

let currentTrack = 0;

// تشغيل / إيقاف
function toggleAudio() {
    if (audioTrack.paused) {
        audioTrack.play().catch(() => {
            console.log("المتصفح يحتاج تفاعل المستخدم أولاً");
        });

        playPauseBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

        playPauseBtn.classList.add("bg-amber-600");

    } else {

        audioTrack.pause();

        playPauseBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';

        playPauseBtn.classList.remove("bg-amber-600");
    }
}

// مستوى الصوت
function changeVolume(val) {
    audioTrack.volume = val;
}

// تحميل أغنية
function loadTrack(index, autoplay = true) {

    currentTrack = index;

    audioTrack.src = playlist[index].src;

    playlistSelector.value = playlist[index].src;

    if (trackTitle) {
        trackTitle.textContent = playlist[index].title;
    }

    audioTrack.load();

    if (autoplay) {
        audioTrack.play().catch(() => {});
    }

    playPauseBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    playPauseBtn.classList.add("bg-amber-600");
}

// تغيير الأغنية من القائمة
function switchTrack(src) {

    const index = playlist.findIndex(
        track => track.src === src
    );

    if (index !== -1) {
        loadTrack(index);
    }
}

// الأغنية التالية
function nextTrack() {

    currentTrack++;

    if (currentTrack >= playlist.length) {
        currentTrack = 0;
    }

    loadTrack(currentTrack);
}

// الأغنية السابقة
function previousTrack() {

    currentTrack--;

    if (currentTrack < 0) {
        currentTrack = playlist.length - 1;
    }

    loadTrack(currentTrack);
}

// عند انتهاء الأغنية شغل التالية تلقائياً
audioTrack.addEventListener("ended", nextTrack);

// تحديد الأغنية الحالية عند بدء الصفحة
const currentSrc = audioTrack.querySelector("source")?.getAttribute("src");

const initialIndex = playlist.findIndex(
    track => track.src === currentSrc
);

if (initialIndex !== -1) {
    currentTrack = initialIndex;

    if (trackTitle) {
        trackTitle.textContent =
            playlist[currentTrack].title;
    }
}
    // ── RSVP ──
    let attendVal = '';
    function setAttend(v) {
      attendVal = v;
      document.getElementById('attendYes').classList.toggle('selected', v === 'yes');
      document.getElementById('attendNo').classList.toggle('selected', v === 'no');
    }
    function submitRSVP() {
      const name = document.getElementById('guestName').value.trim();
      if (!name) { alert('الرجاء إدخال اسمك الكريم'); return; }
      if (!attendVal) { alert('الرجاء تأكيد الحضور'); return; }
      document.getElementById('rsvpForm').style.display = 'none';
      document.getElementById('rsvpSuccess').style.display = 'block';
      // Also add to guestbook if attended
      if (attendVal === 'yes') {
        const msg = document.getElementById('guestMessage').value.trim();
        if (msg) addMessageData(name, msg);
      }
    }

    // ── GUESTBOOK ──
   

// 1. التهنئات الافتراضية الفاخرة
const defaultWishes = [
    { name: "العائلة الكريمة", message: "ألف مبروك لأجمل عريس وعروس، بارك الله لكما وجمع بينكما في خير. نتطلع لليلتكم الموعودة." },
    { name: "صديق العريس المقرب", message: "يا رب تتمم فرحتكم على خير يا أبو حميد، الغالي وجد شريكة عمره النقية، ليلة زفاف مباركة وسعيدة لكما!" },
    { name: "خالة العروس", message: "سارة يا قُرة العين وجميلة العائلة، مبارك زواجك الميمون من الرجل الصالح أحمد، جعل الله بيوتكم عامرة بالمحبة." }
];

// 2. جلب البيانات مع فحص ذكي: إذا كانت الذاكرة فارغة تماماً أو تحتوي على مصفوفة فارغة [] شحن الافتراضي فوراً
let savedWishes = JSON.parse(localStorage.getItem("wedding_wishes"));
let wishes = (savedWishes && savedWishes.length > 0) ? savedWishes : defaultWishes;

// حفظ الحالة الصحيحة في الـ localStorage لضمان استقرارها
if (!savedWishes || savedWishes.length === 0) {
    localStorage.setItem("wedding_wishes", JSON.stringify(wishes));
}

// 3. دالة عرض وبناء كروت التهنئة ديناميكياً
function displayWishes() {
    const wall = document.getElementById("wishes-wall");
    if (!wall) return;
    
    wall.innerHTML = "";
    
    // إذا قام المستخدم بحذف كل شيء، نعرض رسالة ترحيبية خفيفة للتناسق البصري
    if (wishes.length === 0) {
        wall.innerHTML = `<p class="text-xs text-gray-500 text-center col-span-2 py-8">لا توجد تهنئات حالياً، كن أول المهنئين!</p>`;
        return;
    }
    
    // عرض العناصر بترتيب عكسي (الأحدث أولاً)
    wishes.slice().reverse().forEach((wish, originalIndex) => {
        const trueIndex = wishes.length - 1 - originalIndex;
        
        const card = document.createElement("div");
        card.className = "glass-wish-card p-4 rounded-xl text-right flex flex-col justify-between relative group transition-all duration-300 min-h-[140px]";
        
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <p class="text-[11px] text-gold-400 font-medium"><i class="fa-solid fa-bookmark ml-1"></i>تهنئة ميمونة</p>
                
                <button onclick="deleteWish(${trueIndex})" class="text-gray-500 hover:text-red-500 text-xs p-1 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none cursor-pointer" title="إزالة هذه التهنئة">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
            
            <p class="text-xs md:text-sm text-gray-300 leading-relaxed italic mb-3 flex-grow">"${wish.message}"</p>
            
            <div class="border-t border-gold-500/10 pt-2 flex items-center justify-between">
                <span class="text-xs font-bold text-gold-300">${wish.name}</span>
                <i class="fa-solid fa-heart text-[9px] text-red-500/30"></i>
            </div>
        `;
        
        wall.appendChild(card);
    });
}

// 4. دالة إضافة تهنئة جديدة وحفظها فورياً
function handleWishSubmit(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById("wish-name");
    const messageInput = document.getElementById("wish-message");
    const wallContainer = document.getElementById("wishes-wall");
    
    if (!nameInput || !messageInput) return;
    
    const newWish = {
        name: nameInput.value.trim(),
        message: messageInput.value.trim()
    };
    
    wishes.push(newWish);
    localStorage.setItem("wedding_wishes", JSON.stringify(wishes));
    
    displayWishes();
    
    nameInput.value = "";
    messageInput.value = "";
    
    if (wallContainer) {
        wallContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// 5. دالة الحذف الذكي والآمن
function deleteWish(index) {
    wishes.splice(index, 1);
    localStorage.setItem("wedding_wishes", JSON.stringify(wishes));
    displayWishes();
}

// 6. ربط الأحداث وتشغيل النظام
document.addEventListener("DOMContentLoaded", () => {
    displayWishes();
    
    const wishForm = document.getElementById("wish-form");
    if (wishForm) {
        wishForm.addEventListener("submit", handleWishSubmit);
    }
});
    // ── SHARE ──
    function shareInvite() {
      if (navigator.share) {
        navigator.share({ title: 'دعوة زفاف نور وكريم', text: 'يتشرف نور وكريم بدعوتكم لحضور حفل زفافهما', url: window.location.href });
      } else {
        navigator.clipboard.writeText(window.location.href).then(() => alert('تم نسخ الرابط!'));
      }
    }

    // ── NAV SCROLL ──
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(201,168,76,.1)' : 'none';
    });
// social

function copyLink(url) {
    navigator.clipboard.writeText(url).catch(() => {});
}

function shareWhatsApp(event) {
    event.preventDefault();

    const url = window.location.href;
    copyLink(url);

    const text = encodeURIComponent("شاهد هذا الموقع:\n" + url);

    window.open(`https://wa.me/?text=${text}`, "_blank");
}

function shareSnapchat(event) {
    event.preventDefault();

    const url = window.location.href;

    navigator.clipboard.writeText(url).catch(() => {});

    alert("تم نسخ الرابط. الصقه داخل محادثة في سناب شات.");
    window.open("https://www.snapchat.com/", "_blank");
}

function shareInstagram(event) {
    event.preventDefault();

    const url = window.location.href;
    copyLink(url);

    alert("تم نسخ رابط الموقع. الصقه داخل رسالة أو ستوري أو البايو في إنستجرام.");
    window.open("https://www.instagram.com/", "_blank");
}