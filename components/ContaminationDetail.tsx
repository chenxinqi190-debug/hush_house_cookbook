"use client";

import { Language, translations } from "@/data/i18n";
import { Contamination } from "@/data/contaminations";
import { skills } from "@/data/skills";

interface ContaminationDetailProps {
  contamination: Contamination | null;
  language: Language;
}

export default function ContaminationDetail({
  contamination,
  language,
}: ContaminationDetailProps) {
  const t = translations[language];

  if (!contamination) {
    return (
      <div className="flex justify-center px-4 pt-20 md:h-full md:items-center md:pt-0">
        <p className="whitespace-pre-line text-3xl italic text-ink/80">
          {t.contaminationStart}
        </p>
      </div>
    );
  }

  const recommendedSkills = contamination.recommendedSkills
    .map((id) => skills.find((skill) => skill.id === id))
    .filter((skill) => skill !== undefined);

  const alternativeSkills = contamination.alternativeSkills
    .map((id) => skills.find((skill) => skill.id === id))
    .filter((skill) => skill !== undefined);

  return (
    <article className="w-full max-w-6xl px-8 pt-6 pb-14 md:ml-20">
      {/* Type */}
      <p className="text-lg uppercase tracking-[0.2em] text-ink/80">
        {t.contaminationCategories[
          contamination.type as keyof typeof t.contaminationCategories
        ] ?? contamination.type}
      </p>

      {/* Title */}
      <h2 className="mt-2 text-4xl leading-snug text-ink">
        {contamination.name[language]}
      </h2>

      {/* Icon */}
      <div className="mt-8 flex items-start gap-6">
        <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center">
          <img
      src={contamination.image}
      alt={contamination.name[language]}
      className="max-h-full max-w-full object-contain"
    />
  </div>
<p className="whitespace-pre-line pt-1 text-lg leading-relaxed text-ink">
    {contamination.description[language]}
  </p>
</div>

      {/* Requires */}
      <section className="mt-12">
        <h3 className="mb-4 text-2xl uppercase tracking-[0.2em] text-ink/80">
          {t.solveRequires}
        </h3>

        <div className="flex items-center gap-2">
          <img
            src={`/icons/principles/${contamination.requires.id}.png`}
            alt={contamination.requires.id}
            className="max-h-8 max-w-8 object-contain"
          />

          <span className="text-lg text-ink">
            {contamination.requires.amount}
          </span>
        </div>
      </section>

      {/* Recommended skills */}
      <section className="mt-12">
        <h3 className="mb-4 text-2xl uppercase tracking-[0.2em] text-ink/80">
          {t.recommendedSkills}
        </h3>

        {recommendedSkills.length > 0 ? (
          <div className="flex flex-wrap gap-5">
            {recommendedSkills.map((skill) => (
              <div key={skill.id} className="w-36">
                <img
                  src={skill.image}
                  alt={skill.name[language]}
                  className="max-h-28 object-contain"
                />

                <p className="mt-2 text-lg">
                  {skill.name[language]}
                </p>

                <div className="mt-2 flex gap-2">
                  {skill.principles.map((principle) => (
                    <img
                      key={principle.id}
                      src={`/icons/principles/${principle.id}.png`}
                      alt={principle.id}
                      className="max-h-6 max-w-6 object-contain"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg italic text-ink/60">
            {t.noRecommendedSkill}
          </p>
        )}
      </section>

      {/* Alternative skills */}
      <section className="mt-12">
        <h3 className="mb-4 text-2xl uppercase tracking-[0.2em] text-ink/80">
          {t.alternativeSkills}
        </h3>

        <div className="flex flex-wrap gap-5">
          {alternativeSkills.map((skill) => (
            <div key={skill.id} className="w-36">
              <img
                src={skill.image}
                alt={skill.name[language]}
                className="max-h-28 object-contain"
              />

              <p className="mt-2 text-lg">
                {skill.name[language]}
              </p>

              <div className="mt-2 flex gap-2">
                {skill.principles.map((principle) => (
                  <img
                    key={principle.id}
                    src={`/icons/principles/${principle.id}.png`}
                    alt={principle.id}
                    className="max-h-6 max-w-6 object-contain"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}