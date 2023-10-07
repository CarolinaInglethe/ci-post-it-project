# ci-post-it-project

## Teste prático processo seletivo DTI

Em progresso..

### O projeto é fullstack.
 - A  api e o fornt-end se encontra juntos dentro do projeto separados por 2 pastas : api-post-it e client-post-it ;
 - O front end é com React.js .
 - O backend é com Node.js e express.

### Instalações necessárias para rodar localmente :
 -  npm , git e node.js v18.12.1.
 - Para o banco local <strong> mysql-server e também Mysql-Workbanch </strong>.
 - As bibliotecas usadas foram react+vite no front end, e no back end instalado as bibliotecas express, nodemon, cors yarn.

### Ação Necessária antes de rodar o projeto :
 - Dar npm install na pasta raiz;
 - <strong> npm install na pasta client-post-it </strong> e <strong> npm install dentro da pasta api-post-it </strong> para installar as bibliotecas do projeto.

#### <strong> Configurção de conexao com Banco Mysql </strong>:
  - Mysql instalado pelo linux ubuntu 20.04 + Mysql workbanch 8.
( No meu caso segui passo a passo de instalação: https://www.youtube.com/watch?v=CnRRCTMvs8Q&t=599s&ab_channel=hcode pois estou usando o subsistema linux com WSL no Windows )
 - 1° sudo apt update
   
 - 2° sudo apt install mysql-server
   
 - 3° sudo mysql_secure_installation ( configurar mysql)
   
 - 4° mysql -u root -p ( criar senha do usuario root )
  ATENÇÃO  : seu usuario root devera ser o mesmo que a api (backend) está se conectando no caso eu criei como root@localhost e a senha Carol987654321* (pois necessitou uma senha forte ) ,para que a api se conecte ao seu banco você deverá configurar seu banco com mesmo root e senha que coloquei no arquivo api-post-it/db.js! Caso contrário terá que alterar o código da api no arquivo api-post-it/db.js e alterar o root e a senha para a qual você criou no banco.

 - 5º Ao criar a senha irá entrar no mysql via terminal -> <strong> rodar comandos para criar banco e tabela que a API espera no arquivo db.js que no caso é 'dblembretes' e uma tabela 'lembretes' </strong> :
 - CREATE DATABASE dblembretes;
 -  CREATE TABLE dblembretes.lembretes (
     id INT NOT NULL AUTO_INCREMENT,
     texto VARCHAR(45) NOT NULL,
     data DATE NOT NULL,
     PRIMARY KEY (id));
    
 - 6° ou em vez de fazer o 5° passo pode  installar o Mysql Workbench (  ter uma vizualização do banco e criar o banco e a tabela que a API espera no arquivo db.js que no caso é 'dblembretes' e uma tabela 'lembretes' pelo Workbanch ). 

## Iniciando o Projeto :
- Na pasta client-post-it : npm run dev ;
- Na pasta api-post-it : yarn start;
- Na pasta Raiz rode : npm run project ( quando projeto tiver concluido );
