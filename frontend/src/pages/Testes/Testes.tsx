import { Fragment, useState, type FormEvent } from "react";
import PerguntaDissertativa from "../../components/perguntas/PerguntaDissertativa/PerguntaDissertativa";
import {PerguntaLikert} from "../../components/perguntas/PerguntaLikert/PerguntaLikert";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import ChatGemini from "../../components/outros/ChatGemini/ChatGemini";
import "./Testes.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";

export function Testes() {
  const [respostaDissertativa, setRespostaDissertativa] = useState("");
  const [respostaLikert, setRespostaLikert] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      "Resposta enviada: \n1 = " +
        respostaDissertativa +
        "\n2 = " +
        respostaLikert
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navegacao />

      <div className="max-w-3xl mx-auto py-10 px-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Formulário de Teste</CardTitle>
            <CardDescription>
              Exemplo de formulário com perguntas dissertativas e Likert.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <FieldSet>
                <FieldLegend>Perguntas</FieldLegend>

                <div className="space-y-6">
                  <PerguntaDissertativa
                    name="pergunta-1"
                    pergunta="Numa situação XYZ, o que você faria se ABC?"
                    onChange={setRespostaDissertativa}
                  />

                  <PerguntaLikert
                    name="pergunta-2"
                    question="Gosto de ser o centro das atenções."
                    onChange={setRespostaLikert}
                  />
                </div>
              </FieldSet>

              <Separator />

              <FieldSet>
                <FieldLegend>Preferências</FieldLegend>

                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="tema">Tema</FieldLabel>
                    <Select>
                      <SelectTrigger id="tema" className="w-[180px]">
                        <SelectValue placeholder="Selecione o tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Claro</SelectItem>
                        <SelectItem value="dark">Escuro</SelectItem>
                        <SelectItem value="system">Sistema</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field orientation="horizontal">
                    <Switch id="newsletter" />
                    <FieldLabel htmlFor="newsletter">Inscrever-se na newsletter</FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>

              <Separator />

              <FieldSet>
                <FieldLegend>Perfil</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Nome completo</FieldLabel>
                    <Input id="name" placeholder="Ex: João Silva" />
                    <FieldDescription>Será usado em comunicações.</FieldDescription>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="username">Usuário</FieldLabel>
                    <Input id="username" autoComplete="off" aria-invalid />
                    <FieldError>Escolha outro nome de usuário.</FieldError>
                  </Field>
                </FieldGroup>
              </FieldSet>

              <Button type="submit" className="w-full mt-4">
                Enviar respostas
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-10 space-y-6">
          <h3 className="text-lg font-semibold">Outros componentes</h3>

          <ItemGroup>
            {[{ nome: "XYZ" }, { nome: "ABC" }].map((processo, index) => (
              <Fragment key={index}>
                <Item asChild>
                  <a href="/processoSeletivo" className="hover:bg-gray-50 transition">
                    <ItemMedia>
                      <img src="vite.svg" alt="icon" />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>Processo Seletivo {processo.nome}</ItemTitle>
                      <ItemDescription>Processo incrível e etc.</ItemDescription>
                    </ItemContent>
                    <ItemActions />
                  </a>
                </Item>
              </Fragment>
            ))}
          </ItemGroup>

          <Separator />

          <h3 className="text-lg font-semibold">Chat Gemini</h3>
          <ChatGemini />
        </div>
      </div>
    </div>
  );
}