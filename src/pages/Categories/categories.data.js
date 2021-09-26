import todas from '../../assets/images/alimento.svg'
import pizza from '../../assets/images/pizza.svg'
import hamburguer from '../../assets/images/hamburguer.svg'
import sorvete from '../../assets/images/sorvete.svg'
import lanche from '../../assets/images/lanche.svg'

export const categories =  [

    {
        id:1,
        image: todas,
        descricao: 'Todas as categorias',
        title: 'Todas',
        
    },
    {
        id:2,
        image: pizza,
        descricao: 'Pizza',
        title: 'Pizza',
       
    },
    {
        id:3,
        image: hamburguer,
        descricao: 'hamburguer',
        title: 'Hamburguer',
        
    },
    {
        id:4,
        image: sorvete,
        descricao: 'sorvete',
        title: 'Sorvete',
        
    },
    {
        id:5,
        image: lanche,
        descricao: 'lanches',
        title: 'Lanches',
        
    }
];

export default categories
