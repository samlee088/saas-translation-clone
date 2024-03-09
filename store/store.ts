import { create } from "zustand";
import { Subscription } from "@/types/Subscriptions";

export type LanguagesSupported = "en" | "es" | "ko" | "ja";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  es: "Spanish",
  ko: "Korean",
  ja: "Japanese",
};

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

const languages_in_free = 2;

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({ language }),
  getLanguages: (isPro: boolean) => {
    //If the user if pro, return all supported languages
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];

    //If not pro, return only the first two languages
    return Object.keys(LanguagesSupportedMap).slice(
      0,
      languages_in_free
    ) as LanguagesSupported[];
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    // No unsupported languages for "pro" users
    if (isPro) return [];
    //Exclude for first free languages
    return Object.keys(LanguagesSupportedMap).slice(
      languages_in_free
    ) as LanguagesSupported[];
  },
}));

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
