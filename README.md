# Vagas Stone - Front-end Webhook

Este projeto é um **front-end em Next.js** para exibir vagas abertas na empresa Stone, consumindo dados de um webhook.

## Rodando com Docker

### Pré-requisitos

- [Docker](https://www.docker.com/products/docker-desktop) instalado na sua máquina.

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git
   cd vagas-frontend
   ```

2. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis (exemplo abaixo):

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://<sua-instancia-supabase>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<sua_anon_key>
   ```

   > Essas variáveis são necessárias para conectar ao banco de dados Supabase.

3. **Suba o projeto com Docker Compose:**

   ```bash
   docker compose up --build
   ```

   O front-end estará disponível em [http://localhost:3000](http://localhost:3000).

   O banco de dados PostgreSQL estará disponível na porta `5433` (usuário: `postgres`, senha: `postgres`, banco: `vagas`).

---

## Sobre

Este projeto exibe vagas abertas na Stone, consumindo dados de um webhook e exibindo filtros por área, cidade e tempo de publicação.

---

## Observações

- O projeto depende de uma instância Supabase configurada e populada com as vagas.
- Para rodar apenas o front-end, basta garantir que as variáveis de ambiente estejam corretas e que o Supabase esteja
