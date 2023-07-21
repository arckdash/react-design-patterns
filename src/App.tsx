import { useState } from 'react'
import { SplitScreen } from './layouts'
import { Portfolio, Sidebar } from './components'
import List from './layouts/List'
import people from './mock/people.json';
import LargePeopleListItem from './components/PeopleListItem/LargePeopleListItem';
import SmallPeopleListItem from './components/PeopleListItem/SmallPeopleListItem';
import Modal from './layouts/Modal';

function App() {
    return (
        <>
            <h2>Split screen Layout</h2>
            <SplitScreen leftWeight={1} rightWeight={3}>
                <Sidebar title='Org Name.' />
                <Portfolio />
            </SplitScreen>

            <h2>List</h2>
            <h3>People Large list</h3>
            <List items={people} resourceName='people' itemComponent={LargePeopleListItem} />
            <h3>People Small list</h3>
            <List items={people} resourceName='people' itemComponent={SmallPeopleListItem} />

            <Modal>
                <LargePeopleListItem people={{ name: 'test', nationality: 'NZ' }} />
            </Modal>
        </>
    )
}

export default App
