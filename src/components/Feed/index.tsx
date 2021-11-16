import {useEffect, useRef} from 'react';

import Masonry from 'react-masonry-css';

import { Card } from "@/components/Card";

import { Container, FeedContent } from './styles';

const cards = [
    {id: 1,text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
    {id: 2,text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"},
    {id: 3,text: "Lorem Ipsum is simply dummy text of the printing an"},
    {id: 4,text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
    {id: 5,text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim"},
    {id: 6,text: "Lorem Ipsum is simply dummy text of the printing an"},
]

interface FeedProps {
    onInfiteScroll: () => void;
}

export const Feed = ({onInfiteScroll}:FeedProps) => {
    const feedref = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleScrool(event: Event) {
            if(feedref.current){
                const scrollHeightMinusScrollTop = feedref.current.scrollHeight - feedref.current.scrollTop;
                const feedHeight = feedref.current.clientHeight;

                if(feedHeight === scrollHeightMinusScrollTop) {
                    // request infinite scroll
                    onInfiteScroll()
                }
            }

        }

        feedref.current?.addEventListener("scroll", handleScrool);

        return () => {
            feedref.current?.removeEventListener("scroll", handleScrool);
        }
    }, [])

    return (
        <Container>
            <FeedContent ref={feedref} className="feed-content">
                <Masonry
                    breakpointCols={{default: 3, 1480: 2, 1024: 1, }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {cards.map(card => (
                        <Card key={card.id} text={card.text} />
                    ))}
                </Masonry>

            </FeedContent>
        </Container>
    )
}