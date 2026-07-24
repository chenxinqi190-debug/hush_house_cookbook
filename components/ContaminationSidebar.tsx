"use client";

import ContaminationCategorySection from "./ContaminationCategorySection";
import { Language, translations } from "@/data/i18n";
import { Contamination } from "@/data/contaminations";

interface ContaminationSidebarProps {
  contaminations: Contamination[];
  selectedContaminationId: string | null;
  onSelectContamination: (id: string) => void;
  language: Language;
}

const CATEGORY_ORDER = [
  "corruption",
  "curse",
  "infestation",
  "theoplasmic",
];

export default function ContaminationSidebar({
  contaminations,
  selectedContaminationId,
  onSelectContamination,
  language,
}: ContaminationSidebarProps) {
  const t = translations[language];

  return (
    <div className="flex h-full flex-col">
      <div className="px-4 pt-6 pb-6 md:pt-10 md:pb-8">
        <h1 className="text-4xl tracking-[0.1em] text-ink md:text-5xl">
          {t.contaminationTitle}
        </h1>
      </div>

      <nav className="min-h-0 flex-1 overflow-y-auto px-2">
        {CATEGORY_ORDER.map((category) => (
          <ContaminationCategorySection
            key={category}
            label={
              t.contaminationCategories[
                category as keyof typeof t.contaminationCategories
              ] ?? category
            }
            contaminations={contaminations.filter(
              (contamination) => contamination.type === category
            )}
            selectedContaminationId={selectedContaminationId}
            onSelectContamination={onSelectContamination}
            language={language}
          />
        ))}
      </nav>
    </div>
  );
}