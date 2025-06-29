# 🚀 Redux Toolkit with Redux Thunk

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)

## 📋 Sobre o Projeto

Este projeto é um exemplo prático de como implementar **Redux Toolkit** com **Redux Thunk** para gerenciar estado e realizar operações assíncronas em uma aplicação React/Next.js. O projeto demonstra as melhores práticas para estruturação de store, actions, reducers e integração com APIs externas.

### ✨ Funcionalidades

- 🔄 Gerenciamento de estado global com Redux Toolkit
- 🌐 Requisições assíncronas com Redux Thunk
- 📱 Interface responsiva para listagem de posts
- 🎯 Tipagem completa com TypeScript
- 🏗️ Arquitetura modular e escalável
- ⚡ Performance otimizada com Next.js 15

## 🛠️ Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca para interfaces de usuário
- **Next.js 15** - Framework React com Turbopack
- **TypeScript** - Tipagem estática para JavaScript

### Estado e Dados

- **Redux Toolkit** - Ferramenta oficial para gerenciamento de estado Redux
- **Redux Thunk** - Middleware para actions assíncronas
- **React Redux** - Bindings oficiais do React para Redux
- **Axios** - Cliente HTTP para requisições

## 📁 Estrutura do Projeto

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/              # Componentes reutilizáveis
│   └── list/               # Componente de listagem
├── config/                  # Configurações globais
│   ├── api/                # Configuração do cliente HTTP
│   └── stores/             # Configuração do Redux Store
│       ├── actions/        # Actions assíncronas
│       ├── reducers/       # Reducers e slices
│       ├── hooks.ts        # Hooks tipados do Redux
│       ├── index.ts        # Configuração da store
│       └── Provider/       # Provider do Redux
├── modules/                 # Módulos de funcionalidades
│   └── post/               # Módulo de posts
│       ├── hooks/          # Hooks específicos
│       └── screens/        # Telas/páginas
└── services/               # Serviços de API
    └── posts/              # Serviços relacionados a posts
```

## 🏛️ Arquitetura

### Redux Store

A store é configurada com Redux Toolkit e utiliza:

- **createSlice**: Para criar reducers e actions de forma simplificada
- **configureStore**: Para configuração otimizada da store
- **createAsyncThunk**: Para actions assíncronas com tratamento de estados

### Fluxo de Dados

1. **Componente** dispara uma action através do hook `useAppDispatch`
2. **Action assíncrona** (thunk) faz requisição para API
3. **Reducer** atualiza o estado baseado no resultado da action
4. **Componente** recebe o novo estado através do hook `useAppSelector`

### Padrões Implementados

- **Custom Hooks**: Encapsulamento da lógica de fetching de dados
- **Typed Hooks**: Hooks tipados para melhor experiência de desenvolvimento
- **Error Handling**: Tratamento adequado de erros em requisições
- **Loading States**: Estados de carregamento para melhor UX

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até o diretório
cd spike-redux-thunk-with-toolkit

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Executando o Projeto

```bash
# Desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linting do código
```

## 📚 Conceitos Demonstrados

### 1. Redux Toolkit Slice

```typescript
// Exemplo de slice com extraReducers para async thunks
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});
```

### 2. Async Thunk

```typescript
// Action assíncrona com tratamento de erro
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      return await getPosts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
```

### 3. Custom Hooks

```typescript
// Hook personalizado para fetching de dados
export const useFetchData = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(({ post }) => post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return { data, loading, error };
};
```

## 🎯 Próximos Passos

- [ ] Implementar paginação de posts
- [ ] Adicionar funcionalidade de criação/edição de posts
- [ ] Implementar cache com RTK Query
- [ ] Adicionar testes unitários
- [ ] Implementar PWA features

## 🤝 Contribuindo

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é apenas para fins educacionais e demonstração.

## 📞 Contato

Wellington Barea - [seu-email@exemplo.com]

Link do Projeto: [https://github.com/seu-usuario/spike-redux-thunk-with-toolkit]
