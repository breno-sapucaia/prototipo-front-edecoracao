import Index from '../components/template/Index/Index'
import ProductRegister from '../components/register/Product/ProductRegister'
const items = {
    dashboard:[
        {
            id:1,
            name:'Índicie', 
            icon:'fa fa-map',
            path:'/',
            component:Index,
        },
        {
            id:2,
            name:'Agenda',
            icon:'fa fa-calendar',
            path:'/agenda',
            component:''
        },
        {
            id:3,
            name:'Minha conta',
            icon:'fa fa-flag',
            path:'/minha-conta'
        },
        {
            id:4,
            name:'Sobre a versão',
            icon:'fa fa-info-circle',
            path:'/sobre-a-versao'
        },
        {
            id:5,
            name:'Dashboard',
            icon:'fa fa-tachometer',
            path:'/minha-conta'
        },
        {
            id:6,
            name:'Ferramentas',
            icon:'fa fa-wrench',
            path:'/ferramentas'
        },
        {
            id:7,
            name:'Configuracoes',
            icon:'fa fa-cogs',
            path:'/configuracoes'
        }
    ],
    register:[
        {
            id:8,
            name:'Clientes e Fornecedores',
            icon:'fa fa-users',
            path:'/cadastros/clientes-e-fornecedores'
        },
        {
            id:9,
            name:'Produtos',
            icon:'fa fa-tags',
            path:'/cadastros/produtos',
            component:ProductRegister
        },
        {
            id:10,
            name:'Descrição dos Produtos',
            icon:'fa fa-sitemap',
            path:'/cadastros/descrição-dos-produtos'
        },
        {
            id:11,
            name:'Estoque',
            icon:'fa fa-inbox',
            path:'/cadastros/estoque'
        },
        {
            id:12,
            name:'Funcinários e Cargos',
            icon:'fa fa-cogs',
            path:'/cadastros/usuario-e-cargos'
        }
    ],
    salles: [
        {
            id:13,
            name:'Orçamentos',
            icon:'fa fa-shopping-cart',
            path:'/vendas/orcamentos'
        },
        {
            id:14,
            name:'Pedidos',
            icon:'fa fa-cart-arrow-down',
            path:'/cadastros/pedidos'
        },
        {
            id:15,
            name:'Notas Fiscais',
            icon:'fa fa-sticky-note',
            path:'/cadastros/nota-fiscal'
        },
        {
            id:16,
            name:'Comissões',
            icon:'fa fa-star',
            path:'/cadastros/comissao'
        },
        {
            id:17,
            name:'Relatório',
            icon:'fa fa-bar-chart',
            path:'/cadastros/relatorios'
        }
    ]
 }

export function dashboard(){
    return items.dashboard
}
export function salles(){
    return items.salles
    
}
export function register(){
    return items.register
}
export { items }