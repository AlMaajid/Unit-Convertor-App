const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');
const meterEl = document.getElementById('meter-el');
const feetEl = document.getElementById('feet-el');
const literEl = document.getElementById('liter-el');
const gallonEl = document.getElementById('gallon-el');
const kiloEl = document.getElementById('kilo-el');
const poundEl = document.getElementById('pound-el');
const hourEl = document.getElementById('hour-el');
const dayEl = document.getElementById('day-el');


convertBtn.addEventListener('click', function () {

  meterEl.textContent = `${inputEl.value} Meters = ${(inputEl.value * 3.281).toFixed(3)} Feet`;
  feetEl.textContent = `${inputEl.value} Feet = ${(inputEl.value * 0.3048).toFixed(3)} Meters`;
  literEl.textContent = `${inputEl.value} Liters = ${(inputEl.value / 3.785
  ).toFixed(3)} Gallons`;
  gallonEl.textContent = `${inputEl.value} Gallons = ${(inputEl.value * 3.785).toFixed(3)} Liters`;
  kiloEl.textContent = `${inputEl.value} Kilos = ${(inputEl.value * 2.205
  ).toFixed(3)} Pounds`
  poundEl.textContent = `${inputEl.value} Pounds = ${(inputEl.value / 2.205).toFixed(3)} Kilos`
  hourEl.textContent = `${inputEl.value} Hours  = ${(inputEl.value / 24).toFixed(1)} Days`;
  dayEl.textContent = `${inputEl.value} Days = ${(inputEl.value * 24
  ).toFixed(1)} Hours`
  inputEl.value = ''
})

