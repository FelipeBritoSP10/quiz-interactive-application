# 🚀 Quiz Interativo — Web Development

![preview](./project-quiz/docs/preview-quiz.gif)

## 🎓 Projeto Acadêmico

O **Quiz Interativo** é um projeto de desenvolvimento front-end acadêmico elaborado para a disciplina de **Desenvolvimento Web** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Estácio**. Seu objetivo principal é consolidar práticas de manipulação do DOM, controle de estado e arquitetura limpa em JavaScript puro.

---

## 🎯 Objetivos do Projeto

- **Avaliação Acadêmica:** Projeto prático desenvolvido como atividade complementar e avaliativa valendo nota para a disciplina de **Desenvolvimento Web** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Estácio**.
- **Consolidação Prática:** Aplicar conceitos fundamentais de desenvolvimento web aprendidos na disciplina com construção de uma aplicação real.
- **Arquitetura Limpa:** Implementar a Separação de Conceitos (SoC) utilizando ES6 Modules nativos sem a necessidade de *bundlers* ou *frameworks*.
- **Medição de Desempenho:** Construir um fluxo dinâmico de pontuação e renderização visual de resultados via biblioteca gráfica.
- **Qualidade de Software:** Garantir conformidade com as diretrizes da norma ISO/IEC 9126, com foco em alta manutenibilidade e confiabilidade.

---

## 🛠️ Tecnologias & Ecossistema

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" /> <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" />

---

## 🏛️ Qualidade & Arquitetura (ISO/IEC 9126)

| Atributo ISO 9126 | Aplicação Prática na Arquitetura |
| :--- | :--- |
| **Manutenibilidade** | Separação estrita em camadas (`data`, `services`, `ui`, `controllers`) e aderência ao princípio SRP. |
| **Confiabilidade** | Isolamento de contexto por página, evitando exceções runtime (*null pointers*). |
| **Portabilidade** | Uso de ES6 Modules nativos (`import`/`export`) sem necessidade de *bundlers* ou transpiladores. |
| **Funcionalidade** | Camada de serviço desacoplada (`StorageService`) garantindo integridade dos dados salvos. |
| **Usabilidade** | Interface reativa com feedback imediato de respostas e gráfico visual dinamizado. |
| **Eficiência** | Carregamento sob demanda de scripts leves executados no lado do cliente (*Client-Side*). |

---

## 🚀 Funcionalidades

| Etapa | Descrição |
| :--- | :--- |
| **Home** | Validação e cadastro inicial do nome do estudante. |
| **Quiz** | Cronômetro regressivo (120s/questão) com feedback instantâneo de acertos/erros. |
| **Resultado** | Dashboard com aproveitamento percentual, gráfico e revisão de gabarito. |

---

## 📂 Estrutura do Projeto

| Diretório / Arquivo | Responsabilidade |
| :--- | :--- |
| `project-quiz/data/` | Módulo de dados e questões brutas |
| `project-quiz/scripts/services/` | Abstração da Web Storage API (`StorageService`) |
| `project-quiz/scripts/ui/` | Camada exclusiva de manipulação do DOM (`QuizUI`, `ResultUI`) |
| `project-quiz/scripts/` | Controllers de fluxo por página (`quiz.js`, `result.js`, `script.js`) |
| `project-quiz/pages/` | Interfaces HTML do quiz e do resultado |
| `index.html` | Ponto de entrada (Home) na raiz do repositório |

## 🏁 Conclusão

O desenvolvimento do **Quiz Interativo** representa a consolidação prática e teórica dos conceitos trabalhados ao longo da disciplina de **Desenvolvimento Web** do curso de **Análise e Desenvolvimento de Sistemas (ADS)** da **Estácio**, integrando a composição da **nota final** do período.

---

### 💡 Impacto Arquitetural & Aprendizados

- **Domínio de Fundamentos (Vanilla JS):** A decisão de prescindir de *frameworks* e *bundlers* validou a construção de aplicações reativas utilizando apenas recursos nativos da Web (ES6 Modules, DOM API e Web Storage API).
- **Rigor com Engenharia de Software:** A estruturação orientada à norma **ISO/IEC 9126** garantiu a entrega de um sistema modular, legível e preparado para manutenção futura.
- **Formação Acadêmica e Profissional:** O projeto conecta os requisitos de avaliação da faculdade com os padrões de qualidade e arquitetura exigidos pelo mercado de software.

---

> A entrega cumpre integralmente os critérios de avaliação acadêmica, demonstrando na prática como decisões arquiteturais conscientes garantem eficiência, manutenibilidade e confiabilidade sem a necessidade de dependências externas.
