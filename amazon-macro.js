// The following code does the following
//  - updates the quantity
//  - "clicks" the add to cart button
//  - waits a few seconds and "clicks" the no warranty button if it shows up
(() => {
  document.querySelector("#quantity").value = "2"; // this controls how much quantity to select
  document.querySelector("#add-to-cart-button").click();
  setTimeout(
    () => {
      const input = document.querySelector(
        'input[aria-labelledby="attachSiNoCoverage-announce"]'
      );
      input && input.click();
    },
    3000 // this controls how many seconds to wait from when you enter the code until the the "no warranty" button is clicked, (1000 equals 1 second)
  );
})();

// The following will "click" the checkout button
(() => {
  const input = document.querySelector(
    'input[aria-labelledby="attach-sidesheet-checkout-button-announce"]'
  );
  (input && input.click()) ||
    document
      .querySelector('input[data-feature-id="proceed-to-checkout-action"]')
      .click();
})();
