import { useEffect, useState } from "react";
// Import des composants SVG (format 3x2 conseillé)
import { FR, GB, DE } from "country-flag-icons/react/3x2";

type LangKey = "fr" | "en" | "de";
type FlagIcon = React.ComponentType<any>;

const FLAGS: Record<LangKey, FlagIcon> = {
  fr: FR,
  en: GB,
  de: DE,
};

export default function LanguageSelect() {
  const [lang, setLang] = useState<LangKey>("fr");
  const Flag = FLAGS[lang];

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-500 px-2 py-1">
      <Flag title={lang} className="h-5 w-7 rounded" />
      <label htmlFor="lang" className="sr-only">
        Langue
      </label>
      <select
        id="lang"
        value={lang}
        onChange={(e) => setLang(e.target.value as LangKey)}
        className="bg-transparent outline-none appearance-none text-sm pl-5"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
}
