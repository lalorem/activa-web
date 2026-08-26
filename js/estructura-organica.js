/* =========================================================
   ESTRUCTURA ORGÁNICA
   Modal + Zoom + PDF
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS
    ====================================================== */

    const openButton = document.getElementById("organigramaOpen");
    const modal = document.getElementById("organigramaModal");
    const closeButton = document.getElementById("organigramaClose");

    const backdrop = modal?.querySelector(".modal-backdrop");

    const modalImage = document.getElementById("organigramaModalImage");
    const viewer = document.getElementById("organigramaViewer");

    const zoomInButton = document.getElementById("zoomIn");
    const zoomOutButton = document.getElementById("zoomOut");
    const zoomResetButton = document.getElementById("zoomReset");

    const downloadButton = document.getElementById("downloadOrganigrama");


    /* =====================================================
       VARIABLES DEL ZOOM
    ====================================================== */

    let zoomLevel = 1;

    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 4;
    const ZOOM_STEP = 0.25;


    /* =====================================================
       ABRIR MODAL
    ====================================================== */

    function openModal() {

        if (!modal) return;

        modal.classList.add("active");

        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        resetZoom();

        setTimeout(() => {

            closeButton?.focus();

        }, 100);

    }


    /* =====================================================
       CERRAR MODAL
    ====================================================== */

    function closeModal() {

        if (!modal) return;

        modal.classList.remove("active");

        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        resetZoom();

    }


    /* =====================================================
       EVENTOS MODAL
    ====================================================== */

    openButton?.addEventListener("click", openModal);

    closeButton?.addEventListener("click", closeModal);

    backdrop?.addEventListener("click", closeModal);


    /* =====================================================
       TECLADO
    ====================================================== */

    document.addEventListener("keydown", (event) => {

        if (!modal?.classList.contains("active")) return;


        /* ESC = CERRAR */

        if (event.key === "Escape") {

            closeModal();

        }


        /* + = ZOOM */

        if (
            event.key === "+" ||
            event.key === "="
        ) {

            zoomIn();

        }


        /* - = REDUCIR */

        if (event.key === "-") {

            zoomOut();

        }


        /* 0 = RESET */

        if (event.key === "0") {

            resetZoom();

        }

    });


    /* =====================================================
       ACTUALIZAR ZOOM
    ====================================================== */

    function updateZoom() {

        if (!modalImage) return;

        modalImage.style.transform =
            `scale(${zoomLevel})`;

    }


    /* =====================================================
       ZOOM IN
    ====================================================== */

    function zoomIn() {

        if (zoomLevel >= MAX_ZOOM) return;

        zoomLevel += ZOOM_STEP;

        zoomLevel =
            Math.min(zoomLevel, MAX_ZOOM);

        updateZoom();

    }


    /* =====================================================
       ZOOM OUT
    ====================================================== */

    function zoomOut() {

        if (zoomLevel <= MIN_ZOOM) return;

        zoomLevel -= ZOOM_STEP;

        zoomLevel =
            Math.max(zoomLevel, MIN_ZOOM);

        updateZoom();

    }


    /* =====================================================
       RESET ZOOM
    ====================================================== */

    function resetZoom() {

        zoomLevel = 1;

        updateZoom();

        if (viewer) {

            viewer.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });

        }

    }


    /* =====================================================
       BOTONES DE ZOOM
    ====================================================== */

    zoomInButton?.addEventListener(
        "click",
        zoomIn
    );


    zoomOutButton?.addEventListener(
        "click",
        zoomOut
    );


    zoomResetButton?.addEventListener(
        "click",
        resetZoom
    );


    /* =====================================================
       ZOOM CON RUEDA DEL MOUSE
    ====================================================== */

    viewer?.addEventListener(
        "wheel",
        (event) => {

            if (!modal?.classList.contains("active")) {
                return;
            }


            event.preventDefault();


            if (event.deltaY < 0) {

                zoomIn();

            } else {

                zoomOut();

            }

        },
        {
            passive: false
        }
    );


    /* =====================================================
       ZOOM CON DOBLE CLICK
    ====================================================== */

    modalImage?.addEventListener(
        "dblclick",
        () => {

            if (zoomLevel === 1) {

                zoomLevel = 2;

            } else {

                zoomLevel = 1;

            }

            updateZoom();

        }
    );


    /* =====================================================
       ARRASTRAR IMAGEN CUANDO ESTÁ AMPLIADA
    ====================================================== */

    let isDragging = false;

    let startX = 0;
    let startY = 0;

    let scrollLeft = 0;
    let scrollTop = 0;


    viewer?.addEventListener(
        "mousedown",
        (event) => {

            if (zoomLevel <= 1) return;


            isDragging = true;

            viewer.style.cursor = "grabbing";

            startX = event.pageX - viewer.offsetLeft;
            startY = event.pageY - viewer.offsetTop;

            scrollLeft = viewer.scrollLeft;
            scrollTop = viewer.scrollTop;

        }
    );


    viewer?.addEventListener(
        "mouseleave",
        () => {

            isDragging = false;

            viewer.style.cursor = "grab";

        }
    );


    viewer?.addEventListener(
        "mouseup",
        () => {

            isDragging = false;

            viewer.style.cursor = "grab";

        }
    );


    viewer?.addEventListener(
        "mousemove",
        (event) => {

            if (!isDragging) return;


            event.preventDefault();


            const x =
                event.pageX - viewer.offsetLeft;

            const y =
                event.pageY - viewer.offsetTop;


            const walkX =
                (x - startX) * 1.5;

            const walkY =
                (y - startY) * 1.5;


            viewer.scrollLeft =
                scrollLeft - walkX;

            viewer.scrollTop =
                scrollTop - walkY;

        }
    );


    /* =====================================================
       DESCARGAR COMO PDF
    ====================================================== */

    downloadButton?.addEventListener(
        "click",
        downloadPDF
    );


    async function downloadPDF() {

        if (!modalImage) return;


        const originalText =
            downloadButton.innerHTML;


        /* Estado de carga */

        downloadButton.disabled = true;

        downloadButton.innerHTML = `
            <i class="ph ph-spinner-gap"></i>
            <span>Generando PDF...</span>
        `;


        try {

            /*
             * Esperamos a que la imagen esté completamente
             * cargada antes de generar el documento.
             */

            if (!modalImage.complete) {

                await new Promise((resolve, reject) => {

                    modalImage.onload = resolve;

                    modalImage.onerror = reject;

                });

            }


            /* =================================================
               CANVAS
            ================================================== */

            const image = new Image();

            image.crossOrigin = "anonymous";

            image.src = modalImage.src;


            await new Promise((resolve, reject) => {

                image.onload = resolve;

                image.onerror = reject;

            });


            const canvas =
                document.createElement("canvas");


            canvas.width = image.naturalWidth;

            canvas.height = image.naturalHeight;


            const context =
                canvas.getContext("2d");


            context.drawImage(
                image,
                0,
                0
            );


            const imageData =
                canvas.toDataURL(
                    "image/jpeg",
                    0.95
                );


            /* =================================================
               CREAR PDF
            ================================================== */

            const {
                jsPDF
            } = window.jspdf;


            /*
             * Calculamos automáticamente si la imagen
             * necesita orientación horizontal o vertical.
             */

            const orientation =
                image.naturalWidth >= image.naturalHeight
                    ? "landscape"
                    : "portrait";


            const pdf =
                new jsPDF({
                    orientation: orientation,
                    unit: "mm",
                    format: "a4"
                });


            const pageWidth =
                pdf.internal.pageSize.getWidth();


            const pageHeight =
                pdf.internal.pageSize.getHeight();


            const margin = 8;


            const availableWidth =
                pageWidth - (margin * 2);


            const availableHeight =
                pageHeight - (margin * 2);


            const imageRatio =
                image.naturalWidth /
                image.naturalHeight;


            let pdfWidth =
                availableWidth;


            let pdfHeight =
                pdfWidth / imageRatio;


            /*
             * Si la imagen queda demasiado alta,
             * ajustamos al alto disponible.
             */

            if (pdfHeight > availableHeight) {

                pdfHeight =
                    availableHeight;

                pdfWidth =
                    pdfHeight * imageRatio;

            }


            /* Centrar imagen */

            const x =
                (pageWidth - pdfWidth) / 2;


            const y =
                (pageHeight - pdfHeight) / 2;


            pdf.addImage(
                imageData,
                "JPEG",
                x,
                y,
                pdfWidth,
                pdfHeight,
                undefined,
                "FAST"
            );


            /* =================================================
               DESCARGA
            ================================================== */

            pdf.save(
                "Estructura-Organica-ACTIVA.pdf"
            );


        } catch (error) {

            console.error(
                "Error al generar el PDF:",
                error
            );


            alert(
                "No fue posible generar el PDF. " +
                "Por favor, verifica que la imagen esté disponible."
            );

        } finally {

            /* Restaurar botón */

            downloadButton.disabled = false;

            downloadButton.innerHTML =
                originalText;

        }

    }

});