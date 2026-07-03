"use client";

import { useState } from "react";
import { Recipe, SERVES_LABELS } from "@/types/recipe";
import SearchBar from "./SearchBar";
import PrincipleFilter from "./PrincipleFilter";
import CategorySection from "./CategorySection";
import { Language, translations } from "@/data/i18n";

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  recipes: Recipe[]; // already search-filtered by the caller
  selectedRecipeId: string | null;
  onSelectRecipe: (id: string) => void;
  selectedPrincipleId: string | null;
  onSelectPrinciple: (id: string | null) => void;

  language: Language;
}

// Fixed display order for categories, independent of what happens to be
// present in the current dataset. New `serves` values that aren't listed
// here will still appear (falling back to their raw id as a label) —
// they're just appended after the known ones.

const CATEGORY_ORDER = [
  "beverage",
  "first_course",
  "main_course",
  "side_course",
  "pudding",
  "ingredients",
];

export default function Sidebar({
  searchQuery,
  onSearchChange,
  recipes,
  selectedRecipeId,
  onSelectRecipe,
  selectedPrincipleId,
  onSelectPrinciple,

  language,
}: SidebarProps) {
  const t = translations[language];
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set()
  );
  const isFiltering = 
searchQuery.trim() !== "" || selectedPrincipleId !== null; 

  function toggleCategory(category: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }

  const extraCategories = Array.from(
    new Set(recipes.flatMap((recipe) => recipe.serves))
  ).filter((serves) => !CATEGORY_ORDER.includes(serves));
  const orderedCategories: string[] = [
    ...CATEGORY_ORDER,
    ...extraCategories,
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-10 pb-20">
        <h1 className="text-5xl tracking-[0.1em] text-ink">{t.archiveTitle}</h1>
      </div>

      <SearchBar value={searchQuery} onChange={onSearchChange} language={language} />

      <PrincipleFilter
      selectedPrincipleId={selectedPrincipleId}
      onSelectPrinciple={onSelectPrinciple}
      />

      <div className="px-4 pb-6">
        <p className="text-sm text-ink/60">{t.filterTip}</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-2">
        {orderedCategories.map((category) => (
          <CategorySection
            key={category}
            label={t.categories[category as keyof typeof t.categories] ?? category}
            recipes={recipes.filter((r) => r.serves.includes(category))}
            isOpen={
              isFiltering
              ? recipes.some((r) => r.serves.includes(category))
              : openCategories.has(category)}
            onToggle={() => toggleCategory(category)}
            selectedRecipeId={selectedRecipeId}
            onSelectRecipe={onSelectRecipe}
            language={language}
          />
        ))}
      </nav>
    </div>
  );
}
