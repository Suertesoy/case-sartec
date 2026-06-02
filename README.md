# Case Ecossistema Sartec

Case de Product Design sobre a criação de um CRM operacional integrado ao WhatsApp e agente de IA para organizar o atendimento real da Sartec Papelaria.

**Autoria:** Lucas Alves Cabral · Product Designer

---

## Objetivo

Apresentar a criação do Ecossistema Sartec a recrutadores de Product Design, UX/UI, Design Systems e Design Engineering.

A página é um case de portfólio — não uma landing page comercial para clientes. Ela documenta visão de produto, tomada de decisão, UX operacional, Design Systems, IA aplicada e condução de implementação com IA.

---

## Stack

- HTML5
- CSS3 (vanilla, sem frameworks)
- JavaScript vanilla (ES5/ES6)
- Sem dependências externas
- Sem build step

Compatível com Vercel usando preset **Other**, Build Command **vazio** e Output Directory **"."**.

---

## Como abrir localmente

Abra o arquivo diretamente no navegador:

```
C:\Users\USER\Desktop\PROJETOS\CASE SARTEC ECOSSISTEMA\index.html
```

Ou via terminal:

```
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

Não requer servidor local — é uma página estática pura.

---

## Como publicar na Vercel

O repositório já está conectado ao projeto `case-sartec` na Vercel.

Todo push para a branch `main` aciona o deploy automático.

```bash
git add index.html styles.css script.js README.md
git commit -m "feat: descrição da alteração"
git push origin main
```

**Não use `vercel deploy` ou `vercel --prod` manualmente.**

---

## Estrutura de arquivos

```
/
├── index.html           ← Página principal do case
├── styles.css           ← Estilos (design tokens, componentes, responsivo)
├── script.js            ← Interações (nav, scroll animation, active link)
├── README.md            ← Este arquivo
└── assets/
    └── media/
        ├── README.md    ← Documentação das mídias esperadas
        └── .gitkeep     ← Mantém a pasta versionada antes das imagens
```

---

## Mídias esperadas

As mídias ainda não foram adicionadas. Os placeholders visuais já estão na página indicando exatamente onde e o quê deve entrar.

Salve os arquivos de imagem em `assets/media/` com os nomes abaixo:

| Arquivo | Seção | Descrição |
|---|---|---|
| `media-01-hero-ecossistema-sartec.png` | Hero | Composição visual do ecossistema: WhatsApp + agente + CRM + atendente |
| `media-02-problema-whatsapp-informal.png` | O problema real | Print anonimizado ou ilustração do caos operacional anterior |
| `media-04-crm-kanban-sartec.png` | CRM Sartec | Screenshot do painel Kanban com cards, colunas PF/PJ e estados |
| `media-05-historico-conversa-crm.png` | CRM Sartec | Screenshot do modal de atendimento com histórico e barra de status |
| `media-06-fluxo-agente-whatsapp.png` | Agente WhatsApp | Sequência visual do agente com triagem, classificação e handoff |
| `media-07-design-system-operacional.png` | Design System | Painel com tokens, badges, cards e estados em tela real |
| `media-08-processo-ia-produto.png` | Processo de trabalho | Ilustração do fluxo: diagnóstico → prompt → implementação → validação |
| `media-09-antes-depois-sartec.png` | Antes e depois | Screenshots lado a lado do WhatsApp vs. CRM em uso real |
| `media-10-nascimento-sartec-digital.png` | Sartec Digital | Imagem conceitual do caminho: dor interna → solução → produto replicável |

> As Mídias 03 (diagrama da arquitetura) e 09 (antes/depois) já existem como blocos HTML/CSS na página. As demais são placeholders visuais com descrição do que deve entrar.

---

## Aviso importante — isolamento de projeto

Este repositório é **exclusivo** do case Ecossistema Sartec.

Não é, e não deve ser confundido com:

- `C:\Users\USER\Desktop\PROJETOS\SITE PORTIFÓLIO LUCAS` — portfólio pessoal
- `C:\Users\USER\Desktop\PROJETOS\SARTEC\PAINEL, AGENTE E SITE` — CRM real da Sartec
- `C:\Users\USER\Desktop\PROJETOS\SARTEC DIGITAL` — Sartec Digital
- `C:\Users\USER\Desktop\PROJETOS\APP UNIEDU` — APP UNIEDU

---

## Contato

Lucas Alves Cabral · lac.lucascabral@gmail.com
