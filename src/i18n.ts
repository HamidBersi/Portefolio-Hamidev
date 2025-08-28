import React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
  fr: {
    translation: {
      header: { 
        title: "Hamid BERSI", 
        subtitle: "Développeur Fullstack" 
      },
      nav: { 
        home: "Accueil", 
        about: "À propos", 
        projects: "Projets",
        contact: "Contact"
      },
      buttons: { 
        contact: "Contactez-moi",
        projects: "Mes Projets"
      },
      main: {
        hello: "Bonjour, Je suis",
        description: "Passionné par le développement web et en constante évolution dans mon apprentissage. J'aime créer des interfaces modernes, claires et fonctionnelles en explorant les dernières technologies pour donner vie à des projets uniques."
      },
      about: {
        title: "À Propos de moi",
        description: "Je suis un développeur FullStack récemment diplômé, passionné par la création de solutions numériques accessibles et performantes. J'ai récemment terminé mon stage chez HRnov.ai, une expérience enrichissante qui m'a permis de renforcer mes compétences techniques et de découvrir de nouvelles approches de développement.",
        technicalSkills: "Compétences techniques",
        softSkills: "Compétences douces",
        frontend: "Front-end",
        backend: "Back-end",
        design: "Design",
        skills: {
          teamwork: {
            title: "Travail d'équipe",
            description: "Collaboration efficace dans les projets de groupe"
          },
          learning: {
            title: "Apprentissage continu",
            description: "Passion pour l'apprentissage de nouvelles technologies"
          },
          creativity: {
            title: "Créativité",
            description: "Approche innovante pour résoudre les problèmes"
          },
          adaptability: {
            title: "Adaptabilité",
            description: "Capacité à s'adapter rapidement aux changements"
          }
        }
      },
      projects: {
        title: "Mes Projets",
        demo: "Demo",
        code: "Code"
      },
      contact: {
        title: "Travaillons ensemble ?",
        description: "Je suis disponible pour des projets freelance et des opportunités professionnelles. Parlons de votre projet !",
        form: {
          title: "Envoyez-moi un message",
          name: "Nom complet",
          namePlaceholder: "Votre nom complet",
          email: "Email",
          emailPlaceholder: "votre@email.com",
          message: "Message",
          messagePlaceholder: "Parlez-moi de votre projet...",
          send: "Envoyer le message",
          sending: "Envoi en cours...",
          success: "Message envoyé avec succès !",
          error: "Une erreur est survenue. Réessayez."
        }
      }
    }
  },
  en: {
    translation: {
      header: { 
        title: "Hamid BERSI", 
        subtitle: "Fullstack Developer" 
      },
      nav: { 
        home: "Home", 
        about: "About", 
        projects: "Projects",
        contact: "Contact"
      },
      buttons: { 
        contact: "Contact me",
        projects: "My Projects"
      },
      main: {
        hello: "Hello, I am",
        description: "Passionate about web development and constantly evolving in my learning. I love creating modern, clear and functional interfaces by exploring the latest technologies to bring unique projects to life."
      },
      about: {
        title: "About me",
        description: "I am a recently graduated FullStack developer, passionate about creating accessible and efficient digital solutions. I recently completed my internship at HRnov.ai, an enriching experience that allowed me to strengthen my technical skills and discover new development approaches.",
        technicalSkills: "Technical Skills",
        softSkills: "Soft Skills",
        frontend: "Front-end",
        backend: "Back-end",
        design: "Design",
        skills: {
          teamwork: {
            title: "Teamwork",
            description: "Effective collaboration in group projects"
          },
          learning: {
            title: "Continuous Learning",
            description: "Passion for learning new technologies"
          },
          creativity: {
            title: "Creativity",
            description: "Innovative approach to problem solving"
          },
          adaptability: {
            title: "Adaptability",
            description: "Ability to quickly adapt to changes"
          }
        }
      },
      projects: {
        title: "My Projects",
        demo: "Demo",
        code: "Code"
      },
      contact: {
        title: "Let's work together?",
        description: "I am available for freelance projects and professional opportunities. Let's talk about your project!",
        form: {
          title: "Send me a message",
          name: "Full name",
          namePlaceholder: "Your full name",
          email: "Email",
          emailPlaceholder: "your@email.com",
          message: "Message",
          messagePlaceholder: "Tell me about your project...",
          send: "Send message",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "An error occurred. Please try again."
        }
      }
    }
  },
  de: {
    translation: {
      header: { 
        title: "Hamid BERSI", 
        subtitle: "Fullstack-Entwickler" 
      },
      nav: { 
        home: "Startseite", 
        about: "Über mich", 
        projects: "Projekte",
        contact: "Kontakt"
      },
      buttons: { 
        contact: "Kontaktieren Sie mich",
        projects: "Meine Projekte"
      },
      main: {
        hello: "Hallo, ich bin",
        description: "Leidenschaftlich für Webentwicklung und ständig in meinem Lernen weiterentwickelnd. Ich liebe es, moderne, klare und funktionale Oberflächen zu erstellen, indem ich die neuesten Technologien erforsche."
      },
      about: {
        title: "Über mich",
        description: "Ich bin ein kürzlich graduierter FullStack-Entwickler, leidenschaftlich für die Erstellung zugänglicher und effizienter digitaler Lösungen. Ich habe kürzlich mein Praktikum bei HRnov.ai abgeschlossen, eine bereichernde Erfahrung, die es mir ermöglichte, meine technischen Fähigkeiten zu stärken.",
        technicalSkills: "Technische Fähigkeiten",
        softSkills: "Soft Skills",
        frontend: "Front-end",
        backend: "Back-end",
        design: "Design",
        skills: {
          teamwork: {
            title: "Teamarbeit",
            description: "Effektive Zusammenarbeit in Gruppenprojekten"
          },
          learning: {
            title: "Kontinuierliches Lernen",
            description: "Leidenschaft für das Erlernen neuer Technologien"
          },
          creativity: {
            title: "Kreativität",
            description: "Innovativer Ansatz zur Problemlösung"
          },
          adaptability: {
            title: "Anpassungsfähigkeit",
            description: "Fähigkeit, sich schnell an Veränderungen anzupassen"
          }
        }
      },
      projects: {
        title: "Meine Projekte",
        demo: "Demo",
        code: "Code"
      },
      contact: {
        title: "Lassen Sie uns zusammenarbeiten?",
        description: "Ich stehe für Freelance-Projekte und berufliche Möglichkeiten zur Verfügung. Lassen Sie uns über Ihr Projekt sprechen!",
        form: {
          title: "Senden Sie mir eine Nachricht",
          name: "Vollständiger Name",
          namePlaceholder: "Ihr vollständiger Name",
          email: "E-Mail",
          emailPlaceholder: "ihre@email.com",
          message: "Nachricht",
          messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt...",
          send: "Nachricht senden",
          sending: "Senden...",
          success: "Nachricht erfolgreich gesendet!",
          error: "Ein Fehler ist aufgetreten. Versuchen Sie es erneut."
        }
      }
    }
  }
} as const;

/* ---------- Types utiles (clés typées) ---------- */
type Lang = keyof typeof resources;
type Dict = (typeof resources)[Lang];

// Construit "a", "a.b", "a.b.c"… pour typer t("…")
type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;
type NestedKeyOf<T> = {
  [K in keyof T & string]: T[K] extends Record<string, any>
    ? K | Join<K, NestedKeyOf<T[K]>>
    : K;
}[keyof T & string];

type TKey = NestedKeyOf<Dict>;
type TParams = Record<string, string | number>;

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <K extends TKey>(key: K, params?: TParams) => string;
  LANGS: Lang[];
};

/* ---------- Contexte ---------- */
const I18nContext = createContext<I18nContextValue | null>(null);
const LANGS: Lang[] = ["fr", "en", "de"];

const detectInitialLang = (): Lang => {
  const saved = localStorage.getItem("lang") as Lang | null;
  if (saved && LANGS.includes(saved)) return saved;
  const n = (navigator.language || "fr").toLowerCase();
  if (n.startsWith("de")) return "de";
  if (n.startsWith("en")) return "en";
  return "fr";
};

const getByPath = <T extends object>(obj: T, path: string) =>
  path
    .split(".")
    .reduce<any>(
      (acc, k) => (acc?.[k] !== undefined ? acc[k] : undefined),
      obj
    );

const interpolate = (str: string, params: TParams = {}) =>
  str.replace(/{{\s*([\w.]+)\s*}}/g, (_, k) => String(params[k] ?? `{{${k}}}`));

/* ---------- Provider ---------- */
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang; // accessibilité/SEO
  }, [lang]);

  const dict = resources[lang].translation;

  const t = useMemo(() => {
    return <K extends TKey>(key: K, params?: TParams) => {
      const value = getByPath(dict, key as string);
      if (value === undefined) return key as string;
      return typeof value === "string"
        ? interpolate(value, params)
        : String(value);
    };
  }, [dict]);

  const value: I18nContextValue = useMemo(
    () => ({ lang, setLang, t, LANGS }),
    [lang, t]
  );

  return React.createElement(I18nContext.Provider, { value }, children);
}

/* ---------- Hook ---------- */
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("Wrap your app with <I18nProvider>.");
  return ctx;
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "fr",
    lng: "fr", // Langue par défaut explicite
    debug: true, // Pour voir les erreurs en console
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
