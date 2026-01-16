(function () {
  const ua = navigator.userAgent.toLowerCase();

  const play =
    "https://play.google.com/store/apps/details?id=com.ssnim.lesson&pcampaignid=web_share";
  const appstore =
    "https://apps.apple.com/kr/app/스승님/id6743513759";

  // CTA 컨테이너 (고정 아님)
  const cta = document.createElement("div");
  cta.setAttribute("data-app-cta", "scroll");
  cta.style.cssText = `
    width: 100%;
    max-width: 720px;
    margin: 24px auto 24px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 14px;
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: system-ui;
    box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  `;

  cta.innerHTML = `
    <span style="font-size:14px;font-weight:800;line-height:1.2;">
      700만 골퍼의 필수 골프 레슨 앱, 스승님
    </span>
    <button style="
      background:#2563eb;
      color:#fff;
      border:none;
      padding:10px 16px;
      border-radius:10px;
      font-weight:900;
      cursor:pointer;
      white-space:nowrap;
    ">
      앱 설치
    </button>
  `;

  cta.querySelector("button").onclick = function () {
    if (ua.includes("android")) location.href = play;
    else if (ua.includes("iphone") || ua.includes("ipad")) location.href = appstore;
    else alert("모바일에서 앱 설치가 가능합니다.");
  };

  // ✅ 페이지 맨 아래에 붙이기 (스크롤 따라 이동)
  // footer가 있으면 footer 위에, 없으면 body 끝에
  const footer = document.querySelector("footer");
  if (footer && footer.parentNode) {
    footer.parentNode.insertBefore(cta, footer);
  } else {
    document.body.appendChild(cta);
  }
})();
