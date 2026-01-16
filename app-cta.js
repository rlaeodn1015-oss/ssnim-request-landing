(function () {
  const ua = navigator.userAgent.toLowerCase();

  const play =
    "https://play.google.com/store/apps/details?id=com.ssnim.lesson&pcampaignid=web_share";
  const appstore = "https://apps.apple.com/kr/app/스승님/id6743513759";

  function goStore() {
    if (ua.includes("android")) location.href = play;
    else if (ua.includes("iphone") || ua.includes("ipad")) location.href = appstore;
    else alert("모바일에서 앱 설치가 가능합니다.");
  }

  // ✅ 1) 상단 우측 CTA 영역(‘레슨 조건 적어보기’ 버튼이 들어있는 컨테이너) 찾기
  // 아래 후보 중 하나가 잡히게 해둠. 안 잡히면 selector만 1개 정확히 박으면 됨.
  const headerCtaWrap =
    document.querySelector('[data-header-cta]') ||
    document.querySelector(".header-cta") ||
    document.querySelector("header .cta") ||
    // "레슨 조건 적어보기" 버튼을 찾아서 그 부모를 컨테이너로 쓰는 fallback
    (function () {
      const btns = Array.from(document.querySelectorAll("button,a"));
      const targetBtn = btns.find((el) =>
        (el.textContent || "").includes("레슨 조건 적어보기")
      );
      return targetBtn ? targetBtn.parentElement : null;
    })();

  if (!headerCtaWrap) return; // 컨테이너 못 찾으면 조용히 종료

  // ✅ 2) 이미 추가된 경우 중복 방지
  if (headerCtaWrap.querySelector('[data-app-download-btn="1"]')) return;

  // ✅ 3) 앱 다운로드 버튼 생성 (기존 스타일과 어울리게 최소 스타일만)
  const appBtn = document.createElement("button");
  appBtn.type = "button";
  appBtn.setAttribute("data-app-download-btn", "1");
  appBtn.textContent = "앱 다운로드";
  appBtn.style.cssText = `
    border: 1px solid rgba(0,0,0,0.08);
    background: #fff;
    color: #111;
    padding: 10px 14px;
    border-radius: 999px;
    font-weight: 800;
    cursor: pointer;
    white-space: nowrap;
  `;
  appBtn.addEventListener("click", goStore);

  // ✅ 4) 배치: ‘레슨 조건 적어보기’ 옆에 붙이기
  headerCtaWrap.style.display = "flex";
  headerCtaWrap.style.gap = "10px";
  headerCtaWrap.style.alignItems = "center";

  headerCtaWrap.appendChild(appBtn);
})();
