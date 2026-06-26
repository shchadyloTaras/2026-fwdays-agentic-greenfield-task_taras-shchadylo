export const uk = {
  shell: {
    brand: {
      logoAlt: "Надворі — Weather Explorer",
      systemLabel: "Weather Explorer",
    },
    header: {
      clockSlotLabel: "Місце для локального часу",
    },
    hero: {
      eyebrow: "План на вихідні",
      title: "Оберіть місто, а погоду розберемо спокійно",
      description:
        "Надворі допоможе оцінити, чи варто їхати за місто: спершу місце, далі прогноз, комфорт і карта.",
      activeLocationTitle: "Місце вже в адресі",
      activeLocationDescription:
        "Прогноз для цього місця з'явиться після наступного кроку розробки.",
    },
    search: {
      label: "Пошук міста",
      placeholder: "Пошук міста",
      helper:
        "Пошук під'єднаємо в наступній можливості. Зараз це безпечне місце для майбутнього вводу.",
      unavailable: "Пошук ще не активний",
    },
    theme: {
      toggleToDark: "Увімкнути темну тему",
      toggleToLight: "Увімкнути світлу тему",
      darkLabel: "Темна тема",
      lightLabel: "Світла тема",
    },
    slots: {
      forecast: "Місце для прогнозу",
      map: "Місце для мапи",
      rail: "Місце для пошуку й деталей",
    },
    footer: {
      prefix: "Дані погоди",
      weatherProvider: "Open-Meteo",
      mapPrefix: "мапа",
      mapProvider: "OpenStreetMap",
    },
  },
} as const;

type WidenLiterals<T> = T extends string
  ? string
  : { readonly [K in keyof T]: WidenLiterals<T[K]> };

export type Messages = WidenLiterals<typeof uk>;
