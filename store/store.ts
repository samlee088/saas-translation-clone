import { create } from "zustand";
import { Subscription } from "@/types/Subscriptions";

export type LanguagesSupported = "en" | "es" | "ko" | "ja";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  es: "Spanish",
  ko: "Korean",
  ja: "Japanese",
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
