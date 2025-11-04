🌿 JardimApp

Uma aplicação móvel simples e completa para gerir plantas, criada com React Native (Expo) e uma API em .NET 9 com MySQL.

---------------------------------------------------
📱 Funcionalidades

- Listar todas as plantas guardadas na API
- Adicionar novas plantas (nome, tipo, descrição e imagem)
- Visualizar detalhes com imagem grande
- Atualização automática da lista
- Interface moderna adaptada a Android e iOS
- Ligação a API local ou hospedada (.NET 9 + Entity Framework Core 9)

---------------------------------------------------
🧩 Tecnologias utilizadas

Frontend (Mobile):
- React Native (Expo)
- React Navigation
- Safe Area Context

Backend (API):
- ASP.NET 9
- Entity Framework Core 9
- MySQL

Ferramentas:
- Visual Studio Code
- Node.js
- Expo CLI
- Swagger

---------------------------------------------------
🚀 Como executar o projeto

1. API (.NET)
   - Abre o projeto no Visual Studio
   - Atualiza o ficheiro appsettings.json com a tua ligação MySQL
   - Executa o comando:
     dotnet run
   - A API ficará acessível em algo como:
     http://192.168.x.x:5081/api/Plantas

2. App (Expo)
   - Garante que tens Node.js e Expo instalados
   - No terminal, dentro da pasta do projeto, escreve:
     npm install
   - Depois:
     npx expo start --tunnel
   - Lê o QR Code com a app Expo Go no telemóvel

---------------------------------------------------
📁 Estrutura do projeto

JardimApp/
│
├── App.js                  → Navegação principal e lista de plantas
├── Screens/
│   ├── NovaPlanta.js       → Formulário para adicionar novas plantas
│   ├── DetalhesPlanta.js   → Ecrã de detalhes com imagem e descrição
│
├── package.json
├── README.md
└── .github/
    └── workflows/
        └── expo-preview.yml (workflow de publicação automática)

---------------------------------------------------
🔄 Workflow CI (pré-visualização automática)

Este projeto pode ser configurado com GitHub Actions para criar uma pré-visualização automática no Expo.

- Sempre que fizeres um push na branch main, o GitHub gera um link público do Expo.
- O ficheiro do workflow está em:
  .github/workflows/expo-preview.yml

---------------------------------------------------
👩‍💻 Autora

Raquel Monteiro  
Desenvolvido com ❤️ e café ☕  
2025
