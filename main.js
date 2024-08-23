let cities = document.getElementById('cities');
let dateContainer = document.getElementById('date-container');
let hijriDateContainer = document.getElementById('hijri-date-container');
let fajrContainer = document.getElementById('fajr-container');
let dhuhrContainer = document.getElementById('dhuhr-container');
let asrContainer = document.getElementById('asr-container');
let maghribContainer = document.getElementById('maghrib-container');
let ishaContainer = document.getElementById('isha-container');

window.onload = () => {
  getPrayerTimes();
}

cities.addEventListener('change', () => {
  getPrayerTimes(cities.value);
})

function getPrayerTimes(city = 'city=Cairo&country=Egypt') {
  axios.get(`http://api.aladhan.com/v1/timingsByCity?${city}&method=8`)
    .then((response) => {
      let done = response.data;
      let prayerTimes = done.data.timings;
      
      // Update date
      dateContainer.querySelector('#date').textContent = `${done.data.date.readable}`;
      
      // Update Hijri date
      hijriDateContainer.querySelector('#hijri-date').textContent = `${done.data.date.hijri.date}`;
      hijriDateContainer.querySelector('#hijri-month-ar-en').textContent = `${done.data.date.hijri.month.en} | ${done.data.date.hijri.month.ar}`;
      
      // Update prayer times
      fajrContainer.querySelector('#fajr-time').textContent = prayerTimes.Fajr;
      dhuhrContainer.querySelector('#dhuhr-time').textContent = prayerTimes.Dhuhr;
      asrContainer.querySelector('#asr-time').textContent = prayerTimes.Asr;
      maghribContainer.querySelector('#maghrib-time').textContent = prayerTimes.Maghrib;
      ishaContainer.querySelector('#isha-time').textContent = prayerTimes.Isha;
    })
    .catch((error) => {
      console.error('Error fetching prayer times:', error);
    });
}



document.getElementById('cities').addEventListener('change', function () {
    const prayerContainers = document.querySelectorAll('.prayer-container');

    // Remove active class to trigger the fade-out effect
    prayerContainers.forEach((container) => {
        container.classList.remove('active');
    });

    // Update prayers after a slight delay to allow the fade-out
    setTimeout(() => {
        updatePrayers(); // This should be your function to update the prayers

        // Add active class to trigger the fade-slide-in effect
        prayerContainers.forEach((container) => {
            container.classList.add('active');
        });
    }, 300); // Delay should match the fade-slide-out animation duration
});

function updatePrayers() {
    // Your logic to update the prayer times when the city changes
    // Placeholder example:
    console.log('Updating prayers based on the selected city');
}
