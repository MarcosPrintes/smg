import Masonry from 'react-masonry-css';

import { Card } from "@/components/Card";

import { Container, FeedContent } from './styles';

export const Feed = () => {
    return (
        <Container>
            <FeedContent className="feed-content">
                <Masonry
                    breakpointCols={{default: 3, 1480: 2, 1024: 1, }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <Card text="aksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLAS" />
                    <Card text="aksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLASaksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLASaksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLASaksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLAS aksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLASv" />
                    <Card text="aksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsd" />
                    <Card text="aksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLAS" />
                    <Card text="aksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLASaksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLASaksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLASaksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLAS aksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsdkajshdkajsdhlaSDHLASv" />
                    <Card text="aksjdhaskdjahsdkjahsdakjsdhaksjdhaksjdhaksjdhaksjdhaksdjhaksdjhaksdhjaksdjhaskdjhaskdjahsd" />     
                    <Card text="kajshdkajsdhlaSDHLASv" />
                </Masonry>

            </FeedContent>
        </Container>
    )
}