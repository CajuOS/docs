import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.cajuos.dev",
  integrations: [
    starlight({
      title: "cajuOS Docs",
      description: "Documentação oficial do cajuOS: quickstart, CLI, API, SDK e módulos.",
      favicon: "/favicon.png",
      logo: {
        src: "./src/assets/cashew.png",
        alt: "cajuOS"
      },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/CajuOS" },
      ],
      editLink: {
        baseUrl: "https://github.com/CajuOS/docs/edit/main/",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Começar",
          items: [
            { label: "Visão geral", link: "/" },
            { label: "Início rápido", link: "/quickstart/" },
            { label: "CLI", link: "/cli/" },
            { label: "API", link: "/api/" },
            { label: "SDK", link: "/sdk/" }
          ]
        },
        {
          label: "Módulos",
          items: [
            { label: "Waitlist", link: "/modules/waitlist/" },
            { label: "Changelog", link: "/modules/changelog/" },
            { label: "Roadmap", link: "/modules/roadmap/" },
            { label: "Feedback", link: "/modules/feedback/" },
            { label: "Status", link: "/modules/status/" }
          ]
        },
        {
          label: "Operação",
          items: [
            { label: "Playbook de incidentes", link: "/incident-playbook/" },
            { label: "FAQ", link: "/faq/" }
          ]
        }
      ]
    })
  ]
});
