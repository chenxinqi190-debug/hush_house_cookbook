export interface RecipeAspect {
  id: string;
  amount?: number;
}
export interface RecipeMethod {
  id: string;
  requires: string[];
}
export interface Recipe {
  id: string; // internal id, never displayed
  displayName: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  requires: RecipeMethod[]; // ids of required ingredients
  principles: RecipeAspect[]; // aspect ids, rendered as icons later
  serves: string[]; // beverages, first_course, main_course, side_course, pudding
  type: string[]; // internal type, not displayed
  icon: string; // image asset id
  note?: {
    en: string[];
    zh: string[];
  }
}

// Human-readable labels for `serves` values, used only for display.
// Any `serves` value not found here just falls back to the raw string,
// so new values from a future data source still render sensibly.
export const SERVES_LABELS: Record<string, string> = {
  beverage: "Beverage",
  intoxicant: "Intoxicant",
  first_course: "First Course",
  main_course: "Main Course",
  side_dish: "Side Dish",
  pudding: "Pudding",
};
