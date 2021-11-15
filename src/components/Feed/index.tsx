import { Header } from "@/components/Header";
import { Card } from "@/components/Card";

import { Container, FeedContent } from './styles';

export const Feed = () => {
    return (
        <Container>
            <Header />
            <FeedContent className="feed-content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </FeedContent>
        </Container>
    )
}