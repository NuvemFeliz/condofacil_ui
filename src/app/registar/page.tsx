"use client"; // Adicione esta linha no topo do arquivo

import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { User, Building } from "lucide-react";
import axios from "axios"; // Ou use fetch nativo

export default function RegisterForm() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    tipo_usuario: "morador", // Valor padrão
    nome_completo: "",
    data_nascimento: "",
    tipo_documento: "",
    numero_documento: "",
    telefone: "",
    morada: "",
    whatsapp: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Função para atualizar os dados do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para enviar os dados do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validação básica
    if (!formData.email || !formData.password || !formData.nome_completo) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Envia os dados para a API Django
      const response = await axios.post("http://localhost:8000/api/core/", formData);
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

  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Crie sua Conta</h2>
        <p className="mt-2 text-muted-foreground">
          Escolha o tipo de usuário e preencha os dados para se cadastrar.
        </p>
      </div>

      {/* Abas para seleção do tipo de usuário */}
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-1 rounded-xl bg-muted/50 p-1">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ${
                selected
                  ? "bg-white shadow text-primary"
                  : "text-muted-foreground hover:bg-white/[0.12]"
              }`
            }
            onClick={() => setFormData((prev) => ({ ...prev, tipo_usuario: "morador" }))}
          >
            <div className="flex items-center justify-center gap-2">
              <User className="size-4" />
              Morador
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ${
                selected
                  ? "bg-white shadow text-primary"
                  : "text-muted-foreground hover:bg-white/[0.12]"
              }`
            }
            onClick={() => setFormData((prev) => ({ ...prev, tipo_usuario: "proprietario" }))}
          >
            <div className="flex items-center justify-center gap-2">
              <Building className="size-4" />
              Proprietário
            </div>
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 ${
                selected
                  ? "bg-white shadow text-primary"
                  : "text-muted-foreground hover:bg-white/[0.12]"
              }`
            }
            onClick={() => setFormData((prev) => ({ ...prev, tipo_usuario: "funcionario" }))}
          >
           
          </Tab>
        </Tab.List>

        {/* Conteúdo das Abas */}
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="text"
                name="nome_completo"
                placeholder="Nome Completo"
                value={formData.nome_completo}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="date"
                name="data_nascimento"
                value={formData.data_nascimento}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              <select
                name="tipo_documento"
                value={formData.tipo_documento}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Selecione o Tipo de Documento</option>
                <option value="bi">Bilhete de Identidade</option>
                <option value="passaporte">Passaporte</option>
                <option value="cartao_residente">Cartão de Residente</option>
                <option value="outro">Outro</option>
              </select>
              <input
                type="text"
                name="numero_documento"
                placeholder="Número do Documento"
                value={formData.numero_documento}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="telefone"
                placeholder="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="morada"
                placeholder="Morada"
                value={formData.morada}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
              {success && (
                <p className="text-sm text-green-500">
                  Registro realizado com sucesso!
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary/90"
              >
                Cadastrar
              </button>
            </form>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}