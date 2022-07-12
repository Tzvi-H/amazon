(function () {
  (() => {
    document
      .querySelector(
        "#orderSummaryPrimaryActionBtn > span:nth-child(1) > input:nth-child(1)"
      )
      .click();
    setTimeout(
      () =>
        document
          .querySelector(
            "#orderSummaryPrimaryActionBtn > span:nth-child(1) > input:nth-child(1)"
          )
          .click(),
      3000
    );
    setTimeout(() => {
      const freeShippingInput = document.querySelector(
        ".shipping-speeds input"
      );
      if (freeShippingInput.checked) {
        clickSubmit();
      } else {
        document.querySelector(".shipping-speed > input").click();
        setTimeout(clickSubmit, 4000);
      }
    }, 7000);
  })();
})();

const clickSubmit = () =>
  document
    .querySelector(
      "#submitOrderButtonId > span:nth-child(1) > input:nth-child(1)"
    )
    .click();
