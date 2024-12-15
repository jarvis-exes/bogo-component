const totalElement = document.getElementById("total");
const radioButtons = document.querySelectorAll("input[name='unit']");

radioButtons.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    totalElement.textContent = `$${selectedValue} USD`;
  });
});
