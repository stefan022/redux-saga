import Container from 'container/Container'
import { CalendarComponent, Title } from '../../components'
import { Box } from '@mui/material'
import Content from 'content/Content'

const Calendar = () => {
    return (
        <Container>
            <Title title="Calendar"/>
            <Content
                addClassName="w-[600px]"
            >
                <CalendarComponent/>
            </Content>
        </Container>
    )
}

export default Calendar