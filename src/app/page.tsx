"use client";

import Image from "next/image";
import { CheckCircle, MessageCircle, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simplifique a Gestão do Seu Condomínio com{" "}
            <span className="text-primary">Condofácil</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A plataforma completa para administrar condomínios de forma eficiente,
            segura e intuitiva. Tudo o que você precisa em um só lugar.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Zap className="size-5" />
              Comece Agora
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <MessageCircle className="size-5" />
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Por que Escolher o Condofácil?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestão Simplificada</h3>
              <p className="text-muted-foreground">
                Automatize processos e reduza a burocracia com ferramentas
                intuitivas.
              </p>
            </div>
            <div className="text-center">
              <Users className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Comunicação Eficiente
              </h3>
              <p className="text-muted-foreground">
                Mantenha todos informados com notificações e mensagens em tempo
                real.
              </p>
            </div>
            <div className="text-center">
              <Star className="size-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
              <p className="text-muted-foreground">
                Proteja os dados do seu condomínio com criptografia de ponta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            O que Nossos Clientes Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <p className="text-muted-foreground mb-4">
                &quot;O Condofácil transformou a gestão do nosso condomínio. Tudo
                ficou mais simples e organizado!&quot;
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src="/avatars/user1.jpg"
                  alt="User 1"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold">Maria Silva</span>
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <p className="text-muted-foreground mb-4">
                &quot;A plataforma é incrível! A comunicação com os moradores nunca
                foi tão fácil.&quot;
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src="/avatars/user2.jpg"
                  alt="User 2"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-semibold">João Santos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Planos que Cabem no Seu Bolso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Básico</h3>
              <p className="text-muted-foreground mb-4">
                Ideal para condomínios pequenos.
              </p>
              <p className="text-4xl font-bold mb-4">Kz. 499/mês</p>
              <Button>Assinar</Button>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md text-center border-2 border-primary">
              <h3 className="text-xl font-semibold mb-4">Profissional</h3>
              <p className="text-muted-foreground mb-4">
                Para condomínios médios.
              </p>
              <p className="text-4xl font-bold mb-4">Kz. 1.999/mês</p>
              <Button>Assinar</Button>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-muted-foreground mb-4">
                Para condomínios grandes.
              </p>
              <p className="text-4xl font-bold mb-4">R$ 2.999/mês</p>
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar Seu Condomínio?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Comece hoje mesmo e experimente a melhor plataforma de gestão
            condominial.
          </p>
          <Button size="lg" className="gap-2">
            <Zap className="size-5" />
            Comece Agora
          </Button>
        </div>
      </section>

      {/* WhatsApp Chatbot */}
      <a
        href="https://wa.me/937597259"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}