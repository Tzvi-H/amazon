(() => {
  document.querySelector("#quantity").value = "2";
  document.querySelector("#add-to-cart-button").click();
  setTimeout(
    () =>
      document
        .querySelector('input[aria-labelledby="attachSiNoCoverage-announce"]')
        .click(),
    2000
  );
  setTimeout(
    () =>
      document
        .querySelector(
          'input[aria-labelledby="attach-sidesheet-checkout-button-announce"]'
        )
        .click(),
    5000
  );
})();
