import type { Messages } from "./uk";

export const en = {
  shell: {
    brand: {
      logoAlt: "Nadvorі — Weather Explorer",
      systemLabel: "Weather Explorer",
    },
    header: {
      clockSlotLabel: "Local time slot",
    },
    hero: {
      eyebrow: "Weekend plan",
      title: "Choose a city and we will read the weather calmly",
      description:
        "Nadvorі helps decide whether a trip is worth taking: first the place, then forecast, comfort, and map.",
      activeLocationTitle: "The place is already in the address",
      activeLocationDescription:
        "Forecast for this place will appear after the next development step.",
    },
    search: {
      label: "City search",
      placeholder: "City search",
      helper:
        "Search will be connected in the next capability. For now this is a safe place for future input.",
      unavailable: "Search is not active yet",
    },
    theme: {
      toggleToDark: "Turn on dark theme",
      toggleToLight: "Turn on light theme",
      darkLabel: "Dark theme",
      lightLabel: "Light theme",
    },
    slots: {
      forecast: "Forecast slot",
      map: "Map slot",
      rail: "Search and details slot",
    },
    footer: {
      prefix: "Weather data",
      weatherProvider: "Open-Meteo",
      mapPrefix: "map",
      mapProvider: "OpenStreetMap",
    },
  },
} satisfies Messages;
