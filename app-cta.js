(function () {
  const ua = navigator.userAgent.toLowerCase();

  const play =
    "https://play.google.com/store/apps/details?id=com.ssnim.lesson&pcampaignid=web_share";
  const appstore =
    "https://apps.apple.com/kr/app/스승님/id6743513759";

  const cta = document.createElement("div");
  cta.setAttribute("data-app-cta", "1");
  cta.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 720px;
    background: #fff;
    border-top: 1px solid #e5e5e5;
    padding: 12px 16px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom));
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    font-family: system-ui;
  `;

  cta.innerHTML = `
    <span style="font-size:14px;font-weight:700;">
      700만 골퍼의 필수 골프 레슨 앱, 스승님
    </span>
    <button style="
      background:#2563eb;
      color:#fff;
      border:none;
      padding:10px 16px;
      border-radius:10px;
      font-weight:800;
      cursor:pointer;
    ">
      앱 설치
    </button>
  `;

  cta.querySelector("button").onclick = function () {
    if (ua.includes("android")) location.href = play;
    else if (ua.includes("iphone") || ua.includes("ipad")) location.href = appstore;
    else alert("모바일에서 앱 설치가 가능합니다.");
  };

  document.body.appendChild(cta);

  // ✅ 1) 스크롤 컨테이너 padding 보정 (일반 콘텐츠용)
  const target =
    document.querySelector("main") ||
    document.querySelector("#root") ||
    document.querySelector(".container") ||
    document.body;

  // ✅ 2) 하단 fixed 요소(요청하기 버튼/상태바 등)까지 위로 밀기
  function bumpFixedBottomElements(offsetPx) {
    const nodes = Array.from(document.body.querySelectorAll("*"));

    for (const el of nodes) {
      if (el === cta) continue;
      if (el.closest('[data-app-cta="1"]')) continue;

      const style = window.getComputedStyle(el);
      if (style.position !== "fixed") continue;

      // 화면 하단에 붙어있는 요소만 대상으로 (bottom이 0이거나 아주 작음)
      const bottomVal = parseFloat(style.bottom || "0");
      if (isNaN(bottomVal) || bottomVal > 40) continue;

      const rect = el.getBoundingClientRect();
      // 현재 CTA 영역과 겹칠 가능성이 있는 요소만
      if (rect.bottom > window.innerHeight - offsetPx) {
        el.style.bottom = `${offsetPx + 8}px`; // 여유 8px
      }
    }
  }

  requestAnimationFrame(() => {
    const offset = cta.offsetHeight;

    // 스크롤 콘텐츠 여백
    target.style.paddingBottom = `calc(${offset + 16}px + env(safe-area-inset-bottom))`;

    // fixed CTA/바 겹침 방지
    bumpFixedBottomElements(offset);
  });
})();
