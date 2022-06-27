import { Box, Flex, H1, H4, Panel } from '@bigcommerce/big-design';
import styled from 'styled-components';
import ErrorMessage from '../components/error';
import Loading from '../components/loading';

const Index = () => {

    return (
        <Panel header="Homepage">
            <Flex>
                <H4>BC_Integration_App</H4>
            </Flex>
        </Panel>
    );
};

const StyledBox = styled(Box)`
    min-width: 10rem;
`;

export default Index;
