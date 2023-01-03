import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";

const CalendarDemo = () => {
  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = month === 0 ? 11 : month - 1;
  let prevYear = prevMonth === 11 ? year - 1 : year;
  let nextMonth = month === 11 ? 0 : month + 1;
  let nextYear = nextMonth === 0 ? year + 1 : year;


  const [date3, setDate3] = useState(null);
 


  let minDate = new Date();
  minDate.setMonth(prevMonth);
  minDate.setFullYear(prevYear);

  let maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(nextYear);

  let invalidDates = [today];

  addLocale("es", {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    monthNamesShort: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    today: "Hoy",
    clear: "Limpiar",
  });

  const dateTemplate = (date) => {
    if (date.day > 10 && date.day < 15) {
      return (
        <strong style={{ textDecoration: "line-through" }}>{date.day}</strong>
      );
    }

    return date.day;
  };

  return (
    <div>
        <p className="mt-10 text-blue-600 font-bold">Calendar sections </p>
      <div>
        <div className="card container w-56 ml-auto mr-auto">
        
          <div className="p-fluid grid formgrid">
            <div className="field col-12 md:col-4">
              {/* <label htmlFor="icon">Icon</label> */}
              <Calendar
                id="icon"
                value={date3}
                onChange={(e) => setDate3(e.value)}
                showIcon
              />
            </div>
          </div>

        
       
        </div>
      </div>
    </div>
  );
};

export default CalendarDemo;
