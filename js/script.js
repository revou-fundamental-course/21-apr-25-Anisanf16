// Fungsi untuk mengonversi suhu
function convertTemperature() {
  // Ambil nilai suhu dari input
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  let result;

  // Validasi input: jika bukan angka
  if (isNaN(inputTemp)) {
    document.getElementById("result").innerText = "Masukkan suhu yang valid.";
    return;
  }

  // Konversi suhu ke Celsius terlebih dahulu
  let tempInCelsius;
  switch (fromUnit) {
    case "celsius":
      tempInCelsius = inputTemp;
      break;
    case "fahrenheit":
      tempInCelsius = (inputTemp - 32) * 5 / 9;
      break;
  }

  // Konversi dari Celsius ke satuan tujuan
  switch (toUnit) {
    case "celsius":
      result = tempInCelsius;
      break;
    case "fahrenheit":
      result = (tempInCelsius * 9 / 5) + 32;
      break;
  }

  // Tampilkan hasil konversi
  document.getElementById("result").innerText =
    `${inputTemp} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Fungsi untuk mereset form input
function resetForm() {
  document.getElementById("inputTemp").value = "";
  document.getElementById("fromUnit").value = "celsius";
  document.getElementById("toUnit").value = "celsius";
  document.getElementById("result").innerText = "";
}

// Tambahkan event listener setelah halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  // Saat tombol konversi ditekan
  document.getElementById("convertBtn").addEventListener("click", convertTemperature);
  // Saat tombol reset ditekan
  document.getElementById("resetBtn").addEventListener("click", resetForm);
});
