# Documentation of SoLanches Components

### Índice

- [Button](#Button)
- [Card Commerce](#Card-Commerce)
- [Card List Menu](#Card-List-Menu)
- [Carousel](#Carousel)
- [Category Card](#Category-Card)
- [Category Tags](#Category-Tags)
- [Check Category](#Check-Category)
- [Commerce Category Card](#Commerce-Category-Card)
- [Header](#Header)
- [Infos Commerce](#Infos-Commerce)
- [Image Perfil](#Image-Perfil)
- [Modal Card Login](#Modal-Card-Login)
- [Modal Edit Product](#Modal-Edit-Product)
- [Modal Time Listing Card](#Modal-Time-Listing-Card)
- [Product Card](#Product-Card)
- [Register Hours](#Register-Hours)
- [Text](#Text)

## Button

- [X] Ao passar o mouse a cor do button é alterada.
- [x] O título e ícone são recebido via props.
- [x] É opcional utilizar o ícone e este recebe o link para o endereço da imagem.
- [X] Além disso, o componente conta com as suas versões responsivas.

### :page_facing_up: Forma de uso 
``` jsx
<Button title="Criar" icon="./assets/icons/exemplo.svg"/>
```

| Nome        | Tipo    | Descrição|
| ----------- | ----------|------------------------------- |
| `title`     | `string`  | Texto que será exibido no botão.|
| `icon`  | `string`  | Endereço da ícone.|

### :movie_camera: GIF demonstrativo
:warning: A cor que está no GIF está com bastante saturação, a cor real é bem mais clara.

<p align=center >
<img src="https://user-images.githubusercontent.com/50140771/128616352-38370970-5ff6-45a4-ba93-9828851b4d5a.gif"/>

https://user-images.githubusercontent.com/50140771/128664357-3dec24ea-66f4-4b2c-b0b2-7e1bb9e06828.mp4

## Card Commerce

Card responsável por listar os dados do comércio, como sua logo, nome, endereço, e horários para funcionamento.
Ao ser clicado, o usuário é redirecionado para a página perfil do comércio.
- [X] Ao passar o mouse há um efeito discreto de zoom.
- [x] O título, ícone, endereço e sete opções de horários (há a opção de passar apenas um horário, dois,  três... até sete) todos são recebidos via props.
- [X] Além disso, o componente conta com as suas versões responsivas.


### :page_facing_up:  Forma de uso 

``` jsx
<CardCommerce icon= "./assets/icons/exemplo.svg" route = "About" title="Hamburgueria Lá em Robson" adress= "Rua Celso Cirne, 449 - Solânea "/ >
```
| Nome        | Tipo    | Descrição|
| ----------- | ----------|------------------------------- |
| `icon`     | `string`  | Endereço da ícone.|
| `route`  | `string`  | Rota ao qual o componente deve ser redirecionado após ser clicado.|
| `title`     | `string`  | Nome do estabelecimento comercial.|
| `adress`  | `string`  | Endereço do estabelecimento comercial.|


### :movie_camera: Vídeo demonstrativo

https://user-images.githubusercontent.com/50140771/128963485-342d04b5-8bde-44fd-916e-b86207f43646.mp4
  
## Card List Menu

## Carousel

## Category Card

Responsável por listar as opções de comércios de um dado segmento.

- [X] Ao clicar no card a cor é alterada bem como a direção do dropdown.
- [X] O título e a imagem utilizada são recebidos via props.
- [X] Além disso, o componente conta com a sua versão responsiva.

### :page_facing_up: Forma de uso:

```jsx
import { CategoryCard } from './Components/CategoryCard'

<CategoryCard title="Todas" imageUrl={icon}/>

```

| Nome        | Tipo    | Descrição|
| ----------- | ----------|------------------------------- |
| `title`     | `string`  | Título da categoria ao qual o comércio pertence|
| `imageUrl`  | `string`  | Endereço da imagem que representa a categoria ao qual o comércio se enquadra|


### :movie_camera: GIF demonstrativo

<p align=center >
<img src="https://user-images.githubusercontent.com/50140771/128279159-be15f44e-fbd5-4201-8201-0dea0a34b684.gif"/>
 </p> 

**Exemplo:** Dado que o cliente deseja visualizar quais os estabelecimentos que vendem pizza
ele irá clicar no card que há a opção "Pizza" e assim as pizzarias serão listadas.

## Category Tags

É utilizado para selecionar quais serão as categorias de produtos ao qual o estabelecimento dispõe.

- [X] Ao clicar na tag a cor é alterada.
- [x] O título é recebido via props.
- [X] Além disso, o componente conta com a sua versão responsiva.

## :page_facing_up: Forma de uso: 

``` jsx
    <CategoryTags title="Pizza"/>
```
| Nome        | Tipo    | Descrição|
| ----------- | ----------|------------------------------- |
| `title`     | `string`  | Título de uma categoria. |

### :movie_camera: GIF demonstrativo

<p align=center >
<img src="https://user-images.githubusercontent.com/50140771/128273336-e2033fd1-bd77-4c1a-a2c9-111a1efb95a0.gif"/>
    
## Commerce Category Card
  
## Check Category
  
## Header
 
## Infos Commerce
  
## Image Perfil

## Modal Card Login

## Modal Edit Product 

## Modal Time Listing Card
  
## Product card
 
## Register Hours
 
## Text

