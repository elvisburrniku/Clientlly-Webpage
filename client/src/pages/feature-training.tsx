import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "HR & Ekipi", en: "HR & Team" },
  categoryColor: "bg-teal-500",
  title: { sq: "Trajnim & Kuize", en: "Training & Quizzes" },
  tagline: { sq: "Trajnoni ekipin tuaj drejtpërdrejt në platformë", en: "Train your team directly in the platform" },
  stat: { sq: "100% ekip i trajnuar", en: "100% trained team" },
  description: {
    sq: "Krijoni programe trajnimi me kuize, testime dhe certifikata dixhitale për çdo punonjës. Gjurmoni progresin e trajnimit dhe siguroni që ekipi juaj është gjithmonë i përgatitur. Materialet e trajnimit ruhen në platformë dhe janë të aksesueshme nga çdo pajisje.",
    en: "Create training programs with quizzes, tests and digital certificates for each employee. Track training progress and ensure your team is always prepared. Training materials are stored on the platform and accessible from any device.",
  },
  benefits: [
    { sq: "Kuize dhe testime interaktive", en: "Interactive quizzes and tests" },
    { sq: "Certifikata dixhitale pas kalimit të provimit", en: "Digital certificates after passing the test" },
    { sq: "Programe trajnimi me module të ndryshme", en: "Training programs with different modules" },
    { sq: "Gjurmim i progresit të çdo punonjësi", en: "Progress tracking for each employee" },
    { sq: "Material trajnimi: video, PDF, artikuj", en: "Training materials: video, PDF, articles" },
    { sq: "Raporte detajuara të trajnimit të ekipit", en: "Detailed team training reports" },
  ],
  workflow: [
    { step: "1", sq: "Krijoni programin e trajnimit me titull, përshkrim dhe modulet e nevojshme", en: "Create the training program with title, description and required modules" },
    { step: "2", sq: "Ngarkoni materialet: video, PDF, artikuj — dhe krijoni kuizet me pyetje", en: "Upload materials: video, PDF, articles — and create quizzes with questions" },
    { step: "3", sq: "Caktoni trajnimin te punonjësit ose ekipet specifike", en: "Assign the training to specific employees or teams" },
    { step: "4", sq: "Punonjësit studiojnë materialet dhe plotësojnë kuizet nga telefoni ose PC", en: "Employees study materials and complete quizzes from phone or PC" },
    { step: "5", sq: "Pas kalimit të provimit, certifikata dixhitale gjenerohet automatikisht", en: "After passing the test, the digital certificate is generated automatically" },
  ],
  capabilities: [
    { icon: "📝", title: { sq: "Kuize Interaktive", en: "Interactive Quizzes" }, desc: { sq: "Krijoni pyetje me zgjedhje, tekst ose pikë — me rezultate automatike", en: "Create multiple choice, text or point questions — with auto scoring" } },
    { icon: "🎓", title: { sq: "Certifikata Dixhitale", en: "Digital Certificates" }, desc: { sq: "Certifikata e personalizuar me logon tuaj gjenerohet pas kalimit të provimit", en: "Customized certificate with your logo generated after passing the test" } },
    { icon: "📹", title: { sq: "Material Multimediale", en: "Multimedia Materials" }, desc: { sq: "Ngarkoni video, PDF, artikuj dhe prezantime si material trajnimi", en: "Upload video, PDF, articles and presentations as training material" } },
    { icon: "📊", title: { sq: "Gjurmim Progresit", en: "Progress Tracking" }, desc: { sq: "Shikoni kush e ka përfunduar trajnimin, rezultatet dhe kohën", en: "See who completed training, results and time spent" } },
    { icon: "👥", title: { sq: "Caktim Ekipor", en: "Team Assignment" }, desc: { sq: "Caktoni trajnime specifike për departamente, pozita ose individë", en: "Assign specific training to departments, positions or individuals" } },
    { icon: "🔄", title: { sq: "Ritrajnim Automatik", en: "Auto Retraining" }, desc: { sq: "Caktoni afate skadimi dhe ritrajnim automatik kur certifikata skadon", en: "Set expiry dates and auto retraining when certificate expires" } },
  ],
};

export default function FeatureTraining() {
  return <FeatureDetail data={data} />;
}
