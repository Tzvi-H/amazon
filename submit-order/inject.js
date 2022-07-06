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
    setTimeout(
      () =>
        document
          .querySelector(
            "#submitOrderButtonId > span:nth-child(1) > input:nth-child(1)"
          )
          .click(),
      7000
    );
  })();
})();
