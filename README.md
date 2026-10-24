# Qual país é ideal para mim?

Quiz interativo para descobrir quais países combinam mais com seu perfil, preferências e estilo de vida.

## Recursos

- 64 perguntas em 8 categorias.
- 30 perguntas sorteadas por sessão.
- Resultado com país ideal, compatibilidade, cidades e alternativas.
- Progresso salvo somente no `sessionStorage`.
- Interface responsiva com modo claro e escuro.
- Sem bibliotecas externas, frameworks ou banco de dados.

## Executar localmente

Abra o arquivo `index.html` no navegador ou use uma extensão como Live Server no VS Code.

## Publicar no GitHub Pages

O projeto possui deploy automático configurado em `.github/workflows/deploy.yml`.

Após enviar alterações para a branch `main`, o GitHub Actions publica o site no GitHub Pages.

Em **Settings → Pages**, selecione **GitHub Actions** como fonte de publicação.

## Estrutura

```text
index.html
css/style.css
js/app.js
js/questions.js
js/countries.js
.github/workflows/deploy.yml
```

## Licença

Projeto desenvolvido por [Smeltier](https://github.com/Smeltier).
