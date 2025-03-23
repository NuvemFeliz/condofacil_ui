import React from "react";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Side: Login Form */}
      <div className="flex flex-col gap-6 p-6 md:p-10">
        {/* Logo and Branding */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="text-xl font-semibold">Condofácil</span>
          </a>
        </div>

        {/* Welcome Message */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Bem-vindo ao Condofácil!
          </h1>
          <p className="mt-2 text-muted-foreground">
            Simplifique a gestão do seu condomínio com ferramentas poderosas e
            intuitivas.
          </p>
        </div>

        {/* Login Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Acesse sua conta</h2>
              <p className="mt-2 text-muted-foreground">
                Entre para gerenciar seu condomínio de forma eficiente.
              </p>
            </div>
            <LoginForm />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            Ainda não tem uma conta?{" "}
            <a href="#" className="font-semibold text-primary hover:underline">
              Fale conosco
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Side: Background Image */}
      <div className="relative hidden lg:block">
        <Image
          src="/login-background.png" // Substitua por uma imagem relevante
          alt="Gestão de Condomínios"
          layout="fill"
          objectFit="cover"
          className="brightness-75 dark:brightness-50"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6 text-center text-white">
          <div className="max-w-md space-y-4">
                <br />
            <h2 className="text-3xl font-bold">
              Transforme a gestão do seu condomínio
            </h2>
            <p className="text-lg">
              Com o Condofácil, você tem tudo o que precisa para administrar seu
              condomínio de forma simples, rápida e segura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}