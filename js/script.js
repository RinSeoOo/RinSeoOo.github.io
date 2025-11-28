if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// 이미지 클릭 → 모달 열기
$("#profile-image").on("click", function () {
  $("#modal-overlay").css("display", "flex");
});

// 닫기 버튼
$("#modal-close").on("click", function () {
  $("#modal-overlay").css("display", "none");
});

// 오버레이 클릭해도 닫기
$("#modal-overlay").on("click", function (e) {
  if (e.target.id === "modal-overlay") {
    $("#modal-overlay").css("display", "none");
  }
});
