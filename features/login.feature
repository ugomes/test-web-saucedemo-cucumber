Feature: Login no Saucedemo
  Realizar o Login no site  www.saucedemo.com 

@smoke @positivo
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

@negativo @credenciais-invalidas
Scenario Outline: Realizar login com credenciais inválidas
    Given que estou na página de login
    When  preencho o usuario "<usuario>" e a senha "<senha>"
    And clicar no botao de login
    Then vejo a mensagem de erro "<mensagem_erro>"

    Examples:
      | usuario          | senha           | mensagem_erro                                                    |
      | usuario_invalido | secret_sauce    | Epic sadface: Username and password do not match any user in this service |
      | standard_user    | senha_invalida  | Epic sadface: Username and password do not match any user in this service |
      | usuario_invalido | senha_invalida  | Epic sadface: Username and password do not match any user in this service |

@negativo @campos-vazios
Scenario Outline: Realizar login com campos vazios
    Given que estou na página de login
    When  preencho o usuario "<usuario>" e a senha "<senha>"
    And clicar no botao de login
    Then vejo a mensagem de erro "<mensagem_erro>"

    Examples:
      | usuario      | senha        | mensagem_erro                              |
      |              |              | Epic sadface: Username is required         |
      |              | secret_sauce | Epic sadface: Username is required         |
      | standard_user|              | Epic sadface: Password is required         |
