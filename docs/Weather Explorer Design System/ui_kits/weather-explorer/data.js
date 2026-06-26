// Mock data for the Надворі UI kit. Stands in for Open-Meteo responses.
// Comfort scores + Ukrainian rationale mirror lib/scoring/comfort.ts (FR-COMFORT).

window.NADVORI_DATA = (function () {
  const UA = 'Україна';

  // weekday short labels (uk)
  const WD = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  // Build a 7-day series starting "today". Each day: condition, hi, lo,
  // precip %, wind, comfort, rationale.
  function mkDays(seed) {
    return seed.map((s, i) => ({
      weekday: WD[(new Date().getDay() + i) % 7],
      condition: s.c,
      night: false,
      hi: s.hi,
      lo: s.lo,
      precip: s.p,
      wind: s.w + ' км/год',
      comfort: s.k,
      rationale: s.r,
    }));
  }

  const cities = {
    lviv: {
      id: 'lviv', name: 'Львів', region: 'Львівська область', country: UA, flag: '🇺🇦',
      lat: 49.8397, lon: 24.0297, tz: 'Europe/Kyiv',
      sunrise: '05:12', sunset: '21:18',
      now: { temp: 22, condition: 'clear', feels: 23 },
      days: mkDays([
        { c: 'clear',  hi: 24, lo: 14, p: 5,  w: 9,  k: 84, r: 'Тепло, без дощу, легкий вітер' },
        { c: 'clear',  hi: 25, lo: 15, p: 8,  w: 11, k: 82, r: 'Сонячно і комфортно для прогулянки' },
        { c: 'partly', hi: 22, lo: 13, p: 18, w: 12, k: 71, r: 'Мінлива хмарність, загалом приємно' },
        { c: 'partly', hi: 21, lo: 13, p: 24, w: 14, k: 66, r: 'Подекуди хмарно, але сухо' },
        { c: 'rain',   hi: 18, lo: 12, p: 68, w: 19, k: 42, r: 'Дощ після обіду, візьміть парасолю' },
        { c: 'rain',   hi: 16, lo: 11, p: 78, w: 23, k: 33, r: 'Краще вдома — мокро і вітряно' },
        { c: 'cloudy', hi: 19, lo: 12, p: 35, w: 15, k: 58, r: 'Хмарно, прохолодно, без опадів' },
      ]),
      hourly: [18,17,17,16,16,17,19,21,23,24,25,25,24,23,22,21,20,19,18,18,17,17,16,16],
    },
    kyiv: {
      id: 'kyiv', name: 'Київ', region: 'Київська область', country: UA, flag: '🇺🇦',
      lat: 50.4501, lon: 30.5234, tz: 'Europe/Kyiv',
      sunrise: '04:58', sunset: '21:02',
      now: { temp: 26, condition: 'partly', feels: 27 },
      days: mkDays([
        { c: 'partly', hi: 27, lo: 17, p: 12, w: 13, k: 74, r: 'Тепло, мінлива хмарність' },
        { c: 'clear',  hi: 29, lo: 18, p: 6,  w: 10, k: 79, r: 'Сонячно, трохи спекотно опівдні' },
        { c: 'storm',  hi: 24, lo: 16, p: 64, w: 22, k: 40, r: 'Можлива гроза ввечері' },
        { c: 'cloudy', hi: 23, lo: 15, p: 30, w: 14, k: 60, r: 'Хмарно, комфортна температура' },
        { c: 'clear',  hi: 26, lo: 16, p: 8,  w: 11, k: 80, r: 'Ясно і сухо, гарний день' },
        { c: 'clear',  hi: 28, lo: 17, p: 5,  w: 9,  k: 81, r: 'Сонячно, ідеально для парку' },
        { c: 'partly', hi: 25, lo: 16, p: 20, w: 13, k: 70, r: 'Подекуди хмарно, переважно сухо' },
      ]),
      hourly: [20,19,19,18,18,20,22,24,26,27,28,29,28,27,26,25,24,23,22,21,20,20,19,19],
    },
    odesa: {
      id: 'odesa', name: 'Одеса', region: 'Одеська область', country: UA, flag: '🇺🇦',
      lat: 46.4825, lon: 30.7233, tz: 'Europe/Kyiv',
      sunrise: '05:04', sunset: '20:42',
      now: { temp: 28, condition: 'clear', feels: 30 },
      days: mkDays([
        { c: 'clear',  hi: 29, lo: 20, p: 4,  w: 16, k: 78, r: 'Сонячно, свіжий бриз із моря' },
        { c: 'clear',  hi: 30, lo: 21, p: 3,  w: 18, k: 76, r: 'Спекотно, але вітер освіжає' },
        { c: 'partly', hi: 28, lo: 20, p: 14, w: 17, k: 75, r: 'Мінлива хмарність біля узбережжя' },
        { c: 'partly', hi: 27, lo: 19, p: 22, w: 19, k: 69, r: 'Подекуди хмарно, тепло' },
        { c: 'clear',  hi: 29, lo: 20, p: 6,  w: 15, k: 80, r: 'Ясно, гарно для пляжу' },
        { c: 'clear',  hi: 31, lo: 22, p: 5,  w: 14, k: 73, r: 'Сонячно і спекотно опівдні' },
        { c: 'cloudy', hi: 26, lo: 19, p: 34, w: 20, k: 62, r: 'Хмарно і вітряно, без дощу' },
      ]),
      hourly: [22,21,21,21,22,23,25,27,28,29,30,30,30,29,28,27,26,25,24,23,23,22,22,22],
    },
  };

  // Search index (geocoding suggestions)
  const index = [
    cities.lviv, cities.kyiv, cities.odesa,
    { id: 'uzh', name: 'Ужгород', region: 'Закарпатська область', country: UA, flag: '🇺🇦' },
    { id: 'kha', name: 'Харків', region: 'Харківська область', country: UA, flag: '🇺🇦' },
    { id: 'ivf', name: 'Івано-Франківськ', region: 'Івано-Франківська область', country: UA, flag: '🇺🇦' },
  ];

  function search(q) {
    const s = (q || '').trim().toLowerCase();
    if (!s) return [];
    return index.filter((c) => c.name.toLowerCase().startsWith(s) || c.name.toLowerCase().includes(s));
  }

  // Deterministic Ukrainian weather jokes — picked by day-of-year, no APIs.
  const jokes = [
    'Синоптик — єдина професія, де можна помилятися щодня і не втратити роботу.',
    'Гарна новина: парасоля знайшлася. Погана: вже не потрібна.',
    'Найточніший прогноз — визирнути у вікно.',
    'Вересень не поспішає, і ми за ним.',
    'Хмари сьогодні працюють понаднормово.',
    'Вітер північний, настрій південний.',
  ];
  function jokeOfTheDay() {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const doy = Math.floor((new Date() - start) / 86400000);
    return jokes[doy % jokes.length];
  }

  // Weekend = next Sat + Sun from the 7-day window (indices 5,6 here for demo)
  function weekend(city) {
    const sat = city.days[5];
    const sun = city.days[6];
    const avg = Math.round((sat.comfort + sun.comfort) / 2);
    return { sat, sun, avg };
  }

  return { cities, index, search, jokeOfTheDay, weekend };
})();
