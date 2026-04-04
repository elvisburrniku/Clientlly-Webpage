import FeatureDetail from "@/components/FeatureDetail";

const data = {
  category: { sq: "Financë", en: "Finance", es: "Finanzas", de: "Finanzen", mk: "Финансии" },
  categoryColor: "bg-blue-500",
  title: { sq: "Faturim Profesional Elektronik", en: "Professional Electronic Invoicing", es: "Facturación Electrónica Profesional", de: "Professionelle Elektronische Rechnungsstellung", mk: "Професионално Електронско Фактурирање" },
  tagline: { sq: "Dërgoni me email, gjurmoni hapjen, nënshkruani dixhitalisht", en: "Send by email, track the opening, sign digitally", es: "Envíe por correo, rastree la apertura, firme digitalmente", de: "Per E-Mail senden, Öffnung verfolgen, digital unterschreiben", mk: "Испратете по е-пошта, следете го отворањето, потпишете дигитално" },
  stat: { sq: "40% pagesa më shpejt", en: "40% faster payments", es: "40% pagos más rápidos", de: "40% schnellere Zahlungen", mk: "40% побрзи плаќања" },
  description: {
    sq: "Krijoni dhe dërgoni fatura me email me një klikim. Ju shikoni nëse klienti e ka hapur faturën ose jo, dhe klienti mund ta nënshkruajë direkt nga telefoni ose kompjuteri pa asnjë printer.",
    en: "Create and send invoices by email with one click. You can see whether the client has opened the invoice, and the client can sign it directly from their phone or computer without any printer.",
    es: "Cree y envíe facturas por correo electrónico con un solo clic. Puede ver si el cliente ha abierto la factura, y el cliente puede firmarla directamente desde su teléfono u ordenador sin necesidad de impresora.",
    de: "Erstellen und versenden Sie Rechnungen per E-Mail mit einem Klick. Sie können sehen, ob der Kunde die Rechnung geöffnet hat, und der Kunde kann sie direkt vom Telefon oder Computer ohne Drucker unterschreiben.",
    mk: "Креирајте и испраќајте фактури по е-пошта со еден клик. Можете да видите дали клиентот ја отворил фактурата, а клиентот може да ја потпише директно од телефон или компјутер без печатач.",
  },
  benefits: [
    { sq: "Dërgim fature me email — profesional dhe i menjëhershëm", en: "Invoice delivery by email — professional and immediate", es: "Envío de facturas por correo — profesional e inmediato", de: "Rechnungsversand per E-Mail — professionell und sofort", mk: "Испраќање фактури по е-пошта — професионално и моментално" },
    { sq: "Shiko nëse fatura është hapur nga klienti", en: "See if the invoice has been opened by the client", es: "Vea si la factura ha sido abierta por el cliente", de: "Sehen Sie, ob die Rechnung vom Kunden geöffnet wurde", mk: "Видете дали фактурата е отворена од клиентот" },
    { sq: "Nënshkrim dixhital i klientit (telefon ose PC)", en: "Client digital signature (phone or PC)", es: "Firma digital del cliente (teléfono o PC)", de: "Digitale Unterschrift des Kunden (Telefon oder PC)", mk: "Дигитален потпис на клиентот (телефон или компјутер)" },
    { sq: "Nënshkrim nga ana e kompanisë suaj gjithashtu", en: "Signature from your company as well", es: "Firma de su empresa también", de: "Unterschrift auch von Ihrem Unternehmen", mk: "Потпис и од ваша компанија исто така" },
    { sq: "Rikujtime automatike kur fatura nuk paguhet", en: "Automatic reminders when invoice is unpaid", es: "Recordatorios automáticos cuando la factura no se paga", de: "Automatische Erinnerungen bei unbezahlter Rechnung", mk: "Автоматски потсетници кога фактурата не е платена" },
    { sq: "Shabllone të ndryshme me markën tuaj", en: "Different templates with your brand", es: "Diferentes plantillas con su marca", de: "Verschiedene Vorlagen mit Ihrer Marke", mk: "Различни шаблони со вашиот бренд" },
  ],
};

export default function FeatureInvoicingNew() {
  return <FeatureDetail data={data} />;
}
