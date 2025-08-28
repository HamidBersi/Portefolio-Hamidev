import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FR, GB, DE } from "country-flag-icons/react/3x2";

type LangKey = "fr" | "en" | "de";
type FlagIcon = React.ComponentType<any>;

const FLAGS: Record<LangKey, FlagIcon> = {
  fr: FR,
  en: GB,
  de: DE,
};

export default function LanguageButton() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<LangKey>("fr");
  const Flag = FLAGS[lang];

  // Initialiser avec la langue d'i18next
  useEffect(() => {
    const currentLang = i18n.language as LangKey;
    setLang(currentLang);
  }, [i18n.language]);

  // Changer la langue quand l'utilisateur sélectionne
  const handleLanguageChange = (newLang: LangKey) => {
    setLang(newLang);
    i18n.changeLanguage(newLang); // Change la langue d'i18next
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-500 px-2 py-1">
      <Flag title={lang} className="h-5 w-7 rounded" />
      <label htmlFor="lang" className="sr-only">
        Langue
      </label>
      <select
        id="lang"
        value={lang}
        onChange={(e) => handleLanguageChange(e.target.value as LangKey)}
        className="bg-transparent outline-none appearance-none text-sm pl-3"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
}
