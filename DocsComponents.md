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

## Card Commerce
  
## Card List Menu

## Carousel

## Category Card

Responsável por listar as opções de comércios de um dado segmento.

- [X] Ao clicar no card a cor é alterada bem como a direção do dropdown.
- [X] O título e a imagem utilizada são recebidos via props.
- [X] Além disso, o componente conta com a sua versão responsiva.

### Forma de uso:

```jsx
import { CategoryCard } from './Components/CategoryCard'

<CategoryCard title="Todas" imageUrl={icon}/>

```

| Nome        | Tipo    | Descrição|
| ----------- | ----------|------------------------------- |
| `title`     | `string`  | Título da categoria ao qual o comércio pertence|
| `imageUrl`  | `string`  | Endereço da imagem que representa a categoria ao qual o comércio se enquadra|

```

### :movie_camera: GIF demonstrativo

<p align=center >
<img src="https://user-images.githubusercontent.com/50140771/128279159-be15f44e-fbd5-4201-8201-0dea0a34b684.gif"/>
 </p> 

**Exemplo:** Dado que o cliente deseja visualizar quais os estabelecimentos que vendem pizza
ele irá clicar no card que há a opção "Pizza" e assim as pizzarias serão listadas.

## Category Tags
    
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
