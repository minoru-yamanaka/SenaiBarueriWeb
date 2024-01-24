# GitHub através da linha de comando

Um passo a passo rápido para quem pretende subir o seu repositório no GitHub!
Tenha certeza que o seu git está instalado. No terminal ou prompt de comando cheque através do comando <br>
git -v

No GitHub, crie um novo repositório. Na tela onde pede para fazer upload ou criar aquivos, guarde o link HTTPS que será gerad GitHub

Abra o Git Bash ou terminal na pasta onde está o seu projeto

Inicie a pasta como um repositório do Git através do comando:<br>
git init

Em seguida, adicione os arquivos de configuração para preparar o commit:<br>
git add .

Opcional: Adicione um arquivo readme caso não tenha iniciado o repositório com ele:<br>
git add README.md

Crie um novo commit para os arquivos que irá subir para o repositório:<br>
git commit -m "first commit"

Suba seus arquivos utilizando a URL gerada no passo 2 no seguinte comando:<br>
git remote add origin URL-GERADA-PELO-PASSO-2-AQUI

Autorize o upload com seu login e senha:<br>
git push -u origin master

---

git init  # (apenas se o repositório não existir) <br>
git add nome-do-arquivo<br>
git commit -m "Mensagem de commit descritiva"<br>
git remote add origin URL-do-Repositório-Remoto  <br># (apenas se o remoto não estiver configurado)<br>
git push -u origin branch