import {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Container, OrderButton } from './styles';



const orderByList = [
    {id:"engajamento", title: "Engajamento", active: false},
    {id:"envolvimeento", title: "Envolvimento", active: false},
    {id:"recente", title: "Recente", active: false},
    {id:"seguidores", title: "Seguidores", active: false},
    {id:"comentarios", title: "Comentários", active: false},
]

export const OrderButtons = () => {
    const [orderList, setOrderList] = useState(orderByList);
    const [currentButtonOrder, setCurrentButtonOrder] = useState<"asc"|"desc">("asc");


    function handleOnClickButton(id: string) {
        const auxList = orderList.map(el => el.id === id ? {...el, active: true}: {...el, active: false})
        setCurrentButtonOrder((prevState => prevState === "asc" ? "desc" : "asc"))
        setOrderList(auxList);
    }

    return (
        <Container className="order-buttons">
            <span> Ordenar por</span>
            <div className="order-buttons__list">
                {orderList.map(({active, id, title}) => (
                    <OrderButton  onClick={() => handleOnClickButton(id)} key={id} className={`${active ? 'is-active' : ''}  order-button`}>
                        {title}
                        {active && (
                            <FontAwesomeIcon
                                className="order-button-icon"
                                icon={currentButtonOrder === "asc" ? faChevronUp : faChevronDown} />
                        )}
                    </OrderButton>
                ))}
            </div>
        </Container>
    )
}