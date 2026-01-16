(function () {
  const ua = navigator.userAgent.toLowerCase();

  const play =
    "https://play.google.com/store/apps/details?id=com.ssnim.lesson&pcampaignid=web_share";
  const appstore =
    "https://apps.apple.com/kr/app/스승님/id6743513759";

  const cta = document.createElement("div");
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

  // 하단 고정 CTA 삽입
  document.body.appendChild(cta);

  // 하단 CTA 높이만큼 body 여백 확보 (겹침 방지)
  requestAnimationFrame(() => {
    document.body.style.paddingBottom = cta.offsetHeight + "px";
  });
})();
