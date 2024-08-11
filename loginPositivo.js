import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai"
should()

async function loginPositivo() {
  //TC002.001 - Login válido com credenciais válidas (Happy Path)
  
  //DADO que o usuário abra o navegador
  let driver = await new Builder().forBrowser("chrome").build()
  //E navegue até o site
  await driver.get("https://www.radiopopular.pt/")
  await sleep (1000)
 
  //E clique no botão "aceitar" do cookie
  await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  await sleep (1000)
  
  //E clique no ícone de usuário
  await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  await sleep (1000)

  //Quando o usuário preenche o campo "Endereço de email"
  await driver.findElement(By.id("email")).sendKeys("worktests345@gmail.com", Key.RETURN)
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

  //Então o usuário acessa a página "A minha conta" (assertion - Validação do título para verificar se o clique teve efeito)
  let title = await driver.getTitle();
  title.should.equal('Dados da conta');    

  // Forçar o fechamento do navegador
  await driver.quit();
  console.log("Browser forced to close.");

  function sleep(ms){
    return new Promise (resolve =>setTimeout(resolve, ms));
  }

}

loginPositivo()

//CLICAR NO RUN PARA RODAR O TESTE

