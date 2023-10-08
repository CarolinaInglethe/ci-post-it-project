# ci-post-it-project

## Projeto Sistema Web de lembretes - DTI


### :heart_on_fire: O projeto é fullstack  .
 - A  api e o fornt-end se encontra juntos dentro do projeto separados por 2 pastas : <strong> api-post-it </storng> e <strong>client-post-it </storng> ;
 - O front-end é com React.js + vite .
 - O back-end é com Node.js e express.

![image](https://github.com/CarolinaInglethe/ci-post-it-project/assets/83843286/0faa9c6e-b069-4df8-b161-74fed954e78b)



##


## :heavy_check_mark: Iniciando o Projeto :
 #### Dentro da pasta Raiz do projeto rode 
- :green_circle: Comando para rodar o projeto Frontend+Backend  (Recomendado) : <strong>npm run project</strong> ;
- :black_circle: Comando para rodar somente api (back-end) : <strong>yarn start</strong>;
- :black_circle: Comando para rodar somente front-end : <strong> npm run client </strong>.

##

###  :gear: Instalações necessárias para rodar localmente :
 -  npm , git e node.js v18.12.1.
 - Para o banco local <strong> mysql-server e também Mysql-Workbanch </strong>.
 - As bibliotecas usadas foram react+vite no front end, e no back end instalado as bibliotecas express, nodemon, cors yarn.

##

###  :gear: Ação Necessária antes de rodar o projeto :
 - Dar npm install na pasta raiz;
 - <strong> npm install na pasta client-post-it </strong> e <strong> npm install dentro da pasta api-post-it </strong> para installar as bibliotecas do projeto.

##

###  :gear: :dolphin: <strong> Configuração de conexao com Banco Mysql </strong>:
  - Mysql instalado pelo linux ubuntu 20.04 + Mysql workbanch 8.
( No meu caso segui passo a passo de instalação: https://www.youtube.com/watch?v=CnRRCTMvs8Q&t=599s&ab_channel=hcode pois estou usando o subsistema linux com WSL no Windows )
 - 1°  <storng>sudo apt update</strong>
   
 - 2° <storng>sudo apt install mysql-server</strong>
   
 - 3° <storng> sudo mysql_secure_installation </strong>( configurar mysql)
   
 - 4° <storng> mysql -u root -p </strong> ( criar senha do usuario root ) <br>
  ATENÇÃO : Seu usuario root deverá ser o mesmo que especifiquei na api (backend) que está se conectando com o banco. <br>
No caso eu criei como root@localhost e a senha Carol987654321* (pois necessitou uma senha forte ) ,para que a api se conecte ao seu banco você deverá configurar seu banco com mesmo root e senha que coloquei no arquivo <strong>api-post-it/db.js </strong> !  Caso contrário terá que alterar o código da api no arquivo <strong>api-post-it/db.js</strong> e alterar o root e a senha para a qual você criou no banco.

 - 5º Ao criar a senha irá entrar no mysql via terminal ->  rodar comandos para criar banco e tabela que a API espera no arquivo <strong>db.js</strong> que no caso é <strong>'dblembretes'</strong> e uma tabela <storng>'lembretes' </strong> :
 - CREATE DATABASE dblembretes;
 - CREATE TABLE dblembretes.lembretes (
     id INT NOT NULL AUTO_INCREMENT,
     texto VARCHAR(45) NOT NULL,
     data DATE NOT NULL,
     PRIMARY KEY (id));
    
 - 6° ou em vez de fazer o 5° passo pode  installar o Mysql Workbench (  ter uma vizualização do banco e criar o banco e a tabela que a API espera no arquivo db.js que no caso é 'dblembretes' e uma tabela 'lembretes' pelo Workbanch ). 
