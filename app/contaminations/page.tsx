"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useEffect, useState } from "react";
import { contaminations as contaminationData } from "@/data/contaminations";
import MobileDrawer from "@/components/MobileDrawer";
import { Language, translations } from "@/data/i18n";
import Link from "next/link";

import ContaminationSidebar from "@/components/ContaminationSidebar";
import ContaminationDetail from "@/components/ContaminationDetail";

export default function ContaminationsPage() {
  const [isMounted, setIsMounted] = useState(false);

  const contaminations = contaminationData;
  const [selectedContaminationId, setSelectedContaminationId] =
    useState<string | null>(null);

  const [language, setLanguage] = useState<Language>("en");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    setIsMounted(true);

    const savedLanguage = localStorage.getItem("language") as Language | null;
    const savedContaminationId = localStorage.getItem(
      "selectedContaminationId"
    );

    if (savedLanguage === "en" || savedLanguage === "zh") {
      setLanguage(savedLanguage);
    }

    if (savedContaminationId) {
      setSelectedContaminationId(savedContaminationId);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem("language", language);
  }, [language, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    if (selectedContaminationId) {
      localStorage.setItem(
        "selectedContaminationId",
        selectedContaminationId
      );
    } else {
      localStorage.removeItem("selectedContaminationId");
    }
  }, [selectedContaminationId, isMounted]);

  const selectedContamination =
    contaminations.find(
      (contamination) =>
        contamination.id === selectedContaminationId
    ) ?? null;

  function handleSelectContamination(id: string) {
    setSelectedContaminationId(id);
    setIsDrawerOpen(false);
  }

  const sidebarProps = {
    contaminations,
    selectedContaminationId,
    onSelectContamination: handleSelectContamination,
    language,
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`${
        language === "zh" ? "font-zh" : "font-en"
      } bg-parchment flex h-screen overflow-hidden text-ink`}
    >
      {/* Desktop sidebar */}
      <aside className="hidden md:block md:w-[400px] md:flex-shrink-0 border-r border-ink/10">
        <ContaminationSidebar {...sidebarProps} />
      </aside>

      {/* Mobile drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        language={language}
      >
        <ContaminationSidebar {...sidebarProps} />
      </MobileDrawer>

      {/* Detail panel */}
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden flex items-center gap-3 border-b border-ink/10 p-3">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open contamination list"
            className="rounded-md border border-ink/20 px-3 py-1 text-sm text-ink/80"
          >
            ☰ Contaminations
          </button>

          <span className="text-sm text-ink/70">
            {selectedContamination
              ? selectedContamination.name[language]
              : "Contamination"}
          </span>
        </div>

        <div className="flex items-center justify-end gap-3 px-8 pt-4">
          <LanguageSwitcher
            language={language}
            onChange={setLanguage}
          />

          <Link
            href="/about"
            className="text-lg text-ink/80 transition-colors hover:text-ink"
          >
            {t.about}
          </Link>
        </div>

        <ContaminationDetail
          contamination={selectedContamination}
          language={language}
        />
      </main>
    </div>
  );
}