"use client";

import { Recipe, SERVES_LABELS } from "@/types/recipe";
import { items } from "@/data/items";
import { Language, translations } from "@/data/i18n";
import { useState } from "react";

interface RecipeDetailProps {
  recipe: Recipe | null;
  recipes: Recipe[];
  language: Language;
}
function hasCraftingRequires(recipe: Recipe) {
  return recipe.requires.some((method) => method.requires.length > 0);
}
function RequiresList({
  recipe,
  recipes,
  language,
  level = 0,
}: {
  recipe: Recipe;
  recipes: Recipe[];
  language: Language;
  level?: number;
}) {
  const t = translations[language];
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const iconClass =
  level === 0
    ? "max-h-20 max-w-20"
    : "max-h-12 max-w-12";

const textClass =
  level === 0
    ? "text-base"
    : "text-sm";

  return (
    <div className="mt-2 flex flex-wrap gap-4">
      {recipe.requires.map((method,index) => (
        <div
          key={method.id}
          className="relative min-w-[130px] border-r border-ink/10 pr-4 last:border-r-0"
        >
          {index < recipe.requires.length - 1 && (
  <div
    className="
      absolute
      -right-0
      top-1/2
      translate-x-1/2
      -translate-y-1/2
      flex
      flex-col
      items-center
      bg-parchment
      px-1
    "
  >
    <div className="h-2 border-l border-ink/10" />
        <span className="text-[10px] font-semibold text-ink/50 leading-none">
          OR
        </span>
        <div className="h-2 border-l border-ink/10" />
      </div>
    )}
          {method.requires.map((ingredientId) => {
            const item = items[ingredientId];
            const childRecipe = recipes.find((r) => r.id === ingredientId);
            const canExpandChildRecipe =
  childRecipe !== undefined && hasCraftingRequires(childRecipe);
            const isOpen = openIds.has(`${method.id}:${ingredientId}`);

            return (
              <div key={ingredientId} className="mb-4">
                <button
                  type="button"
                  disabled={!canExpandChildRecipe}
                  onClick={() => {
                    if (!canExpandChildRecipe) return;

                    const key = `${method.id}:${ingredientId}`;

                    setOpenIds((prev) => {
                      const next = new Set(prev);
                      if (next.has(key)) next.delete(key);
                      else next.add(key);
                      return next;
                    });
                  }}
                  className={`w-28 flex flex-col ${
  canExpandChildRecipe
    ? "cursor-pointer"
    : "cursor-default"
}`}
                >
                  <img
                    src={`/icons/${item.id}.png`}
                    alt={item.displayName[language]}
                    className={`mx-auto ${iconClass} object-contain`}
                  />
                  <span className={`mt-1 text-middle ${textClass}`}>{item.displayName[language]}</span>

                  {canExpandChildRecipe && (
                    <span className="mt-1 text-sm text-ink/60 hover:text-ink"
                    >
                      {isOpen ? t.closeRecipe : t.openRecipe}
                    </span>
                  )}
                </button>

                {canExpandChildRecipe && isOpen && (
                  <div className="mt-4 border-l border-ink/10 pl-6">
                    <RequiresList
                      recipe={childRecipe}
                      recipes={recipes}
                      language={language}
                      level={level + 1}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
export default function RecipeDetail({ recipe, recipes, language }: RecipeDetailProps) {
  const t = translations[language];
  if (!recipe) {
    return (
      <div className="flex h-full items-center justify-center pt-22 pl-4 pr-4">
        <p className="text-3xl italic text-ink/80">
          {t.start}
        </p>
      </div>
    );
  }

  return (
    <article className="w-full max-w-6xl px-8 pt-6 pb-14 md:ml-20">
      {/* Category */}
      <p className="text-lg uppercase tracking-[0.2em] text-ink/80">
        {recipe.serves
  .map((serves) => t.categories[serves as keyof typeof t.categories] ?? serves)
  .join(" / ")}
      </p>

      {/* Recipe title */}
      <h2 className="mt-2 text-4xl leading-snug text-ink">
        {recipe.displayName[language]}
      </h2>

      {/*
        Fixed 200x200 image area. object-contain + centering means the
        whole image is always visible regardless of its aspect ratio,
        never cropped. To use a real asset later, drop an
        <img src={...recipe.icon} className="max-h-full max-w-full object-contain" />
        inside this same container — the sizing/centering already matches
        the spec, nothing else needs to change.
      */}
      <div className="mt-6 flex h-[150px] w-[150px] items-center justify-center">
        <img
        src={`/icons/${recipe.icon}`}
        alt={recipe.displayName[language]}
        className="max-h-full max-w-full object-contain"
  />
      </div>

      {/* Description */}
      <p className="mt-12 text-lg leading-relaxed text-ink">{recipe.description[language]}</p>

      {/* Principles */}
      <section className="mt-12">
        <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80">
          {t.principles}
        </h3>
        {recipe.principles.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-3">
            {[...recipe.principles]
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((principle) => ( 
              <div
              key={principle.id}
              className="flex items-center gap-1"
              >
                 <img
                 src={`/icons/principles/${principle.id}.png`}
                 alt={principle.id}
                 className="max-h-6 max-w-6 object-contain"
                 />

                 {(principle.amount ?? 1) > 1&& (
                  <span className="text-base text-in">
                    {principle.amount}
                  </span>
                 )}
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm italic text-ink/40">None.</p>
        )}
      </section>

      {/* Requires */}
      <section className="mt-12">
        <h3 className="text-2xl uppercase tracking-[0.2em] text-ink/80 mb-4">
          {t.requires}
        </h3>
        {recipe.requires.length > 0 ? (
          <RequiresList
    recipe={recipe}
    recipes={recipes}
    language={language}
  />
) : (
  <p className="mt-2 text-lg italic text-ink">
    {t.noRequires}</p>
        )}
      </section>
      {/* Note */}
      {recipe.note && (
        <section className="mt-6">
              {recipe.note[language].map((line, index) => (
      <p
        key={index}
        className="text-base italic text-ink/60 leading-relaxed"
      >
        {line}
      </p>
    ))}
        </section>
      )}
    </article>
  );
}
