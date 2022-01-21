import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { Container, OrderButton } from "./styles";

export type OrderItem = {
  id: number;
  value: string;
  title: string;
  active: boolean;
  order: string;
};

const orderByList: OrderItem[] = [
  {
    id: 1,
    value: "engagement",
    title: "Engajamento",
    active: true,
    order: "asc",
  },
  {
    id: 2,
    value: "interactions",
    title: "Envolvimento",
    active: false,
    order: "asc",
  },
  { id: 3, value: "date", title: "Recente", active: false, order: "asc" },
  {
    id: 4,
    value: "followers",
    title: "Seguidores",
    active: false,
    order: "asc",
  },
  {
    id: 5,
    value: "commets",
    title: "Comentários",
    active: false,
    order: "asc",
  },
];

interface IOrderButton {
  onOrder: (data: OrderItem) => void;
}

export const OrderButtons = ({ onOrder }: IOrderButton) => {
  const [orderList, setOrderList] = useState<OrderItem[]>(orderByList);

  function handleOnClickButton(data: OrderItem) {
    const { id } = data;
    const auxList = orderList.map((el) =>
      el.id === id
        ? { ...el, order: el.order === "asc" ? "desc" : "asc", active: true }
        : { ...el, active: false }
    );

    onOrder({ ...data, order: data.order === "asc" ? "desc" : "asc" });
    setOrderList(auxList);
  }

  return (
    <Container className="order-buttons">
      <span> Ordenar por</span>
      <div className="order-buttons__list">
        {orderList.map(({ active, id, title, value, order }) => (
          <OrderButton
            onClick={() =>
              handleOnClickButton({ active, id, title, value, order })
            }
            key={id}
            className={`${active ? "is-active" : ""}  order-button`}
          >
            {title}
            {active && title !== "Engajamento" && (
              <FontAwesomeIcon
                className="order-button-icon"
                icon={order === "asc" ? faChevronUp : faChevronDown}
              />
            )}
          </OrderButton>
        ))}
      </div>
    </Container>
  );
};
