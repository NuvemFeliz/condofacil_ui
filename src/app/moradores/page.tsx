"use client"; // Adicione esta linha no topo do arquivo

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Morador {
  id: number;
  nome_completo: string;
  email: string;
  telefone: string;
  morada: string;
  tipo_usuario: string;
}

export default function ListarMoradores() {
  const [moradores, setMoradores] = useState<Morador[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar os moradores da API
  const fetchMoradores = async () => {
    try {
      const response = await axios.get<Morador[]>("http://localhost:8000/api/v1/moradores/");
      if (response.status === 200) {
        setMoradores(response.data);
      }
    } catch (err) {
      setError("Erro ao carregar moradores. Tente novamente mais tarde.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Busca os moradores ao carregar o componente
  useEffect(() => {
    fetchMoradores();
  }, []);

  if (loading) {
    return <p>Carregando moradores...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Lista de Moradores</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Nome Completo</th>
              <th className="py-2 px-4 border-b">E-mail</th>
              <th className="py-2 px-4 border-b">Telefone</th>
              <th className="py-2 px-4 border-b">Morada</th>
              <th className="py-2 px-4 border-b">Tipo de Usuário</th>
            </tr>
          </thead>
          <tbody>
            {moradores.map((morador) => (
              <tr key={morador.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{morador.nome_completo}</td>
                <td className="py-2 px-4 border-b">{morador.email}</td>
                <td className="py-2 px-4 border-b">{morador.telefone}</td>
                <td className="py-2 px-4 border-b">{morador.morada}</td>
                <td className="py-2 px-4 border-b">{morador.tipo_usuario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}