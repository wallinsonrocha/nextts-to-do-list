# To Do List Next.js + TypeScript

Este é um projeto de aplicação de lista de tarefas desenvolvido com **Next.js**, **TypeScript** e **Zustand** para gerenciamento de estados. A aplicação permite criar, editar, atualizar status e remover tarefas, organizando-as em categorias como "To Do", "In Progress" e "Done".

**Link do projeto**: https://nextts-to-do-list.vercel.app/

## ✨ Funcionalidades

- **Adicionar Tarefas:** Crie tarefas com descrição e prioridade.
- **Editar Tarefas:** Modifique a descrição e a prioridade das tarefas existentes.
- **Atualizar Status:** Mova as tarefas entre os estados "To Do", "In Progress" e "Done".
- **Excluir Tarefas:** Remova as tarefas quando necessário.
- **Persistência Local:** Tarefas são armazenadas no `localStorage` utilizando a biblioteca **Zustand**.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Zustand**: Biblioteca leve para gerenciamento de estado global.
- **Tailwind CSS**: Framework CSS para design responsivo e estilização rápida.
- **UUID**: Biblioteca para geração de identificadores únicos para cada tarefa.

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação no navegador:**
   ```bash
   http://localhost:3000
   ```

## 📂 Estrutura do Projeto

```
├── components/
│   ├── TaskInterface.tsx   # Componente principal para interface de tarefas
│   ├── Task.tsx            # Componente para exibir cada tarefa
│   └── icon/PriorityIcon.tsx # Ícones de prioridade
├── pages/
│   └── index.tsx           # Página principal
├── store/
│   └── store.ts            # Gerenciamento de estado com Zustand
└── public/icons/           # Ícones da aplicação
```

## 🔧 Customização

- Para modificar os ícones, substitua os arquivos na pasta `public/icons/`.
- O design pode ser ajustado no arquivo `Tailwind CSS` presente no projeto.

## 📝 Contato

- **Desenvolvedor:** [Wallinson Rocha](https://dev.wallinson.com)
- **E-mail:** wallinsonrochadev@gmail.com

