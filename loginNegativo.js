import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai"
should()

describe("Login Negativo", function() {
  it("TC002.002 - Login sem credenciais", async function() {
  //DADO que o usuário abra o navegador
  let driver = await new Builder().forBrowser("chrome").build()
  //E navegue até o site
  await driver.get("https://www.radiopopular.pt/")
  await sleep (1000)

  //E clique no botão "aceitar" do cookie
  await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 

  //E clique no ícone de usuário
  await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()

  //Quando o usuário não preenche o campo "Endereço de email"

  //E não preenche o campo "Palavra-Passe"

  //E clica no botão "Entrar"
  await driver.findElement(By.id("submitlogin")).click()

  //Então o usuário não acessa a página "Minha conta" e permanece na página "ENTRAR OU CRIAR UMA CONTA" (assertion) 
  let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]")).getText()
  .then(function(value) {
    return value
  })
  
  //Fechar o navegador
  await driver.quit()
  })  


  it("TC002.003 - Login inválido com password vazia", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //Quando o usuário preenche o campo "Endereço de email"
    await driver.findElement(By.id("email")).sendKeys("worktests345@gmail.com", Key.RETURN)
    let mailText = await driver.findElement(By.id("email")).getText()
    .then(function(value) {
      return value
    })
    await sleep (2000)
  
    //E não preenche o campo "Palavra-Passe"
  
    //E clica no botão "Entrar"
    await driver.findElement(By.id("submitlogin")).click()
  
    //Então o usuário não acessa a página "Minha conta" e permanece na página "ENTRAR OU CRIAR UMA CONTA" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  }) 


  it("TC002.004 - Login inválido com email vazio", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //Quando o usuário não preenche o campo "Endereço de email"
  
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.css("#password")).sendKeys("Testestrabalho345", Key.RETURN)
    let passText = await driver.findElement(By.css("#password")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E clica no botão "Entrar"
    await driver.findElement(By.id("submitlogin")).click()
  
    //Então o usuário não acessa a página "Minha conta" e permanece na página "ENTRAR OU CRIAR UMA CONTA" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })  


  it("TC002.005 - Login inválido com email inválido sem @", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //Quando o usuário preenche o campo "Endereço de email"
    await driver.findElement(By.id("email")).sendKeys("worktests345gmail.com", Key.RETURN)
    let mailText = await driver.findElement(By.id("email")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.css("#password")).sendKeys("Testestrabalho345", Key.RETURN)
    let passText = await driver.findElement(By.css("#password")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E clica no botão "Entrar"
    await driver.findElement(By.id("submitlogin")).click()
  
    //Então o usuário não acessa a página "Minha conta" e permanece na página "ENTRAR OU CRIAR UMA CONTA" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })  


  it("TC002.006 - Login inválido com password inválida (sem Case-sensitive)", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //Quando o usuário preenche o campo "Endereço de email"
    await driver.findElement(By.id("email")).sendKeys("worktests345@gmail.com", Key.RETURN)
    let mailText = await driver.findElement(By.id("email")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.css("#password")).sendKeys("testestrabalho345", Key.RETURN)
    let passText = await driver.findElement(By.css("#password")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E clica no botão "Entrar"
    await driver.findElement(By.id("submitlogin")).click()
  
    //Então o usuário não acessa a página "Minha conta" e permanece na página "ENTRAR OU CRIAR UMA CONTA" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })
  
  
  it("TC002.007 - Login inválido com email inválido - NIF", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //Quando o usuário preenche o campo "Endereço de email"
    await driver.findElement(By.id("email")).sendKeys("517662485", Key.RETURN)
    let mailText = await driver.findElement(By.id("email")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.css("#password")).sendKeys("testestrabalho345", Key.RETURN)
    let passText = await driver.findElement(By.css("#password")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E clica no botão "Entrar"
    await driver.findElement(By.id("submitlogin")).click()
  
    //Então o usuário não acessa a página "Minha conta" e permanece na página "ENTRAR OU CRIAR UMA CONTA" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  }) 
  
  
  function sleep(ms){
    return new Promise (resolve =>setTimeout(resolve, ms));
  }

})

//npx mocha --no-timeouts "test/loginNegativo.js" (NO TERMINAL PARA RODAR O TESTE)