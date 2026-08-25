/* =========================================================
   CALENDARIO ACTIVA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const calendarDays =
        document.getElementById("calendarDays");

    const calendarMonth =
        document.getElementById("calendarMonth");

    const previousButton =
        document.getElementById("calendarPrev");

    const nextButton =
        document.getElementById("calendarNext");

    const todayButton =
        document.getElementById("calendarToday");


    if (
        !calendarDays ||
        !calendarMonth ||
        !previousButton ||
        !nextButton
    ) {
        return;
    }


    /* =====================================================
       FECHA ACTUAL
    ===================================================== */

    const today = new Date();

    let currentMonth =
        today.getMonth();

    let currentYear =
        today.getFullYear();



    /* =====================================================
       NOMBRES DE LOS MESES
    ===================================================== */

    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];



    /* =====================================================
       RENDERIZAR CALENDARIO
    ===================================================== */

    function renderCalendar() {

        calendarDays.innerHTML = "";


        /* Título */

        calendarMonth.textContent =
            `${monthNames[currentMonth]} ${currentYear}`;


        /* Primer día del mes */

        const firstDay =
            new Date(
                currentYear,
                currentMonth,
                1
            );


        /* Último día del mes */

        const lastDay =
            new Date(
                currentYear,
                currentMonth + 1,
                0
            );


        const daysInMonth =
            lastDay.getDate();


        /*
         * JavaScript empieza la semana
         * en domingo.
         *
         * Lo convertimos para que:
         *
         * Lunes = 0
         * Domingo = 6
         */

        let startingDay =
            firstDay.getDay();

        startingDay =
            startingDay === 0
                ? 6
                : startingDay - 1;



        /* =================================================
           DÍAS DEL MES ANTERIOR
        ================================================= */

        const previousMonthLastDay =
            new Date(
                currentYear,
                currentMonth,
                0
            ).getDate();


        for (
            let i = startingDay - 1;
            i >= 0;
            i--
        ) {

            const day =
                previousMonthLastDay - i;

            createDay(
                day,
                true
            );
        }



        /* =================================================
           DÍAS DEL MES ACTUAL
        ================================================= */

        for (
            let day = 1;
            day <= daysInMonth;
            day++
        ) {

            createDay(
                day,
                false
            );
        }



        /* =================================================
           DÍAS DEL MES SIGUIENTE
        ================================================= */

        const totalCells =
            calendarDays.children.length;

        const remainingCells =
            42 - totalCells;


        for (
            let day = 1;
            day <= remainingCells;
            day++
        ) {

            createDay(
                day,
                true
            );
        }

    }



    /* =====================================================
       CREAR DÍA
    ===================================================== */

    function createDay(
        day,
        otherMonth
    ) {

        const dayElement =
            document.createElement("div");


        dayElement.classList.add(
            "calendar-day"
        );


        if (otherMonth) {

            dayElement.classList.add(
                "other-month"
            );

        }


        /* Número */

        const number =
            document.createElement("div");


        number.classList.add(
            "calendar-day-number"
        );


        number.textContent =
            day;


        dayElement.appendChild(
            number
        );



        /* =================================================
           DÍA ACTUAL
        ================================================= */

        if (
            !otherMonth &&
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {

            dayElement.classList.add(
                "today"
            );

        }


        calendarDays.appendChild(
            dayElement
        );

    }



    /* =====================================================
       MES ANTERIOR
    ===================================================== */

    previousButton.addEventListener(
        "click",
        () => {

            currentMonth--;

            if (currentMonth < 0) {

                currentMonth = 11;

                currentYear--;

            }

            renderCalendar();

        }
    );



    /* =====================================================
       MES SIGUIENTE
    ===================================================== */

    nextButton.addEventListener(
        "click",
        () => {

            currentMonth++;

            if (currentMonth > 11) {

                currentMonth = 0;

                currentYear++;

            }

            renderCalendar();

        }
    );



    /* =====================================================
       VOLVER A HOY
    ===================================================== */

    if (todayButton) {

        todayButton.addEventListener(
            "click",
            () => {

                currentMonth =
                    today.getMonth();

                currentYear =
                    today.getFullYear();

                renderCalendar();

            }
        );

    }



    /* =====================================================
       INICIAR
    ===================================================== */

    renderCalendar();

});