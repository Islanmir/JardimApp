# 🌿 JardimApp

Uma aplicação móvel feita com **React Native (Expo)** e **.NET 9 (API)** para gerir o teu jardim de forma simples.  
Permite consultar, adicionar e ver detalhes das plantas armazenadas na base de dados MySQL.

---

## 🚀 Preview Online

Podes testar a app diretamente no Expo:

[![Abrir no Expo](https://img.shields.io/badge/Abrir_no_Expo-000?logo=expo&logoColor=white&style=for-the-badge)](https://expo.dev/accounts/islanmir/projects/JardimApp)

Ou lê este QR Code com a app **Expo Go** no teu telemóvel:

🔗 [https://expo.dev/accounts/islanmir/projects/JardimApp](https://expo.dev/accounts/islanmir/projects/JardimApp)

---

## 🧩 Tecnologias Utilizadas

### 🌱 Frontend
- React Native (Expo)
- React Navigation
- Expo EAS Update (publicação automática)
- Styled Components / React Native Stylesheet

### 🖥️ Backend (API)
- .NET 9 Web API
- Entity Framework Core 9
- MySQL

---

## ⚙️ Instalação (modo local)

### 1️⃣ Clonar o repositório
bash
git clone https://github.com/teu-usuario/ProjetoPlantas.git
cd ProjetoPlantas/JardimApp
2️⃣ Instalar dependências
npm install

3️⃣ Iniciar o servidor Expo
npx expo start --tunnel


Abre a app Expo Go no telemóvel e lê o QR Code mostrado no terminal.

🧠 API – JardimAPI

O backend foi desenvolvido em .NET 9 + Entity Framework Core 9,
com base de dados MySQL, e endpoints REST:

Método	Endpoint	Descrição
GET	/api/Plantas	Lista todas as plantas
GET	/api/Plantas/{id}	Retorna uma planta específica
POST	/api/Plantas	Adiciona nova planta
PUT	/api/Plantas/{id}	Atualiza planta existente
DELETE	/api/Plantas/{id}	Remove planta
🧰 CI/CD – GitHub Actions + Expo EAS

O projeto está configurado com GitHub Actions e EAS Update,
para publicação automática do preview a cada git push para main.

📂 Ficheiro: .github/workflows/expo-eas-preview.yml

- name: 🚀 Publicar preview com EAS Update
  run: eas update --auto --branch preview --message "Atualização automática"

## 📸 Capturas de Ecrã

### 🌱 Lista de Plantas
![Lista de Plantas](https://github.com/islanmir/JardimApp/blob/main/screenshots/lista.png?raw=true)

### 🌼 Detalhes da Planta
![Detalhes da Planta](https://github.com/islanmir/JardimApp/blob/main/screenshots/detalhes.png?raw=true)

### ➕ Adicionar Planta
![Adicionar Planta](https://github.com/islanmir/JardimApp/blob/main/screenshots/nova.png?raw=true)


👩‍💻 Autoria

Raquel Monteiro
Projeto “JardimApp” 🌱 – Aprendizado em React Native + .NET 9 + MySQL
