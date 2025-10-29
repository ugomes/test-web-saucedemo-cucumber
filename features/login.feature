Feature: Login no Saucedomo
  Realizar o Login no site  www.saucedemo.com 
  
Scenario Outline: Realizar login com diferentes usuarios
    Given que estou na página de login
    When  preencho o usuario "<usuario>" e a senha "<senha>"
    And clicar no botao de login
    Then vou para a página "<url>" e vejo "<titulo_secao>"

    Examples:
      | usuario          | senha        | url       | titulo_secao |
      | standard_user    | secret_sauce | inventory | Product      | 
      | locked_out_user  | secret_sauce | inventory | Product      |
      | problem_user     | secret_sauce | inventory | Product      |
      | performance_glitch_user | secret_sauce | inventory | Product |
    