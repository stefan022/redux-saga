import {
	DateSelectArg,
	EventClickArg,
} from "@fullcalendar/core";

import "./CalendarEvent.scss"
import { Modal } from "@mui/material";
import { useRef, useState } from "react";
import CalendarDelete from "components/Modals/CalendarDelete/CalendarDelete";
import FullCalendarComponent from "./FullCalendarComponent";
import CalendarAdd from "components/Modals/CalendarAdd/CalendarAdd";

const CalendarEvent = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [ state, setState ] = useState<EventClickArg>();
	const [openModal2, setOpenModal2] = useState<boolean>(false);
	const [ stateModal2, setStateModal2 ] = useState<DateSelectArg>();

	const inputRef = useRef<HTMLInputElement>(null);

	const handleDateSelect = (selectInfo: DateSelectArg) => {
		setOpenModal2(true);
		setStateModal2(selectInfo);
	};

	const handleEventClick = (clickInfo: EventClickArg) => {
		setOpen(true);
		setState(clickInfo);
	};

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleCloseModal2 = () => setOpenModal2(false);

	const handleDeleteEvent = (clickInfo: EventClickArg) => {
		clickInfo.event.remove();

		setOpen(false);
	};

	const handleAdd = (selectInfo: DateSelectArg) => {
		const inputValue = inputRef.current?.value;
		const calendarApi = selectInfo.view.calendar;

		calendarApi.unselect();

		if (inputValue) {
			calendarApi.addEvent({
				title: inputValue,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}

		setOpenModal2(false);
	};

	return (
		<div className="fullcalendar">
			<FullCalendarComponent
				handleDateSelect={handleDateSelect}
				handleEventClick={handleEventClick}
			/>
			<Modal open={open} onClose={handleClose}>
				<CalendarDelete
					handleClose={handleClose}
					handleDelete={() => handleDeleteEvent(state!)}
				/>
			</Modal>
			<Modal open={openModal2} onClose={handleCloseModal2}>
				<CalendarAdd
					inputRef={inputRef}
					handleClose={handleCloseModal2}
					handleAdd={() => handleAdd(stateModal2!)}
				/>
			</Modal>
		</div>
	);
};

export default CalendarEvent;