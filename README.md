# DiaryTS

Essa é uma API muito simples de diário.

## GET /entries

Retorna as entradas no diário: seu id, título e vezes que foi visualizada (viewCount)

## GET /entries/:id

Retorna a entrada no diário com seu título e seu texto, adicionando +1 à contagem de visualizações.

## POST /entries

Adiciona uma entrada no diário. Deve ser enviada num body contendo: 

```JSON
    "title": "seu título aqui",
    "text": "seu texto aqui"
```

## PUT /entries/:id

Edita a descrição de uma entrada. Deve ser enviada num body contendo:

```JSON
    "text": "seu texto atualizado aqui"
```

## DELETE /entries/:id

Deleta uma entrada.