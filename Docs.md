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


## Button

- [x] Ao passar o mouse a cor do button é alterada.
- [x] O título e ícone são recebido via props.
- [x] É opcional utilizar o ícone e este recebe o link para o endereço da imagem.
- [x] Além disso, o componente conta com as suas versões responsivas.

### :page_facing_up: Forma de uso

```jsx
<Button title="Criar" icon="./assets/icons/exemplo.svg" />
```

| Nome    | Tipo     | Descrição                        |
| ------- | -------- | -------------------------------- |
| `title` | `string` | Texto que será exibido no botão. |
| `icon`  | `string` | Endereço da ícone.               |

### :movie_camera: GIF demonstrativo

:warning: A cor que está no GIF está com bastante saturação, a cor real é bem mais clara.

<p align=center >
<img src="https://user-images.githubusercontent.com/50140771/128616352-38370970-5ff6-45a4-ba93-9828851b4d5a.gif"/>

https://user-images.githubusercontent.com/50140771/128664357-3dec24ea-66f4-4b2c-b0b2-7e1bb9e06828.mp4

## Card Commerce

Card responsável por listar os dados do comércio, como sua logo, nome, endereço, e horários para funcionamento.
Ao ser clicado, o usuário é redirecionado para a página perfil do comércio.

- [x] Ao passar o mouse há um efeito discreto de zoom.
- [x] O título, ícone, endereço e sete opções de horários (há a opção de passar apenas um horário, dois, três... até sete) todos são recebidos via props.
- [x] Além disso, o componente conta com as suas versões responsivas.

### :page_facing_up: Forma de uso

```jsx
<CardCommerce
  icon={icon}
  route="About"
  title="Hamburgueria Lá em Robson"
  adress="Rua Celso Cirne, 449 - Solânea "
  times: {[
        { days_hours: 'Seg, ter : 14h - 23h' },
        { days_hours: 'Qua : Fechado' },
        { days_hours: 'Qui : 16h - 23h' },
        { days_hours: 'Sáb: 15h - 23:30h' },
        { days_hours: 'Dom: 12h- 22h' },
    ]}
/>
```

| Nome     | Tipo     | Descrição                                                          |
| -------- | -------- | ------------------------------------------------------------------ |
| `icon`   | `string` | Endereço da ícone.                                                 |
| `route`  | `string` | Rota ao qual o componente deve ser redirecionado após ser clicado. |
| `title`  | `string` | Nome do estabelecimento comercial.                                 |
| `adress` | `string` | Endereço do estabelecimento comercial.                             |

### :movie_camera: Vídeo demonstrativo

https://user-images.githubusercontent.com/50140771/128963485-342d04b5-8bde-44fd-916e-b86207f43646.mp4

## Card List Menu

## Carousel

## Category Card

Responsável por listar as opções de comércios de um dado segmento.

- [x] Ao clicar no card a cor é alterada bem como a direção do dropdown.
- [x] O título e a imagem utilizada são recebidos via props.
- [x] Além disso, o componente conta com a sua versão responsiva.

### :page_facing_up: Forma de uso:

```jsx
import { CategoryCard } from './Components/CategoryCard'
;<CategoryCard title="Todas" imageUrl={icon} />
```

| Nome       | Tipo     | Descrição                                                                     |
| ---------- | -------- | ----------------------------------------------------------------------------- |
| `title`    | `string` | Título da categoria ao qual o comércio pertence.                              |
| `imageUrl` | `string` | Endereço da imagem que representa a categoria ao qual o comércio se enquadra. |

### :movie_camera: GIF demonstrativo

<p align=center >
<img src="https://user-images.githubusercontent.com/50140771/128279159-be15f44e-fbd5-4201-8201-0dea0a34b684.gif"/>
 </p>

**Exemplo:** Dado que o cliente deseja visualizar quais os estabelecimentos que vendem pizza
ele irá clicar no card que há a opção "Pizza" e assim as pizzarias serão listadas.

## Category Tags

É utilizado para selecionar quais serão as categorias de produtos ao qual o estabelecimento dispõe.

- [x] Ao clicar na tag a cor é alterada.
- [x] O título é recebido via props.
- [x] Além disso, o componente conta com a sua versão responsiva.

## :page_facing_up: Forma de uso:

```jsx
<CategoryTags title="Pizza" />
```

| Nome    | Tipo     | Descrição                |
| ------- | -------- | ------------------------ |
| `title` | `string` | Título de uma categoria. |

### :movie_camera: GIF demonstrativo

<p align=center >
<img src="https://user-images.githubusercontent.com/50140771/128273336-e2033fd1-bd77-4c1a-a2c9-111a1efb95a0.gif"/>
    
## Commerce Category Card
  
## Check Category

O componente é usado para que o usuário consiga selecionar quais cateogorias o comércio se identifica.
  
### :page_facing_up: Forma de uso:
  
```jsx
<CheckCategory categoryName="Pizza" />
```
  
| Nome    | Tipo     | Descrição                |
| ------- | -------- | ------------------------ |
| `categoryName` | `string` | Título da label. |

<p align=center >
<img src="https://user-images.githubusercontent.com/50140883/133528357-c087e24b-68b2-47ab-95b4-723fc12df5d7.png"/>

## Header

O Header é utilizado para que o usuário consiga navegar no site. O componente possui três links para as páginas principais do sistema: `Página inicial`, `categorias` e `Login` ou `Meu perfil`.

A ideia é que uma vez logado, o header do usuário (comércio) não possui mais o link do login, mas sim o do `Meu perfil`, para dessa forma facilitar a navegação do usuário.

## :page_facing_up: Forma de uso:

```jsx
<Header />
```

### :movie_camera: GIF demonstrativo

https://user-images.githubusercontent.com/42751604/127779934-86192da4-7a44-4980-86f0-651c7d03be15.mp4

## CommerceInfo

O componente exibe as informações do comércio selecionado, contendo redes sociais, telefone e horários
  
### :page_facing_up: Forma de uso:
  
```jsx
<CommerceInfo 
    name="Exemplo" 
    image="./assets/icons/example.svg" 
    social_medias={{instagram: "instagram.com", facebook: "facebook.com", email: "email.example@hotmail.com"}} 
    address="Beco do timbú" 
    phone="83994116317" 
    hours={
              [
                { day: 'Segunda-feira', opens: '08:00', closes: '18:00' }, 
                { day: 'Terça-feira', opens: '08:00', closes: '18:00' }
              ]
          }
/> 
```
  
| Nome    | Tipo     | Descrição                |
| ------- | -------- | ------------------------ |
| `name` | `string` | Nome do estabelecimento |
| `image` | `string` | Endereço da imagem |
| `social_medias` | `object` | Links para redes sociais |
| `address` | `string` | Endereço |
| `phone` | `string` | Número do whatsapp |
| `hours` | `array` | Lista de horários |

  
### :movie_camera: vídeo demonstrativo

<p align=center >

  https://user-images.githubusercontent.com/50140883/133528944-b53d7439-c37a-4f11-9780-e83bdea0fcf5.mp4

  
## Image Perfil

## Modal Card Login

  Componente responsável por efetuar login do usuário no sistema
  
  ### :page_facing_up: Forma de uso:
  
```jsx
  <LoginCard />
```
  
### :movie_camera: vídeo demonstrativo

<p align=center >

  

https://user-images.githubusercontent.com/50140883/133529232-747057c8-357d-430f-a8c3-bef646512c3e.mp4
  
  
## Modal Edit Product
  
  Componente responsável por cadastrar e editar informações a respeito de um produto
  
  ### :page_facing_up: Forma de uso:
  
```jsx
<EditModal 
           categoryList={ 
              [ 
                  {  name: "Hamburguer" }, { name: "Tapioca" } 
              ] 
           } 
/>

```
  
| Nome    | Tipo     | Descrição                |
| ------- | -------- | ------------------------ |
| `categoryList` | `object` | Lista de categorias selecionáveis |

  
### :movie_camera: vídeo demonstrativo

<p align=center >

  https://user-images.githubusercontent.com/50140883/133528944-b53d7439-c37a-4f11-9780-e83bdea0fcf5.mp4

  
  

## Modal Time Listing Card

O componente `ServiceHours` tem como objetivo listar os horários de atendimento de um comércio.

## :page_facing_up: Forma de uso:

Esse é um exemplo de forma de uso do componente

```jsx
<ServiceHours
  hours={[
    { day: 'Segunda-feira', opens: '08:00', closes: '18:00' },
    { day: 'Terça-feira', opens: '18:00', closes: '18:00' },
    { day: 'Quarta-feira', opens: '12:00', closes: '18:00' },
    { day: 'Quinta-feira', opens: '11:00', closes: '18:00' },
    { day: 'Sexta-feira', opens: '08:00', closes: '18:00' },
  ]}
/>
```

| Nome    | Tipo   | Descrição                                                                                             |
| ------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `hours` | `list` | Lista de objetos contendo a seguinte estrutura: `[{day: 'Domingo', opens: '00:00', closes: '00:00'}]` |

### :movie_camera: GIF demonstrativo

https://user-images.githubusercontent.com/42751604/127795138-7e33d98b-d17c-4dba-bc4c-fe5ecd92d3f5.mp4

## Product card

O componente `ProductCard` tem como objetivo mostrar ao usuário uma visualização do produto do cardápio do comércio.

## :page_facing_up: Forma de uso:

Esse é um exemplo de forma de uso do componente

```jsx
import Coxinha from '../../assets/images/coxinha.png'

<ProductCard
    image={Coxinha}
    title='Coxinha de frango',
    alt='* coxinhas laranjas em cima de um prato'
    description='Lorem ipsum is simply'
    price='8.50'
    editable={true}
/>
```

| Nome          | Tipo     | Descrição                                                    |
| ------------- | -------- | ------------------------------------------------------------ |
| `image`       | `bit`    | Imagem do produto.                                           |
| `title`       | `string` | Título do produto.                                           |
| `alt`         | `string` | Descrição da imagem que está sendo enviada                   |
| `description` | `string` | Descrição do produto                                         |
| `price`       | `number` | Preço do produto                                             |
| `editable`    | `bool`   | booleando indicando se o componente pode ser editável ou não |

### :movie_camera: GIF demonstrativo

https://user-images.githubusercontent.com/42751604/128377074-e1041191-5fc2-4e37-8471-ecf43cc0a516.mp4

## Register Hours

O componente `RegisterSchedules` tem como objetivo permitir que o usuário cadastre os horários de atendimento do estabelecimento.

## :page_facing_up: Forma de uso:

Esse é um exemplo de forma de uso do componente

```jsx
<RegisterSchedules />
```

### :movie_camera: GIF demonstrativo

https://user-images.githubusercontent.com/42751604/132227802-dc0095e0-9899-4f1b-96ad-8b3a504ef770.mp4

