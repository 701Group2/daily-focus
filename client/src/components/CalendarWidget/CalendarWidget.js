/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import Event from "./EventView/EventView.js";

export default function CalendarWidget() {
    const [selected, setSelected] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [eventList, setEventListState] = useState({
        events: [
            {
                id: 1,
                date: 1,
                month: 2,
                title: "test1",
                description: "this is test 1",
                show: false,
            },
            {
                id: 2,
                date: 17,
                month: 2,
                title: "test2",
                description: "this is test 2",
                show: false,
            },
            {
                id: 3,
                date: 17,
                month: 2,
                title: "test3",
                description: "this is test 3",
                show: false,
            },
            {
                id: 4,
                date: 1,
                month: 3,
                title: "test4",
                description: "this is test 4",
                show: false,
            },
        ],
    });
    const [showEvents, showEventsState] = useState(false);

    //function to update event list element
    const titleChangedHandler = (event1, id) => {
        const eventIndex = eventList.events.findIndex((p) => {
            return p.id === id;
        });

        const event = { ...eventList.events[eventIndex] };
        event.title = event1.target.value;
        const eventsTemp = [...eventList.events];
        eventsTemp[eventIndex].title = event.title;
        setEventListState({ events: eventsTemp });
    };

    const descriptionChangedHandler = (event2, id) => {
        const eventIndex = eventList.events.findIndex((p) => {
            return p.id === id;
        });

        const event = { ...eventList.events[eventIndex] };
        event.description = event2.target.value;
        const eventsTemp = [...eventList.events];
        eventsTemp[eventIndex].description = event.description;
        setEventListState({ events: eventsTemp });
    };

    //function to select event
    const selectEventHandler = (id) => {
        const eventIndex = eventList.events.findIndex((p) => {
            return p.id === id;
        });

        const event = { ...eventList.events[eventIndex] };
        const doesShow = event.show;
        const eventsTemp = [...eventList.events];
        eventsTemp[eventIndex].show = !doesShow;
        setEventListState({ events: eventsTemp });
    };

    //function to create an event
    const createEventHandler = () => {};

    //function to delete an event
    const deteleEventHandler = (eventIndex) => {
        const eventsTemp = [...eventList.events];
        eventsTemp.splice(eventIndex, 1);
        setEventListState({ events: eventsTemp });
    };

    //function to toggle event list
    const toggleEventsHandler = () => {
        const doesShow = showEvents.showEvents;
        showEventsState({ showEvents: !doesShow });
    };

    const onChange = (date) => {
        setDate(date);
    };

    //renders the array
    const content = ({ date }) => (
        <div>
            {eventList.events.map((event) =>
                event.date === date.getDate() && event.month === date.getMonth()
                    ? event.title
                    : null
            )}
        </div>
    );

    let events = null;

    if (showEvents.showEvents) {
        events = (
            <div>
                {eventList.events.map((event, index) => {
                    return (
                        <Event
                            date={event.date}
                            month={event.month}
                            title={event.title}
                            show={event.show}
                            description={event.description}
                            click={() => selectEventHandler(event.id)}
                            delete={() => deteleEventHandler(index)}
                            changeTitle={(event1) => titleChangedHandler(event1, event.id)}
                            changedDescription={(event2) =>
                                descriptionChangedHandler(event2, event.id)
                            }
                            key={event.id}
                        />
                    );
                })}
            </div>
        );
    }

    // Button styling
    const style = {
        backgroundcolor: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer",
    };

    return (
        <div>
            <div style={{ width: "400px" }}>
                <Calendar
                    onClickDay={(value) => setSelected(value)}
                    tileContent={content}
                    onChange={onChange}
                />
            </div>

            <button onClick={toggleEventsHandler} style={style}>
                Toggle Events
            </button>
            <button style={style}>add Event</button>
            <input type="text" defaultValue="title" />
            <input type="text" defaultValue="description" />
            {events}
        </div>
    );
}
