"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useEffect, useMemo, useState } from "react";
import { recipes as recipeData } from "@/data/recipes";
import Sidebar from "@/components/Sidebar";
import MobileDrawer from "@/components/MobileDrawer";
import RecipeDetail from "@/components/RecipeDetail";
import { Language } from "@/data/i18n";

export default function Home() {
  // In this iteration the data source is the mock array. Later this can be
  // swapped for a fetch/query without changing anything below.
  const [isMounted, setIsMounted] = useState(false);
  const recipes = recipeData;
  const [selectedPrincipleId, setSelectedPrincipleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(
    null
  );
  const [language, setLanguage] = useState<Language>("en");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
  setIsMounted(true);

  const savedLanguage = localStorage.getItem("language") as Language | null;
  const savedRecipeId = localStorage.getItem("selectedRecipeId");
  const savedSearchQuery = localStorage.getItem("searchQuery");
  const savedPrincipleId = localStorage.getItem("selectedPrincipleId");

  if (savedLanguage === "en" || savedLanguage === "zh") setLanguage(savedLanguage);
  if (savedRecipeId) setSelectedRecipeId(savedRecipeId);
  if (savedSearchQuery) setSearchQuery(savedSearchQuery);
  if (savedPrincipleId) setSelectedPrincipleId(savedPrincipleId);
}, []);

  useEffect(() => {
     if (!isMounted) return;
  localStorage.setItem("language", language);
}, [language, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

  if (selectedRecipeId) {
    localStorage.setItem("selectedRecipeId", selectedRecipeId);
  } else {
    localStorage.removeItem("selectedRecipeId");
  }
}, [selectedRecipeId, isMounted]);

  useEffect(() => {
  if (!isMounted) return;
  localStorage.setItem("searchQuery", searchQuery);
}, [searchQuery, isMounted]);

useEffect(() => {
   if (!isMounted) return;

  if (selectedPrincipleId) {
    localStorage.setItem("selectedPrincipleId", selectedPrincipleId);
  } else {
    localStorage.removeItem("selectedPrincipleId");
  }
}, [selectedPrincipleId, isMounted]);

  // Category filtering now happens visually through the sidebar accordion
  // (only the relevant category needs opening), so the only filtering
  // done here is the free-text search.
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesSearch = 
      recipe.displayName[language]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
      const matchesPrinciple = 
      !selectedPrincipleId ||
      recipe.principles.some(
        (p) => p.id === selectedPrincipleId
      );
      return matchesSearch && matchesPrinciple;
    });
  }, [recipes, searchQuery, selectedPrincipleId, language]);

  const selectedRecipe =
    recipes.find((recipe) => recipe.id === selectedRecipeId) ?? null;

  function handleSelectRecipe(id: string) {
    setSelectedRecipeId(id);
    // On mobile, picking a recipe should close the drawer and reveal
    // the detail view, which is the primary mobile experience.
    setIsDrawerOpen(false);
  }

  const sidebarProps = {
    searchQuery,
    onSearchChange: setSearchQuery,
    recipes: filteredRecipes,
    selectedRecipeId,
    onSelectRecipe: handleSelectRecipe,
    selectedPrincipleId,
    onSelectPrinciple: setSelectedPrincipleId,
    language,
  };
if (!isMounted) {
  return null;
}
  return (
    <div className="bg-parchment flex h-screen overflow-hidden text-ink">
      {/* Desktop sidebar */}
      <aside className="hidden md:block md:w-[400px] md:flex-shrink-0 border-r border-ink/10">
        <Sidebar {...sidebarProps} />
      </aside>

      {/* Mobile slide-in drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Sidebar {...sidebarProps} />
      </MobileDrawer>

      {/* Right / primary detail panel */}
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden flex items-center gap-3 border-b border-ink/10 p-3">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open recipe list"
            className="rounded-md border border-ink/20 px-3 py-1 text-sm text-ink/80"
          >
            ☰ Recipes
          </button>
          <span className="text-sm text-ink/70">
            {selectedRecipe ? selectedRecipe.displayName[language] : "Hush House Cookbook"}
          </span>
        </div>
        <LanguageSwitcher
    language={language}
    onChange={setLanguage}
  />

        <RecipeDetail recipe={selectedRecipe} recipes={recipes} language={language} />
      </main>
    </div>
  );
}
