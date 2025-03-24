"use client";

import React, { useState } from "react";
import {
  GalleryVerticalEnd,
} from "lucide-react";
import Image from "next/image";
import axios from "axios";

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    tipo_usuario: "morador",
    nome_completo: "",
    data_nascimento: "",
    tipo_documento: "",
    numero_documento: "",
    telefone: "",
    morada: "",
    whatsapp: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!formData.email || !formData.password || !formData.nome_completo) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/core/",
        formData
      );
      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          email: "",
          password: "",
          tipo_usuario: "morador",
          nome_completo: "",
          data_nascimento: "",
          tipo_documento: "",
          numero_documento: "",
          telefone: "",
          morada: "",
          whatsapp: "",
        });
      }
    } catch (err) {
      setError("Erro ao registrar. Verifique os dados e tente novamente.");
      console.error(err);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/core/usuarios/criar/",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      if (response.status === 200) {
        setSuccess(true);
        console.log("Login bem-sucedido!", response.data);
      }
    } catch (err) {
      setError("Erro ao fazer login. Verifique os dados e tente novamente.");
      console.error(err);
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-6 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="text-xl font-semibold">Condofácil</span>
          </a>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Bem-vindo ao Condofácil!
          </h1>
          <p className="mt-2 text-muted-foreground">
            Simplifique a gestão do seu condomínio com ferramentas intuitivas.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm space-y-6">
            <h2 className="text-2xl font-bold text-center">
              {isRegistering ? "Crie sua Conta" : "Acesse sua Conta"}
            </h2>
            <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-4">
              <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" required />
              <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded-md" required />
              {isRegistering && (
                <>
                  <input type="text" name="nome_completo" placeholder="Nome Completo" value={formData.nome_completo} onChange={handleChange} className="w-full p-2 border rounded-md" required />
                  <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} className="w-full p-2 border rounded-md" />
                </>
              )}
              {error && <p className="text-sm text-red-500">{error}</p>}
              {success && <p className="text-sm text-green-500">{isRegistering ? "Registro realizado com sucesso!" : "Login bem-sucedido!"}</p>}
              <button type="submit" className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary/90">
                {isRegistering ? "Cadastrar" : "Entrar"}
              </button>
            </form>
            <p className="text-center text-sm text-muted-foreground">
              {isRegistering ? "Já tem uma conta? " : "Ainda não tem uma conta? "}
              <button onClick={() => setIsRegistering(!isRegistering)} className="font-semibold text-primary hover:underline">
                {isRegistering ? "Faça login" : "Crie uma conta"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image src="/login-background.png" alt="Gestão de Condomínios" layout="fill" objectFit="cover" className="brightness-75 dark:brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-6 text-center text-white">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold">Transforme a gestão do seu condomínio</h2>
            <p className="text-lg">Com o Condofácil, você tem tudo o que precisa para administrar seu condomínio de forma simples, rápida e segura.</p>
          </div>
        </div>
      </div>
    </div>
  );
}