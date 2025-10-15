// File: /i18n/site-wide/footer.ts
import type { Locale } from "../locale-context";

// EN is the source of truth for the structure
const en = {
  brand: "RentPortfolio",
  tagline: "Built to Rent. Designed to Grow.",
  contact: {
    title: "Contact",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    phone:
      "WhatsApp: +1 (786) 317-4888 (English) • +1 (786) 797-8010 (Español)",
    email: "info@rentportfolio.com",
    address: "Sarasota, Florida",
  },
  legal: {
    title: "Legal",
    // Kept for backwards compatibility; shown if no `documents` provided
    disclaimer:
      "This website is for informational purposes only and is not an offer to sell or a solicitation to buy any real estate or securities. All illustrations, descriptions, pricing, availability, and specifications are subject to change without notice. Equal Housing Opportunity.",
    rights: "All rights reserved.",
    more: "Read more",
    less: "Show less",
    // NEW (optional): legal documents; if omitted, UI falls back to `disclaimer`
    documents: [
      {
        id: "terms",
        title: "Terms of Use",
        lastUpdated: "Last updated: October 25, 2024",
        content:
          "Welcome to the website of Rent Portfolio Group, LLC (“Rent Portfolio,” “we,” “our,” or “us”), including our mobile applications, social media, and email communications. By accessing and using our services, you (“you,” “your”) agree to these Terms of Use.\n\n1. Ownership of Content\nAll content on our sites—including text, images, videos, and logos—is owned by Rent Portfolio or used under license. Reproduction or use is not permitted without prior written consent, except for personal, non-commercial use.\n\n2. Use of the Site\nYou agree to use our sites lawfully and responsibly. If you create an account, you agree to keep your login information secure and not share it. Rent Portfolio may suspend access if fraudulent activity or violations of these Terms are detected.\n\n3. User Content\nIf you submit content (e.g., images, testimonials, or information), you grant us a non-exclusive, worldwide, perpetual right to use that content for commercial or promotional purposes, subject to our Privacy Policy.\n\n4. Equal Housing Opportunity\nRent Portfolio complies with all applicable fair housing laws. We do not discriminate based on race, color, religion, sex, disability, familial status, or national origin.\n\n5. Limitation of Liability\nWhile we strive for accuracy, we do not warrant that information on our sites is complete or error-free. Your use of the site is at your own risk. We are not liable for damages or losses resulting from use of the information available on this site. CONTENT IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED.\n\n6. Governing Law and Jurisdiction\nThese Terms are governed by the laws of the State of Florida. In case of dispute, you agree to the jurisdiction of the courts of Sarasota County, Florida.\n\n7. Changes to the Terms\nWe may update these Terms at any time. The latest update date appears at the top. By continuing to use our site, you accept such changes.\n\n8. Contact\nFor questions about these Terms, contact: info@rentportfolio.com",
      },
      {
        id: "privacy",
        title: "Privacy Policy",
        lastUpdated: "Last updated: June 24, 2025",
        content:
          "Rent Portfolio Group, LLC (“Rent Portfolio,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you provide through our websites, mobile applications, or interactions with our team. By using our services, you agree to the collection and use of your information under this Privacy Policy.\n\n1. Information We Collect\n• Contact details (name, email, phone, address)\n• Investment preferences and real estate interests\n• Financial information you voluntarily provide for purchases or opportunities\n• Device/usage data (IP, browser, cookies)\n• Communications (inquiries, emails, support)\nCollected when you fill forms, request info, interact with our site/social media, or contact us.\n\n2. How We Use Your Information\n• Respond to inquiries\n• Provide and improve services\n• Send property updates, opportunities, or newsletters\n• Comply with legal requirements\nYou may opt out of marketing at any time.\n\n3. Sharing Your Information\nWe may share information with service providers (legal, accounting, title, property management), financial institutions for transactions, and technology providers for performance/analytics, or as required by law. We do not sell personal information.\n\n4. Cookies and Tracking\nWe may use cookies or similar technologies. You may adjust browser settings to limit or block cookies.\n\n5. Your Rights\nDepending on your jurisdiction, you may have rights to access, update, delete, or restrict processing of your data, and opt out of certain communications.\n\n6. Data Security\nWe implement reasonable safeguards, though no system is 100% secure.\n\n7. Children’s Privacy\nOur services are not directed to children under 16, and we do not knowingly collect data from minors.\n\n8. Changes to This Policy\nWe may update this Policy periodically. The latest version will display its effective date.\n\n9. Contact Us\nprivacy@rentportfolio.com\nRent Portfolio Group, LLC – Privacy Officer\nSarasota, Florida",
      },
    ],
  },
} as const;

// Widen leaves to string but keep structure
type DeepString<T> = T extends string
  ? string
  : { [K in keyof T]: DeepString<T[K]> };
export type FooterSchema = DeepString<typeof en>;

const es: FooterSchema = {
  brand: "RentPortfolio",
  tagline: "Construido para rentar. Diseñado para crecer.",
  contact: {
    title: "Contacto",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    addressLabel: "Dirección",
    phone:
      "WhatsApp: +1 (786) 317-4888 (English) • +1 (786) 797-8010 (Español)",
    email: "info@rentportfolio.com",
    address: "Sarasota, Florida",
  },
  legal: {
    title: "Legal",
    disclaimer:
      "Este sitio es informativo y no constituye una oferta para vender ni una solicitud para comprar bienes raíces o valores. Ilustraciones, descripciones, precios, disponibilidad y especificaciones pueden cambiar sin previo aviso. Igualdad de Oportunidades de Vivienda.",
    rights: "Todos los derechos reservados.",
    more: "Ver más",
    less: "Ver menos",
    documents: [
      {
        id: "terms",
        title: "Términos de Uso",
        lastUpdated: "Última actualización: 25 de octubre de 2024",
        content:
          "Bienvenido al sitio web de Rent Portfolio Group, LLC (“Rent Portfolio”, “nosotros”, “nuestro”), incluidas nuestras aplicaciones móviles, redes sociales y comunicaciones por correo electrónico. Al acceder y usar nuestros servicios, usted acepta estos Términos de Uso.\n\n1. Propiedad del Contenido\nTodo el contenido —textos, imágenes, videos y logotipos— es propiedad de Rent Portfolio o se utiliza bajo licencia. No se permite su uso sin consentimiento previo por escrito, salvo para uso personal no comercial.\n\n2. Uso del Sitio\nUsted se compromete a utilizar nuestros sitios de forma legal y responsable. Si crea una cuenta, mantendrá sus credenciales seguras y no las compartirá. Rent Portfolio puede suspender su acceso si detecta actividad fraudulenta o incumplimiento de estos términos.\n\n3. Contenido del Usuario\nSi nos envía contenido (por ejemplo, imágenes o testimonios), nos otorga un derecho no exclusivo, mundial y permanente para usarlo con fines comerciales o promocionales, sujeto a nuestra Política de Privacidad.\n\n4. Igualdad de Oportunidades de Vivienda\nCumplimos con las leyes aplicables de vivienda justa. No discriminamos por raza, color, religión, sexo, discapacidad, estado familiar o nacionalidad.\n\n5. Limitación de Responsabilidad\nAunque procuramos información exacta, no garantizamos que toda la información sea completa o esté libre de errores. El uso del sitio es bajo su propio riesgo. No somos responsables por daños o pérdidas derivadas del uso de la información disponible. EL CONTENIDO SE PROPORCIONA “TAL CUAL” Y “SEGÚN DISPONIBILIDAD”, SIN GARANTÍAS DE NINGÚN TIPO.\n\n6. Ley Aplicable y Jurisdicción\nEstos Términos se rigen por las leyes del estado de Florida. En caso de disputa, usted acepta la jurisdicción de los tribunales del Condado de Sarasota, Florida.\n\n7. Cambios\nPodemos actualizar estos Términos en cualquier momento. La fecha de actualización figura al inicio. Al continuar usando el sitio, usted acepta dichos cambios.\n\n8. Contacto\ninfo@rentportfolio.com",
      },
      {
        id: "privacy",
        title: "Política de Privacidad",
        lastUpdated: "Última actualización: 24 de junio de 2025",
        content:
          "Rent Portfolio Group, LLC (“Rent Portfolio”, “nosotros”) respeta su privacidad y protege la información personal que nos proporciona a través de nuestros sitios web, aplicaciones móviles o interacciones con nuestro equipo. Al usar nuestros servicios, usted acepta la recolección y uso de sus datos conforme a esta Política.\n\n1. Información que Recopilamos\n• Datos de contacto (nombre, correo, teléfono, dirección)\n• Preferencias de inversión e intereses inmobiliarios\n• Información financiera que usted aporte voluntariamente\n• Datos del dispositivo/uso (IP, navegador, cookies)\n• Comunicaciones (consultas, correos, soporte)\n\n2. Cómo Usamos su Información\n• Responder consultas\n• Prestar y mejorar servicios\n• Enviar actualizaciones de propiedades u oportunidades\n• Cumplir obligaciones legales\nPuede darse de baja de comunicaciones de marketing en cualquier momento.\n\n3. Compartir Información\nPodemos compartir datos con proveedores (legales, contables, títulos, administración), instituciones financieras para transacciones y proveedores tecnológicos para rendimiento/analítica, o cuando la ley lo requiera. No vendemos su información personal.\n\n4. Cookies y Rastreo\nPodemos usar cookies o tecnologías similares. Puede ajustar su navegador para limitarlas.\n\n5. Sus Derechos\nSegún su jurisdicción, puede tener derechos de acceso, actualización, eliminación o restricción de procesamiento, y optar por no recibir ciertas comunicaciones.\n\n6. Seguridad de Datos\nAplicamos salvaguardas razonables; ningún sistema es 100% seguro.\n\n7. Privacidad de Menores\nNuestros servicios no están dirigidos a menores de 16 años.\n\n8. Cambios a esta Política\nPodemos actualizarla periódicamente. La versión vigente mostrará la fecha de vigencia.\n\n9. Contacto\nprivacy@rentportfolio.com\nRent Portfolio Group, LLC – Privacy Officer\nSarasota, Florida",
      },
    ],
  },
};

// Export a single dict for the aggregator
export const dict = { en: en as FooterSchema, es } as const;
export type FooterI18n = typeof dict.en;

// Optional helper for direct access
export const tFooter = (locale: Locale) => dict[locale];
