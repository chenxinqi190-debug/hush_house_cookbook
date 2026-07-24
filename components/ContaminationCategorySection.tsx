import { Language } from "@/data/i18n";
import { Contamination } from "@/data/contaminations";

interface ContaminationCategorySectionProps {
  label: string;
  contaminations: Contamination[];
  selectedContaminationId: string | null;
  onSelectContamination: (id: string) => void;
  language: Language;
}

export default function ContaminationCategorySection({
  label,
  contaminations,
  selectedContaminationId,
  onSelectContamination,
  language,
}: ContaminationCategorySectionProps) {
  return (
    <div className="border-b border-ink/30">
      <div className="px-2 pt-5 pb-3">
        <span className="text-lg tracking-[0.15em] uppercase text-ink">
          {label}
        </span>
      </div>

      <div className="pb-5 pl-3">
        {contaminations.length > 0 ? (
          <ul className="space-y-3">
            {contaminations.map((contamination) => {
              const isSelected =
                contamination.id === selectedContaminationId;

              return (
                <li key={contamination.id}>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectContamination(contamination.id)
                    }
                    aria-current={isSelected ? "true" : undefined}
                    className={`block w-full text-left text-lg leading-relaxed ${
                      isSelected
                        ? "text-ink"
                        : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {contamination.name[language]}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-xs italic text-ink/40">
            No contaminations archived here yet.
          </p>
        )}
      </div>
    </div>
  );
}