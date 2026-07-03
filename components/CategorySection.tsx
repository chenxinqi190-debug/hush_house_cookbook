"use client";

import { Language } from "@/data/i18n";
import { Recipe } from "@/types/recipe";

interface CategorySectionProps {
  label: string;
  recipes: Recipe[];
  isOpen: boolean;
  onToggle: () => void;
  selectedRecipeId: string | null;
  onSelectRecipe: (id: string) => void;
  language: Language;
}

export default function CategorySection({
  label,
  recipes,
  isOpen,
  onToggle,
  selectedRecipeId,
  onSelectRecipe,
  language,
}: CategorySectionProps) {
  return (
    <div className="border-b border-ink/30">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-2 py-5 text-left"
      >
        <span className="text-lg tracking-[0.15em] uppercase text-ink">
          {label}
        </span>
        <span aria-hidden="true" className="text-ink/40">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 pl-3">
          {recipes.length > 0 ? (
            <ul className="space-y-3">
              {recipes.map((recipe) => {
                const isSelected = recipe.id === selectedRecipeId;
                return (
                  <li key={recipe.id}>
                    <button
                      type="button"
                      onClick={() => onSelectRecipe(recipe.id)}
                      aria-current={isSelected ? "true" : undefined}
                      className={`block w-full text-left text-lg leading-relaxed ${
                        isSelected
                          ? "text-ink"
                          : "text-ink/60 hover:text-ink"
                      }`}
                    >
                      {recipe.displayName[language]}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-xs italic text-ink/40">
              No recipes archived here yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
