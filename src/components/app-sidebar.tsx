"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Building,
  Briefcase,
  FileText,
  Sun,
  Moon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

// Sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Condofácil",
      logo: GalleryVerticalEnd,
      plan: "Gestão de Condomínios",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Gestão e Cadastros",
      url: "#",
      icon: Building, // Ícone correspondente
      isActive: true,
      items: [
        {
          title: "Condomínios",
          url: "#",
        },
        {
          title: "Moradores",
          url: "#",
        },
        {
          title: "Funcionários",
          url: "#",
        },
        {
          title: "Fornecedores",
          url: "#",
        },
      ],
    },
    {
      title: "Financeiro",
      url: "#",
      icon: Briefcase, // Ícone correspondente
      items: [
        {
          title: "Transações",
          url: "#",
        },
        {
          title: "Facturamento",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Contabilidade",
      url: "#",
      icon: FileText, // Ícone correspondente
      items: [
        {
          title: "Plano de Contas",
          url: "#",
        },
        {
          title: "Movimentações",
          url: "#",
        },
        {
          title: "Balancetes",
          url: "#",
        },
        {
          title: "Demost. de Resultados",
          url: "#",
        },
      ],
    },
    {
      title: "Relatórios",
      url: "#",
      icon: PieChart, // Ícone correspondente
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Equipe",
          url: "#",
        },
        {
          title: "Faturamento",
          url: "#",
        },
        {
          title: "Limites",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Reuniões",
      url: "#",
      icon: Frame,
    },
    {
      name: "Assembleia",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Reunião Extraordinária",
      url: "#",
      icon: Map,
    },
    {
      name: "Acto",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme(); // Hook para alternar temas

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        {/* Botão de alternância de tema */}
        <Button
          variant="ghost"
          size="lg" // Aumentando o tamanho do botão
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {theme === "dark" ? <Sun className="mr-2 h-6 w-6" /> : <Moon className="mr-2 h-6 w-6" />}
          {theme === "dark" ? "Tema Claro" : "Tema Escuro"}
        </Button>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}