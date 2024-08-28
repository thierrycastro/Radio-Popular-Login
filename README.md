## Projeto: Rádio Popular

### Teste Automatizado: Verificação de Funcionalidade do Cadastro

### Objetivo
O objetivo deste teste é verificar é assegurar que o sistema de autenticação permite que usuários legítimos acessem suas contas de forma segura e eficaz, enquanto impede acessos não autorizados. O teste deve garantir que todos os requisitos funcionais e não funcionais do processo de login sejam atendidos, desde a validação de credenciais até a proteção contra tentativas de acesso maliciosas.

### Escopo
- Página: https://www.radiopopular.pt/
- Navegadores: Chrome Versão 125.0.6422.176 (x64 bits)
- Dispositivos: Desktop
- Sistema Operacional: Windows 10
- Ferramenta de Teste: Selenium Webdriver

### Pré-condições
1. O ambiente de teste deve estar configurado e acessível.
2. Selenium Webdriver deve estar instalado e configurado no projeto.

### Para a execução do teste:
Execute o Selenium: clicar no RUN (Para o teste Positivo)

Execute o Selenium: npx mocha --no-timeouts "test/loginNegativo.js" (Para o teste Negativo)

### Notas
- Em caso de falha, adicione comentários detalhados sobre o erro encontrado.
- Anexe capturas de tela, se necessário.

### Status
- **Data do Teste:** 09/08/2024
- **Testador:** Thierry Castro
