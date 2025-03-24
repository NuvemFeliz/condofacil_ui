"use client"; // Adicione esta linha no topo do arquivo

import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  CreditCard,
  DollarSign,
  Calendar,
  AlertCircle,
  Activity,
  Bell,
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrando componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Page() {
  // Dados para o gráfico
  const chartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    datasets: [
      {
        label: "Receitas",
        data: [12000, 15000, 18000, 20000, 22000, 25000, 28000],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
      },
      {
        label: "Despesas",
        data: [8000, 9000, 10000, 11000, 12000, 13000, 14000],
        backgroundColor: "rgba(239, 68, 68, 0.8)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Receitas vs Despesas (2023)",
      },
    },
  };

  // Dados de notificações
  const notifications = [
    {
      id: 1,
      title: "Novo Pagamento Recebido",
      description: "Apartamento 101 pagou a taxa de condomínio.",
      time: "há 2 horas",
    },
    {
      id: 2,
      title: "Reserva Confirmada",
      description: "Salão de festas reservado para o dia 25/10.",
      time: "há 1 dia",
    },
    {
      id: 3,
      title: "Manutenção Agendada",
      description: "Manutenção do elevador agendada para 30/10.",
      time: "há 3 dias",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Header */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {/* Sidebar Trigger */}
            <SidebarTrigger className="-ml-1" aria-label="Toggle sidebar" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            {/* Breadcrumb Navigation */}
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#" aria-label="Go to Dashboard">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Gestão Condominal</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          {/* Page Title */}
          <h1 className="text-xl font-semibold">Visão Geral do Condomínio</h1>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Metrics Grid */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Card: Contas a Pagar */}
            <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <div className="flex items-center gap-2">
                <CreditCard className="size-6 text-primary" />
                <h2 className="text-lg font-medium">Contas a Pagar</h2>
              </div>
              <p className="text-2xl font-bold mt-2">Kz. 12.345,67</p>
              <p className="text-sm text-muted-foreground">Vencimento em 5 dias</p>
            </div>

            {/* Card: Contas a Receber */}
            <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <div className="flex items-center gap-2">
                <DollarSign className="size-6 text-primary" />
                <h2 className="text-lg font-medium">Contas a Receber</h2>
              </div>
              <p className="text-2xl font-bold mt-2">Kz. 8.910,11</p>
              <p className="text-sm text-muted-foreground">Recebimento em 3 dias</p>
            </div>

            {/* Card: Reservas de Áreas Comuns */}
            <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <div className="flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                <h2 className="text-lg font-medium">Reservas Hoje</h2>
              </div>
              <p className="text-2xl font-bold mt-2">3</p>
              <p className="text-sm text-muted-foreground">Salão de Festas, Churrasqueira</p>
            </div>

            {/* Card: Moradores Devedores */}
            <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <div className="flex items-center gap-2">
                <AlertCircle className="size-6 text-primary" />
                <h2 className="text-lg font-medium">Moradores Devedores</h2>
              </div>
              <p className="text-2xl font-bold mt-2">2</p>
              <p className="text-sm text-muted-foreground">Dívida há mais de 2 meses</p>
            </div>
          </div>

          {/* Gráfico e Notificações */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {/* Gráfico de Receitas vs Despesas */}
            <div className="lg:col-span-4 bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Activity className="size-6 text-primary" />
                Receitas vs Despesas
              </h2>
              <Bar data={chartData} options={chartOptions} />
            </div>

            {/* Card de Notificações */}
            <div className="lg:col-span-2 bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Bell className="size-6 text-primary" />
                Notificações
              </h2>
              <ul className="space-y-3">
                {notifications.map((notification) => (
                  <li key={notification.id} className="flex flex-col gap-1">
                    <span className="font-medium">{notification.title}</span>
                    <span className="text-sm text-muted-foreground">
                      {notification.description}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent Activities Section */}
          <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
            <h2 className="text-lg font-medium mb-4">Atividades Recentes</h2>
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span>Pagamento Recebido - Apt. 101</span>
                <span className="text-sm text-muted-foreground">há 2 horas</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Reserva Confirmada - Salão de Festas</span>
                <span className="text-sm text-muted-foreground">há 1 dia</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Aviso Postado - Manutenção do Elevador</span>
                <span className="text-sm text-muted-foreground">há 3 dias</span>
              </li>
            </ul>
          </div>

          {/* Full-width Section: Relatórios */}
          <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
            <h2 className="text-lg font-medium mb-4">Relatórios</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-background rounded-lg p-4">
                <h3 className="text-md font-medium">Financeiro</h3>
                <p className="text-sm text-muted-foreground">Relatório mensal de contas</p>
              </div>
              <div className="bg-background rounded-lg p-4">
                <h3 className="text-md font-medium">Ocorrências</h3>
                <p className="text-sm text-muted-foreground">Registro de incidentes</p>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}