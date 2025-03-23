import React from 'react';
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

export default function Page() {
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
              <h2 className="text-lg font-medium">Contas a Pagar</h2>
              <p className="text-2xl font-bold">Kz. 12.345,67</p>
              <p className="text-sm text-muted-foreground">Vencimento em 5 dias</p>
            </div>

            {/* Card: Contas a Receber */}
            <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <h2 className="text-lg font-medium">Contas a Receber</h2>
              <p className="text-2xl font-bold">Kz. 8.910,11</p>
              <p className="text-sm text-muted-foreground">Recebimento em 3 dias</p>
            </div>

            {/* Card: Reservas de Áreas Comuns */}
            <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <h2 className="text-lg font-medium">Reservas Hoje</h2>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Salão de Festas, Churrasqueira</p>
            </div>

            {/* Card: Avisos */}
            <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted/70 transition-colors">
              <h2 className="text-lg font-medium">Moradores Devedores</h2>
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">Divída á mais de 2 meses</p>
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